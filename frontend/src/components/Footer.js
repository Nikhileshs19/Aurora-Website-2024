import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import linkedin from "../images/linkedin.svg";

export default function Footer() {
  const navigate = useNavigate()

  const [googleUserData, setGoogleUserData] = useState({});

  const admins = ["2shashank11@gmail.com", "istemanipalboard@gmail.com", "aditi26shr@gmail.com", "prateekanand.work@gmail.com", "tanishakar1906@gmail.com"]

    const getGoogleData = async () => {
        try {
            const response = await axios.get("/login/success", { withCredentials: true });
            setGoogleUserData(response.data.user)

        } catch (error) {
            //console.log("error", error)
            //navigate('/*')
        }
    }

    useEffect(() => {
      getGoogleData()
  }, [])

  const goTeam = () =>{
    navigate('/developers')
  }

  return (
    <div className="bg-footer-texture bg-transparent h-screen bg-blend-darken bg-fixed bg-cover bg-bottom">
      <div>
        <div className="lg:pt-[20rem] pt-96">
          <div className="text-center text-xl text-blue-600">
            <button className="text-default-300 bg-blue-700 hover:bg-blue-400 p-5 rounded-2xl ">
              <a href="/developers">Click to meet the Team!!!</a>
            </button>
          </div>
          <div className="text-center text-xl text-blue-600">
                {(admins.includes(googleUserData.email)) ?
                    (
                        <><span className="p-4 text-white text-right">
                            <Link size="lg" to='/workshops-registrations'>
                                Workshops Data
                            </Link>
                        </span>

                            <span className="p-4 text-white text-right">
                                <Link size="lg" to='/hackathon-registrations'>
                                    Hackathon Data
                                </Link>
                            </span>

                            <span className="p-4 text-white text-right">
                                <Link size="lg" to='/users'>
                                    Registrations Data
                                </Link>
                            </span>
                        </>
                    )
                    : (<></>)}
            </div>
          <h4 className="text-white p-5 text-center">Contact Us:</h4>
          <div className="flex relative lg:left-[45%] left-[29%] w-fit">
            <button className="relative top-[0.3rem] p-1">
              <img src={instagram} alt="hdu" />
            </button>
            <button className="p-2">
              <img src={facebook} alt="hdu" />
            </button>
            <button className="p-2">
              <img src={linkedin} alt="hdusdvsf" />
            </button>
          </div>
          <h4 className="text-center p-5 text-white">
            Copyright &copy; 2023 All Rights Reserved | Made by ISTE Manipal
          </h4>
        </div>
      </div>
    </div>
  );
}
