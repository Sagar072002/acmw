import React from 'react'
;
import img1 from "../images/pic-1.png";
import img2 from "../images/pic-2.png";
import img3 from "../images/pic-3.png";
import mam from "../images/mam.jpg";
const Team = () => {
  return (
    <>
     <section className="faculty" style={{
      marginTop:"50px"
     }}>
        <h1 className="heading"> <span>Faculty</span> Sponsor </h1>
        <div className="row">
          <div className="image" data-aos="fade-right">
            <img src={mam} alt="" />
          </div>
          <div className="content" data-aos="fade-left">
            <p id="para1">We are proud to have with ourselves a dedicated and experienced instructor who guides us at each step, and motivates our spirit.</p>   
            <h3>Ms. <span>Sarishma </span>Dangi </h3>
            <h2>Assistant Professor</h2>
            <h2 id="geu">Graphic Era Deemed to be University</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis beatae excepturi molestias soluta maxime, maiores veniam pariatur blanditiis laboriosam iure animi ea accusamus nesciunt praesentium commodi, tenetur iusto! Suscipit, sequi.

              </p>     
       <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-github" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
      </section>
    <section className="team" id="team">
        <h1 className="heading"> our <span>Team</span> </h1>
        <div className="box-container">
          <div className="box" data-aos="fade-right">
            <img src={img3} alt="" />
            <h3>John Doe</h3>
            <span>Chair</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-github" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="box" data-aos="zoom-in-left">
            <img src={img2} alt="" />
            <h3>John Doe</h3>
            <span>Vice Chair</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-github" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="box" data-aos="fade-left">
            <img src={img1} alt="" />
            <h3>John Doe</h3>
            <span>Secretary</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-github" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="box" data-aos="fade-right">
            <img src={img3} alt="" />
            <h3>John Doe</h3>
            <span>Webmaster</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-github" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="box" data-aos="zoom-in-left">
            <img src={img1} alt="" />
            <h3>John Doe</h3>
            <span>Membership Chair</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-github" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
          <div className="box" data-aos="fade-left">
            <img src={img2} alt="" />
            <h3>John Doe</h3>
            <span>Treasurer</span>
            <div className="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-github" />
              <a href="#" className="fab fa-instagram" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
      </section>
      </>

  )
}

export default Team