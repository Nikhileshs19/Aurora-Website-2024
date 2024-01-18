import React from 'react';
import events from '../images/events.svg';
import eventslines from '../images/eventslines.svg';
import { Auroractf } from './Auroractf';
import DevsprintEvents from './DevsprintEvents';
import TimelineEvents from './timeline/TimelineEvents';

export default function Events(){
  return (
    <div className='bg-[#000509]'>
      

      <img src={events} alt="" className='mx-auto'/>

      <TimelineEvents/>

      <img src={eventslines} alt="" className='mx-auto'/>

      <DevsprintEvents/>
      
      <img src={eventslines} alt="" className='mx-auto'/>

      <Auroractf/>
    </div>
  );
};
