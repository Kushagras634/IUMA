import React from 'react';
import Header from './HeaderComponent';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Appointments from './AppointmentsComponent';
import Blogs from './BlogsComponent';
import Doctors from './DoctorsComponent';
import Home from './HomeComponent/HomeComponent';
import Services from './ServicesComponent';

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