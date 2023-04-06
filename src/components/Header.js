




import React, { useState } from "react";
import logo from "../images/logo.png";
import Backtotopbutton from './Backtotopbutton';

function Header() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");
    
    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <div>
    <nav className="nav">
       <img className="logo" src={logo} alt=""/>
      <ul className={active}>
        <li className="nav__item active"><a href="#" className="nav__link">Home</a></li>
        <li className="nav__item"><a href="#about" className="nav__link">About</a></li>
        <li className="nav__item"><a href="#events" className="nav__link">Events</a></li>
        <li className="nav__item"><a href="#division" className="nav__link">Divisions</a></li>
        <li className="nav__item"><a href="#team" className="nav__link">Officers</a></li>
        <li className="nav__item"><a href="#book" className="nav__link">Contact</a></li>
        <li className="nav__item"><a href="#testimonials" className="nav__link">Review</a></li>
      </ul>
      <div onClick={navToggle} className={icon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
      <Backtotopbutton />
      </div>
  );
}

export default Header;
