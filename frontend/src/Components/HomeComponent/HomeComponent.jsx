import React from "react";
import SvgComponent from "../mainSVGComponent";
import './home.css'

const HomeComponent = () => {
  return (
    <main>
      <div className="container main-slider">
        <div className="main-heading">
          <p className="main-display">
            Deliver accurate and timely health care.
          </p>
          <p className="main-title">
            A trustworthy healthcare campanion. We really care about your health
            and consiousness.{" "}
          </p>
          <div className="container main-buttons">
            <button>Book Appointment</button>
            <button>View Doctors  </button>
          </div>
        </div>
        <div className="main-svg">
          <SvgComponent/>
        </div>
        <div className="image"></div>
      </div>
    </main>
  );
};

export default HomeComponent;
