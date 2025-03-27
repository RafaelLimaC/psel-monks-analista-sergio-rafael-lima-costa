import Header from "./components//Header/Header";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import AppSection from "./components/AppSection/AppSection";
import GallerySection from "./components/GallerySection/GallerySection";
import TagsSection from "./components/TagsSection/TagsSection";
import CardsSection from "./components/CardsSection/CardsSection";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import "./App.scss";

function App() {
  return (
    <>
      <div className="hero">
        <Header />
        <HeroSection />
      </div>
      <main>
        <ProductsSection />
        <GallerySection />
        <AppSection />
        <TagsSection />
        <CardsSection />
      </main>
      <div className="bottom">
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
