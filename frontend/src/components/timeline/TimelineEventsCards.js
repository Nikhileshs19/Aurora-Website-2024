import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Checkbox,
  Image,
} from "@nextui-org/react";
import React, { useState } from "react";
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

export default function TimelineEventsCards() {
  const [selectedModalIndex, setSelectedModalIndex] = useState(null);

  const timelineCards = Array.from({ length: 9 }, (_, index) => ({
    title: `Event ${index + 1}`,
    time: "05:30PM - 08:00PM",
    date: `4th January, 2024`,
    image: neuralnetworks,
  }));

  const toggleModal = (index) => {
    setSelectedModalIndex(index);
  };
  return (
    <div className="lg:p-12 p-8">
      <div className="bg-aurora-bg bg-cover rounded-3xl">
        <TitleStuff name="workshops" />
        <div className="p-6 grid md:grid-cols-3 grid-cols-2 ">

          {timelineCards.map((card, index) => (
            <div
              key={index}
              className="py-5 m-auto"
            >
              <Card className="py-4 lg:w-[19rem] w-[6.8rem] lg:h-auto h-[15rem] text-xs">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-center">
                  <p className=" uppercase font-bold lg:text-[0.8rem] text-[0.50rem]">
                    {card.time}
                  </p>
                  <h4 className="text-default-500 lg:text-[0.7rem] text-[0.6rem]">{card.date}</h4>
                  <h4 className="font-bold lg:text-[1.3rem]">{card.title}</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2 items-center ">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl "
                    src={card.image}
                    width={270}
                  />
                  <div className="mx-auto mt-6 flex lg:flex-row flex-col lg:gap-5 gap-2">
                    <Checkbox size="sm" color="success" radius="sm" className="lg:pt-2 pt-1">
                      Participate
                    </Checkbox>
                    <Button
                      className=" "
                      color="primary"
                      size="sm"
                      radius="lg"
                      onClick={() => toggleModal(index)}
                    >
                      Read More
                    </Button>
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
  )
}