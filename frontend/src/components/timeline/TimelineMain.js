import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import neuralnetworks from "../../images/neuralnetworks.png";

import TitleStuff from "../Title_Stuff";
import "./styles.css";

const TimelineMain = () => {
  //desktop
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [scrollPercentageMobile, setScrollPercentageMobile] = useState(0);

  const [timelineHeight, setTimelineHeight] = useState(0);
  const [windowSize, setWindowSize] = useState([
    window.innerWidth, //0
    window.innerHeight, //1
  ]);
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

      const dashedLine = document.querySelector(".vertical-dashed-line");
      const solidLine = document.querySelector(".vertical-solid-line");

      if (!firstCard || !lastCard) return;

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

      setScrollPercentage(newScrollPercentage);

      const firstCardTop = firstCardRect.top + window.scrollY;
      const lastCardBottom = lastCardRect.bottom + window.scrollY;
      const dashedLineHeight = lastCardBottom - firstCardTop;
      dashedLine.style.height = `${dashedLineHeight}px`;
      solidLine.style.zIndex = newScrollPercentage > 0 ? 2 : 0;

      //height of solid line
      const scrollPercentage = (window.scrollY / timelineHeight) * -65;
      const adjustedPercentage = Math.min(214, newScrollPercentage * 2.39);
      console.log(adjustedPercentage);

      document.querySelector(".vertical-solid-line").style.height =
        adjustedPercentage + "rem";

      //mobile
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

      if (!firstCardMobile || !lastCardMobile) return;

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
          300,
          ((window.scrollY - startScrollPositionMobile) /
            maxTimelineHeightMobile) *
            300
        )
      );

      setScrollPercentageMobile(newScrollPercentageMobile);

      const firstCardTopMobile = firstCardRectMobile.top + window.scrollY;
      const lastCardBottomMobile = lastCardRectMobile.bottom + window.scrollY;
      const dashedLineHeightMobile = lastCardBottomMobile - firstCardTopMobile;
      dashedLineMobile.style.height = `${dashedLineHeightMobile}px`;
      solidLineMobile.style.zIndex = newScrollPercentageMobile > 0 ? 2 : 0;

      //height of solid line
      // const scrollPercentageMobile = (window.scrollY / timelineHeight) * -65;
      const adjustedPercentageMobile = Math.min(
        290,
        Math.abs(newScrollPercentageMobile * 1.1)
      );
      console.log(adjustedPercentageMobile);

      document.querySelector(".vertical-solid-line-mobile").style.height =
        adjustedPercentageMobile + "rem";
      //   document.querySelector(".vertical-dashed-line-mobile").style.height =
      //     adjustedPercentageMobile + "rem";
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const timelineCards = Array.from({ length: 11 }, (_, index) => ({
    title: `Event ${index + 1}`,
    time: "05:30PM - 08:00PM",
    date: `4th January, 2024`,
    image: neuralnetworks,
  }));

  return (
    <>
      {/* desktop timeline  */}
      <div
        id="timeline"
        className={windowSize[0] > 760 ? "bg-transparent" : "hidden"}
      >
        <TitleStuff name="timeline" />
        <div className="timeline-container relative top-[-20rem]">
          <div
            className="my-timeline"
            style={{ position: "relative", margin: "280px auto" }}
          >
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
                // "@media (max-width: 640px)": {
                //   gridTemplateColumns: "1fr", // Change to one column for smaller screens
                //   gridRowGap: "100px",
                //   marginLeft: "20px", // Adjust margin for smaller screens
                // },
                // "@media (min-width: 1024px and max-width: 641px)": {
                //   gridColumnGap: "100px",
                //   gridTemplateColumns: "repeat(2, 1fr)", // Adjust for zigzag fashion
                // },
              }}
            >
              {timelineCards.map((card, index) => (
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
                  <div className="card-glow rounded-3xl">
                  <Card className="py-4 lg:w-[20rem] w-[14rem] custom-timeline-card card-glow">
                    <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                      <p className="text-tiny uppercase font-bold">
                        {card.time}
                      </p>
                      <small className="text-default-500">{card.date}</small>
                      <h4 className="font-bold text-large">{card.title}</h4>
                    </CardHeader>
                    <CardBody className="overflow-visible py-2">
                      <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src={card.image}
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
      {/* mobile timeline  */}
      <div
        id="timeline"
        className={windowSize[0] <= 760 ? "bg-transparent" : "hidden"}
      >
        <TitleStuff name="timeline" />
        <div className="timeline-container relative top-[-10rem]">
          <div
            className="my-timeline"
            style={{ position: "relative", margin: "280px auto" }}
          >
            {/* Vertical Dashed Line */}
            <div
              className="vertical-dashed-line-mobile absolute left-0 top-0 bg-transparent w-1 h-full"
              style={{
                marginLeft: "40px", // Adjusted the left margin for the vertical line
                marginTop: "80px", // Set the top margin for the vertical line
                backgroundImage: `repeating-linear-gradient(transparent, transparent 10px, white 10px, white 20px)`, // Vertical dashed line background
              }}
            ></div>
            <div
              className="vertical-solid-line-mobile absolute left-0 top-0 bg-transparent m-auto w-1 glow "
              style={{
                marginLeft: "40px", // Adjusted the left margin for the vertical line
                marginTop: "100px",
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
              {timelineCards.map((card, index) => (
                <div
                  key={index}
                  className="timeline-card-mobile py-5"
                  style={{
                    margin: "10px",
                    zIndex: 2,
                    width: "fit-content", // Adjust the width as needed
                  }}
                >
                  <div className="card-glow rounded-3xl">
                    <Card className="py-4 lg:w-[20rem] w-[14rem] custom-timeline-card card-glow">
                      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                        <p className="text-tiny uppercase font-bold">
                          {card.time}
                        </p>
                        <small className="text-default-500">{card.date}</small>
                        <h4 className="font-bold text-large">{card.title}</h4>
                      </CardHeader>
                      <CardBody className="overflow-visible py-2">
                        <Image
                          alt="Card background"
                          className="object-cover rounded-xl"
                          src={card.image}
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
    </>
  );
};

export default TimelineMain;