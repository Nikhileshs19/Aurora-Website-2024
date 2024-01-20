import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import workshopsevents from '../../images/workshopsevents.svg';

import P1 from "../../images/1st.svg";
import P2 from "../../images/2nd.svg";
import P3 from "../../images/3rd.svg";
import gr from "../../images/Group.svg";
import hecker from "../../images/Hacker-cuate-2 1.svg";
import calen from "../../images/calendar.svg";
import clock from "../../images/clock.svg";
import ctfevents from '../../images/ctfevents.svg';
import laptop from "../../images/laptop.svg";

//
import './CheckBoxStyles.css';

const allEvents = [
  ["TS1_E1_ACM", "ACM"],
  ["TS1_E2_DRONAID", "DRONEAID"],
  ["TS2_E1_MIST", "MIST"],
  ["TS2_E2_ISTE1", "ISTE"],
  ["TS3_E1_GDSC", "GDSC"],
  ["TS3_E2_ISTE2", "ISTE2"],
  ["TS4_E1_IEMECH", "IE MECH"],
  ["TS4_E2_IEEE", "IEEE"],
  ["TS5_E2_EVENT9", "Event 9"],
]

// "TS1_E1_ACM"
// "TS1_E2_DRONAID"
// "TS2_E1_MIST"
// "TS2_E2_ISTE1"
// "TS3_E1_GDSC"
// "TS3_E2_ISTE2"
// "TS4_E1_IEMECH"
// "TS4_E2_IEEE"
// "TS5_E2_EVENT9"

const titles = [
  "ACM",
  "DRONEAID",
  "MIST",
  "ISTE",
  "GDSC",
  "ISTE2",
  "IE MECH",
  "IEEE",
  "Event 9",
];

const times = [
  "05:30PM - 08:30PM & 10:00AM - 05:00PM",
  "05:30PM - 08:30PM & 10:00AM - 05:00PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",

];
const dates = [
  "3rd February, 2024",
  "4th February, 2024",
  "4th February, 2024",
  "5th February, 2024",

  "5th February, 2024",
  "6th February, 2024",
  "6th February, 2024",
  "7th February, 2024",
  "7th February, 2024",
];
const images = [
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
];

const modalComponents = Array.from(
  { length: 9 },
  (_, index) => require(`../Modal_${index + 1}`).default
);

export default function TimelineEventsCards() {
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);
  const [isSelected, setIsSelected] = useState(false);

  const toggleModal = (index) => {
    setSelectedModalIndex(index);
  };

  var registeredWorkshops = []
  const [uniqueID, setUniqueID] = useState('');
  const [logged, setLogged] = useState(0)
  const [registered, setRegistered] = useState([])
  const [googleUserData, setGoogleUserData] = useState({});
  const [userData, setuserData] = useState({});


  const getGoogleData = async () => {
    try {
      const response = await axios.get("http://localhost:6005/login/success", { withCredentials: true });
      setLogged(1)
      setUniqueID(response.data.user._id)
      console.log(response.data.user)
      setGoogleUserData(response.data.user)

      if (response.data.user.registered === false) {
        const checkbox = document.getElementsByClassName('event')
        const label = document.getElementsByClassName('event_label')
        for (let i = 0; i < checkbox.length; i++) {
          checkbox[i].style.visibility = 'hidden'
          label[i].style.visibility = 'hidden'
        }
        document.getElementsByClassName('event-submit')[0].style.visibility='hidden'
        formNotify()
      }

    } catch (error) {
      const checkbox = document.getElementsByClassName('event')
      const label = document.getElementsByClassName('event_label')
      for (let i = 0; i < checkbox.length; i++) {
        checkbox[i].style.visibility = 'hidden'
        label[i].style.visibility = 'hidden'
      }
      document.getElementsByClassName('event-submit')[0].style.visibility='hidden'
      //console.log("error", error)
    }
    // console.log(registered)
  }

  const getUser = async () => {
    try {
      const response = await axios.get(`http://localhost:6005/get-user-data?email=${googleUserData.email}`, { withCredentials: true });
      console.log("getuserdata: ", response)
      setUniqueID(response.data._id)
      setuserData(response.data)

      let a = response.data.workshops
      let newRegistered = []
      for (let i = 0; i < a.length; i++) {
        if (a[i] === "ACM") { newRegistered.push("TS1_E1_ACM"); document.getElementById("TS1_E1_ACM").checked = true }
        else if (a[i] === "DRONAID") { newRegistered.push("TS1_E2_DRONAID"); document.getElementById("TS1_E2_DRONAID").checked = true }
        else if (a[i] === "MIST") { newRegistered.push("TS2_E1_MIST"); document.getElementById("TS2_E1_MIST").checked = true }
        else if (a[i] === "ISTE1") { newRegistered.push("TS2_E2_ISTE1"); document.getElementById("TS2_E2_ISTE1").checked = true }
        else if (a[i] === "GDSC") { newRegistered.push("TS3_E1_GDSC"); document.getElementById("TS3_E1_GDSC").checked = true }
        else if (a[i] === "ISTE2") { newRegistered.push("TS3_E2_ISTE2"); document.getElementById("TS3_E2_ISTE2").checked = true }
        else if (a[i] === "IEMECH") { newRegistered.push("TS4_E1_IEMECH"); document.getElementById("TS4_E1_IEMECH").checked = true }
        else if (a[i] === "IEEE") { newRegistered.push("TS4_E2_IEEE"); document.getElementById("TS4_E2_IEEE").checked = true }
        else if (a[i] === "EVENT9") { newRegistered.push("TS5_E1_EVENT9"); document.getElementById("TS5_E1_EVENT9").checked = true }
        else if (a[i] === "CTF") { newRegistered.push("TS6_E1_CTF"); document.getElementById("TS6_E1_CTF").checked = true }
      }
      setRegistered(newRegistered)

    } catch (error) {
      // console.log("error: ", error)
    }
  }

  const notifyRegistered = () => {
    toast.success('Successfully Registered!', {
      position: "top-right",
      autoClose: 1500,
      theme: "light"
    });
  };

  const formNotify = () => {
    toast.warn('Complete Registration process to participate in events!', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored"
    });
  }

  useEffect(() => {
    if (logged === 0) {
      getGoogleData()
    }
  },)

  useEffect(() => {
    getUser()
  }, [googleUserData])


  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log("in handleSubmit", registered)
    for (let i = 0; i < registered.length; i++) {
      switch (registered[i]) {
        case "TS1_E1_ACM": registeredWorkshops.push("ACM"); break;
        case "TS1_E2_DRONAID": registeredWorkshops.push("DRONAID"); break;
        case "TS2_E1_MIST": registeredWorkshops.push("MIST"); break;
        case "TS2_E2_ISTE1": registeredWorkshops.push("ISTE1"); break;
        case "TS3_E1_GDSC": registeredWorkshops.push("GDSC"); break;
        case "TS3_E2_ISTE2": registeredWorkshops.push("ISTE2"); break;
        case "TS4_E1_IEMECH": registeredWorkshops.push("IEMECH"); break;
        case "TS4_E2_IEEE": registeredWorkshops.push("IEEE"); break;
        case "TS5_E1_EVENT9": registeredWorkshops.push("EVENT9"); break;
        case "TS6_E1_CTF": registeredWorkshops.push("CTF"); break;
        default: break;
      }
    }
    try {
      const response = await axios.patch(`http://localhost:6005/workshop-registration/${uniqueID}`, {
        workshops: registeredWorkshops,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // The response.data contains the JSON parsed response
      console.log("Response JSON: ", response.data);
      console.log("workshops: ", registeredWorkshops);
      notifyRegistered();
    } catch (error) {
      // console.error("Error updating data:", error);
    }

    registeredWorkshops = []
    // getUpdatedUser()
  }
  const clearSelection = () => {
    let a = document.getElementsByClassName('event')
    for (let i = 0; i < a.length; i++) {
      a[i].checked = false
    }
    setRegistered([])
  }

  function updateEvent(eventID) {

    let timeSlot = eventID.substring(0, 3)
    let newRegistered = [...registered];

    for (let i = 0; i < newRegistered.length; i++) {
      let found = 0
      if (newRegistered[i].includes(timeSlot)) {
        found = 1
        document.getElementById(newRegistered[i]).checked = false
        newRegistered.splice(i, 1)
        newRegistered.push(eventID)
        document.getElementById(eventID).checked = true
        setRegistered(newRegistered)
      }
      else if (i === newRegistered.length - 1 && found === 0) {
        newRegistered.push(eventID)
        document.getElementById(eventID).checked = true
        setRegistered(newRegistered)
      }
    }

    if (newRegistered.length === 0) {
      newRegistered.push(eventID)
      document.getElementById(eventID).checked = true
      setRegistered(newRegistered)
    }
  }

  return (
    <>
      
    <div className="lg:p-12 p-8 bg-[#000509]">
      <div className=" m-5 p-6 rounded-[2rem]" id="glasseffect">
        <img src={workshopsevents} alt="" className="mx-auto p-5" />
        <div className="text-center p-5">
          <h3 className="text-default-600 lg:text-lg text-[0.8rem]">Click participate for the Workshops you want to attend and the click Submit to confirm you selections!</h3>
          <h3 className="text-default-600 lg:text-lg text-[0.8rem]">(Keep in mind you won't be able to select workshops happening during the same time slots)</h3>
        </div>
        <div className="p-3 grid md:grid-cols-3 grid-cols-1 ">
          {allEvents.map((event, index) => (
            <div key={index} className="py-5 m-auto">
              <Card className="py-4 text-xs lg:h-[20rem] h-[20rem] lg:w-[20rem] w-[12rem]">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <p className=" uppercase font-bold lg:text-[0.8rem] text-[0.50rem] p-1">
                    {times[index]}
                  </p>
                  <h4 className="text-default-500 lg:text-[0.7rem] text-[0.6rem] p-1">
                    {dates[index]}
                  </h4>
                  <h4 className="font-bold lg:text-[1.3rem] p-1.5">{event[1]}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center ">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl "
                    src={images[index]}
                    width={270}
                  />
                  <div className="mx-auto mt-3 flex lg:flex-row flex-col lg:gap-5 gap-2" >

                    <div className="checkwrapper">
                      <label htmlFor={event[0]} id={"label_" + event} className="control event_label">
                        <span>Select</span>
                      </label>
                      <input type="checkbox" id={event[0]} name={event[0]} className="toggle visualy-hidden event" onClick={() => { updateEvent(event[0]) }} />
                    </div>


                    <Button
                      className=""
                      color="primary"
                      size="sm"
                      radius="lg"
                      onClick={() => toggleModal(index)}
                    >
                      Preview
                    </Button>
                  </div>

                  {selectedModalIndex === index && (
                    <>
                      {React.createElement(modalComponents[index], {
                        toggleModal: () => toggleModal(null),
                        index,
                      })}
                    </>
                  )}
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>



      <div className="p-7 text-white">
        <div className="" id="glasseffect">
          <div className="text-white  bg-center rounded-3xl lg:p-28 p-0" >
            <img src={ctfevents} alt="" className="col-span-2 mx-auto" />
            <div className="grid  md:grid-cols-2 grid-cols-1 rounded-3xl ">


              <div className="flex justify-center align-middle">
                <img className="m-auto mt-6 p-4" src={hecker}></img>
              </div>
              <div className="flex-col justify-center align-middle p-3">
                <img className="h-72 w-72 object-center m-auto" src={gr}></img>
                <p className="text-center w-5/6 m-auto">
                  Magnam et id commodi non quia. Cumque sed aut architecto.Laboriosam est a quae aliquam. Tempora et impedit eos praesentium voluptatem. Reprehenderit unde consequatur quia. Dignissimos provident error fugit. Ut exercitationem impedit voluptas consequatur ut dicta. Provident dicta magnam est qui porro. Ratione similique dignissimos beatae. Qui repellat quam eaque dolores.
                </p>
              </div>
              <div className="flex-col flex m-auto justify-center align-middle md:text-3xl text-xl p-6">
                <div className="pt-4 pl-10 flex flex-row">
                  <img src={calen}></img>
                  <span className="pt-4 pl-10 [font-family:'Inter-Medium',Helvetica] font-semibold"> Date: 31-01-2024</span>
                </div>
                <div className="pt-6 pl-10 flex flex-row">
                  <img src={clock}></img>
                  <span className="pt-1 pl-10 [font-family:'Inter-Medium',Helvetica] font-semibold"> Time: 12:30 PM</span>
                </div>
                <div className="pt-6 pl-10 flex flex-row">
                  <img src={laptop}></img>
                  <span className="pt-2 pl-10 [font-family:'Inter-Medium',Helvetica] font-semibold"> Mode: Online</span>
                </div>
              </div>
              <div className="p-6 justify-center align-middle">
                <div className="[text-shadow:0px_4px_37.2px_#0070f3] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0070f3] md:text-[58px] text-[35px] tracking-[0] leading-[normal]">
                  <h1 className="text-center p-6 text-[#0070f3]">Cash Prizes</h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <div className="p-6 flex-col items-center">
                    <img className="w-36 h-36" src={P1} alt=""></img>
                  </div>
                  <div className="flex flex-row justify-center flex-wrap">
                    <div className="p-6 flex-col items-center">
                      <img className="w-36 h-36" src={P2} alt=""></img>
                    </div>
                    <div className="p-6 flex-col items-center">
                      <img className="w-36 h-36" src={P3} alt=""></img>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className=' bottom-0 lg:block z-[9999] lg:h-fit h-24 bg-[#000509] w-full pt-2 event-submit'>
        <div className='text-center text-white'>
          <h4 className='lg:p-5 p-3 text-[#11A8E4] lg:text-lg text-[0.4rem] font-semibold'>PRESS SUBMIT TO CONFIRM YOUR SELECTION!</h4>
          {/* <h4 className='p-5 font-bold'>Register Now for AURORA's Ultimate Experience!</h4> */}
          <Button color="primary" size="sm" variant="shadow"
            className="lg:w-[15rem] lg:m-5 m-1"
            onClick={(e) => { handleSubmit(e) }}>
            Submit
          </Button>
          <Button color="danger" size="sm" variant="shadow"
            className="lg:w-[15rem] lg:m-5 m-1"
            onClick={(e) => { clearSelection(e) }}>
            Clear
          </Button>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={1500}
        theme="light"
      />
    </div>
    </>
  );
}
