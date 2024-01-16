import React from 'react'
import heaven from '../images/7heaven.svg'
import bugbase from '../images/bugbase.svg'
import growthschool from '../images/growthschool.svg'
import kevin from '../images/kevin.svg'
import mcd from '../images/mcd.svg'
import trigger from '../images/trigger.svg'
import TitleStuff from './Title_Stuff'

export default function Sponsors() {
    return (
        <div id='sponsors'>
            <TitleStuff name="sponsors"/>
            <div className='grid lg:grid-cols-3 grid-cols-2 gap-4 lg:mx-80 justify-center p-5'>
                <img src={mcd} alt="" className='lg:w-full w-[8rem]' />
                <img src={kevin} alt="" className='lg:w-full w-[8rem]' />
                <img src={trigger} alt="" className='lg:w-full w-[8rem]' />
                <img src={heaven} alt="" className='lg:w-full w-[8rem]' />
                <img src={growthschool} alt="" className='lg:w-full w-[8rem]' />
                <img src={bugbase} alt="" className='lg:w-full w-[8rem]' />
            </div>
        </div>
    )
}
