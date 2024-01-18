import { Button, Card, CardBody, CardHeader, Image } from "@nextui-org/react";
import React, { useState } from "react";
import TitleStuff from "../Title_Stuff";
import EventCheck from "../EventCheck";
import workshopsevents from '../../images/workshopsevents.svg';

// Separate arrays for titles, times, dates, and images
const titles = [
  "ACM",
  "DRONEAID",
  "MIST",
  "ISTE",
  "GDSC",
  "ISTE2",
  "IE MECH",
  "IEEE",
  "Event 9",
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
  "05:30PM - 08:30PM",
  "05:30PM - 08:30PM",
  
];
const dates = [
  "3rd February, 2024",
  "4th February, 2024",
  "4th February, 2024",
  "5th February, 2024",

  "5th February, 2024",
  "6th February, 2024",
  "6th February, 2024",
  "7th February, 2024",
  "7th February, 2024",
];
const images = [
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
  require("../../images/1st.svg").default,
];

const modalComponents = Array.from(
  { length: 9 },
  (_, index) => require(`../Modal_${index + 1}`).default
);

export default function TimelineEventsCards() {
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const toggleModal = (index) => {
    setSelectedModalIndex(index);
  };

  return (
    <div className="lg:p-12 p-8">
      <div className="bg-aurora-bg bg-cover rounded-3xl">
        <img src={workshopsevents} alt="" className="mx-auto"/>
        <div className="p-6 grid md:grid-cols-3 grid-cols-1 ">
          {titles.map((title, index) => (
            <div key={index} className="py-5 m-auto">
              <Card className="py-4 text-xs">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <p className=" uppercase font-bold lg:text-[0.8rem] text-[0.50rem] p-1">
                    {times[index]}
                  </p>
                  <h4 className="text-default-500 lg:text-[0.7rem] text-[0.6rem] p-1">
                    {dates[index]}
                  </h4>
                  <h4 className="font-bold lg:text-[1.3rem] p-1.5">{title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center ">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl "
                    src={images[index]}
                    width={270}
                  />
                  <div className="mx-auto mt-6 flex lg:flex-row flex-col lg:gap-5 gap-2">
                    <EventCheck />
                    <Button
                      className=" "
                      color="primary"
                      size="sm"
                      radius="lg"
                      onClick={() => toggleModal(index)}
                    >
                      Preview
                    </Button>
                  </div>

                  {selectedModalIndex === index && (
                    <>
                      {React.createElement(modalComponents[index], {
                        toggleModal: () => toggleModal(null),
                        index,
                      })}
                    </>
                  )}
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
