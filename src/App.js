import React, { useState, useEffect } from "react";
import { Routes, Route, Link, useNavigate, useParams } from "react-router-dom";
import Home from "./Components/Home";
import PizzaForm from "./Components/PizzaForm";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

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
      <Header navigate={navigate} />
      <Routes>
        <Route path="/" element={<Home navigate={navigate} />} />
        <Route path="/pizza" element={<PizzaForm navigate={navigate} />} />
      </Routes>
      <Footer />
    </div>
  );
};
export default App;
