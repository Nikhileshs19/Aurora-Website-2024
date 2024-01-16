import React, { useEffect, useState } from "react";
export default function Timer() {
  const targetDate = new Date("February 3, 2024 00:00:00").getTime();
  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());
  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(calculateTimeRemaining());
    }, 1000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="py-10 flex flex-row flex-wrap justify-center items-center align-middle">
      <h3 className="text-4xl text-white text-center my-5">Time to go</h3>
      <div className="flex flex-wrap justify-center gap-10">
        <div className="text-center">
          <h4 className="border-white border-2 rounded-full p-10 font-bold text-5xl text-white">
            {timeRemaining.days.toString().padStart(2,'0')}
          </h4>
          <h5 className="text-3xl text-white mt-2">Days</h5>
        </div>

        <div className="text-center">
          <h4 className="border-white border-2 rounded-full p-10 font-bold text-5xl text-white">
            {timeRemaining.hours.toString().padStart(2,'0')}
          </h4>
          <h5 className="text-3xl text-white mt-2">Hours</h5>
        </div>

        <div className="text-center">
          <h4 className="border-white border-2 rounded-full p-10 font-bold text-5xl text-white">
            {timeRemaining.minutes.toString().padStart(2,'0')}
          </h4>
          <h5 className="text-3xl text-white mt-2">Minutes</h5>
        </div>

        <div className="text-center">
          <h4 className="border-white border-2 rounded-full p-10 font-bold text-5xl text-white">
            {timeRemaining.seconds.toString().padStart(2,'0')}
          </h4>
          <h5 className="text-3xl text-white mt-2">Seconds</h5>
        </div>
      </div>
    </div>
  );
}
