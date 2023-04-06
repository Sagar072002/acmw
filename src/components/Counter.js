import React from 'react';
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';


const Counter = () => {
  const[counterOn,setcounterOn] = useState(false);
  return (
    <div style={{background:"#fff"}}>
    <section className="icons-container" id="section_counter">
    <div className="icons counter-item" data-aos="fade-right">
      <i className="fa-solid fa-trophy" />
<ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>

    <h3 className="counter">
        {counterOn &&     <CountUp start={0} end={400} duration={3} delay={0}/>
}
    </h3>
  </ScrollTrigger>
        <p className="para">Events and Workshops</p>
    </div>
    <div className="icons counter-item" data-aos="zoom-in-left">
      <i className="fa-solid fa-users" />
<ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>

    <h3 className="counter">
        {counterOn &&     <CountUp start={0} end={200} duration={3} delay={0}/>
}
    </h3>
  </ScrollTrigger>
        <p className="para">Active Members</p>
    </div>
    <div className="icons counter-item" data-aos="fade-left">
      <i className="fa-solid fa-users" />
<ScrollTrigger onEnter={()=>setcounterOn(true)} onExit={()=>setcounterOn(false)}>

    <h3 className="counter">
        {counterOn &&     <CountUp start={0} end={300} duration={3} delay={0}/>
}
    </h3>
  </ScrollTrigger>
        <p className="para">Active Volunteers</p>
    </div>
  </section>
  
  </div>
  )
}

export default Counter