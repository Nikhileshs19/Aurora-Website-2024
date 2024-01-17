import React from 'react';
// import Navbar from '../components/Navbar.js'
import About from '../components/About.js';
import Footer from '../components/Footer.js';
import Gallery from '../components/Gallery.js';
import Nav from '../components/Nav.js';
import Partners from '../components/Partners.js';
import Sponsors from '../components/Sponsors.js';
import Timer from '../components/Timer.js';
import MyParallax from '../components/parallax/my-parallax.js';
import Timeline from '../components/timeline/Timeline.js';

const MainHome = () => {
  return (
    <div style={{backgroundColor: "#000509"}} >

    <Nav/>

    <MyParallax /> 

    <About/>

    <Timer/>

    <div className="h-60"></div>

    <Partners />

    <div className="h-60"></div>

    <Gallery/>

    <Timeline />

    <Sponsors/>

    <Footer/>
   
     </div>
  )
}

export default MainHome