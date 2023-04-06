




import React, { useState } from "react";
import logo from "../images/logo.png";
import Backtotopbutton from './Backtotopbutton';
import { Link } from "react-router-dom";

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
        <li className="nav__item active"><Link href="#" className="nav__link">Home</Link></li>
        <li className="nav__item"><Link href="#about" className="nav__link">About</Link></li>
        <li className="nav__item"><Link href="#events" className="nav__link">Events</Link></li>
        <li className="nav__item"><Link href="#division" className="nav__link">Divisions</Link></li>
        <li className="nav__item"><Link href="#team" className="nav__link">Officers</Link></li>
        <li className="nav__item"><Link href="#book" className="nav__link">Contact</Link></li>
        <li className="nav__item"><Link href="#testimonials" className="nav__link">Review</Link></li>
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
