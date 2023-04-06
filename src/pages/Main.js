import React from 'react';
import Header from "../components/Header"
import Footer from "../components/Footer";
import Home from "../components/Home";
import Event from "../components/Event";
import Division from "../components/Division";
import Team from "../components/Team";
import Contact from "../components/Contact";
import Review from "../components/Review";
import Counter from "../components/Counter";
import About from "../components/About";
// import Slider from '../components/Slider';

const Main = () => {
  return (
    <div>
        <Header/>
   <Home/>
   <About/>
   <Counter/>
   <Event/>
   <Division/>
   <Team/>
{/* <Slider/> */}
   <Contact/>
   <Review/>
   <Footer/>
    </div>
  )
}

export default Main