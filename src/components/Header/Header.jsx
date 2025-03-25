import React from "react";
import "./Header.scss";
import Logo from "../../assets/logo.svg";

function Header() {
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
      </div>
    </header>
  );
}

export default Header;
