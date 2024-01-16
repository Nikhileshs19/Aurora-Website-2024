import { Input } from '@nextui-org/react'
import React, { useState } from 'react'
import { MdCloudUpload } from 'react-icons/md'
import QRimg from '../images/QRimg.png'
import icon from '../images/Vector.svg'
import formbg from '../images/reg-form-bg.svg'
import { ReactComponent as Timeline } from '../images/timeline form.svg'

export default function RegisterForm() {
  const [Image, setImage] = useState(null)
  //   const variants = ['flat', 'bordered', 'underlined', 'faded']

  // const [teamName, setTeamName] = useState('')
  // const [teamLeaderName, setTeamLeaderName] = useState('')
  // const [teamLeaderRegistrationNumber, setTeamLeaderRegistrationNumber] =
  //   useState('')
  // const [teamLeaderPhoneNumber, setTeamLeaderPhoneNumber] = useState('')
  // const [teamLeaderLearnerID, setTeamLeaderLearnerID] = useState('') // Add this line
  // const [teamMember1Name, setTeamMember1Name] = useState('')
  // const [teamMember1RegistrationNumber, setTeamMember1RegistrationNumber] =
  //   useState('')
  // const [teamMember1PhoneNumber, setTeamMember1PhoneNumber] = useState('')
  // const [teamMember1LearnerID, setTeamMember1LearnerID] = useState('')
  // const [teamMember2Name, setTeamMember2Name] = useState('')
  // const [teamMember2RegistrationNumber, setTeamMember2RegistrationNumber] =
  //   useState('')
  // const [teamMember2PhoneNumber, setTeamMember2PhoneNumber] = useState('')
  // const [teamMember2LearnerID, setTeamMember2LearnerID] = useState('')
  // const [teamMember3Name, setTeamMember3Name] = useState('')
  // const [teamMember3RegistrationNumber, setTeamMember3RegistrationNumber] =
  //   useState('')
  // const [teamMember3PhoneNumber, setTeamMember3PhoneNumber] = useState('')
  // const [teamMember3LearnerID, setTeamMember3LearnerID] = useState('')

  const styles = {
    backgroundImage: `url(${formbg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    height: '', // Adjust the height as needed
  }
  const handleFormSubmit = (e) => {
    e.preventDefault()

    // Add your form submission logic here
    // You can access form data from the state variables
    //   console.log('Form submitted:', {
    //     teamName,
    //     teamLeaderName,
    //     teamLeaderRegistrationNumber,
    //     teamLeaderPhoneNumber,
    //     teamLeaderLearnerID,
    //     teamMember1Name,
    //     teamMember1RegistrationNumber,
    //     teamMember1PhoneNumber,
    //     teamMember1LearnerID,
    //     teamMember2Name,
    //     teamMember2RegistrationNumber,
    //     teamMember2PhoneNumber,
    //     teamMember2LearnerID,
    //     teamMember3Name,
    //     teamMember3RegistrationNumber,
    //     teamMember3PhoneNumber,
    //     teamMember3LearnerID,
    //   })
  }
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
            <Input type="email" variant="underlined" label="Name" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap pr-8 lg:pr-20 md:flex-nowrap mb-6 md:mb-0 pb-10"
          >
            <Input
              type="email"
              variant="underlined"
              label="Registration Number"
            />
          </div>

          <div
            key="underlined"
            className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0 pb-10"
          >
            <Input type="email" variant="underlined" label="Phone Number" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap md:flex-nowrap mb-6 md:mb-0 gap-4  pr-8 lg:pr-20"
          >
            <Input type="email" variant="underlined" label="Learner ID" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
          >
            <Input type="email" variant="underlined" label="Year of Study" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap pr-8 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
          >
            <Input type="email" variant="underlined" label="Branch" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
          >
            <Input type="email" variant="underlined" label="UPI ID" />
          </div>
          <div
            key="underlined"
            className="flex w-full flex-wrap pr-10 lg:pr-20 md:flex-nowrap mb-6 md:mb-0  pb-10"
          >
            <Input type="email" variant="underlined" label="Transaction ID" />
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

        <div className=" h-80 pt-48 lg:pt-60">
          <button className="w-24 h-12 rounded-xl border-2 border-blue-600  items-center gap-3 ml-12 inline-flex ">
            <div className="text-blue-600 text-base font-medium font-['Inter'] leading-normal pl-5">
              Register
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}