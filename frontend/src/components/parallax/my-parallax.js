import { Button } from "@nextui-org/react";
import { ParallaxProvider } from "react-scroll-parallax";
import trophy from '../../images/whitetrophy.svg';
import { AdvancedBannerTop } from "./advancedBanner";

export default function MyParallax() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      {/* <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div> */}
      <div className="w-[50%] absolute lg:top-[30rem] top-[20rem]">
        <p className='text-white text-center relative left-[50%] '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit a iusto expedita velit illo magnam perferendis ad delectus adipisci cupiditate, consequatur, repellendus officia, facere earum dignissimos inventore ipsum vero cumque! Repellendus dolor nulla numquam?
        </p>
        <div className="m-auto relative left-[75%] lg:pt-20 pt-12 w-[100%]">
        <Button color="primary" className="m-auto w-[50%] lg:text-lg text-[0.64rem]">
          <img src={trophy} alt="" className="lg:w-[2rem] w-[0.9rem]"/>
          Register Now
        </Button>
        </div>
      </div>
    </ParallaxProvider>
  );
}
