import React from 'react'
import spons1 from '../images/spons1.svg'
import spons2 from '../images/spons2.svg'
import spons3 from '../images/spons3.svg'
import spons4 from '../images/spons4.svg'
import spons5 from '../images/spons5.svg'
import spons6 from '../images/spons6.svg'
import spons7 from '../images/spons7.svg'
import spons8 from '../images/spons8.svg'
import TitleStuff from './Title_Stuff'

export default function Sponsors() {
    return (
        <div id='sponsors' className='relative top-[-15rem]'>
            <TitleStuff name="sponsors" className="relative top-[-10rem]"/>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-20 lg:mx-80 justify-center p-5'>
                <img src={spons1} alt="h" className='lg:w-full w-[8rem]' />
                <img src={spons2} alt="h" className='lg:w-full w-[8rem]' />
                <img src={spons3} alt="h" className='lg:w-full w-[8rem]' />
                <img src={spons4} alt="h" className='lg:w-full w-[8rem]' />
                <img src={spons5} alt="h" className='lg:w-full w-[8rem]' />
                <img src={spons6} alt="h" className='lg:w-full w-[8rem]' />
                <img src={spons7} alt="h" className='lg:w-full w-[8rem]'/>
                <img src={spons8} alt="h" className='lg:w-full w-[8rem]'/>
            </div>
        </div>
    )
}
