import { useState } from "react";
import Header from "./components//Header/Header";
import ProductsSection from "./components/ProductsSection/ProductsSection";
import AppSection from "./components/AppSection/AppSection";
import Gallery from "./components/Gallery/Gallery";
import TagsSection from "./components/TagsSection/TagsSection";
import CardsSection from "./components/CardsSection/CardsSection";
import Contact from "./components/Contact/Contact";
import HeroSection from "./components/HeroSection/HeroSection";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero">
        <Header />
        <HeroSection />
      </div>
      <main>
        <ProductsSection />
        <Gallery />
        <AppSection />
        <TagsSection />
        <CardsSection />
      </main>
      <div className="footer">
        <Contact />
      </div>

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
