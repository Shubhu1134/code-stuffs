import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import BasicForm from "../Pages/BasicForm";

const AddRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="shubh" element={<BasicForm />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AddRoutes;
