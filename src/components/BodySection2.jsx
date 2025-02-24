import React from "react";
import '../styles/BodySection.css';
import note from '../assets/note.svg';
import scan from '../assets/scanme.svg';
import user from '../assets/usersearch.svg';
import icon from '../assets/threeicons.svg';
import payment from '../assets/choosepayment.svg';
const HowAnwrkWorks = () => {
  return (
    <section className="why-choose-anwrk">
      <div className="features-header">
        <span className="features-tag">
            <img src={note} alt="" />
            Get Started
        </span>
        <h2>
          How <span className="highlight">Anwrk</span> Works
        </h2>
        <p>
          Getting started is a breeze! Just follow the simple steps to find the right
          artisan and get your task done quickly.
        </p>
      </div>

      <div className="features-grid-2">
        <div className="feature-item">
            <h2>1.</h2>
            <h3>Download The Mobile App</h3>
            <p>Get started by downloading Anwrk on your smartphone</p>
          <img
            src={scan}
            alt="Competitive Pricing"
            className="feature-image"
          />
        </div>

        <div className="feature-item">
            <h2>2.</h2>
            <h3>Book Your Service</h3>
            <p>Browse the service you need, then book in a few taps.</p>
          <img
            src={user}
            alt="Competitive Pricing"
            className="feature-image"
          />
        </div>
        <div className="feature-item">
            <h2>3.</h2>
            <h3>Track Your Service</h3>
            <p>Stay updated on your artisan's progress with real-time tracking.</p>
          <img
            src={icon}
            alt="Competitive Pricing"
            className="feature-image"
          />
        </div>
        <div className="feature-item">
            <h2>4.</h2>
            <h3>Pay Securely</h3>
            <p>Complete your service with our seamless payment options</p>
          <img
            src={payment}
            alt="Competitive Pricing"
            className="feature-image"
          />
        </div>

        
      </div>
    </section>
  );
};

export default HowAnwrkWorks;
