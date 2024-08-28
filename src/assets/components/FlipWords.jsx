import { FlipWords } from "./ui/flip-words";

function FlipWordsCp() {
  const words = [
    "detail",
    "quality",
    "accuracy",
    "craftsmanship",
    "thoroughness",
  ];

  return (
    <div className="h-[40rem] flex justify-center items-center z-20">
      <div className="text-4xl mx-auto font-normal text-white dark:text-neutral-400 z-20">
        Emphasize
        <FlipWords words={words} />
      </div>
    </div>
  );
}

export default FlipWordsCp;