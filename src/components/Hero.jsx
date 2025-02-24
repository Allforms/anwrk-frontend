import React from "react";
import "../styles/Hero.css";
import userIcons from "../assets/happy-users.svg";
import appStoreIconDesktop from "../assets/Frame_1618869563.svg";
import heroImage from "../assets/Group-265.svg"; 
import useComingSoon from "./useComingSoon";


const Hero = () => {
  const { showComingSoon, handleDownloadClick } = useComingSoon();
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-users">
            <img src={userIcons} alt="Happy Users" />
          </div>
          <h1>
            Find Skilled <span className="highlight">Artisans</span> Nearby –{" "}
            <span className="highlight-alt">No Stress,</span> Just Results!
          </h1>
          <p className="hero-subtext">
            Tired of the hassle of finding reliable home service providers?
            Anwrk is your one-stop solution.
          </p>
          <div className="hero-buttons">
            <span className="hero-get-app">
              <a href="#" className="get-anwrk">
                Get Anwrk →
              </a>
              <a href="#" className="download-btn" onClick={handleDownloadClick}>
                Download App
                <img src={appStoreIconDesktop} alt="Play Store/apple icon" />
              </a>
            </span>
            {showComingSoon && (
              <div className="download-btn">
                Coming Soon!
              </div>
            )}
          </div>
        </div>
        <div className="hero-image">
          <div className="image-wrapper">
            <img
              src={heroImage} 
              alt="Hero Illustration"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
