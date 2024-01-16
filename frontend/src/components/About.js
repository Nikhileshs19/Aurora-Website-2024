import 'tailwindcss/tailwind.css'
import './About.css'

function About() {
  return (
    <div className="p-24" id='about'>
    <div className="flex flex-row flex-wrap items-center p-10 rounded-3xl justify-evenly  glow-about">
      {/* First Column */}
      <div className='flex-col p-6  flex justify-center'>
        <span className="text-white text-4xl sm:text-6xl font-bold">
         200+
          
        </span>
        <br />
        <span className="text-2xl sm:text-3xl text-white font-bold">Registerations</span>
      </div>


      {/* Second Column */}
      <div className='flex-col p-6 flex justify-center'>
        <span className="text-white text-4xl sm:text-6xl font-bold">
          8+
          
        </span>
        <br />
        <span className="text-2xl sm:text-3xl text-white font-bold">Workshops</span>
      </div>
      {/* Third Column */}
      
      <div className='flex-col p-6  flex justify-center'>
        <span className="text-white text-4xl sm:text-6xl font-bold">
          45+
          
        </span>
        <br />
        <span className="text-2xl sm:text-3xl text-white font-bold">hours of skill sharing</span>
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