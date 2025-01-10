import WorkCard from "./Work/WorkCard";

interface ProjectData {
  title: string;
  description: string;
  imagePaths: string[];
  tech: string[];
  github?: string;
  website?: string;
}

const projects: ProjectData[] = [
  {
    title: "Cards-tor",
    description: "Card market place",
    imagePaths: [
      "/src/assets/images/cards-tor/cards_tor1.png",
      "/src/assets/images/cards-tor/cards_tor2.png",
      "/src/assets/images/cards-tor/cards_tor3.png",
      "/src/assets/images/cards-tor/cards_tor4.png"
    ],
    tech: ["html", "css", "react"],
    github: "https://github.com/yourusername/cards-tor",
    website: "https://cards-tor-demo.com"
  },
  {
    title: "Sunnyside",
    description: "Landing page",
    imagePaths: [
      "/src/assets/images/sunnyside/sunnyside1.png",
      "/src/assets/images/sunnyside/sunnyside2.png",
      "/src/assets/images/sunnyside/sunnyside3.png",
      "/src/assets/images/sunnyside/sunnyside4.png"
    ],
    tech: ["html", "css", "javascript"],
    github: "https://github.com/yourusername/sunnyside"
  },
  {
    title: "Samba-web-UI",
    description: "A web UI for samba user management",
    imagePaths: [
      "/src/assets/images/sama_web_UI/smb1.png",
      "/src/assets/images/sama_web_UI/smb2.png",
      "/src/assets/images/sama_web_UI/smb3.png"
    ],
    tech: ["html", "css", "react", "php", "mysql", "bash"],
    github: "https://github.com/yourusername/samba-web-ui"
  }
];

function Work() {
  return (
    <>
      <h2 className="p-5 text-6xl text-second bg-slate-900">Work</h2>
      <div className="flex flex-col gap-24 bg-slate-900 h-max">
        {projects.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
    </>
  );
}

export default Work;
