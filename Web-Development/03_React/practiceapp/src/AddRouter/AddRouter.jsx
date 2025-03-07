import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Components/Home/Home";
import Random from "../Pages/Random/Random";
import Trial from "../Pages/Trial/Trial";

function AddRouter() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path = "" element={<Home/>}/> */}
          <Route path="" element={<Random />} />
          <Route path="/trial" element={<Trial />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default AddRouter;
