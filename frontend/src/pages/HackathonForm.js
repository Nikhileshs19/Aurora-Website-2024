import { Input } from '@nextui-org/react'
import React, { useState } from 'react'
import calen from "../images/calendar.svg"
import clock from "../images/clock.svg"
import loc from "../images/loc.svg"
import tsize from "../images/teamsize.svg"
import QRimg from '../images/QRimg.png'
import { MdCloudUpload, MdDelete } from 'react-icons/md'

function HackathonForm() {
    //   const variants = ['flat', 'bordered', 'underlined', 'faded']

    const [teamName, setTeamName] = useState('')
    const [teamLeaderName, setTeamLeaderName] = useState('')
    const [teamLeaderRegistrationNumber, setTeamLeaderRegistrationNumber] =
        useState('')
    const [teamLeaderPhoneNumber, setTeamLeaderPhoneNumber] = useState('')
    const [teamLeaderLearnerID, setTeamLeaderLearnerID] = useState('') // Add this line
    const [teamMember1Name, setTeamMember1Name] = useState('')
    const [teamMember1RegistrationNumber, setTeamMember1RegistrationNumber] =
        useState('')
    const [teamMember1PhoneNumber, setTeamMember1PhoneNumber] = useState('')
    const [teamMember1LearnerID, setTeamMember1LearnerID] = useState('')
    const [teamMember2Name, setTeamMember2Name] = useState('')
    const [teamMember2RegistrationNumber, setTeamMember2RegistrationNumber] =
        useState('')
    const [teamMember2PhoneNumber, setTeamMember2PhoneNumber] = useState('')
    const [teamMember2LearnerID, setTeamMember2LearnerID] = useState('')
    const [teamMember3Name, setTeamMember3Name] = useState('')
    const [teamMember3RegistrationNumber, setTeamMember3RegistrationNumber] =
        useState('')
    const [teamMember3PhoneNumber, setTeamMember3PhoneNumber] = useState('')
    const [teamMember3LearnerID, setTeamMember3LearnerID] = useState('')

    const handleFormSubmit = (e) => {
        e.preventDefault()

        // Add your form submission logic here
        // You can access form data from the state variables
        console.log('Form submitted:', {
            teamName,
            teamLeaderName,
            teamLeaderRegistrationNumber,
            teamLeaderPhoneNumber,
            teamLeaderLearnerID,
            teamMember1Name,
            teamMember1RegistrationNumber,
            teamMember1PhoneNumber,
            teamMember1LearnerID,
            teamMember2Name,
            teamMember2RegistrationNumber,
            teamMember2PhoneNumber,
            teamMember2LearnerID,
            teamMember3Name,
            teamMember3RegistrationNumber,
            teamMember3PhoneNumber,
            teamMember3LearnerID,
        })
    }

    return (
        <div className="lg:grid grid-cols-2 bg-[#000F21] text-white" style={{ overflowY: 'auto', overflowX: 'hidden' }}>
           <div id='hackathonleft' className="row-span-5 bg-form-bg bg-center bg-cover lg:h-full h-[45rem] rounded-r-3xl block w-full bg-black text-white flex-col align-middle border-white border-opacity-10">
                <div>
                    <h1 className="text-center text-white md:text-5xl text-3xl font-bold [font-family:'Inter-Bold',Helvetica] uppercase p-6 pt-24">&lt;DEVSPRINT' 24 /&gt;</h1>
                </div>
                <div className="justify-center flex">
                <p className="flex align-middle justify-center w-5/6 pt-8 pb-24 [font-family:'Inter-Medium',Helvetica] font-medium text-white md:text-[25px] text-[16px] text-center tracking-[0] leading-7]">
                  Experience the ultimate creative challenge with Hackathon! Join a golbal community of problem solvers, thinkers, and creators as you put your curiosity and creativity to the test. Hackathon is your platform to tackle real-life problems head-on.
                </p>
                </div>
                <div className="w-[427px] h-[135px] left-[70px] top-[366px] flex-col lg:text-[20px] md:text-lg">
                  <div className="pl-10 flex flex-row">
                    <img src={calen}></img>
                    <span className="pt-2 [font-family:'Inter-Medium',Helvetica] font-semibold"> 02 February 2024</span>
                  </div>
                  <div className="pl-10 flex flex-row">
                    <img src={clock}></img>
                    <span className="pt-2 [font-family:'Inter-Medium',Helvetica] font-semibold"> 12:30 PM</span>
                  </div>
                  <div className="pl-10 flex flex-row">
                    <img src={loc}></img>
                    <span className="pt-2 [font-family:'Inter-Medium',Helvetica] font-semibold"> Library Auditorium, MIT Manipal</span>
                  </div>
                  <div className="pl-10 flex flex-row">
                    <img src={tsize}></img>
                    <span className="pt-2 [font-family:'Inter-Medium',Helvetica] font-semibold"> Team Size : 2-4</span>
                  </div>
                </div>

            </div>
            <div className="grid-rows-5 grid-cols-2 bg-[#000F21]">
                <form action="" className='' onSubmit={(e) => {
                    e.preventDefault();
                    console.log("Stfu");
                 } } >

                    <div className="grid col-span-2 grid-rows-2 pl-10 pt-20">

                        <div className="text-[40px] font-normal font-['Inter'] leading-normal text-blue-500 p">
                            Registration Form
                        </div>

                        <div className=" flex flex-col gap-4 pt-5">
                            <div
                                key="underlined"
                                className="flex  flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                            >
                                <Input isRequired
                                    type="email"
                                    variant="underlined"
                                    label="Team Name"
                                    className="w-full pr-20"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 pt-8 pl-10">
                        <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal pt-8">
                            Team Leader Details
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
                        >
                            <Input type="email" variant="underlined" label="Name" />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20 pb-10"
                        >
                            <Input
                                type="email"
                                variant="underlined"
                                label="Registration Number"
                            />
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input type="email" variant="underlined" label="Phone Number" />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input type="email" variant="underlined" label="Learner ID" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 pl-10 pt-8">
                        <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
                            Team Member 1 Details
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20  pb-10"
                        >
                            <Input
                                type="email"
                                variant="underlined"
                                label="Name"
                                className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal"
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20 pb-10"
                        >
                            <Input
                                type="email"
                                variant="underlined"
                                label="Registration Number"
                            />
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input type="email" variant="underlined" label="Phone Number" />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
                        >
                            <Input type="email" variant="underlined" label="Learner ID" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 pl-10 pt-8">
                        <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
                            Team Member 2 Details
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20 pb-10"
                        >
                            <Input type="email" variant="underlined" label="Name" />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20 pb-10"
                        >
                            <Input
                                type="email"
                                variant="underlined"
                                label="Registration Number"
                            />
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
                        >
                            <Input type="email" variant="underlined" label="Phone Number" />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input type="email" variant="underlined" label="Learner ID" />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-4 p-10">
                        <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
                            Team Member 3 Details
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20 pb-10"
                        >
                            <Input type="email" variant="underlined" label="Name" />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20 pb-10"
                        >
                            <Input
                                type="email"
                                variant="underlined"
                                label="Registration Number"
                            />
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input type="email" variant="underlined" label="Phone Number" />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
                        >
                            <Input type="email" variant="underlined" label="Learner ID" />
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 sm:grid-cols-1 grid-rows-3 pl-10 h-60 pt-14">
          <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal h-5 ">
            Payment Information
          </div>

          <div className=" text-blue-500 text-xl lg:text-2xl font-normal font-['Inter'] leading-normal h-8">
            Payment Address
          </div>
          <div className=" text-blue-500 text-xl lg:text-2xl font-normal font-['Inter'] leading-normal pl-10">
            Payment Screenshot Upload
          </div>

          <div className="h-40 pt-5">
            <img
              src={QRimg}
              alt="Description of the image"
              className="rounded-lg shadow-lg pr-5 lg:max-w-full h-auto"
            />
          </div>
          <form
            onClick={() => document.querySelector('.input-field').click()}
            className="pl-12"
          >
            <input
              type="file"
              accept="image/*"
              className="input-field"
              hidden
            />
            <div className="lg:w-60 w-32 h-28 lg:h-60 border-dashed border-2 border-radius:1rem mt-5 flex align-middle justify-center">
              <MdCloudUpload
                color="#ffffff"
                size={10}
                className="lg:w-16 w-8 h-auto align-middle justify-center "
              />
            </div>
          </form>
        </div>
                    <div className=" lg:h-80 sm:h-60 lg:pt-16 lg:pb-0 pb-16">
                        <button className="w-24 h-12 rounded-xl border-2 border-blue-600  items-center gap-3 ml-12 inline-flex " 
                        type ="submit">
                            <div className="text-blue-600 text-base font-medium font-['Inter'] leading-normal pl-5">
                                Register
                            </div>
                        </button>

                    </div>
                </form>
            </div>
        </div >
    )
}
export default HackathonForm