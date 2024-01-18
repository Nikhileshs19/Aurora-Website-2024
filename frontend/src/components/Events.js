import React from 'react';
import Footer from '../components/Footer';
import { Auroractf } from './Auroractf';
import TimelineEvents from './timeline/TimelineEvents';

export default function Events(){
  return (
    <div className='bg-[#000509]'>
      
    <div className="h-20"></div>
      <TimelineEvents/>

      <Auroractf />

      <Footer/>     
    </div>
  );
};