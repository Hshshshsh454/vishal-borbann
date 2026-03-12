import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/HeroSection";
import About from "../pages/About";
import Services from "../pages/Services";
import Gallery from "../pages/GallerySection";
import Contact from "../pages/ContactSection";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;