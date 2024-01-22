import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../images/Mask group.svg'

export default function HomeNav() {
    return (
        <div className=''>
            <nav className="flex justify-between lg:w-[90rem] mx-auto pt-7 lg:px-0 px-6">
                <div className="justify-start">
                    <img src={logo} alt="h" className='lg:w-full w-[5rem]'/>
                </div>
                <div className="justify-end">
                    <Link className="text-[#338EF7] pt-7" to="/" style={{ display: "block" }}>Go Back Home</Link>
                </div>
            </nav>
        </div>
    )
}
