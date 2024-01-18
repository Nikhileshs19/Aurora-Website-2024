import React from 'react';
import Footer from '../components/Footer';
import events from '../images/events.svg';
import { Auroractf } from './Auroractf';
import DevsprintEvents from './DevsprintEvents';
import TimelineEvents from './timeline/TimelineEvents';

export default function Events(){
  return (
    <div className='bg-[#000509]'>
      
    <div className="h-20"></div>

      <img src={events} alt="" className='mx-auto'/>

      <TimelineEvents/>

      <Auroractf />

      <DevsprintEvents/>

      <Footer/>     
    </div>
  );
};
