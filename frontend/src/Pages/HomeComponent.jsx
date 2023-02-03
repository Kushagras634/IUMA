import React from "react";
import SvgComponent from "../Components/mainSVGComponent";
import CardComponent from "../Components/CardComponent";
const cards = [
  {
    heading: "Instant Video Consultation",
    body: "Connect within 60 sec",
  },
  {
    heading: "Find Doctor Near You",
    body: "Connect within 60 sec",
  },
  {
    heading: "Order Medicine",
    body: "Connect within 60 sec",
  },
  {
    heading: "Instant Video Consultation",
    body: "Connect within 60 sec",
  },
  {
    heading: "Find Doctor Near You",
    body: "Connect within 60 sec",
  },
  {
    heading: "Order Medicine",
    body: "Connect within 60 sec",
  },
];

const HomeComponent = () => {
  const list_card = () =>
    cards.map((card, idx) => {
      return (
        <CardComponent
          key={idx}
          title={card.heading}
          img=""
          cardWidth="350px"
          imgWidth="200px"
          imgHeight="200px"
          margin=".1rem"
          link="" 
        />
      );
    });
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
            <button>View Doctors </button>
          </div>
        </div>
        <div className="main-svg">
          <SvgComponent />
        </div>
      </div>
      <div className="container" style={{ padding: "2%" }}>
        {list_card()}
      </div>
    </main>
  );
};

export default HomeComponent;