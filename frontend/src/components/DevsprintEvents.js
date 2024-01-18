import React from 'react'
import cashprizeseventhack from '../images/cashprizeseventhack.svg'
import cashprizestitle from '../images/cashprizestitle.svg'
import devsprintdate from '../images/devsprintdate.svg'
import hackathoneventtitle from '../images/hackathoneventtitle.svg'

export default function DevsprintEvents() {
    return (
        <div className='p-10 rounded-3xl' id="devsprintevents">
            <div className="bg-aurora-bg bg-cover p-6 rounded-3xl">

                <div className="grid lg:grid-cols-2  justify-center items-center">
                    <div className='col-span-2 mx-auto'>
                        <img src={hackathoneventtitle} alt="" className='mx-auto'/>
                        <div className="[text-shadow:0px_4px_53px_#00000073] [font-family:'Inter-Regular',Helvetica] font-normal text-white lg:text-[27px] text-[16px] tracking-[0] leading-[normal]">
                            AURORA PRESENTS
                        </div>
                        <div className="[text-shadow:0px_4px_37.2px_#0070f394] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0070f3] lg:text-[88px] text-[26px] tracking-[0] leading-[normal]">
                            &lt;DEVSPRINT’24 /&gt;
                        </div>
                    </div>
                    <p className="col-span-2 mx-auto w-5/6 pt-8 pb-24 [font-family:'Inter-Medium',Helvetica] font-medium text-white md:text-[25px] text-[13px] text-center tracking-[0] leading-7]">
                        Our annual hackathon, Devsprint is back for the 2024 edition. It is an exciting learning opportunity for
                        students who are passionate about technology and are interested in solving real-world problems with cutting-edge
                        solutions. We&#39;re hoping to see much more innovative, improved and effective solutions to the issues at hand
                        and share them with the rest of the world by bringing back the community of student developers together yet
                        again.
                    </p>
                    <div className='col-span-1 mx-auto'>
                        <img src={devsprintdate} alt="" />
                    </div>
                    <div className="col-span-1 mx-auto flex flex-col">
                        <img src={cashprizestitle} alt="" />
                        <img src={cashprizeseventhack} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
