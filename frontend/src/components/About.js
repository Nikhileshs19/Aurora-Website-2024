import 'tailwindcss/tailwind.css'
import aboutbox1 from '../images/aboutbox1.svg'
import aboutbox2 from '../images/aboutbox2new.png.jpg'
import aboutbox3 from '../images/aboutbox3.svg'
import './About.css'

function About() {
  return (
    // <div className="p-24" id='about'>
    // <div className="flex flex-row flex-wrap items-center p-10 rounded-3xl justify-evenly  glow-about">
    //   {/* First Column */}
    //   <div className='flex-col p-6  flex justify-center'>
    //     <span className="text-white text-center text-4xl sm:text-6xl font-bold">
    //      200+
          
    //     </span>
    //     <br />
    //     <span className="text-2xl sm:text-3xl text-white font-bold">Registrations</span>
    //   </div>


    //   {/* Second Column */}
    //   <div className='flex-col p-6 flex justify-center'>
    //     <span className="text-white text-center text-4xl sm:text-6xl font-bold">
    //       8+
          
    //     </span>
    //     <br />
    //     <span className="text-2xl sm:text-3xl text-white font-bold">Workshops</span>
    //   </div>
    //   {/* Third Column */}
      
    //   <div className='flex-col p-6  flex justify-center'>
    //     <span className="text-white text-center text-4xl sm:text-6xl font-bold">
    //       45+
          
    //     </span>
    //     <br />
    //     <span className="text-2xl sm:text-3xl text-white font-bold">hours of skill sharing</span>
    //   </div>
    // </div>
    // </div>
    <div className='lg:grid grid-cols-2 bg-transparent pt-5' id="about">
      <div  className='w-full'>
        <img src={aboutbox1} alt="" className='mx-auto w-full lg:p-16 p-12'/>  
      </div>
      <div className='grid w-full'>
        <div>
          <img src={aboutbox2} alt="" className=' mx-auto lg:px-40 lg:block hidden lg:pt-14 '/>
        </div>
        <div>
          <img src={aboutbox3} alt="" className='mx-auto w-full lg:px-20 px-12'/>
        </div>
      </div>
    </div>
  )
}

export default About

// <div className="w-[448px] h-[236px] justify-start items-start inline-flex">
//   <div className="px-[9px] py-[86px] bg-slate-900 rounded-[14px] shadow justify-start items-start flex">
//     <div className="p-5 justify-start items-start flex">
//       <div className="pr-[13px] justify-start items-start flex">
//         <div className="text-white text-5xl font-normal font-['Roboto'] leading-normal">
//           200+ Registrations
//         </div>
//       </div>
//     </div>
//   </div>
// </div>