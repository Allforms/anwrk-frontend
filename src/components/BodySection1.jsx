import React from "react";
import '../styles/BodySection.css';
import verify from '../assets/verify.svg';
import mapImage from '../assets/map-image.svg';
import lockPrice from '../assets/lock-price.svg';
import verified from '../assets/verified.svg';
const WhyChooseAnwrk = () => {
  return (
    <section className="why-choose-anwrk">
      <div className="features-header">
        <span className="features-tag">
            <img src={verify} alt="" />
            Features
        </span>
        <h2>
          Why Choose <span className="highlight">Anwrk?</span>
        </h2>
        <p>
          Discover trusted artisans in your area and get the help you need, all
          at your fingertips.
        </p>
      </div>

      <div className="features-grid">
        <div className="feature-item">
          <img
            src={mapImage}
            alt="Geolocation-Based Services"
            className="feature-image"
          />
          <h3>Geolocation-Based Services</h3>
          <p>Find local experts near you</p>
        </div>

        <div className="feature-item">
          <img
            src={lockPrice}
            alt="Competitive Pricing"
            className="feature-image"
          />
          <h3>Competitive Pricing</h3>
          <p>High-quality service at affordable rates</p>
        </div>

        <div className="feature-item">
          <img
            src={verified}
            alt="Verified Professionals"
            className="feature-image"
          />
          <h3>Verified Professionals</h3>
          <p>Trustworthy artisans, vetted for quality</p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseAnwrk;
