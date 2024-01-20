import React from "react";
import Footer from '../components/Footer';
import events from "../images/events.svg";
import DevsprintEvents from "./DevsprintEvents";
import HomeNav from "./HomeNav";
import TimelineEvents from "./timeline/TimelineEvents";

export default function Events() {
  return (
    <div className='bg-transparent' id="eventsbg">

      <HomeNav/>
      
    {/* <div className="h-20"></div> */}

      <img src={events} alt="" className='mx-auto p-10'/>

      <TimelineEvents/>

      <DevsprintEvents/>

      <Footer/>     
    </div>
  );
}
