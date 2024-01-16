import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { AboutHackathon } from "../components/AboutHackathon"
import { MainHackathon } from "../components/MainHackathon"
import { PrizesHackathon } from "../components/PrizesHackathon"
import Mountain from "../images/hackathonpage.svg"
import Sun from "../images/sun.svg"
import QRimg from '../images/QRimg.png'

function HackathonPage() {
    return(
        <div className="">
            <Parallax pages={4} className="bg-black">
                
                <ParallaxLayer offset={0} speed={1.5}>
                    <div  className="h-screen w-screen justify-center items-center flex lg:translate-y-[20rem] translate-y-[5rem]">
                    <img className ="lg:h-screen lg:w-screen" alt="" src={Sun}></img>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={-0.001} className="w-screen">
                    <img className="w-[150rem] bottom-0 lg:translate-y-[10rem] translate-y-96" alt="" src={Mountain}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={0} className="z-50" speed={0.1}>
                    <MainHackathon />
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={0.1} className="h-screen">
                    <AboutHackathon />
                </ParallaxLayer>
                
                <ParallaxLayer offset={2} speed={0.1} className="h-screen">
                    <PrizesHackathon />
                </ParallaxLayer>

                <ParallaxLayer>
                    <div className="h-[50rem]"></div>
                </ParallaxLayer>
                
            </Parallax>
        </div>
    )
}

export default HackathonPage