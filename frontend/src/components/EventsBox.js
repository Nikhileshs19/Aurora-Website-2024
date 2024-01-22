import { Button } from '@nextui-org/react'
import React from 'react'
import trophycup from '../images/whitetrophy.svg'

export default function EventsBox() {

    return (
        <div className='relative lg:top-[-25rem] top-[-22rem] px-10'>
            <div className='border-[#11A8E4] border-solid border-3 rounded-lg w-fit mx-auto m-10'>
                <div className='text-center text-white'>
                    <h4 className='p-5 text-[#11A8E4] font-semibold'>For more information on the Events & Workshops:</h4>
                    <h4 className='p-5 font-bold'>Click below for AURORA's Ultimate Experience!</h4>
                    <Button color="primary" size="lg" variant="shadow"
                        className="lg:w-[15rem] m-5"
                    >
                        <a href="/events" className='flex gap-4'>
                            <img src={trophycup} alt="" />
                            Events
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
