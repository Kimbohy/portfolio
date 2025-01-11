import { FlipWords } from "../ui/flip-words";

function FlipWordsCp() {
  const words = [
    "detail",
    "quality",
    "accuracy",
    "craftsmanship",
    "thoroughness",
  ];

  return (
    <div className="h-[15rem] sm:h-[20rem] md:h-[30rem] lg:h-[35rem] flex justify-center items-center z-20">
      <div className="z-20 mx-auto text-lg sm:text-xl md:text-2xl lg:text-4xl font-normal text-second dark:text-neutral-400 px-4 sm:px-0">
        Emphasize
        <FlipWords words={words} />
      </div>
    </div>
  );
}

export default FlipWordsCp;
