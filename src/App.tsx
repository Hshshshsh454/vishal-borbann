import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HeroSection from "./pages/HeroSection";
import WeddingReels from "./pages/WeddingReels";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactSection from "./pages/ContactSection";
import PricingSection from "./pages/PricingSection";
import GallerySection from "./pages/GallerySection";
import FAQSection from "./pages/FAQSection";
import WhyChooseMe from "./pages/WhyChooseMe";
// import InstaScroll from "./pages/InstaScroll";
import "./App.css";


function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WeddingReels />
      <WhyChooseMe />
      <GallerySection />
      {/* <InstaScroll /> */}
      <PricingSection />
      <Services />
      
      <About />
      <FAQSection />
      <ContactSection />

      <Footer />
    </div>
  );
}

export default App;