import { mlProjects, projects } from "@/const/works";
import WorkCard from "./Work/WorkCard";

function Work({
  mode = "dev",
  sectionId = "work",
}: {
  mode?: "dev" | "ml";
  sectionId?: string;
}) {
  const title = mode === "ml" ? "ML Work" : "Work";
  const workList = mode === "ml" ? mlProjects : projects;

  return (
    <div id={sectionId} className="pt-20 md:pt-24 bg-background">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl text-secondary bg-background">
        {title}
      </h2>
      {mode === "ml" && (
        <p className="px-3 md:px-5 text-secondary/80 bg-background text-base md:text-lg">
          AI-oriented builds with production-grade web engineering.
        </p>
      )}
      <div className="flex flex-col gap-16 md:gap-24 bg-background h-max pt-8 md:pt-16 ">
        {workList.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
