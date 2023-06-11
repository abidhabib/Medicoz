import React, { useState, useEffect } from "react";
import "./sidebar.css";
import logo from "../img/logo.png";
import { MdMedication } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Link, Route, Routes, Outlet } from "react-router-dom";
import App from "../App";
import Services from "./Services";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showMediaIcons, setShowMediaIcons] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
   
      <nav className="main-nav">
        {/* 1st logo part  */}
        <div className="logo">
          <h2>
            <img src={logo} alt="" />
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <Link to="/">
                <span className="home-active">HOME</span>{" "}
              </Link>
            </li>
            <li>
              <Link to="/services">SERVICE</Link>
            </li>
            <li>
              <Link to="/insurance"> INSURANCE</Link>
            </li>
            <li>
              <Link to="/ourteam">OUR TEAM</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>

        {/* 3rd social media links */}
        <div className="social-media">
          {isScrolled && (
            <button className="btn">
              Book Now! <span><MdMedication /></span>
            </button>
          )}

          {/* hamburger menu start  */}
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>

    
  );
};

export default Navbar;
