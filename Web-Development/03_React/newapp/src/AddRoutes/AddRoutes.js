import { BrowserRouter, Route, Routes } from "react-router-dom";
import Shubham from "../Components/Shubham";
import BootstrapTest from "../Pages/BootstrapTest";
import Home from "../Pages/Home";

const AddRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bs" element={<BootstrapTest />} />
          <Route path="/shubh" element={<Shubham />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AddRoutes;
