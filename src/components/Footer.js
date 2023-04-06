import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <section className="footer" >

<div className="box-container">

    <div className="box" data-aos="fade-right">
        <h3>quick links</h3>
        <Link to="#home"> <i className="fas fa-chevron-right"></i> home </Link>
        <Link to="#about"> <i className="fas fa-chevron-right"></i> about </Link>
        <Link to="#services"> <i className="fas fa-chevron-right"></i> divisions </Link>
        <Link to="#doctors"> <i className="fas fa-chevron-right"></i> officers </Link>
        <Link to="#book"> <i className="fas fa-chevron-right"></i> contact </Link>
        <Link to="#review"> <i className="fas fa-chevron-right"></i> review </Link>
    </div>

    <div className="box" data-aos="fade-right">
        <h3>Our Team</h3>
        <Link to="#services"> <i className="fas fa-chevron-right"></i> Technical Team </Link>
        <Link to="#services"> <i className="fas fa-chevron-right"></i> Management Team </Link>
        <Link to="#services"> <i className="fas fa-chevron-right"></i> Editorial Team </Link>
        <Link to="#services"> <i className="fas fa-chevron-right"></i> Design Team </Link>
        <Link to="#services"> <i className="fas fa-chevron-right"></i> Marketing Team </Link>
        <Link to="#services"> <i className="fas fa-chevron-right"></i> Social Media Team </Link>
    </div>

    <div className="box" data-aos="fade-left">
        <h3>contact info</h3>
        <Link to="tel:8532864390"> <i className="fas fa-phone"></i> 8532864390 </Link>
        <Link to="tel:8532864390"> <i className="fas fa-phone"></i> 8532864390 </Link>
        <Link to="#book"> <i className="fas fa-envelope"></i> geuacm@gmail.com </Link>
        <Link to="#book"> <i className="fas fa-envelope"></i> geuacmw@gmail.com </Link>
        <Link to="https://goo.gl/maps/XbjC37jh3JcCMboCA"> <i className="fas fa-map-marker-alt"></i> Clement Town, Dehradun </Link>
        <Link to="https://goo.gl/maps/XbjC37jh3JcCMboCA"> <i className="fas fa-map-marker-alt"></i> Dehradun, India - 248007 </Link>
    </div>

    <div className="box" data-aos="fade-left">
        <h3>follow us</h3>
        <Link to="#"> <i className="fab fa-facebook-f"></i> facebook </Link>
        <Link to="#"> <i className="fab fa-twitter"></i> twitter </Link>
        <Link to="#"> <i className="fab fa-twitter"></i> twitter </Link>
        <Link to="#"> <i className="fab fa-instagram"></i> instagram </Link>
        <Link to="#"> <i className="fab fa-linkedin"></i> linkedin </Link>
        <Link to="#"> <i className="fab fa-pinterest"></i> pinterest </Link>
    </div>

</div>
<div className="credit"> Created by | <span>Sagar Negi</span> | all rights reserved </div>
</section>
    </div>
  )
}

export default Footer