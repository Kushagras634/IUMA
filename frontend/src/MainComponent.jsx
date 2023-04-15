import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointments from "./Components/AppointmentsComponent/AppointmentsComponent";
import Blogs from "./Components/BlogsComponent/BlogsComponent";
import Doctors from "./Components/DoctorsComponent/DoctorsComponent";
import Home from "./Pages/HomeComponent";
import Services from "./Components/ServicesComponent/ServicesComponent";
import Login from "./Pages/LoginComponent";
import Sign from "./Pages/SignupComponent";
import Dashboard from "./Pages/PatientDashboard";
import Search from "./Pages/Search";
import DashboardRouter from "./Pages/DashboardRouter";

const MainComponent = () => {
  return (
    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/dashboard/*" element={<DashboardRouter />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainComponent;
