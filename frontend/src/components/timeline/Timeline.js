import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Image,
} from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import neuralnetworks from "../../images/neuralnetworks.png";
import Modal_1 from "../Modal_1";
import Modal_2 from "../Modal_2";
import Modal_3 from "../Modal_3";
import Modal_4 from "../Modal_4";
import Modal_5 from "../Modal_5";
import Modal_6 from "../Modal_6";
import Modal_7 from "../Modal_7";
import Modal_8 from "../Modal_8";
import Modal_9 from "../Modal_9";
import TitleStuff from '../Title_Stuff';
import "./styles.css";

const Timeline = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const toggleModal = (index) => {
    setSelectedModalIndex(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      const firstCard = document.querySelector(".timeline-card:first-child");
      const lastCard = document.querySelector(".timeline-card:last-child");
      const circle = document.querySelector(".timeline-circle");
      const dashedLine = document.querySelector(".vertical-dashed-line");
      const solidLine = document.querySelector(".vertical-solid-line");

      if (!firstCard || !lastCard || !circle) return;

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

      // Calculate the position for the circle to move through the center of the screen
      const screenHeight = window.innerHeight;
      const circleTop = newScrollPercentage * (maxTimelineHeight / 100);
      const circleCenterOffset = (screenHeight - circle.offsetHeight) / 2;
      circle.style.top = `${circleTop + circleCenterOffset}px`;
      const firstCardTop = firstCardRect.top + window.scrollY;
      const lastCardBottom = lastCardRect.bottom + window.scrollY;
      const dashedLineHeight = lastCardBottom - firstCardTop;
      dashedLine.style.height = `${dashedLineHeight}px`;
      solidLine.style.zIndex = newScrollPercentage > 0 ? 2 : 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const timelineCards = Array.from({ length: 9 }, (_, index) => ({
    title: `Event ${index + 1}`,
    time: "05:30PM - 08:00PM",
    date: `4th January, 2024`,
    image: neuralnetworks,
  }));

  return (
    <div id="timeline">
      <TitleStuff name="timeline"/>
      <div className="timeline-container">
        <div
          className="my-timeline"
          style={{ position: "relative", margin: "280px auto" }}
        >
          {/* Timeline Circle */}
          <div
            className="timeline-circle"
            style={{
              position: "fixed",
              width: "40px",
              height: "40px",
              backgroundColor: "white",
              borderRadius: "50%",
              top: "50%",
              left: "664px", // Adjusted to move the circle to the left

              zIndex: 3,
              opacity: scrollPercentage > 0 ? 1 : 0,
              transition: "top 15s ease, opacity 1.5s ease",
            }}
          ></div>
          {/* Vertical Dashed Line */}
          <div
            className="vertical-dashed-line absolute left-0 top-0 bg-transparent w-1 h-full"
            style={{
              marginLeft: "680px",
              marginTop: "200px", // Set the left margin for the vertical line
              backgroundImage: `repeating-linear-gradient(transparent, transparent 10px, white 10px, white 20px)`, // Vertical dashed line background
            }}
          ></div>
          <div
            className="vertical-solid-line absolute left-0 top-0 bg-transparent m-auto w-1 h-full"
            style={{
              marginLeft: "680px",
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
              "@media (max-width: 640px)": {
                gridTemplateColumns: "1fr", // Change to one column for smaller screens
                gridRowGap: "100px",
                marginLeft: "20px", // Adjust margin for smaller screens
              },
              "@media (min-width: 1024px and max-width: 641px)": {
                gridColumnGap: "100px",
                gridTemplateColumns: "repeat(2, 1fr)", // Adjust for zigzag fashion
              },
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
                }}
              >
                <Card className="py-4 lg:w-[20rem] w-[14rem] custom-timeline-card">
                  <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">{card.time}</p>
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
                    <div className="w-16 mt-6">
                      <Button
                        color="primary"
                        size="sm"
                        radius="lg"
                        onClick={() => toggleModal(index)}
                      >
                        Read More
                      </Button>
                      <Checkbox size="md" color="success" radius="sm">
                        Participate
                      </Checkbox>
                    </div>

                    {selectedModalIndex === index && (
                      <>
                        {index === 0 && (
                          <Modal_1
                            toggleModal={() => toggleModal(null)}
                            index={index}
                          />
                        )}
                        {index === 1 && (
                          <Modal_2 toggleModal={() => toggleModal(null)} />
                        )}
                        {index === 2 && (
                          <Modal_3 toggleModal={() => toggleModal(null)} />
                        )}
                        {index === 3 && (
                          <Modal_4 toggleModal={() => toggleModal(null)} />
                        )}
                        {index === 4 && (
                          <Modal_5 toggleModal={() => toggleModal(null)} />
                        )}
                        {index === 5 && (
                          <Modal_6 toggleModal={() => toggleModal(null)} />
                        )}
                        {index === 6 && (
                          <Modal_7 toggleModal={() => toggleModal(null)} />
                        )}
                        {index === 7 && (
                          <Modal_8 toggleModal={() => toggleModal(null)} />
                        )}
                        {index === 8 && (
                          <Modal_9 toggleModal={() => toggleModal(null)} />
                        )}
                      </>
                    )}
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;