import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";

function WorkCard({ title, description, images, tech }) {
  const [imagesList, setImagesList] = useState(images);
// change the clickied image to be the first image
  const handleExchange = () => {
    const newImagesList = [...imagesList];
    const clickedImage = newImagesList.pop();
    newImagesList.unshift(clickedImage);
    setImagesList(newImagesList);
  }

  return (
    <div className="flex flex-col items-center h-96 justify-end gap-28">
      <div className="w-full h-fit rounded-lg flex pl-20">
        <div className="relative w-[700px] h-fit left-[-80px] ">
          {imagesList.map((image, index) => {
            const position = (-0.5 + index + 1) * -12; // Calculate position dynamically
            const zIndex = 10 - index; // Calculate z-index dynamically
            const brightness = index == 0 ? 1 : 1 / (index + 1);
            return (
              <motion.img
                whileHover={
                  index != 0 && {
                    x: 10,
                    y: -10,
                  }
                }
                key={index} // Add a unique key for each image
                src={image}
                alt="work"
                className="w-[600px] rounded-xl absolute" // Apply static Tailwind classes
                style={{
                  right: `${position}px`, // Apply dynamic styles
                  top: `${position}px`, // Apply dynamic styles
                  zIndex: zIndex, // Apply dynamic styles
                  filter: `brightness(${brightness})`,
                }}
                onClick={handleExchange}
              />
            );
          })}
        </div>
        <div className="flex items-start flex-col p-10">
          <h3 className="text-white text-5xl">{title}</h3>
          <p className="text-white text-xl">{description}</p>
          <div className="bg-white w-60 h-11 rounded-2xl mt-5 px-2 py-[5px] flex gap-1">
            {tech.map((t, index) => (
              <img
                key={index} // Add a unique key for each icon
                src={`/src/assets/images/icons/${t}.svg`}
                alt={t}
                className="w-9 h-9"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-1/2 h-[2px] bg-white opacity-50"></div>
    </div>
  );
}

export default WorkCard;
