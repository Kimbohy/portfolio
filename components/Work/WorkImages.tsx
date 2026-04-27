import { motion } from "motion/react";
import { useState } from "react";
import Image from "next/image";

const MotionDiv = motion.div;
const STACK_OFFSET = 12;

export default function WorkImages({ imagePaths }: { imagePaths: string[] }) {
  const [imagesList, setImagesList] = useState<string[]>(imagePaths);
  const [isExchanging, setIsExchanging] = useState(false);
  const stackPadding = Math.max(imagesList.length - 1, 0) * STACK_OFFSET;

  // Change the clicked image to be the first image
  const handleExchange = (clickedIndex: number) => {
    setIsExchanging(true);
    setTimeout(() => {
      const newImagesList = [...imagesList];
      const [clickedImage] = newImagesList.splice(clickedIndex, 1);
      newImagesList.unshift(clickedImage);
      setImagesList(newImagesList);
      setIsExchanging(false);
    }, 150);
  };

  // Handle swipe left - move to next image
  const handleSwipe = () => {
    setIsExchanging(true);
    setTimeout(() => {
      const newImagesList = [...imagesList];
      const firstImage = newImagesList.shift();
      if (firstImage) {
        newImagesList.push(firstImage);
      }
      setImagesList(newImagesList);
      setIsExchanging(false);
    }, 150);
  };

  return (
    <div
      className="relative w-full md:w-[600px] aspect-[3/2]"
      style={{
        paddingBottom: `${stackPadding}px`,
        paddingRight: `${stackPadding}px`,
      }}
    >
      {imagesList.map((image, index) => {
        const position = index * STACK_OFFSET;
        const zIndex = 10 - index;
        const brightness = index === 0 ? 1 : 1 / (index + 1);
        return (
          <MotionDiv
            key={image}
            layoutId={image}
            className="w-full max-h-[400px] md:w-[600px] rounded-xl absolute cursor-pointer overflow-hidden select-none"
            style={{
              left: `${position}px`,
              bottom: `${position}px`,
              zIndex: zIndex,
              filter: `brightness(${brightness})`,
            }}
            onClick={() => handleExchange(index)}
            animate={{
              x: 0,
              y: 0,
              opacity: isExchanging ? 0.5 : 1,
            }}
            transition={{ duration: 0.3 }}
            exit={{ x: "100vw", opacity: 0 }}
            whileHover={index !== 0 ? { x: 10, y: -10 } : undefined}
            drag={index === 0 && imagesList.length != 1 ? true : false}
            dragSnapToOrigin={index === 0}
            dragConstraints={{ left: -170, right: 170, top: -200, bottom: 200 }}
            dragElastic={0.1}
            onDragEnd={(event, info) => {
              if (index === 0) {
                const swipeThreshold = 40;
                if (
                  info.offset.x > swipeThreshold ||
                  info.offset.x < -swipeThreshold ||
                  info.offset.y < -swipeThreshold ||
                  info.offset.y > swipeThreshold
                ) {
                  handleSwipe();
                }
              }
            }}
          >
            <Image
              src={image}
              alt="work"
              width={600}
              height={400}
              className="w-full h-auto"
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
            />
          </MotionDiv>
        );
      })}
    </div>
  );
}
