import { Button } from "@nextui-org/react";
import React from "react";
import Footer from '../components/Footer';
import events from "../images/events.svg";
import trophycup from '../images/whitetrophy.svg';
import xmark from '../images/xmark.svg';
import { Auroractf } from "./Auroractf";
import DevsprintEvents from "./DevsprintEvents";
import HomeNav from "./HomeNav";
import TimelineEvents from "./timeline/TimelineEvents";

export default function Events() {
  return (
    <div className='bg-[#000509]'>

      <HomeNav/>
      
    {/* <div className="h-20"></div> */}

      <img src={events} alt="" className='mx-auto'/>

      <TimelineEvents/>

      <Auroractf />

      <div className='border-[#11A8E4] border-solid border-3 rounded-lg w-fit mx-auto m-10'>
        <div className='text-center text-white'>
          <h4 className='p-5 text-[#11A8E4] font-semibold'>PRESS SUBMIT TO CONFIRM YOUR SELECTION!</h4>
          {/* <h4 className='p-5 font-bold'>Register Now for AURORA's Ultimate Experience!</h4> */}
          <Button color="primary" size="lg" variant="shadow"
            className="lg:w-[15rem] m-5"
            onClick={() => { console.log('clicked register') }}>
            <img src={trophycup} alt="" />
            Submit
          </Button>
          <Button color="danger" size="lg" variant="shadow"
            className="lg:w-[15rem] m-5"
            onClick={() => { console.log('clicked clear') }}>
            <img src={xmark} alt="" className="w-6"/>
            Clear
          </Button>
        </div>
      </div>

      <DevsprintEvents/>

      <Footer/>     
    </div>
  );
}
