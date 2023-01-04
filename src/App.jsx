import { Routes, Route } from "react-router-dom";

import "./App.css";

import Getir from "./layouts/Getir";
import Navbar from "./components/Navbar";
import GetirFood from "./layouts/GetirFood";
import GetirBig from "./layouts/GetirBig";
import GetirWater from "./layouts/GetirWater";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Getir />} />
        <Route path="/food" element={<GetirFood />} />
        <Route path="/big" element={<GetirBig />} />
        <Route path="/water" element={<GetirWater />} />
        <Route path="*" element={<Getir />} />
      </Routes>
    </>
  );
}

export default App;
