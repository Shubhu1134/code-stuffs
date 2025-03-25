import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

const AddRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="./" element ={<Navbar/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AddRoutes;