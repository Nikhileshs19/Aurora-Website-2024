import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React, { useEffect, useRef, useState } from "react";
import W_iste2 from "../../images/AppDev (1).svg";
import W_gdsc from "../../images/ChatBot (1).svg";
import W_mist from "../../images/Cybersec (1).svg";
import W_ieee from "../../images/W-ieee.svg";
import W_iemech from "../../images/W-iemech.svg";
import W_iste1 from "../../images/W-iste1.svg";
import W_acm from "../../images/W_acm.svg";
import W_astronomy from "../../images/W_astronomy.svg";
import W_dronaid from "../../images/W_dronaid.svg";
import hackathon from "../../images/Hacathon.svg";
import ctf from "../../images/CTF (1).svg";
import TitleStuff from "../Title_Stuff";
import "./styles.css";

const TimelineMain = () => {
  //desktop
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollPercentageMobile, setScrollPercentageMobile] = useState(0);

  const [timelineHeight, setTimelineHeight] = useState(0);
  console.log(timelineHeight);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth, //0
    window.innerHeight, //1
  ]);
  const circleRef = useRef(null);
  // let lastScrollY = 0;
  useEffect(() => {
    const maxTimelineHeight =
      (document.querySelectorAll(".timeline-container").length - 1) * 100;
    setTimelineHeight(maxTimelineHeight);
  }, []);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const firstCard = document.querySelector(".timeline-card:first-child");
      const lastCard = document.querySelector(".timeline-card:last-child");
      const circle = document.querySelector(".timeline-circle");
      const dashedLine = document.querySelector(".vertical-dashed-line");
      const solidLine = document.querySelector(".vertical-solid-line");
      const circleMobile = document.querySelector(".timeline-circle-mobile");
      if (!firstCard || !lastCard || !circle || !dashedLine || !solidLine)
        return;

      const firstCardRect = firstCard.getBoundingClientRect();
      const lastCardRect = lastCard.getBoundingClientRect();

      const startScrollPosition = firstCardRect.top + window.scrollY;
      const endScrollPosition = lastCardRect.bottom + window.scrollY;

      const maxTimelineHeight = endScrollPosition - startScrollPosition;
      const newScrollPercentage = Math.max(
        0,
        Math.min(
          100,
          ((window.scrollY - startScrollPosition) / maxTimelineHeight) * 100
        )
      );
      console.log(newScrollPercentage);

      setScrollPercentage(newScrollPercentage);

      const firstCardTop = firstCardRect.top + window.scrollY;
      const lastCardBottom = lastCardRect.bottom + window.scrollY;
      const dashedLineHeight = lastCardBottom - firstCardTop;
      dashedLine.style.height = `${dashedLineHeight}px`;
      solidLine.style.zIndex = newScrollPercentage > 0 ? 2 : 0;

      const adjustedPercentage = Math.min(225, newScrollPercentage * 2.5);
      document.querySelector(".vertical-solid-line").style.height =
        adjustedPercentage + "rem";
      const circleTop =
        (adjustedPercentage / 700) * maxTimelineHeight +
        firstCardTop -
        startScrollPosition -
        circle.offsetHeight / 2;

      circle.style.top = circleTop + "px";
      // Handle mobile timeline
      const firstCardMobile = document.querySelector(
        ".timeline-card-mobile:first-child"
      );
      const lastCardMobile = document.querySelector(
        ".timeline-card-mobile:last-child"
      );
      const dashedLineMobile = document.querySelector(
        ".vertical-dashed-line-mobile"
      );
      const solidLineMobile = document.querySelector(
        ".vertical-solid-line-mobile"
      );

      if (
        !firstCardMobile ||
        !lastCardMobile ||
        !dashedLineMobile ||
        !solidLineMobile
      )
        return;

      const firstCardRectMobile = firstCardMobile.getBoundingClientRect();
      const lastCardRectMobile = lastCardMobile.getBoundingClientRect();

      const startScrollPositionMobile =
        firstCardRectMobile.top + window.scrollY;
      const endScrollPositionMobile =
        lastCardRectMobile.bottom + window.scrollY;

      const maxTimelineHeightMobile =
        endScrollPositionMobile - startScrollPositionMobile;
      const newScrollPercentageMobile = Math.max(
        0,
        Math.min(
          144,
          ((window.scrollY - startScrollPositionMobile) /
            maxTimelineHeightMobile) *
            200
        )
      );
      console.log(newScrollPercentageMobile);

      setScrollPercentageMobile(newScrollPercentageMobile);

      const firstCardTopMobile = firstCardRectMobile.top + window.scrollY;
      const lastCardBottomMobile = lastCardRectMobile.bottom + window.scrollY;
      const dashedLineHeightMobile = lastCardBottomMobile - firstCardTopMobile;
      dashedLineMobile.style.height = `${dashedLineHeightMobile}px`;
      solidLineMobile.style.zIndex = newScrollPercentageMobile > 0 ? 2 : 0;

      const adjustedPercentageMobile = Math.min(
        302,
        newScrollPercentageMobile * 2.39
      );
      document.querySelector(".vertical-solid-line-mobile").style.height =
        adjustedPercentageMobile + "rem";

      if (circleMobile) {
        const circleTopMobile =
          (adjustedPercentageMobile / 400) * maxTimelineHeightMobile +
          firstCardTopMobile -
          startScrollPositionMobile -
          circleMobile.offsetHeight / 2;

        circleMobile.style.top = circleTopMobile + "px";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const titles = [
    "ACM",
    "DRONAID",
    "MIST",
    "ISTE",
    "GDSC",
    "ISTE2",
    "IE MECH",
    "IEEE",
    "ASTRONOMY",
    "CTF",
    "HACKATHON",
  ];

  const times = [
    "05:30PM - 08:30PM & 10:00AM - 05:00PM",
    "05:30PM - 08:30PM & 10:00AM - 05:00PM",
    "05:30PM - 08:30PM",
    "05:30PM - 08:30PM",
    "05:30PM - 08:30PM",
    "05:30PM - 08:30PM",
    "05:30PM - 08:30PM",
    "05:30PM - 08:30PM",
    "8:30PM Onwards",
    "12:30PM Onwards",
    "08:00AM - 10:00PM",
  ];
  const dates = [
    "3rd February, 2024 & 4th February, 2024",
    "3rd February, 2024 & 4th February, 2024",
    "5th February, 2024 & 6th February, 2024",
    "5th February, 2024 & 6th February, 2024",

    "7th February, 2024 & 8th February, 2024",
    "7th February, 2024 & 8th February, 2024",
    "9th February, 2024",
    "9th February, 2024",
    "9th February, 2024",
    "31st January, 2024",
    "11th February, 2024",
  ];
  const images = [
    W_acm,
    W_dronaid,
    W_mist,
    W_iste1,
    W_gdsc,
    W_iste2,
    W_iemech,
    W_ieee,
    W_astronomy,
    ctf,
    hackathon,
  ];

  return (
    <div className="">
      {/* desktop timeline  */}
      <div
        id="timeline"
        className={windowSize[0] > 760 ? "bg-transparent" : "hidden"}
      >
        <TitleStuff name="timeline" className="relative top-[10rem]" />
        <div className="timeline-container relative top-[-24rem]">
          <div
            className="my-timeline"
            style={{ position: "relative", margin: "280px auto" }}
          >
            {/* Timeline Circle */}
            <div
              ref={circleRef} // Set a ref to access the circle element
              className="timeline-circle hidden"
              style={{
                position: "fixed",
                width: "30px",
                height: "30px",
                backgroundColor: "blue",
                borderRadius: "50%",
                top: "50%",
                left: "49.1%", // Move the circle to the left
                zIndex: 3,
                opacity: scrollPercentage > 0 ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            ></div>

            {/* Vertical Dashed Line */}
            <div
              className="vertical-dashed-line absolute left-0 top-0 bg-transparent w-1 h-full"
              style={{
                marginLeft: "50%",
                marginTop: "200px", // Set the left margin for the vertical line
                backgroundImage: `repeating-linear-gradient(transparent, transparent 10px, white 10px, white 20px)`, // Vertical dashed line background
              }}
            ></div>
            <div
              className="vertical-solid-line absolute left-[-0.1rem] top-0 bg-transparent m-auto w-2 glow"
              style={{
                marginLeft: "50%",
                marginTop: "200px",
                background: "white",
                transition: "top 1.5s ease",
              }}
            ></div>
            {/* Timeline Cards */}
            <div
              className="timeline-card-container lg:mx-96 mx-7 grid lg:grid-cols-3 grid-cols-2"
              style={{
                display: "grid",
                gridTemplateColumns: "1fr",
                justifyItems: "center", // Centering the cards
              }}
            >
              {titles.map((titles, index) => (
                <div
                  key={index}
                  className="timeline-card py-5"
                  style={{
                    marginTop: index % 2 === 0 ? "250px" : "10px",
                    zIndex: 2,
                    gridColumn: index % 2 === 0 ? "3" : "2",
                    marginLeft: index % 2 === 0 ? "-1700px" : "500px",
                    gridColumnGap: index % 2 === 0 ? "700px" : "500px",
                    width: "fit-content",
                  }}
                >
                  <Card className="py-4 lg:w-[20rem] w-[14rem] custom-timeline-card">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        {times[index]}
                      </p>
                      <small className="text-default-500">{dates[index]}</small>
                      <h4 className="font-bold text-large">{titles}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={images[index]}
                        width={270}
                      />
                      <div className="w-16 mt-6"></div>
                    </CardBody>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* mobile timeline  */}
      <div
        id="timeline"
        className={windowSize[0] <= 760 ? "bg-transparent" : "hidden"}
      >
        <TitleStuff name="timeline" />
        <div className="timeline-container relative top-[-15rem]">
          <div
            className="my-timeline"
            style={{ position: "relative", margin: "280px auto" }}
          >
            <div
              ref={circleRef} // Set a ref to access the circle element
              className="timeline-circle-mobile hidden"
              style={{
                position: "fixed",
                width: "30px",
                height: "30px",
                backgroundColor: "blue",
                borderRadius: "50%",
                top: "50%",
                left: "7.2%", // Move the circle to the left
                zIndex: 3,
                opacity: scrollPercentageMobile > 0 ? 1 : 0,
                transition: "opacity 0.5s ease",
              }}
            ></div>
            {/* Vertical Dashed Line */}
            <div
              className="vertical-dashed-line-mobile absolute left-0 top-1 bg-transparent w-1 h-full"
              style={{
                marginLeft: "40px", // Adjusted the left margin for the vertical line
                marginTop: "60px", // Set the top margin for the vertical line
                backgroundImage: `repeating-linear-gradient(transparent, transparent 10px, white 10px, white 20px)`, // Vertical dashed line background
              }}
            ></div>
            <div
              className="vertical-solid-line-mobile absolute left-0 top-0 bg-transparent m-auto w-1 glow "
              style={{
                marginLeft: "40px", // Adjusted the left margin for the vertical line
                marginTop: "80px",
                background: "white",
                transition: "top 1.5s ease",
              }}
            ></div>
            {/* Timeline Cards */}
            <div
              className="timeline-card-container"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {titles.map((titles, index) => (
                <div
                  key={index}
                  className="timeline-card-mobile py-5"
                  style={{
                    margin: "10px",
                    zIndex: 2,
                    width: "fit-content", // Adjust the width as needed
                  }}
                >
                  <div>
                    <Card className="py-4 lg:w-[20rem] w-[14rem] custom-timeline-card">
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">
                          {times[index]}
                        </p>
                        <small className="text-default-500">
                          {dates[index]}
                        </small>
                        <h4 className="font-bold text-large">{titles}</h4>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src={images[index]}
                          width={270}
                        />
                        <div className="w-16 mt-6"></div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineMain;
