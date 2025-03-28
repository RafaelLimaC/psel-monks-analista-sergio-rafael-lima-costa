import React, { useState, useEffect, useRef } from "react";
import "./Header.scss";
import Logo from "@/assets/logo.svg";
import BackSVG from "@/components/shared/BackSVG";
import { useNavigation } from "@/hooks/useNavigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const prevScrollPos = useRef(window.pageYOffset);
  const checkboxRef = useRef(null);

  const { categories, error } = useNavigation();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    if (checkboxRef.current) {
      checkboxRef.current.checked = false;
      setIsMenuOpen(false);
    }
  };

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
        closeMenu();
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  if (error) {
    console.error("Erro ao carregar categorias:", error);
  }

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
            ref={checkboxRef}
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
          <div className="svg" onClick={closeMenu}>
            <BackSVG />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
