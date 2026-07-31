import { useState, useEffect } from "react";
import Image from "next/image";

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
    <a href="#top" className="flex items-center">
      <div className="relative w-[80px] md:w-[100px]">
        {framesName.map((frame, index) => (
          <Image
            key={frame}
            src={`${path}${frame}`}
            alt="logo"
            className={`w-full h-full ${index === currentFrame ? "block" : "hidden"}`}
            width={273}
            height={173}
            sizes="(min-width: 768px) 100px, 80px"
            priority={index === 0}
          />
        ))}
      </div>
    </a>
  );
}
