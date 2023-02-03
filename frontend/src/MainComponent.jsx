import React from "react";
import Header from "./Components/HeaderComponent";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Appointments from "./Components/AppointmentsComponent/AppointmentsComponent";
import Blogs from "./Components/BlogsComponent/BlogsComponent";
import Doctors from "./Components/DoctorsComponent/DoctorsComponent";
import Home from "./Pages/HomeComponent";
import Services from "./Components/ServicesComponent/ServicesComponent";
import Login from "./Components/LoginComponent/LoginComponent";
import Sign from "./Pages/SignupComponent";
import Dashboard from "./Pages/Dashboard";

const MainComponent = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/doctors" element={<Doctors />} />
          <Route path="/services" element={<Services />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Sign />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
};

export default MainComponent;
