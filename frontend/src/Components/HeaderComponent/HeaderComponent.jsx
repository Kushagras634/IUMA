import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import logo from "../../assets/logo.png";
import { useState } from "react";
const HeaderComponent = () => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <header>
      <div className="header-label container">
        <div>
          <Link to='/'>
          <img src={logo} alt="" className="logo" />
          </Link>
        </div>
        <ul className="header-menu-items">
          <li>
            <Link className="nav_tab" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="nav_tab" to="/services">
              Services
            </Link>
          </li>
          <li>
            <Link className="nav_tab" to="/doctors">
              Doctors
            </Link>
          </li>
          <li>
            <Link className="nav_tab" to="/blogs">
              Blogs
            </Link>
          </li>
          <li>
            <Link className="nav_tab" to="/appointments">
              Appointments
            </Link>
          </li>
          {isLogin === false ? (
            <li className="header-login-btn">
              <Link to="/login">
                <button>Log in</button>
              </Link>
              <Link to="/signup">
                <button>Sign Up</button>
              </Link>
            </li>
          ) : (
            <li>
              <span class="material-symbols-outlined">account_circle</span>
              <span class="material-symbols-outlined">expand_more</span>
            </li>
          )}
        </ul>
      </div>
    </header>
  );
};

export default HeaderComponent;
