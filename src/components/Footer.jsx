import React from "react";
import "../styles/Footer.css";
import logoIcon from "../assets/anwrk-logo.svg";
import instagram from "../assets/instagram-icon.svg";
import twitter from "../assets/twitter-icon.svg";
import facebook from "../assets/facebook-icon.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <Link to="/"><img className="logo-image" src={logoIcon} alt="logo" /></Link>
          <div className="logo-container">
            <p>
              Anwrk connects you with skilled artisans nearby, making it easy to
              find and hire professionals for all your tasks. From repairs to
              creative services, we’ve got you covered!
            </p>
          </div>
          <div className="social-icons">
            <a href="https://www.instagram.com/anwrknig/" className="social-link">
              <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://x.com/anwrknig" className="social-link">
              <img src={twitter} alt="Twitter" />
            </a>
            <a href="https://web.facebook.com/allformsltd" className="social-link">
              <img src={facebook} alt="Facebook" />
            </a>
          </div>
        </div>

        <div className="footer-section links">
          <h4>About us</h4>
          <ul>
            <li>
              <a href="#">About app</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </ul>
        </div>
        <div className="footer-section links">
          <h4>Features</h4>
          <ul>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">For business</a>
            </li>
            <li>
              <a href="#">Payments</a>
            </li>
          </ul>
        </div>
        <div className="footer-section links">
          <h4>Use Anwrk</h4>
          <ul>
            <li>
              <a href="#">For Android</a>
            </li>
            <li>
              <a href="#">For iPhone</a>
            </li>
            <li>
              <a href="#">For web</a>
            </li>
          </ul>
        </div>
        <div className="footer-section links">
          <h4>Need help?</h4>
          <ul>
            <li>
              <a href="tel:+2348137343312">Contact us</a>
            </li>
            <li>
              <a href="#">Help center</a>
            </li>
            <li>
              <a href="#">Security & Privacy</a>
            </li>
            <li>
              <a href="mailto:founders@allformslimited.com">Email us</a>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">&copy; {currentYear} Allforms Limited. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
