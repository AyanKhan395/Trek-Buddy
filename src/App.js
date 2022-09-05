// import './App.css';
import Navbar from "./Navbar";
import Home from "./pages/Home";
import Treks from "./pages/Treks";
import Posts from "./pages/Posts";
import EquipmentLister from "./pages/EquipmentLister";
import Camps from "./pages/Camps";
import Blogs from "./pages/Blogs";
import ContactUs from "./pages/ContactUs";
import { Route, Routes } from "react-router-dom";
import './style.css';

function App() {

    return (
        <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/treks" element={<Treks />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/equipment-lister" element={<EquipmentLister />} />
          <Route path="/camps" element={<Camps />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </div>
        </>
    )
}

export default App;