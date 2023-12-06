import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";

const App = () => {
  console.log("App Component has fired!");
  const navigate = useNavigate();

  useEffect(() => {
    return () => {
      console.log("simulating cleaning up useEffect.");
    };
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/pizza" element={<PizzaForm />} />
      </Routes>
    </div>
  );
};
export default App;
