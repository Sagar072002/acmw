import React from 'react';
import { Link } from 'react-router-dom';

const Event = () => {
  return (
    <section className="services" id="events">
    <h1 className="heading"> Our <span>Events</span> </h1>
    <div className="box-container">
      <div className="box" data-aos="fade-right">
        <div style={{display:"flex"}}>
        <i className="fa-solid fa-book-open-reader" />
        <h3 style={{marginLeft:"20px"}}>Webinars</h3>
        </div>
        <p className="para">The Management team is responsible for the overall management of the
          chapter activities, including the organization of the events, seminars and workshops.</p>
        <Link to="/events" target='_blank' className="btn"> learn more <span className="fas fa-chevron-right" /> </Link>
      </div>
      <div className="box" data-aos="zoom-in-left">
        <div style={{display:"flex"}}>
        <i className="fa-solid fa-laptop-code" />
        <h3 style={{marginLeft:"20px"}}>Competitions</h3>
        </div>
        <p className="para">The Technical Team is the backbone of our chapter, it is not only
          associated with programming, it works accross projects, learning,
          teaching &amp; sloving problems.</p>
        <Link to="/events" target='_blank' className="btn"> learn more <span className="fas fa-chevron-right" /> </Link>
      </div>
      <div className="box" data-aos="fade-left">
        <div style={{display:"flex"}}>
        <i className="fa-solid fa-chalkboard-teacher" />
        <h3 style={{marginLeft:"20px"}}>Workshops</h3>
        </div>
        <p className="para"> The Editorial Team is responsible for handling and maintaining all
          the documentations and preparing the report covering all the details of the event.</p>
        <Link to="/events" target='_blank' className="btn"> learn more <span className="fas fa-chevron-right" /> </Link>
      </div>
    </div>
  </section>
  )
}

export default Event