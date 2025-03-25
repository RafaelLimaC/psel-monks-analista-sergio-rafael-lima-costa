import { useState } from "react";
import scroll from "./assets/scroll.svg";
import Header from "./components/Header";
import Products from "./components/Products";
import AppSection from "./components/AppSection/AppSection";
import Gallery from "./components/Gallery";
import Tags from "./components/Tags";
import Cards from "./components/Cards";
import Contact from "./components/Contact";
import backgroundImage from "./assets/background-image.svg";
import "./App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="hero">
        <Header />
        <div className="hero-content">
          <div className="hero-content__text">
            <h1>Lorem ipsum dolor sit amet consectetur</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. Semper orci adipiscing
              faucibus sit scelerisque quis commodo aenean viverra
            </p>
          </div>
          <img
            decoding="async"
            className="hero-content__image"
            src={backgroundImage}
            alt="Media Monks"
          />
          <div className="hero-content__detail">
            <img src={scroll} alt="Role para baixo" />
          </div>
        </div>
      </div>
      <main>
        <Products />
        <Gallery />
        <AppSection />
        <Tags />
        <Cards />
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
