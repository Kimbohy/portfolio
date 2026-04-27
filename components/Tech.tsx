import { InfiniteMovingItems } from "./ui/infinite-moving-items";

function Tech({ mode = "dev" }: { mode?: "dev" | "ml" }) {
  const devTechs = [
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
    "express",
    "better-auth",
    "shadcn-ui",
    "pnpm",
    "bun",
    "yarn",
    "nuqs",
    "lucide",
    "n8n",
  ];

  const mlTechs = ["python", "mongodb", "n8n"];

  const techs = mode === "ml" ? mlTechs : devTechs;

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
    <div className="pt-2 md:pt-10 bg-background">
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
