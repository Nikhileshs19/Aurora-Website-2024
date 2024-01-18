import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import axios from "axios";
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../images/Mask group.svg';
import trophy from '../images/trophycup.svg';

const name = "kiri"
export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [closeNavMenu, setCloseNavMenu] = React.useState(false);

    const menuItems = [
        "Home",
        "About",
        "Partners",
        "Timeline",
        "Sponsors",
        "Log Out",
    ];

    const loginwithgoogle = () => {
        window.open("http://localhost:6005/auth/google/callback", "_self")
    }

    const navigate = useNavigate();

    const [userdata, setUserdata] = useState({});

    const getUser = async () => {
        try {
            const response = await axios.get("http://localhost:6005/login/success", { withCredentials: true });

            setUserdata(response.data.user)
            
        } catch (error) {
            //console.log("error", error)
            //navigate('/*')
        }
    }

    //logout
    const logout = () => {
        window.open("http://localhost:6005/logout", "_self")
    }

    const hackathon = () => {
        navigate("/hackathon-registration")
    }

    const workshop = () => {
        navigate("/workshop-registration")
    }

    useEffect(() => {
        getUser()
    }, [])

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[none] absolute p-6" isBlurred='false' id='nav'>
            <NavbarContent className="lg:relative left-[-10%]">
                <NavbarBrand className="flex">
                    <img src={logo} alt="" className="w-10 md:w-20 h-fit" />
                    <p className="pl-5 text-white font-semibold">Hi, {name} </p>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden md:flex sm:flex gap-4" justify="center">
                <NavbarItem >
                    <HashLink smooth className="text-white p-6" to='#about'>About</HashLink>
                </NavbarItem>
                <NavbarItem>
                    <HashLink smooth className="text-white p-6" to='#partners'>Partners</HashLink>
                </NavbarItem>
                <NavbarItem>
                    <HashLink smooth className="text-white p-6" to='#timeline'>Timeline</HashLink>
                </NavbarItem>
                <NavbarItem>
                    <HashLink smooth className="text-white" to='#sponsors'>Sponsors</HashLink>
                </NavbarItem>
                <NavbarItem>
                    <HashLink smooth className="text-white p-6" to='/events'>Events</HashLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="lg:relative left-[10%]">
                <NavbarItem>
                    <Link to='/hackathon' className="">
                        <div className="lg:w-[7.2rem]  w-[5.9rem] lg:text-[14px] text-[12px] shadow-2xl font-medium h-fit flex justify-between bg-[#000419] text-[#006FEE] rounded-lg p-2">
                            <img src={trophy} alt="" className="lg:w-[1.5rem] w-[1rem]" />
                            Hackathon
                        </div>
                    </Link>
                </NavbarItem>

                {
                    Object?.keys(userdata)?.length > 0 ? (
                        <>
                            <NavbarItem className="hidden lg:flex p-4 text-red-700 text-right">
                                <HashLink size="lg" href='#' onClick={logout}>
                                    Log Out
                                </HashLink>
                            </NavbarItem>

                        </>
                    )
                        :
                        <NavbarItem className="hidden lg:flex">
                            <Link href="#" className="text-[#006FEE] font-medium p-4" onClick={loginwithgoogle}>Login</Link>
                            {/* <Link href='/'>Logout</Link> */}
                        </NavbarItem>

                }
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="md:hidden sm:hidden fixed right-[0.75rem] text-white"
                />
            </NavbarContent>
            <NavbarMenu className="mt-10 bg-black h-[5rem]">
                {/* {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))} */}
                <NavbarMenuItem className="p-4 text-white text-right">
                    <HashLink smooth size="lg" to='#about'>
                        About
                    </HashLink>
                </NavbarMenuItem>
                <NavbarMenuItem className="p-4 text-white text-right">
                    <HashLink smooth size="lg" to='#partners'>
                        Partners
                    </HashLink>
                </NavbarMenuItem>
                <NavbarMenuItem className="p-4 text-white text-right">
                    <HashLink smooth size="lg" to='#timeline'>
                        Timeline
                    </HashLink>
                </NavbarMenuItem>
                <NavbarMenuItem className="p-4 text-white text-right">
                    <HashLink smooth size="lg" to='#sponsors'>
                        Sponsors
                    </HashLink>
                </NavbarMenuItem>
                <NavbarMenuItem className="p-4 text-white text-right">
                    <HashLink smooth size="lg" to='/events'>
                        Events
                    </HashLink>
                </NavbarMenuItem>
                {
                    Object?.keys(userdata)?.length > 0 ? (
                        <>
                            <NavbarMenuItem className="p-4 text-red-700 text-right">
                                <HashLink size="lg" href='#' onClick={logout}>
                                    Log Out
                                </HashLink>
                            </NavbarMenuItem>
                        </>
                    )
                        :
                        <NavbarMenuItem className="p-4 text-green-700 text-right">
                            <HashLink size="lg" href='#' onClick={loginwithgoogle}>
                                Login
                            </HashLink>
                        </NavbarMenuItem>
                }
            </NavbarMenu>
        </Navbar>
    );
}
