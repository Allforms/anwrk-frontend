import React from "react";
import appStoreIcon from "../assets/apple-store-icon.svg";
import playStoreIcon from "../assets/google-play-icon.svg";
import Group261 from "../assets/Group-261.svg";
import Group262 from "../assets/Group-262.svg";
import '../styles/BodySection4.css';

const HomeServicesSection = () => {
  return (
    <section className="home-services">
      <div className="content">
        <h1>
          Ready to Experience the Future of <span>Home Services?</span>
        </h1>
        <p>
          Download our app today and let Anwrk take care of your home repair needs
        </p>
        <div className="buttons">
          <a href="#" className="store-button">
            <img
              src={appStoreIcon}
              alt="Download on the App Store"
            />
          </a>
          <a href="#" className="store-button">
            <img
              src={playStoreIcon}
              alt="Get it on Google Play"
            />
          </a>
        </div>
      </div>
      <div className="image-container">
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet={Group262}
          />
          <img
            src={Group261}
            alt="Home Services App Preview"
          />
        </picture>
      </div>
    </section>
  );
};

export default HomeServicesSection;
