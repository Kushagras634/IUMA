import React from 'react';
import { Link } from "react-router-dom";
const HeaderComponent = () => {
    return (<div>
        <nav>
            <ul className='label container'>
                <div style={{'border': '1px solid black', 'width':'10px', 'height': '10px'}}></div>
                <div style={{'width':'55%'}}></div>
                <li><Link className='nav_tab' to='/'>Home</Link></li>
                <li><Link className='nav_tab' to='/services'>Services</Link></li>
                <li><Link className='nav_tab' to='/doctors'>Doctors</Link></li>
                <li><Link className='nav_tab' to='/blogs'>Blogs</Link></li>
                <li><Link className='nav_tab' to='/appointments'>Appointments</Link></li>
                <li><span class="material-symbols-outlined">
                    account_circle
                </span></li>
            </ul>
        </nav>
    </div> );
}

export default HeaderComponent;