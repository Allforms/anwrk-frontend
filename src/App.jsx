import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
