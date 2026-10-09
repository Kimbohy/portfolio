import { InfiniteMovingItems } from "./ui/infinite-moving-items";

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

const mlTechs = [
  "python",
  "jupyter",
  "n8n",
  "scikit-learn",
  "pandas",
  "numpy",
  "seaborn",
  "pytorch",
  "tensorflow",
];

function Tech({ mode = "dev" }: { mode?: "dev" | "ml" }) {
  const techs = mode === "ml" ? mlTechs : devTechs;

  return (
    <div className="pt-2 md:pt-10 bg-background">
      <InfiniteMovingItems
        items={techs}
        suffix="_b"
        direction="left"
        speed="slow"
        className="mx-auto flex gap-2"
      />
    </div>
  );
}

export default Tech;
