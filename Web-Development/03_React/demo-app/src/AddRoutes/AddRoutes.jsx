import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

const AddRoutes = () => {
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </>;
};

export default AddRoutes;
