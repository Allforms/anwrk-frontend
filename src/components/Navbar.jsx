import "../styles/Navbar.css";
import React, { useState, useEffect } from "react";
import logoIcon from "../assets/anwrk-logo.svg"; 
import appStoreIconDesktop from "../assets/Frame_1618869563.svg";
import hamburgerButton from "../assets/menu.svg";
import closeMenuButton from "../assets/iconoir_cancel.svg";
import appStoreIcon from "../assets/apple-store-icon.svg";
import playStoreIcon from "../assets/google-play-icon.svg";
import { Link } from "react-router-dom";
import useComingSoon from "./useComingSoon";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMenuOpen]);

  const { showComingSoon, handleDownloadClick } = useComingSoon();


  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        
        <Link to="/" className="navbar-logo">
          <img src={logoIcon} alt="Logo" />   
        </Link>

        {/* Desktop and Mobile Links */}
        <ul className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
          <li>Home</li>
          <li>About anwrk</li>
          <li>Features</li>
          <li>Reviews</li>

          <div className="navbar-download-mobile">
            <a href="#" className="navbar-download-btn-mobile"  onClick={handleDownloadClick}>
              <img src={playStoreIcon} alt="Play Store" />
            </a>
            <a href="#" className="navbar-download-btn-mobile"  onClick={handleDownloadClick}>
              <img src={appStoreIcon} alt="App Store" />
            </a>
          </div>
        </ul>

        <div className="navbar-download-desktop">
          <a href="#" className="navbar-download-btn" onClick={handleDownloadClick}>
            Download App
            <img src={appStoreIconDesktop} alt="Play Store/apple icon" />
          </a>
        </div>

        {showComingSoon && (
        <div className="coming-soon-message">
          Coming Soon!
        </div>
      )}

        {/* Hamburger Menu */}
        <div className="navbar-hamburger" onClick={toggleMenu}>
          {isMenuOpen ? (
            <img src={closeMenuButton} alt="Open Menu" />
          ) : (
            <img src={hamburgerButton} alt="Close Menu" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
