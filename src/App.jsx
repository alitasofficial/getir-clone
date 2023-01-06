import { Routes, Route } from "react-router-dom";

import "./App.css";

import Getir from "./layouts/Getir";
import Navbar from "./components/navbar/Navbar";
import GetirFood from "./layouts/GetirFood";
import GetirMore from "./layouts/GetirMore";
import GetirWater from "./layouts/GetirWater";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Getir />} />
        <Route path="/food" element={<GetirFood />} />
        <Route path="/more" element={<GetirMore />} />
        <Route path="/water" element={<GetirWater />} />
        <Route path="*" element={<Getir />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
