import { Input, image } from '@nextui-org/react'
import React, { useState, useEffect } from 'react'
import QRimg from '../images/QRimg.png'
import { ReactComponent as Timeline } from '../images/timeline form.svg'
import icon from '../images/Vector.svg'
import formbg from '../images/reg-form-bg.svg'
import { MdCloudUpload, MdDelete } from 'react-icons/md'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function RegisterForm() {

  const styles = {
    backgroundImage: `url(${formbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '', // Adjust the height as needed
  }

  const [userdata, setUserdata] = useState({});
  // console.log("response userdata", userdata)
  const navigate = useNavigate();

  const getUser = async () => {
    try {
      const response = await axios.get("http://localhost:6005/login/success", { withCredentials: true });
      console.log("response axios", response)
      setUserdata(response.data.user)

      // setUserdata(response.data.user)
      console.log(userdata)

      if (response.data.user.name !== "null"
        && response.data.user.phoneNo !== 0
        && response.data.user.regNo !== 0
        && response.data.user.branch !== "null"
        && response.data.user.learnerid !== "null"
        && response.data.user.upiId !== "null"
        && response.data.user.txnId !== "null"
        && response.data.user.screenshot !== "null") {
        navigate("/")
      }

    } catch (error) {
      console.log("axios error: ", error)
      navigate("*")
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  const [formData, setFormData] = useState({

    name: 'null',
    phoneNo: 0,
    regNo: 0,
    branch: 'null',
    learnerid: 'null',
    upiID: 'null',
    txnID: 'null',
    screenshot: 'null',
    hackathon: false,
  });

  const [image, setImage] = useState("")

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.image==='null'){
      return;
    }
    console.log(formData);

    try {
      await updateData(userdata._id);
      navigate("/");
    } catch (error) {
      console.log("Error during form submission: ", error);
      navigate("*");
    }
  };

  useEffect(() => {
    uploadScreenshot()

  }, [image])


  const uploadScreenshot = async () => {
    // e.preventDefault()
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
      console.log(result);

      // Update the screenshot field in the form data
      setFormData({ ...formData, screenshot: result.secure_url });
    } catch (error) {
      console.error('Error uploading image:', error);
      throw error; // Propagate the error to the calling function
    }
  };

  useEffect(() => {
    const uploadbg = document.getElementById('upload-box');
    if (uploadbg && formData.screenshot!=undefined) {
      uploadbg.innerText = 'Uploaded';
      uploadbg.innerHTML =`<div className='uploaded-image' style='display: flex; justify-content: center; align-items: center; color: white; font-size: 1.5rem;'><img src=${formData.screenshot} /></div>`;
    }
  }, [formData.screenshot])


  // Define the asynchronous function
  const updateData = async (id) => {
    try {
      const response = await fetch(`http://localhost:6005/register/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const json = await response.json();
      console.log("Response JSON: ", json);
    } catch (error) {
      console.error("Error updating data:", error);
      // Handle the error as needed
    }
  };



  return (
    <div
      className="lg:grid lg:grid-cols-5 flex-col bg-[#000F21] text-white"
      style={{ height: '', overflowY: 'auto', overflowX: 'hidden' }}
    >
      <div
        style={styles}
        className="style={styles} grid-rows-4 row-span-5 block w-full  col-span-2 left-[-3px] lg:rounded-tr-[72.74px] lg:rounded-br-[72.74px] border border-white border-opacity-10"
      >
        <div className="mix-blend-hard-light text-blue-200 text-6xl lg:text-[76.61px] font-normal font-['Rockabye'] flex justify-center pt-32">
          AURORA 24'
        </div>

        <div className="flex justify-center p-16 pt-20 text-center text-white text-1.5xl lg:text-[22px] font-medium font-['Inter'] capitalize tracking-wider">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus.
        </div>

        <div className="flex justify-center text-center text-white text-[25.26px] font-medium font-['Inter'] pt-16">
          <img src={icon} alt="" />
          02 Feb 2024 - 09 Feb 2024
        </div>

        <div className="lg:pl-10 pt-16 mb-10 pb-10 pl-8 pt-">
          <Timeline className="w-5/6 h:auto" />
        </div>
      </div>

      <div className="grid-rows-4 grid-cols-2 col-span-3 bg-[#000F21]">
        <form onSubmit={handleSubmit}>
          <div className="grid col-span-2 grid-rows-2 pl-10 lg:pl-14 pt-24">
            <div className="text-[40px] font-normal font-['Inter'] leading-normal text-blue-500 p">
              Registration Form
            </div>
          </div>
          <div className="grid grid-cols-2 grid-rows-5 pl-10 lg:pl-14">
            <div className="col-span-2 text-blue-500 text-2xl font-normal font-['Inter'] leading-normal">
              Personal Information
            </div>

            <div
              key="underlined"
              className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0 pb-10"
            >
              <Input
              onChange={handleChange}
              isRequired
                type="text"
                variant="underlined"
                label="Name"
                name="name"
                    id="name"
                style={{ color: "white" }} />
            </div>

            <div
              key="underlined"
              className="flex w-full flex-wrap pr-8 lg:pr-20 md:flex-nowrap mb-6 md:mb-0 pb-10"
            >
              <Input
              onChange={handleChange}
              isRequired
                type="number"
                variant="underlined"
                label="Registration Number"
                name="regNo"
                id="regNo" 
                style={{ color: "white" }}/>
            </div>

            <div
              key="underlined"
              className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0 pb-10"
            >
              <Input
              onChange={handleChange}
              isRequired
                type="number"
                variant="underlined"
                label="Phone Number" 
                name="phoneNo"
                    id="phoneNo"
                    style={{ color: "white" }}/>
            </div>

            <div
              key="underlined"
              className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-8 lg:pr-20"
            >
              <Input
              onChange={handleChange}
              isRequired
                type="email"
                variant="underlined"
                label="Learner ID"
                name="learnerid"
                id="learnerid" 
                style={{ color: "white" }}/>
            </div>

            <div
              key="underlined"
              className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
            >
              <Input
              onChange={handleChange}
              isRequired
                type="number"
                variant="underlined"
                label="Year of Study" 
                name="year"
                id="year"
                style={{ color: "white" }}/>
            </div>

            <div
              key="underlined"
              className="flex w-full flex-wrap pr-8 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
            >
              <Input
              onChange={handleChange}
              isRequired
                type="text"
                variant="underlined"
                label="Branch"
                name="branch"
                id="branch" 
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
                  className="lg:w-16 w-8 h-auto align-middle justify-center"
                />
              </div>
            </form>
          </div>

          <div className=" h-80 pt-48 lg:pt-60">
            <button type='submit' className="w-24 h-12 rounded-xl border-2 border-blue-600  items-center gap-3 ml-12 inline-flex ">
              <div className="text-blue-600 text-base font-medium font-['Inter'] leading-normal pl-5">
                Register
              </div>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}