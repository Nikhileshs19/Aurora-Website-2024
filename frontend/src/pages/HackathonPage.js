import { Parallax, ParallaxLayer } from "@react-spring/parallax"
import { AboutHackathon } from "../components/AboutHackathon"
import { MainHackathon } from "../components/MainHackathon"
import { PrizesHackathon } from "../components/PrizesHackathon"
import Mountain from "../images/hackathonpage.svg"
import Sun from "../images/sun.svg"

function HackathonPage() {
    return (
        <div id="hackathonpage"> 
            <Parallax pages={3} className="bg-black no-scrollbar" id="hackathonpage">


                <ParallaxLayer offset={0} speed={1.5}>
                    <div className="h-screen w-screen justify-center items-center flex lg:translate-y-[20rem] translate-y-[5rem]">
                        <img className="lg:h-screen lg:w-screen" alt="h" src={Sun}></img>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={-0.001} className="w-screen">
                    <img className="w-[150rem] bottom-0 lg:translate-y-[10rem] translate-y-96" alt="h" src={Mountain}></img>
                </ParallaxLayer>

                <ParallaxLayer offset={0} className="z-50" speed={0.1}>
                    <MainHackathon />
                </ParallaxLayer>
                <ParallaxLayer offset={1} className="h-[100rem]">
                    <AboutHackathon />
                    <PrizesHackathon />
                </ParallaxLayer>



            </Parallax>

        </div>
    )
}

export default HackathonPage