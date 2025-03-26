import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/logo.svg";
import BackSVG from "../shared/BackSVG";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className={`header-wrapper ${isMenuOpen ? "menu-open" : ""}`}>
        <img src={Logo} alt="Monks Logo" className="header-logo" />
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li className="header-nav-list-item">
              <a href="/#">Categoria 1</a>
            </li>
            <li className="header-nav-list-item">
              <a href="/#">Categoria 2</a>
            </li>
            <li className="header-nav-list-item">
              <a href="/#">Categoria 3</a>
            </li>
            <li className="header-nav-list-item">
              <a href="/#">Categoria 4</a>
            </li>
          </ul>
        </nav>
        <label className="hamburger-menu" htmlFor="menu">
          <input type="checkbox" id="menu" onChange={handleMenuToggle} />
        </label>
      </div>
      <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}>
        <div className="mobile-menu-wrapper">
          <ul>
            <li>Categoria 1</li>
            <li>Categoria 2</li>
            <li>Categoria 3</li>
            <li>Categoria 4</li>
          </ul>
          <BackSVG />
        </div>
      </div>
    </header>
  );
}

export default Header;
