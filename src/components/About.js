import React from 'react';
import about from "../images/about.gif";
import { Link } from 'react-router-dom';


const About = () => {
  return (
    <section className="about" id="about">
        <h1 className="heading"> <span>about</span> us </h1>
        <div className="row">
          <div className="image" data-aos="fade-right">
            <img src={about} alt="" />
          </div>
          <div className="content" data-aos="fade-left">
            <h3>Looking for Technical Stuff</h3>
            <p>GEU ACM-W seeks to take forward the task of the ACM community, but with a particular focus on the empowerment of women in computing. ACM-W Student Chapter is created to educate women about careers in computing and provide networking opportunities. <br /> <br /> ACM-W supports, celebrates, and advocates internationally for the full engagement of women in all aspects of the computing field, providing a wide range of programs and services to ACM members and working in the larger community to advance the contributions of technical women. <br /> </p>
            <Link to="/about"  target="_blank" rel="noreferrer" className="btn"> learn more <span className="fas fa-chevron-right" /> </Link>
          </div>
        </div>
      </section>
  )
}

export default About