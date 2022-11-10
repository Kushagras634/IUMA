import React from "react";
import SvgComponent from "../mainSVGComponent";
import './home.css';
import Card from '../CardComponent/CardComponent';
const cards = [
  {
    'heading': 'Instant Video Consultation',
    'body': 'Connect within 60 sec'
  },
  {
    'heading': 'Find Doctor Near You',
    'body': 'Connect within 60 sec'
  },
  {
    'heading': 'Order Medicine',
    'body': 'Connect within 60 sec'
  }
];

const HomeComponent = () => {
  const list_card = () => cards.map((card) => {
    return (<>
      <Card data={card} />
    </>);
  })
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
      </div>
      <div className="container" style={{'padding': '2%'}}>
        {list_card()}
      </div>
    </main>
  );
};

export default HomeComponent;
