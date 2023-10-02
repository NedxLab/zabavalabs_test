"use client";

import React, { useState } from "react";
import Countdown from "react-countdown";

const TimeCountdown = () => {
  const [countdownComplete, setCountdownComplete] = useState<boolean>(false);

  return (
    !countdownComplete && (
      <Countdown
        onComplete={() => setCountdownComplete(true)}
        date="2023-11-26T01:02:03"
        renderer={({ days, hours, minutes, seconds }) => (
          <div className=" text-2xl font-bold">
            <span className="px-1.5">
              {days}
              <span>D</span>
            </span>
            <span className="px-1.5">
              {hours}
              <span>H</span>
            </span>
            <span className="px-1.5">
              {minutes}
              <span>M</span>
            </span>
            <span className="px-1.5">
              {seconds}
              <span>S</span>
            </span>
          </div>
        )}
      />
    )
  );
};

export default TimeCountdown;
