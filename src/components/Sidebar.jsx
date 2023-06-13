import React, { useState, useEffect } from "react";
import "./sidebar.css";
import logo from "../img/logo.png";
import { MdMedication } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { BrowserRouter as Router, Link, Route, Routes, Outlet, NavLink } from "react-router-dom";
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
          <a href="/"> <img src={logo} alt="" /> </a> 
          </h2>
        </div>

        {/* 2nd menu part  */}
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li onClick={()=>setShowMediaIcons(false)}>
           <NavLink to="/" className={({ isActive }) => (isActive ? "home-active" : "navlink")}>

           
               HOME
            
           </NavLink>
            </li>
            <li onClick={()=>setShowMediaIcons(false)}>
              <NavLink to="/services" className={({ isActive }) => (isActive ? "home-active" : "navlink")}>SERVICE</NavLink>
            </li>
            <li onClick={()=>setShowMediaIcons(false)}>
              <NavLink to="/insurance" className={({ isActive }) => (isActive ? "home-active" : "navlink")}> INSURANCE</NavLink>
            </li>
            <li onClick={()=>setShowMediaIcons(false)}>
              <NavLink to="/ourteam" className={({ isActive }) => (isActive ? "home-active" : "navlink")}>OUR TEAM</NavLink>
            </li>
            <li onClick={()=>setShowMediaIcons(false)}>
              <NavLink to="/contact" className={({ isActive }) => (isActive ? "home-active" : "navlink")}>CONTACT</NavLink>
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
