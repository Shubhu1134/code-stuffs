import React from "react";
import { Routes, BrowserRouter, Route } from "react-router";
import Home from "../Components/Home";
import Footer from "../Components/Footer/Footer";

function AddRoutes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AddRoutes;
