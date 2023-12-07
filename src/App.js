import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import axios from "axios";
import * as yup from "yup";
import formSchema from "./Validation/formSchema";
import SuccessPage from "./Components/SuccessPage";

// npm i -D cypress
// npx cypress open

const initialFormValues = {
  name: "",
  size: "",
  mushrooms: false,
  onions: false,
  pineapples: false,
  sausages: false,
  specialReq: "",
};

const initialFormErrors = {
  name: "",
  size: "",
};

const initialArr = [];

const App = () => {
  console.log("App Component has fired!");
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(false);
  const [data, setData] = useState(initialArr);

  const navigate = useNavigate();

  const newOrder = () => {
    axios
      .post("https://reqres.in/api/orders", formValues)
      .then((res) => {
        console.log(res.data);
        // probably navigate to a success page?
        setData([res.data, ...data]);
        setFormValues(initialFormValues);
        navigate("/success");
      })
      .catch((err) => {
        console.error("request err --> ", err);
        // probably navigate to a failure page
        setFormValues(initialFormValues);
      });
  };

  const validate = (name, value) => {
    yup
      .reach(formSchema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: "" }))
      .catch((err) => setFormErrors({ ...formErrors, [name]: err.errors[0] }));
  };

  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    formSchema.isValid(formValues).then((isValid) => setDisabled(isValid));
    return () => {
      console.log("simulating cleaning up useEffect.");
    };
  }, [formValues]);

  console.log(data);

  return (
    <div className="App">
      <Header navigate={navigate} />
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route
          path="/pizza"
          element={
            <PizzaForm
              formValues={formValues}
              disabled={disabled}
              handleChange={handleChange}
              newOrder={newOrder}
              formErrors={formErrors}
            />
          }
        />
        <Route path="/success" element={<SuccessPage />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
