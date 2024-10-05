import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import RandomName from "../Pages/About";

const AddRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<RandomName />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default AddRoutes;
