import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="home" id="home">
    <div className="image" data-aos="fade-right" />
    <div className="content" data-aos="fade-left">
      <h2 className="heading"> GEU <span>ACM-W</span> </h2>
      <p>GEU ACM-W Student Chapter is reserved exclusively for women with an aim to highlight the fact that women are as competent as men in the field of technology. <br /> <br />
        To achieve this, we organize various activities and events to bring out the programmer and genius within each and every individual.</p>
      <Link href="#book" className="btn"> Contact Us <span className="fas fa-chevron-right" /> </Link>
      <Link to="/about" target="_blank" rel="noreferrer" className="btn" id="but"> Know More <span className="fas fa-chevron-right" /> </Link>
    </div>
  </section>
  )
}

export default Home