import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import BasicForm from "../Pages/BasicForm";
import ConceptState from "../PracticeConcept/ConceptState";
import ConceptInput from "../PracticeConcept/ConceptInput";
import ConceptCrud from "../PracticeConcept/ConceptCrud";
import ConceptEffect from "../PracticeConcept/ConceptEffect";
import DataFetch from "../Pages/DataFetch";
import DataApi from "../Pages/DataApi";

const AddRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="state" element={<ConceptState />} />
        <Route path="form" element={<BasicForm />} />
        <Route path="Input" element={<ConceptInput />} />
        <Route path="Curd" element={<ConceptCrud />} />
        <Route path="effect" element={<ConceptEffect />} />
        <Route path="api" element={<DataFetch />} />
        <Route path="" element={<DataApi />} />
      </Routes>
    </BrowserRouter>
  );
};
export default AddRoutes;
