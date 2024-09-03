import React, { useState } from "react";
import { motion } from "framer-motion";

function WorkCard({ title, description, images, tech }) {
  const [imagesList, setImagesList] = useState(images);

  // Change the clicked image to be the first image
  const handleExchange = (clickedIndex) => {
    const newImagesList = [...imagesList];
    const [clickedImage] = newImagesList.splice(clickedIndex, 1); // Remove the clicked image
    newImagesList.unshift(clickedImage); // Add it to the beginning
    setImagesList(newImagesList);
  };

  return (
    <div className="flex flex-col items-center h-96 justify-end gap-28">
      <div className="w-full h-fit rounded-lg flex pl-20">
        <div className="relative w-[700px] h-fit left-[-80px]">
          {imagesList.map((image, index) => {
            const position = (-0.5 + index + 1) * -12; // Calculate position dynamically
            const zIndex = 10 - index; // Calculate z-index dynamically
            const brightness = index === 0 ? 1 : 1 / (index + 1);
            return (
              <motion.img
                key={index} // Add a unique key for each image
                src={image}
                alt="work"
                className="w-[600px] rounded-xl absolute cursor-pointer" // Apply static Tailwind classes
                style={{
                  right: `${position}px`, // Apply dynamic styles
                  top: `${position}px`, // Apply dynamic styles
                  zIndex: zIndex, // Apply dynamic styles
                  filter: `brightness(${brightness})`,
                }}
                onClick={() => handleExchange(index)}
                // initial={{ x: "-100vw", opacity: 0 }} // Initial state for animation
                animate={{
                  x: 0, // Animate to x: 0
                  y: 0, // Animate to y: 0
                  opacity: 1, // Animate to full opacity
                  transition: { 
                    // duration: 1,
                    // delay: index * 0.1 // Stagger animations by index
                  }
                }}
                exit={{ x: "100vw", opacity: 0 }} // Exit animation
                whileHover={
                  index !== 0 && {
                    x: 10,
                    y: -10,
                  }
                }
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
