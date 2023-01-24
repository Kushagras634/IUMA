import React, { useState } from "react";
import "./dashboard.css";
import profile from '../../assets/profile.jpg'

const Dashboard = () => {
  const [sidepanelMargin, setSidepanelMargin] = useState("250px");

  return (
    <div className="dashboard">
      <div className="dashboard-side" style={{ width: sidepanelMargin }}>
        <ul>
          <li>Dashboard</li>
          <li></li>
        </ul>
      </div>
      <div className="dashboard-main" style={{marginLeft: sidepanelMargin}}>
        <div className="dashboard-profile">
          <div>
            <p>Name : Jeevesh Lodhi</p>
            <p>Age : 22</p>
            <p>Weight : 60</p>
            <p>Height : 5.9ft</p>
          </div>
          <figure>
            <img src={profile} alt="profile"></img>
          </figure>
        </div>
        <div className="dashboard-prev-tests">

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
