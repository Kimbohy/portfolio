import { useState } from "react";
import { motion } from "framer-motion";

interface WorkCardProps {
  title: string;
  description: string;
  imagePaths: string[];  // Changed from images to imagePaths
  tech: string[];
  github?: string;
  website?: string;
}

function WorkCard({ title, description, imagePaths, tech, github, website }: WorkCardProps) {
  const [imagesList, setImagesList] = useState<string[]>(imagePaths);

  // Change the clicked image to be the first image
  const handleExchange = (clickedIndex: number) => {
    const newImagesList = [...imagesList];
    const [clickedImage] = newImagesList.splice(clickedIndex, 1); // Remove the clicked image
    newImagesList.unshift(clickedImage); // Add it to the beginning
    setImagesList(newImagesList);
  };

  return (
    <div className="flex flex-col items-center justify-end h-96 gap-28">
      <div className="flex w-full pl-20 rounded-lg h-fit">
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
                  },
                }}
                exit={{ x: "100vw", opacity: 0 }} // Exit animation
                whileHover={index !== 0 ? { x: 10, y: -10 } : undefined}
              />
            );
          })}
        </div>
        <div className="flex flex-col items-start p-10">
          <h3 className="text-5xl text-second">{title}</h3>
          <p className="text-xl text-second">{description}</p>
          <div className="flex gap-4 mt-5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-second text-primary px-4 py-2 rounded-lg hover:bg-opacity-80 transition-all"
              >
                GitHub
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-second text-primary px-4 py-2 rounded-lg hover:bg-opacity-80 transition-all"
              >
                Visit Site
              </a>
            )}
          </div>
          <div className="bg-second w-60 h-11 rounded-2xl mt-5 px-2 py-[5px] flex gap-1">
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
      <div className="w-1/2 h-[2px] bg-second opacity-50"></div>
    </div>
  );
}

export default WorkCard;
