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
    <div className="h-[40rem] flex justify-center items-center z-20">
      <div className="z-20 mx-auto text-4xl font-normal text-second dark:text-neutral-400">
        Emphasize
        <FlipWords words={words} />
      </div>
    </div>
  );
}

export default FlipWordsCp;
