import React from "react";
import "../styles/BodySection.css";
import verify from '../assets/verify.svg';
import rating from "../assets/rating-stars.svg";
const WhatUsersSay = () => {
  return (
    <section className="why-choose-anwrk">
      <div className="features-header">
        <span className="features-tag">
          <img src={verify} alt="" />
          Get Started
        </span>
        <h2>
          What Users Say About <span className="highlight">Anwrk?</span>
        </h2>
        <p>
          Hear from our satisfied users as they share their experiences and how
          Anwrk has simplified finding reliable artisans.
        </p>
      </div>

      <div className="features-grid-3">
        <div className="feature-item">
          <p>
            We use this app regularly for our business. The technicians are
            always skilled and on time.
          </p>
          <h4>
            Yaqub{" "}
            <span>
              <br />
              <img src={rating} alt="rating image" className="rating-image" />
            </span>{" "}
          </h4>
        </div>
        <div className="feature-item">
          <p>
            We use this app regularly for our business. The technicians are
            always skilled and on time.
          </p>
          <h4>
            Ada{" "}
            <span>
              <br />
              <img src={rating} alt="rating image" className="rating-image" />
            </span>{" "}
          </h4>
        </div>
        <div className="feature-item">
          <p>
            We use this app regularly for our business. The technicians are
            always skilled and on time.
          </p>
          <h4>
            Temitope{" "}
            <span>
              <br />
              <img src={rating} alt="rating image" className="rating-image" />
            </span>{" "}
          </h4>
        </div>
        <div className="feature-item">
          <p>
            We use this app regularly for our business. The technicians are
            always skilled and on time.
          </p>
          <h4>
            Wole{" "}
            <span>
              <br />
              <img src={rating} alt="rating image" className="rating-image" />
            </span>{" "}
          </h4>
        </div>
        <div className="feature-item">
          <p>
            We use this app regularly for our business. The technicians are
            always skilled and on time.
          </p>
          <h4>
            James{" "}
            <span>
              <br />
              <img src={rating} alt="rating image" className="rating-image" />
            </span>{" "}
          </h4>
        </div>
        <div className="feature-item">
          <p>
            We use this app regularly for our business. The technicians are
            always skilled and on time.
          </p>
          <h4>
            Peter{" "}
            <span>
              <br />
              <img src={rating} alt="rating image" className="rating-image" />
            </span>{" "}
          </h4>
        </div>
        <div className="feature-item">
          <p>
            We use this app regularly for our business. The technicians are
            always skilled and on time.
          </p>
          <h4>
            Joy{" "}
            <span>
              <br />
              <img src={rating} alt="rating image" className="rating-image" />
            </span>{" "}
          </h4>
        </div>
        <div className="feature-item">
          <p>
            We use this app regularly for our business. The technicians are
            always skilled and on time.
          </p>
          <h4>
            Adunni{" "}
            <span>
              <br />
              <img src={rating} alt="rating image" className="rating-image" />
            </span>{" "}
          </h4>
        </div>
      </div>
    </section>
  );
};

export default WhatUsersSay;
