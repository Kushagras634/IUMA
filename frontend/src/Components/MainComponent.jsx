import React from 'react';
import Header from './HeaderComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointments from './AppointmentsComponent/AppointmentsComponent';
import Blogs from './BlogsComponent/BlogsComponent';
import Doctors from './DoctorsComponent/DoctorsComponent';
import Home from './HomeComponent/HomeComponent';
import Services from './ServicesComponent/ServicesComponent';

const MainComponent = () => {
    return ( <>
    <Router>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/doctors' element={<Doctors />} />
                <Route path='/services' element={<Services />} />
                <Route path='/appointments' element={<Appointments />} />
            </Routes>
    </Router>
    </> );
}

export default MainComponent;