// import './App.css';
import Navbar from "./Navbar";
import Package from "./pages/Package";
import Home from "./pages/Home";
import Treks from "./pages/Treks";
import Pricing from "./pages/Pricing"
import About from "./pages/About"
import { Route, Routes } from "react-router-dom";
import './style.css';
import { useState } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";




function App() {

    return (
        <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
        </>
    )
}

export default App;