import React, { useState, useEffect } from 'react'
import axios from "axios";
import { color } from 'framer-motion';

const Workshops = () => {

    var registeredWorkshops = []
    const [uniqueID, setUniqueID] = useState('');
    const [logged, setLogged] = useState(0)
    const [registered, setRegistered] = useState([])
    const [userData, setUserData] = useState({});

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:6005/login/success", { withCredentials: true });
            setLogged(1)
            setUniqueID(response.data.user._id)
            //console.log(response.data.user.workshops)
            setUserData(response.data.user)

            //console.log('asdfghjkljhgfdxzdfghjk');
            //console.log(userData);
            let a = response.data.user.workshops
            let newRegistered = []
            for (let i = 0; i < a.length; i++) {
                if (a[i] === "ISTE") { newRegistered.push("TS1_E1_1"); document.getElementById("TS1_E1_1").checked = true }
                else if (a[i] === "ACM") { newRegistered.push("TS1_E2_2"); document.getElementById("TS1_E2_2").checked = true }
                else if (a[i] === "IECSE") { newRegistered.push("TS2_E3_1"); document.getElementById("TS2_E3_1").checked = true }
                else if (a[i] === "IEMCT") { newRegistered.push("TS2_E4_2"); document.getElementById("TS2_E4_2").checked = true }
                else if (a[i] === "MIST") { newRegistered.push("TS3_E5_1"); document.getElementById("TS3_E5_1").checked = true }
                else if (a[i] === "Astronomy") { newRegistered.push("TS3_E6_2"); document.getElementById("TS3_E6_2").checked = true }
                else if (a[i] === "IOSD") { newRegistered.push("TS3_E7_3"); document.getElementById("TS3_E7_3").checked = true }
                else if (a[i] === "IE-ENC") { newRegistered.push("TS4_E8_1"); document.getElementById("TS4_E8_1").checked = true }
                else if (a[i] === "IE-MEC") { newRegistered.push("TS4_E9_2"); document.getElementById("TS4_E9_2").checked = true }
                else if (a[i] === "CTF") { newRegistered.push("TS4_E10_3"); document.getElementById("TS4_E10_3").checked = true }
            }
            setRegistered(newRegistered)
        } catch (error) {
            //console.log("error", error)
        }
        // console.log(registered)
    }

    const getUpdatedUser = async () => {
        try {   
            //console.log('get updated user');
            //console.log(userData);
            const response = await axios.get(`http://localhost:6005/updated-user-data/${userData._id}`, { withCredentials: true });
            //console.log("next update: ", response)
            setUserData(response.data.user)
            let a = response.workshops
            //console.log(a);
            let newRegistered = []
            for (let i = 0; i < a.length; i++) {
               // console.log("hello", i, a[i]);
                if (a[i] === "ISTE") { newRegistered.push("TS1_E1_1"); document.getElementById("TS1_E1_1").checked = true }
                else if (a[i] === "ACM") { newRegistered.push("TS1_E2_2"); document.getElementById("TS1_E2_2").checked = true }
                else if (a[i] === "IECSE") { newRegistered.push("TS2_E3_1"); document.getElementById("TS2_E3_1").checked = true }
                else if (a[i] === "IEMCT") { newRegistered.push("TS2_E4_2"); document.getElementById("TS2_E4_2").checked = true }
                else if (a[i] === "MIST") { newRegistered.push("TS3_E5_1"); document.getElementById("TS3_E5_1").checked = true }
                else if (a[i] === "Astronomy") { newRegistered.push("TS3_E6_2"); document.getElementById("TS3_E6_2").checked = true }
                else if (a[i] === "IOSD") { newRegistered.push("TS3_E7_3"); document.getElementById("TS3_E7_3").checked = true }
                else if (a[i] === "IE-ENC") { newRegistered.push("TS4_E8_1"); document.getElementById("TS4_E8_1").checked = true }
                else if (a[i] === "IE-MEC") { newRegistered.push("TS4_E9_2"); document.getElementById("TS4_E9_2").checked = true }
                else if (a[i] === "CTF") { newRegistered.push("TS4_E10_3"); document.getElementById("TS4_E10_3").checked = true }
            }
            setRegistered(newRegistered)
        } catch (error) {
            //console.log("error", error)
        }
        //console.log(registered)

    }

    useEffect(() => {
        if(logged===0){
            getGoogleData()
        }
        
    },)

    useEffect(() => {
        getUpdatedUser()
    }, [uniqueID, userData])

    const handleSubmit = async (e) => {
        e.preventDefault()
        //console.log("in handleSubmit", registered)
        for (let i = 0; i < registered.length; i++) {
            switch (registered[i]) {
                case "TS1_E1_1": registeredWorkshops.push("ISTE"); break;
                case "TS1_E2_2": registeredWorkshops.push("ACM"); break;
                case "TS2_E3_1": registeredWorkshops.push("IECSE"); break;
                case "TS2_E4_2": registeredWorkshops.push("IEMCT"); break;
                case "TS3_E5_1": registeredWorkshops.push("MIST"); break;
                case "TS3_E6_2": registeredWorkshops.push("Astronomy"); break;
                case "TS3_E7_3": registeredWorkshops.push("IOSD"); break;
                case "TS4_E8_1": registeredWorkshops.push("IE-ENC"); break;
                case "TS4_E9_2": registeredWorkshops.push("IE-MEC"); break;
                case "TS4_E10_3": registeredWorkshops.push("CTF"); break;
                default: break;
            }
        }
        //console.log("workshops: ", registeredWorkshops)

        try {
            const response = await fetch(`http://localhost:6005/workshop-registration/${uniqueID}`, {
                method: 'PATCH',
                body: JSON.stringify({ workshops: registeredWorkshops }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
            //console.log("Response JSON: ", json);

        } catch (error) {
            //console.error("Error updating data:", error);
        }

        registeredWorkshops = []
        getUpdatedUser()
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
        < div className='text-white'>
            <div>WorkshopRegistration</div>
          
            time slot 1
            <div className="flex items-center mb-4">
                <input id="TS1_E1_1"
                    type="checkbox"
                    name="TS1_E1_1"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS1_E1_1")}
                />
                <label htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"><span className='text-white'>ISTE</span></label>
            </div>
            <div className="flex items-center">
                <input
                    id="TS1_E2_2"
                    type="checkbox"
                    name="TS1_E2_2"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS1_E2_2")}
                />
                <label  style={{ color: 'white' }} htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ACM</label>
            </div>


            time slot 2
            <div className="flex items-center mb-4">
                <input
                    id="TS2_E3_1"
                    type="checkbox"
                    name="TS2_E3_1"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS2_E3_1")}
                />
                <label style={{ color: 'white' }} htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">IECSE</label>
            </div>
            <div className="flex items-center">
                <input
                    id="TS2_E4_2"
                    type="checkbox"
                    name="TS2_E4_2"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS2_E4_2")}
                />
                <label  style={{ color: 'white' }} htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">IEMCT</label>
            </div>


            time slot 3
            <div className="flex items-center mb-4">
                <input
                    id="TS3_E5_1"
                    type="checkbox"
                    name="TS3_E5_1"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS3_E5_1")}
                />
                <label style={{ color: 'white' }} htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">MIST</label>
            </div>
            <div className="flex items-center">
                <input
                    id="TS3_E6_2"
                    type="checkbox"
                    name="TS3_E6_2"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS3_E6_2")}
                />
                <label style={{ color: 'white' }} htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Astronomy</label>
            </div>
            <div className="flex items-center">
                <input
                    id="TS3_E7_3"
                    type="checkbox"
                    name="TS3_E7_3"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS3_E7_3")}
                />
                <label style={{ color: 'white' }} htmlFor="checked-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">IOSD</label>
            </div>


            time slot 4
            <div className="flex items-center mb-4">
                <input
                    id="TS4_E8_1"
                    type="checkbox"
                    name="TS4_E8_1"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS4_E8_1")}
                />
                <label style={{ color: 'white' }} htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">IE-ENC</label>
            </div>

            <div className="flex items-center mb-4">
                <input
                    id="TS4_E9_2"
                    type="checkbox"
                    name="TS4_E9_2"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS4_E9_2")}
                />
                <label style={{ color: 'white' }} htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">IE-MEC</label>
            </div>

            <div className="flex items-center mb-4">
                <input
                    id="TS4_E10_3"
                    type="checkbox"
                    name="TS4_E10_3"
                    className="event w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    onClick={() => updateEvent("TS4_E10_3")}
                />
                <label style={{ color: 'white' }} htmlFor="default-checkbox" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">CTF</label>
            </div>

            <button
                onClick={(e) => handleSubmit(e)}
            >Submit</button>

            <button
                onClick={() => clearSelection()}
            >Clear</button>

        </div>

    )
}

export default Workshops