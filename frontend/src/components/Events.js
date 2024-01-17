import React from 'react';
import { Auroractf } from './Auroractf';
import DevsprintEvents from './DevsprintEvents';
import TimelineEvents from './timeline/TimelineEvents';

export default function Events(){
  return (
    <div className='bg-[#000509]'>

      <TimelineEvents/>

      <DevsprintEvents/>

      <Auroractf/>
    </div>
  );
};
