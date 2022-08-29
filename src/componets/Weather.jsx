import React from "react";
import { Link } from "react-router-dom";

const Weather = () => {
  return (
    <section className="output main">
      <div className="container">
        <h2 className="output__title ">
          In <span id="place">New York</span> now
        </h2>
        <div className="output__degrees-container">
          <span className="output__degrees-elips">°</span>
          <h2 className="output__degrees">10</h2>
          <p className="output__degrees-subtitle">Sunly</p>
        </div>
        <Link to="/">
          <button className="output__back-btn btn" type="submit">
            Back
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Weather;
