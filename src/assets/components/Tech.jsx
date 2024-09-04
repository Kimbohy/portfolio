import { rand } from "three/webgpu";
import { InfiniteMovingItems } from "./ui/infinite-moving-items";

function Tech() {
  const techList = [
    "python",
    "bash",
    "react",
    "c",
    "html",
    "php",
    "tailwindcss",
    "javascript",
    "cpp",
    "mysql",
    "figma",
    "css",
    "git",
    "powershell",
    "github",
    "photoshop"
  ]; // need to add github

  function shuffleArray(array, value) {
    for (let i = array.length - 1; i > 0; i--) {
      // Generate a random index between 0 and i
      const j = Math.floor(Math.random(value) * (i + 1));
      // Swap elements array[i] and array[j]
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  return (
    <div className="bg-slate-900 pt-10 flex justify-center flex-col items-center">
      <InfiniteMovingItems
        items={shuffleArray(techList,rand())}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingItems
        items={shuffleArray(techList,rand())}
        direction="left"
        speed="slow"
      />
      <div className="w-1/2 mt-10 h-[2px] bg-second opacity-50"></div>
    </div>
  );
}

export default Tech;
