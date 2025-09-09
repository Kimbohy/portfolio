"use client";
import { useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface WorkCardProps {
  title: string;
  description: string;
  longDescription: string;
  imagePaths: string[];
  tech: string[];
  github?: string;
  website?: string;
}

function WorkCard({
  title,
  description,
  longDescription,
  imagePaths,
  tech,
  github,
  website,
}: WorkCardProps) {
  const [imagesList, setImagesList] = useState<string[]>(imagePaths);

  // Change the clicked image to be the first image
  const handleExchange = (clickedIndex: number) => {
    const newImagesList = [...imagesList];
    const [clickedImage] = newImagesList.splice(clickedIndex, 1); // Remove the clicked image
    newImagesList.unshift(clickedImage); // Add it to the beginning
    setImagesList(newImagesList);
  };

  return (
    <div className="flex flex-col items-center justify-end min-h-[24rem] gap-28 p-4 md:p-0">
      <div className="flex flex-col md:flex-row w-full md:pl-20 rounded-lg h-fit">
        <div className="relative w-full md:w-[700px] h-[300px] md:h-fit left-[-19px] md:left-[-80px] top-16 md:top-0">
          {imagesList.map((image, index) => {
            const position = (-0.5 + index + 1) * -12; // Calculate position dynamically
            const zIndex = 10 - index; // Calculate z-index dynamically
            const brightness = index === 0 ? 1 : 1 / (index + 1);
            return (
              <motion.img
                key={index} // Add a unique key for each image
                src={image}
                alt="work"
                className="w-full md:w-[600px] rounded-xl absolute cursor-pointer" // Apply static Tailwind classes
                style={{
                  right: `${position}px`, // Apply dynamic styles
                  top: `${position}px`, // Apply dynamic styles
                  zIndex: zIndex, // Apply dynamic styles
                  filter: `brightness(${brightness})`,
                }}
                onClick={() => handleExchange(index)}
                animate={{
                  x: 0, // Animate to x: 0
                  y: 0, // Animate to y: 0
                  opacity: 1, // Animate to full opacity
                }}
                exit={{ x: "100vw", opacity: 0 }} // Exit animation
                whileHover={index !== 0 ? { x: 10, y: -10 } : undefined}
              />
            );
          })}
        </div>
        <div className="flex flex-col items-start p-4 md:p-10 mt-8 md:mt-0">
          <h3 className="text-3xl md:text-5xl text-secondary">{title}</h3>
          <p className="text-lg md:text-xl text-secondary mb-2">
            {description}
          </p>
          <p className="text-sm text-secondary/80 mb-4 max-w-md">
            {longDescription}
          </p>
          <div className="flex flex-wrap gap-4 mt-3 md:mt-5">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-background px-2 py-1 md:px-4 md:py-2 rounded-2xl hover:bg-opacity-80 transition-all text-sm md:text-base flex items-center gap-2 hover:scale-105"
              >
                <Image
                  src="/images/icons/github_bl.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                />
                GitHub
              </a>
            )}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-background px-2 py-1 md:px-4 md:py-2 rounded-2xl hover:bg-opacity-80 transition-all text-sm md:text-base flex items-center gap-2 hover:scale-105"
              >
                <Image
                  src="/images/icons/glob.svg"
                  alt="Website"
                  width={20}
                  height={20}
                />
                Visit Site
              </a>
            )}
          </div>
          <div className="bg-secondary w-full md:w-64 h-11 rounded-2xl mt-4 md:mt-5 px-2 py-[5px] flex flex-wrap gap-1 justify-center md:justify-start">
            {tech.map((t, index) => (
              <Image
                key={index} // Add a unique key for each icon
                src={`/images/icons/${t}.svg`}
                alt={t}
                width={36} // Set width property
                height={36} // Set height property
                className="w-7 h-7 md:w-9 md:h-9"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[2px] bg-secondary opacity-50"></div>
    </div>
  );
}

export default WorkCard;
