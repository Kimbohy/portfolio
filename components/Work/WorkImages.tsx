import { motion } from "motion/react";
import Image from "next/image";
import { useImageStack } from "./useImageStack";

const MotionDiv = motion.div;
const STACK_OFFSET = 12;

/** Pile d'images "desktop / web" (ratio ~3:2). */
export default function WorkImages({ imagePaths }: { imagePaths: string[] }) {
  const { images, isExchanging, bringToFront, rotate } =
    useImageStack(imagePaths);
  const stackPadding = Math.max(images.length - 1, 0) * STACK_OFFSET;

  return (
    <div
      className="relative w-full md:w-[600px] aspect-[3/2]"
      style={{
        paddingBottom: `${stackPadding}px`,
        paddingRight: `${stackPadding}px`,
      }}
    >
      {images.map((image, index) => {
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
            onClick={() => bringToFront(index)}
            animate={{
              x: 0,
              y: 0,
              opacity: isExchanging ? 0.5 : 1,
            }}
            transition={{ duration: 0.3 }}
            exit={{ x: "100vw", opacity: 0 }}
            whileHover={index !== 0 ? { x: 10, y: -10 } : undefined}
            drag={index === 0 && images.length != 1 ? true : false}
            dragSnapToOrigin={index === 0}
            dragConstraints={{ left: -170, right: 170, top: -200, bottom: 200 }}
            dragElastic={0.1}
            onDragEnd={(event, info) => {
              if (index === 0) {
                const swipeThreshold = 40;
                if (
                  Math.abs(info.offset.x) > swipeThreshold ||
                  Math.abs(info.offset.y) > swipeThreshold
                ) {
                  rotate();
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
              sizes="(min-width: 768px) 600px, 100vw"
              draggable={false}
            />
          </MotionDiv>
        );
      })}
    </div>
  );
}
