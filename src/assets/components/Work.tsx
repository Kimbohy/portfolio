import WorkCard from "./Work/WorkCard";

interface ProjectData {
  title: string;
  description: string;
  longDescription: string; // Added this field
  imagePaths: string[];
  tech: string[];
  github?: string;
  website?: string;
}

const projects: ProjectData[] = [
  {
    title: "Cards-tor",
    description: "Card market place",
    longDescription: "A modern card marketplace platform built with React. Features include real-time card trading, advanced search filters, and secure payment integration. Users can browse, buy, sell, and trade collectible cards in a responsive interface.",
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
    longDescription: "A vibrant and modern landing page showcasing creative agency services. Built with responsive design principles and smooth animations. Features include dynamic content sections and optimized performance.",
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
    longDescription: "A comprehensive web interface for Samba server management. Built with React and PHP, it provides simple user management, file sharing controls, and system monitoring. Features include user authentication, access control, and real-time status updates.",
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
    <div id="work">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl text-second bg-slate-900">Work</h2>
      <div className="flex flex-col gap-16 md:gap-24 bg-slate-900 h-max pt-8 md:pt-16 overflow-hidden">
        {projects.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
