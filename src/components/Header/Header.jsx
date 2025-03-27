import React, { useState, useEffect } from "react";
import "./Header.scss";
import Logo from "../../assets/logo.svg";
import BackSVG from "../shared/BackSVG";
import { fetchFromWordPress } from "../../services/wordpressService";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await fetchFromWordPress("navegation", {
          _fields: "title,acf.href",
          acf_format: "standard",
        });
        setCategories(data);
      } catch (error) {
        console.error("Erro ao carregar categorias:", error);
      }
    }

    loadCategories();
  }, []);

  return (
    <header>
      <div className={`header-wrapper ${isMenuOpen ? "menu-open" : ""}`}>
        <img src={Logo} alt="Monks Logo" className="header-logo" />
        <nav className="header-nav">
          <ul className="header-nav-list">
            {categories
              .slice()
              .reverse()
              .map((category, index) => (
                <li key={index} className="header-nav-list-item">
                  <a href={category.acf?.href || "#"}>
                    {category.title?.rendered || "Categoria"}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
        <label className="hamburger-menu" htmlFor="menu">
          <input type="checkbox" id="menu" onChange={handleMenuToggle} />
        </label>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-wrapper">
          <ul>
            {categories
              .slice()
              .reverse()
              .map((category, index) => (
                <li key={index}>
                  <a href={category.acf?.href || "#"}>
                    {category.title?.rendered || "Categoria"}
                  </a>
                </li>
              ))}
          </ul>
          <BackSVG />
        </div>
      </div>
    </header>
  );
}

export default Header;
