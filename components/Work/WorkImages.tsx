import { motion } from "motion/react";
import { useState } from "react";

export default function WorkImages({ imagePaths }: { imagePaths: string[] }) {
  const [imagesList, setImagesList] = useState<string[]>(imagePaths);
  const [isExchanging, setIsExchanging] = useState(false);

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
    <>
      {imagesList.map((image, index) => {
        const position = (-0.5 + index + 1) * -12;
        const zIndex = 10 - index;
        const brightness = index === 0 ? 1 : 1 / (index + 1);
        return (
          <motion.img
            key={`${image}-${index}`}
            layoutId={image}
            src={image}
            alt="work"
            className="w-full md:w-[600px] rounded-xl absolute cursor-pointer"
            style={{
              right: `${position}px`,
              top: `${position}px`,
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
            drag={index === 0 ? true : false}
            dragConstraints={{ left: -170, right: 170, top: -200, bottom: 200 }}
            dragElastic={0.1}
            // dragSnapToOrigin={true}
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
          />
        );
      })}
    </>
  );
}
