import { Input } from '@nextui-org/react'
import React, { useState, useEffect } from 'react'
import calen from "../images/calendar.svg"
import clock from "../images/clock.svg"
import loc from "../images/loc.svg"
import tsize from "../images/teamsize.svg"
import QRimg from '../images/QRimg.png'
import { MdCloudUpload } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

function HackathonForm() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({});
    const [userdata, setUserdata] = useState({});
    const [prevTeamData, setPrevTeamData] = useState({});

    // const getUser = async () => {
    //     try {
    //         const response = await axios.get("http://localhost:6005/login/success", { withCredentials: true });
    //         setUserdata(response.data.user)
    //     } catch (error) {
    //         console.log("error", error)
    //     }
    // }


    // const getHackathonData = async () => {
    //     if (userdata.hackathon === true) {
    //         console.log("in gethackathon data", userdata.regNo)
    //         try {
    //             const response = await axios.get(`http://localhost:6005/hackathon-team-data?leaderRegNo=${formData.learnerid}`, { withCredentials: true });
    //             console.log("gethackathondata: ", response)
    //             setPrevTeamData(response.data[0])

    //         } catch (error) {
    //             console.log("error: ", error)
    //         }
    //     }
    //     else if (userdata.hackathon === false) {
    //         setPrevTeamData({
    //             teamName: undefined,
    //             teamSize: null,

    //             leaderName: undefined,
    //             leaderPhoneNo: null,
    //             leaderRegNo: null,
    //             leaderLearnerid: undefined,

    //             member1Name: undefined,
    //             member1PhoneNo: null,
    //             member1RegNo: null,

    //             member2Name: undefined,
    //             member2PhoneNo: null,
    //             member2RegNo: null,

    //             member3Name: undefined,
    //             member3PhoneNo: null,
    //             member3RegNo: null,

    //             member4Name: undefined,
    //             member4PhoneNo: null,
    //             member4RegNo: null,

    //             upiID: undefined,
    //             txnID: undefined,
    //             screenshot: undefined,
    //         });
    //     }

    // }

    // useEffect(() => {
    //     getUser()
    // }, [])

    // useEffect(() => {
    //     getHackathonData()

    //     setFormData({
    //         leaderName: userdata.name,
    //         leaderPhoneNo: userdata.phoneNo,
    //         leaderRegNo: userdata.regNo,
    //         leaderLearnerid: userdata.learnerid,
    //     })
    // }, [userdata])

    const [image, setImage] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submitted form data: ", formData);
        if(!formData.screenshot){
            return;
        }

        // if (userdata.hackathon === true) {
        //     try {
        //         const response = await fetch(`http://localhost:6005/hackathon-update-form/${prevTeamData._id}`, {
        //             method: 'PATCH',
        //             body: JSON.stringify(formData),
        //             headers: {
        //                 'Content-Type': 'application/json'
        //             }
        //         });

        //         const json = await response.json();
        //         console.log("Response update patch JSON: ", json);
        //     } catch (error) {
        //         console.error("Error updating data:", error);
        //     }
        // }

        // else {
        try {
            const response = await fetch(`http://localhost:6005/hackathon-registration/`, {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            const json = await response.json();
            console.log("Response update post JSON: ", json);
        } catch (error) {
            console.error("Error updating data:", error);
        }

        // try {
        //     const response = await fetch(`http://localhost:6005/register/${userdata._id}`, {
        //         method: 'PATCH',
        //         body: JSON.stringify({ hackathon: true }),
        //         headers: {
        //             'Content-Type': 'application/json'
        //         }
        //     });
        // } catch (error) {
        //     console.error("Error updating data:", error);
        // }
        // }
        navigate('/')
    }

    useEffect(() => {
        uploadScreenshot()
    
      }, [image])

    const uploadScreenshot = async (e) => {

        if (!image) return;

        const uploadbg = document.getElementById('upload-box');
    if (uploadbg) {
      uploadbg.innerHTML ="<div className='uploaded-image' style='display: flex; justify-content: center; align-items: center; color: white; font-size: 1.5rem;'>Uploading...</div>";
    }

        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "Aurora");
        data.append("cloud_name", "days7d2mj");

        try {
            const response = await fetch("https://api.cloudinary.com/v1_1/days7d2mj/image/upload", {
                method: "POST",
                body: data,
            });

            if (!response.ok) {
                throw new Error('Failed to upload image');
            }

            const result = await response.json();

            setFormData({ ...formData, screenshot: result.secure_url });
        } catch (error) {
            console.error('Error uploading image:', error);
            throw error;
        }
    };

    useEffect(() => {
        const uploadbg = document.getElementById('upload-box');
        if (uploadbg && formData.screenshot) {
          uploadbg.innerText = 'Uploaded';
          uploadbg.innerHTML =`<div className='uploaded-image' style='display: flex; justify-content: center; align-items: center; color: white; font-size: 1.5rem;'><img src=${formData.screenshot} /></div>`;
        }
      }, [formData.screenshot])


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
                <form action="" className='' onSubmit={handleSubmit} >

                    <div className="grid col-span-2 grid-rows-2 pl-10 pt-20">

                        <div className="text-[40px] font-normal font-['Inter'] leading-normal text-blue-500 p">
                            Registration Form
                        </div>

                        <div className=" flex flex-col gap-4 pt-5">
                            <div
                                key="underlined"
                                className="flex  flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4"
                            >
                                <Input
                                onChange={handleChange}
                                    isRequired
                                    type="text"
                                    name="teamName"
                                    id="teamName"
                                    variant="underlined"
                                    label="Team Name"
                                    className="w-full pr-20"
                                    style={{ color: "white" }}
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
                            <Input
                            onChange={handleChange}
                                isRequired
                                type="text"
                                name="leaderName"
                                id="leaderName"
                                variant="underlined"
                                label="Name" 
                            style={{ color: "white" }}
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20 pb-10"
                        >
                            <Input
                            onChange={handleChange}
                                isRequired
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="leaderRegNo"
                                id="leaderRegNo"
                                variant="underlined"
                                label="Registration Number"
                                style={{ color: "white" }}
                            />
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                isRequired
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="leaderPhoneNo"
                                id="leaderPhoneNo"
                                variant="underlined"
                                label="Phone Number" 
                            style={{ color: "white" }}
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                isRequired
                                type="email"
                                name="leaderLearnerid"
                                id="leaderLearnerid"
                                variant="underlined"
                                label="Learner ID" 
                            style={{ color: "white" }}
                            />
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
                            onChange={handleChange}
                                isRequired
                                type="text"
                                name="member1Name"
                                id="member1Name"
                                variant="underlined"
                                label="Name"
                                className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal"
                                style={{ color: "white" }}
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20 pb-10"
                        >
                            <Input
                            onChange={handleChange}
                                isRequired
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="member1RegNo"
                                id="member1RegNo"
                                variant="underlined"
                                label="Registration Number"
                                style={{ color: "white" }}
                            />
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                isRequired
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="member1PhoneNo"
                                id="member1PhoneNo"
                                variant="underlined"
                                label="Phone Number" 
                            style={{ color: "white" }}
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                isRequired
                                type="email"
                                name="member1Learnerid"
                                id="member1Learnerid"
                                variant="underlined"
                                label="Learner ID" 
                            style={{ color: "white" }}
                            />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 pl-10 pt-8">
                        <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
                            Team Member 2 Details
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20  pb-10"
                        >
                            <Input
                            onChange={handleChange}
                                type="text"
                                name="member2Name"
                                id="member2Name"
                                variant="underlined"
                                label="Name"
                                className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal"
                                style={{ color: "white" }}
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20 pb-10"
                        >
                            <Input
                            onChange={handleChange}
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="member2RegNo"
                                id="member2RegNo"
                                variant="underlined"
                                label="Registration Number"
                                style={{ color: "white" }}
                            />
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="member2PhoneNo"
                                id="member2PhoneNo"
                                variant="underlined"
                                label="Phone Number" 
                            style={{ color: "white" }}
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                type="email"
                                name="member2Learnerid"
                                id="member2Learnerid"
                                variant="underlined"
                                label="Learner ID" 
                                style={{ color: "white" }}
                                />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 pl-10 pt-8">
                        <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
                            Team Member 3 Details
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20  pb-10"
                        >
                            <Input
                            onChange={handleChange}
                                type="text"
                                name="member3Name"
                                id="member3Name"
                                variant="underlined"
                                label="Name"
                                style={{ color: "white" }}
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20 pb-10"
                        >
                            <Input
                            onChange={handleChange}
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="member3RegNo"
                                id="member3RegNo"
                                variant="underlined"
                                label="Registration Number"
                                style={{ color: "white" }}
                            />
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="member3PhoneNo"
                                id="member3PhoneNo"
                                variant="underlined"
                                label="Phone Number"
                                style={{ color: "white" }}
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                type="email"
                                name="member3Learnerid"
                                id="member3Learnerid"
                                variant="underlined"
                                label="Learner ID" 
                                style={{ color: "white" }} 
                                />
                        </div>
                    </div>
                    <div className="grid grid-cols-2 grid-rows-3 pl-10 pt-8">
                        <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
                            Team Member 4 Details
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20  pb-10"
                        >
                            <Input
                            onChange={handleChange}
                                type="text"
                                name="member4Name"
                                id="member4Name"
                                variant="underlined"
                                label="Name"
                                className="text-zinc-500 text-base font-normal font-['Inter'] leading-normal"
                                style={{ color: "white" }} 
                            />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20 pb-10"
                        >
                            <Input
                            onChange={handleChange}
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="member4RegNo"
                                id="member4RegNo"
                                variant="underlined"
                                label="Registration Number"
                                style={{ color: "white" }} 
                            />
                        </div>

                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                type="number"
                                onFocus={(e) => e.target.addEventListener("wheel", function (e) { e.preventDefault() }, { passive: false })}
                                name="member4PhoneNo"
                                id="member4PhoneNo"
                                variant="underlined"
                                label="Phone Number" 
                                style={{ color: "white" }} 
                                />
                        </div>
                        <div
                            key="underlined"
                            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4 pr-20"
                        >
                            <Input
                            onChange={handleChange}
                                type="email"
                                name="member4Learnerid"
                                id="member4Learnerid"
                                variant="underlined"
                                label="Learner ID" 
                                style={{ color: "white" }} 
                                />
                        </div>
                    </div>

            <div
              key="underlined"
              className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
            >
              <Input
              onChange={handleChange}
              isRequired
                type="text"
                variant="underlined"
                label="UPI ID"
                name="upiID"
                id="upiID" 
                style={{ color: "white" }}/>
            </div>

            <div
              key="underlined"
              className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
            >
              <Input
              onChange={handleChange}
              isRequired
                type="text"
                variant="underlined"
                label="Transaction ID"
                name="txnID"
                id="txnID" 
                style={{ color: "white" }}/>
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
                                isRequired
                                id="file-upload"
                                name="screenshot"
                                type="file"
                                accept="image/*"
                                className="input-field"
                                hidden
                                onChange={(e) => { setImage(e.target.files[0]) }}
                            />
                            <div id='upload-box' className="lg:w-60 w-32 h-28 lg:h-60 border-dashed border-2 border-radius:1rem mt-5 flex align-middle justify-center">
                                <MdCloudUpload
                                    color="#ffffff"
                                    size={10}
                                    className="lg:w-16 w-8 h-auto align-middle justify-center "
                                />
                            </div>
                        </form>
                    </div>
                    <div className=" lg:h-80 sm:h-60 lg:pt-64 pt-24 lg:pb-40 pb-24">
                        <button className="w-24 h-12 rounded-xl border-2 border-blue-600  items-center gap-3 ml-12 inline-flex "
                            type="submit">
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