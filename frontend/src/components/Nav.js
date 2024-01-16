import { Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from '../images/Mask group.svg';
import trophy from '../images/trophycup.svg';

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const menuItems = [
        "Home",
        "About",
        "Partners",
        "Timeline",
        "Sponsors",
        "Log Out",
    ];

    return (
        <Navbar onMenuOpenChange={setIsMenuOpen} className="bg-[none] absolute p-6" isBlurred='false' id='nav'>
            <NavbarContent>
                {/* <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden relative left-[-1.5rem]"
        /> */}
                <NavbarBrand>
                    <img src={logo} alt="" className="w-10 md:w-20" />
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <HashLink className="text-white p-4" to='#nav'>Home</HashLink>
                </NavbarItem>
                <NavbarItem >
                    <HashLink className="text-white p-4" to='#about'>About</HashLink>
                </NavbarItem>
                <NavbarItem>
                    <HashLink className="text-white p-4" to='#partners'>Partners</HashLink>
                </NavbarItem>
                <NavbarItem>
                    <HashLink className="text-white p-4" to='#timeline'>Timeline</HashLink>
                </NavbarItem>
                <NavbarItem>
                    <HashLink className="text-white">Sponsors</HashLink>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end" className="">
                <NavbarItem>
                    <Link to='/hackathon' className="">
                        <div className="lg:w-[7.2rem]  w-[5.9rem] lg:text-[14px] text-[12px] shadow-2xl font-medium h-fit flex justify-between bg-[#000419] text-[#006FEE] rounded-lg p-2">
                            <img src={trophy} alt="" className="lg:w-[1.5rem] w-[1rem]" />
                            Hackathon
                        </div>
                    </Link>
                </NavbarItem>
                <NavbarItem className="hidden lg:flex">
                    <Link href="#">Login</Link>
                    {/* <Link href='/'>Logout</Link> */}
                </NavbarItem>
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="sm:hidden relative left-[0.75rem]"
                />
            </NavbarContent>
            <NavbarMenu className="mt-10">
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
                <NavbarMenuItem>
                    <Link size="lg" href='#'>
                        Home
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link size="lg" href='#'>
                        About
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link size="lg" href='#'>
                        Partners
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link size="lg" href='#'>
                        Timeline
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link size="lg" href='#'>
                        Sponsors
                    </Link>
                </NavbarMenuItem>
                <NavbarMenuItem>
                    <Link size="lg" href='#' color="danger">
                        Log Out
                    </Link>
                </NavbarMenuItem>
            </NavbarMenu>
        </Navbar>
    );
}
