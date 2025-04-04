import React from "react";
import "./Footer.scss";
import facebook from "@/assets/facebook.svg";
import instagram from "@/assets/instagram.svg";
import twitter from "@/assets/twitter.svg";
import whatsapp from "@/assets/whatsapp.svg";

function Footer() {
  return (
    <footer className="footer">
      <nav>
        <ul className="footer-socials">
          <li>
            <img src={instagram} alt="Instagram" />
          </li>
          <li>
            <img src={whatsapp} alt="Whatsapp" />
          </li>
          <li>
            <img src={twitter} alt="Twitter" />
          </li>
          <li>
            <img src={facebook} alt="Facebook" />
          </li>
        </ul>
      </nav>
      <p>Lorem ipsum dolor sit amet</p>
      <div className="footer-links">
        <a href="/#">Lorem ipsum</a>
        <a href="/#">Lorem ipsum</a>
        <a href="/#">Lorem ipsum</a>
        <a href="/#">Lorem ipsum</a>
      </div>
    </footer>
  );
}

export default Footer;
