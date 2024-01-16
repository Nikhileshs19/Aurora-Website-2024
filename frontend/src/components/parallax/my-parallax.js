import { ParallaxProvider } from "react-scroll-parallax";
import { AdvancedBannerTop } from "./advancedBanner";

export default function MyParallax() {
  return (
    <ParallaxProvider>
      <AdvancedBannerTop />
      {/* <div className="center full">
        <h1 className="headline gray">Goodnight.</h1>
      </div> */}
      
    </ParallaxProvider>
  );
}
