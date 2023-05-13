import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Appointments from "./Components/AppointmentsComponent/AppointmentsComponent";
import Blogs from "./Components/BlogsComponent/BlogsComponent";
import Doctors from "./Components/DoctorsComponent/DoctorsComponent";
import Home from "./Pages/HomeComponent";
import Services from "./Components/ServicesComponent/ServicesComponent";
import Login from "./Pages/LoginComponent";
import Sign from "./Pages/SignupComponent";
import Search from "./Pages/Search";
import DashboardRouter from "./Pages/DashboardRouter";
import { GlobalContext } from "./context/GlobalState";
import  BookAppointment  from "./Pages/BookAppointment";

const MainComponent = () => {

  const {loginUser} = useContext(GlobalContext)
  useEffect(()=>{
    const loginInfo = JSON.parse(sessionStorage.getItem('token'))
    console.log(loginInfo)
    if(loginInfo !== null){
      loginUser(loginInfo)
    }
  },[])

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
          <Route path="/bookAppointment" element={<BookAppointment/>} />
        </Routes>
      </Router>
    </>
  );
};

export default MainComponent;
