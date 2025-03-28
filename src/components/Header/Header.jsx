import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import Logo from "../../assets/logo.svg";
import BackSVG from "../shared/BackSVG";
import { fetchFromWordPress } from "../../services/wordpressService";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const navbarRef = useRef(null);
  const prevScrollPos = useRef(window.pageYOffset);
  const checkboxRef = useRef(null); // Referência para a checkbox

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos.current > currentScrollPos) {
        navbarRef.current.style.top = "0";
      } else {
        navbarRef.current.style.top = "-54px";
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false); // Fecha o menu
        if (checkboxRef.current) {
          checkboxRef.current.checked = false; // Desmarca a checkbox
        }
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]); // Dependência para monitorar mudanças no estado do menu

  return (
    <header
      ref={navbarRef}
      className={`${isMenuOpen ? "menu-open" : ""}`}
      id="navbar"
    >
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
          <input
            type="checkbox"
            id="menu"
            onChange={handleMenuToggle}
            ref={checkboxRef} // Adiciona a referência à checkbox
          />
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
