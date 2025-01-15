import { useState, useEffect } from "react";

const path = "/images/logo/";
const framesName = [
  "Frame 1.svg",
  "Frame 2.svg",
  "Frame 3.svg",
  "Frame 4.svg",
  "Frame 5.svg",
];

export default function Glitch() {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const changeFrame = () => {
      let randomFrame;
      do {
        randomFrame = Math.floor(Math.random() * framesName.length);
      } while (randomFrame === currentFrame);

      setCurrentFrame(randomFrame);
    };

    const randomInterval = () => {
      if (currentFrame === 0) {
        return Math.random() * (5000 - 3000) + 3000; // Stay longer on frame 1
      } else {
        return Math.random() * (500 - 50) + 50; // Faster on other frames
      }
    };

    const interval = setInterval(changeFrame, randomInterval());

    return () => clearInterval(interval);
  }, [currentFrame]);

  return (
    <div className="flex items-center">
      <div className="relative w-[100px]">
        <img
          src={`${path}${framesName[currentFrame]}`}
          alt="logo"
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
