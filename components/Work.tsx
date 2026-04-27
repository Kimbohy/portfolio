import { mlProjects, projects } from "@/const/works";
import WorkCard from "./Work/WorkCard";

function Work({
  mode = "dev",
  sectionId = "work",
}: {
  mode?: "dev" | "ml";
  sectionId?: string;
}) {
  const workList = mode === "ml" ? mlProjects : projects;

  return (
    <div id={sectionId} className="pt-20 md:pt-24 bg-background">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl text-secondary bg-background">
        Work
      </h2>
      <div className="flex flex-col gap-16 md:gap-24 bg-background h-max pt-8 md:pt-16 ">
        {workList.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
