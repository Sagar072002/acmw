import React from 'react';
import img1 from "../images/geu.jpg";
import img2 from "../images/acm.jpg";
import img3 from "../images/geuacm.png";
import logo from "../images/logo.png";
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  return (
    <div>
        <section className="faculty" id="about">
          <h1 className="heading">Graphic Era <span>Deemed to</span> be University </h1>
          <h1 className="heading"> <span>( geu )</span> </h1>
          <div className="row">
            <div className="image" data-aos="fade-right">
              <img src={img1} style={{"height":"300px"}} alt="" />
            </div>
            <div className="content" style={{"padding-top":"20px"}} data-aos="fade-left">
              <p>Graphic Era Deemed University is the culmination of the hard work of its visionary founder, Prof. (Dr.) Kamal Ghanshala, who had the dream to change the destiny of thousands of youth through quality and holistic education.
                His vision gained concrete shape in 1996 in the form of the Graphic Era Institute of Technology (GEIT).
                <br /><br />
                In 2008, the Institute was accorded the status of Deemed University under Section 3 of the UGC Act, 1956 dated August 14, 2008 and approved by the Ministry of Human Resource Development, Government of India. 
                . In July 2022, Graphic Era Deemed University was conferred All-India Rank 64 in the Engineering Category, All India Rank 65 in Management Category, and All India Rank 74 in the University Category in the MHRD NIRF Rankings and retained its position consecutively for the third year amongst top 100 universities of India.
              </p>
              <Link href="https://www.geu.ac.in/" target="_blank" className="btn"> learn more <span className="fas fa-chevron-right" /> </Link>
            </div>
          </div>
        </section>
        <section className="faculty" id="about">
          <h1 className="heading"> Association <span>for Computing </span>Machinery</h1>
          <h1 className="heading"><span> ( acm )</span></h1>
          <div className="row">
            <div className="image" data-aos="fade-right">
              <img id="acm" src={img2} style={{"height":"300px"}} alt="" />
            </div>
            <div className="content" style={{"padding-top":"20px"}} data-aos="fade-left">
              <p>ACM(Association for Computing Machinery), the world's largest educational and scientific computing society, delivers resources that advance computing as a science and a profession. ACM provides the computing field's premier Digital Library and serves its members and the computing profession with leading-edge publications, conferences, and career resources. 
                <br /> <br /> As the world's largest computing society, ACM strengthens the profession's collective voice through strong leadership, promotion of the highest standards, and recognition of technical excellence. ACM supports the professional growth of its members by providing opportunities for life‐long learning, career development, and professional networking.</p>
              <Link href="https://www.acm.org/" target="_blank" className="btn"> learn more <span className="fas fa-chevron-right" /> </Link>
            </div>
          </div>
        </section>
        <section className="faculty" id="about">
          <h1 className="heading">geu <span>acm student</span> chapter</h1>
          <div className="row">
            <div className="image" data-aos="fade-right">
              <img id="acm1" src={img3} style={{"height":"200px"}} alt="" />
            </div>
            <div className="content" style={{"padding-top":"20px"}} data-aos="fade-left">
              <p>GEU ACM Student Chapter is a student-run organization that aims to promote the development of students in the field of computer science. We aim to provide a platform for students to learn and grow in their field of interest. We also aim to provide a platform for students to interact with each other and share their knowledge. <br /> <br />
                GEU ACM Student Chapter is a student-run organization that aims to promote the development of students in the field of computer science. We aim to provide a platform for students to learn and grow in their field of interest. We also aim to provide a platform for students to interact with each other and share their knowledge. <br />
              </p>
              <Link href="https://geu.acm.org/" className="btn"> learn more <span className="fas fa-chevron-right" /> </Link>
            </div>
          </div>
        </section>
        <section className="faculty" id="about">
          <h1 className="heading">geu <span>acm-w Student</span> chapter </h1>
          <div className="row">
            <div className="image" data-aos="fade-right">
              <img id="acm" src={logo} style={{"height":"200px"}} alt="" />
            </div>
            <div className="content" style={{"padding-top":"20px"}} data-aos="fade-left">
              <p >GEU ACM-W Seeks To Take Forward The Task Of The ACM Community, But With A Particular Focus On The Empowerment Of Women In Computing. GEU ACM-W Student Chapter Is Reserved Exclusively For Women With An Aim To Highlight The Fact That Women Are As Competent As Men In The Field Of Technology.
                ACM-W Student Chapter Is Created To Educate Women About Careers In Computing And Provide Networking Opportunities.
                <br /><br />  ACM-W Supports, Celebrates, And Advocates Internationally For The Full Engagement Of Women In All Aspects Of The Computing Field, Providing A Wide Range Of Programs And Services To ACM Members And Working In The Larger Community To Advance The Contributions Of Technical Women.
              </p>
              <Link href="#" className="btn"> learn more <span className="fas fa-chevron-right" /> </Link>
            </div>
          </div>
        </section>
        <Footer/>
      </div>
  )
}

export default AboutUs