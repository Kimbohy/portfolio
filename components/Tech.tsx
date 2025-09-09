import Image from "next/image";
import { InfiniteMovingItems } from "./ui/infinite-moving-items";

function Tech() {
  const techs = [
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "tailwindcss",
    "motion",
    "socket.io",
    "nestjs",
    "mysql",
    "mongodb",
    "redis",
    "css",
    "nodejs",
    "chartjs",
    "prisma",
    "c",
    "cpp",
    "python",
  ];

  // Function to shuffle the array
  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const shuffledTechs = shuffleArray(techs);

  return (
    <div className="mt-2 md:mt-10">
      <InfiniteMovingItems
        items={shuffledTechs}
        suffix="_b"
        direction="left"
        speed="slow"
        className="mx-auto flex gap-2"
      />
    </div>
  );
}

export default Tech;
