import React, { useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Image,
} from "@nextui-org/react";
import neuralnetworks from "../images/neuralnetworks.png";
import TitleStuff from "./Title_Stuff";


const Timeline = () => {
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const toggleModal = (index) => {
    setSelectedModalIndex(index);
  };

  const timelineCards = Array.from({ length: 9 }, (_, index) => ({
    title: `Event ${index + 1}`,
    time: "05:30PM - 08:00PM",
    date: `4th January, 2024`,
    image: neuralnetworks,
  }));

  return (
    <div id="timeline">
      <TitleStuff name="timeline" />
      <div className="timeline-container">
        <div className="my-timeline" style={{ position: "relative" }}>
          {/* Timeline Cards */}
          <div
            className="timeline-card-container grid grid-cols-3 gap-4"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(14rem, 1fr))",
              gap: "1rem",
              justifyItems: "center",
            }}
          >
            {timelineCards.map((card, index) => (
              <div
                key={index}
                className="timeline-card py-5"
                style={{ zIndex: 2 }}
              >
                <Card className="py-4 w-[14rem] custom-timeline-card">
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
                      // Render the appropriate modal based on the index
                      // Assuming Modal components are already implemented
                      /* Example:
                         {index === 0 && <Modal_1 toggleModal={() => toggleModal(null)} index={index} />}
                         {index === 1 && <Modal_2 toggleModal={() => toggleModal(null)} />}
                         ... 
                      */
                      <></>
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
