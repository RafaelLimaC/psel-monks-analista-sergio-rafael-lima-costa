import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/logo.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-wrapper">
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
        <div className={`mobile-menu ${isMenuOpen ? "open" : ""}`}></div>
      </div>
    </header>
  );
}

export default Header;
