import P1 from "../images/1stprize.svg"
import P2 from "../images/2ndprize.svg"
import P3 from "../images/3rdprize.svg"

export const PrizesHackathon = () => {
    return(
        <div className="font-family:'Inter-Regular',Helvetica] w-screen bg-black flex flex-col items-center justify-center">
            <div className="[text-shadow:0px_4px_37.2px_#0070f3] [font-family:'Inter-Bold',Helvetica] font-bold text-[#0070f3] md:text-[78px] text-[35px] tracking-[0] leading-[normal]">
                <h1 className="text-center p-6 text-[#0070f3]">Cash Prizes</h1>
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="p-6 flex-col items-center"> 
                    <img src={P1} alt=""></img> 
                    <span className="flex justify-center w-full text-yellow-300 font-bold p-4 text-3xl">Rs. 7000 </span>
                </div>
                <div className="flex flex-row justify-center flex-wrap">
                    <div className="p-6 flex-col items-center"> 
                        <img src={P2} alt=""></img> 
                        <span className="flex justify-center w-full text-[#BBB4A4] font-bold p-4 text-3xl">Rs. 4000 </span>
                    </div>
                    <div className="p-6 flex-col items-center"> 
                        <img src={P3} alt=""></img> 
                        <span className="flex justify-center w-full text-[#865058] font-bold p-4 text-3xl">Rs. 2000 </span>
                    </div>
                </div>
            </div>
        </div>
    )
}