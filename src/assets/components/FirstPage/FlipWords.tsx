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
    <div className="h-full flex flex-col justify-center items-center z-20 px-4">
      <div className="relative z-20 text-center mt-20">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-second mb-2">
          Welcome
        </h1>
        <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-normal text-second dark:text-neutral-400">
          Emphasize
          <FlipWords
            words={words}
            className="ml-2 font-semibold bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default FlipWordsCp;
