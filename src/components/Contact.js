import React from 'react';
import contact from "../images/contact.gif";

const Contact = () => {
  return (
    <section className="book" id="book">
    <h1 className="heading"> <span>Contact</span> Us </h1>    
    <div className="row">
      <div className="image" data-aos="fade-right">
        <img src={contact} alt="" />
      </div>
      <form data-aos="fade-left">
        <h3>Connect With Us</h3>
        <input type="text" placeholder="Name" className="box" required />
        <input type="email" placeholder="Email" className="box" required />
        <textarea placeholder="Your Message" cols={20} rows={5} className="box" required  />           
        <input type="submit" defaultValue="Send now" className="btn" />
      </form>
    </div>
  </section>
  )
}

export default Contact