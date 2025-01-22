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
    longDescription:
      "A modern card marketplace platform built with React. Features include real-time card trading, advanced search filters, and secure payment integration. Users can browse, buy, sell, and trade collectible cards in a responsive interface.",
    imagePaths: [
      "/images/cards-tor/cards_tor1.png",
      "/images/cards-tor/cards_tor2.png",
      "/images/cards-tor/cards_tor3.png",
      "/images/cards-tor/cards_tor4.png",
    ],
    tech: ["react", "css", "javascript"],
    github: "https://github.com/Kimbohy/card",
    // website: "https://cards-tor-demo.com",
  },
  {
    title: "Sunnyside",
    description: "Landing page",
    longDescription:
      "A vibrant and modern landing page showcasing creative agency services. Built with responsive design principles and smooth animations. Features include dynamic content sections and optimized performance.",
    imagePaths: [
      "/images/sunnyside/sunnyside1.png",
      "/images/sunnyside/sunnyside2.png",
      "/images/sunnyside/sunnyside3.png",
      "/images/sunnyside/sunnyside4.png",
    ],
    tech: ["html", "css", "javascript"],
    github: "https://github.com/yourusername/sunnyside",
  },
  {
    title: "Samba-web-UI",
    description: "A web UI for samba user management",
    longDescription:
      "A comprehensive web interface for Samba server management. Built with React and PHP, it provides simple user management, file sharing controls, and system monitoring. Features include user authentication, access control, and real-time status updates.",
    imagePaths: [
      "/images/sama_web_UI/smb1.png",
      "/images/sama_web_UI/smb2.png",
      "/images/sama_web_UI/smb3.png",
    ],
    tech: ["react", "css", "php", "mysql", "bash"],
    github: "https://github.com/yourusername/samba-web-ui",
  },
  {
    title: "Ta Lenta",
    description: "Collaborative platform for learning and innovation",
    longDescription:
      "talenta is a collaborative platform designed to foster learning, innovation, and community engagement across various domains. It provides a space for users to share projects, learn new skills, and connect with like-minded individuals. Key capabilities include user authentication, domain creation, project sharing, collaborative interactions, notifications system, and profile management.",
    imagePaths: [
      "/images/talenta/talenta1.png",
      "/images/talenta/talenta2.png",
      "/images/talenta/talenta3.png",
      "/images/talenta/talenta4.png",
    ],
    tech: ["nextjs", "tailwindcss", "nextAuth", "motion", "nodejs"],
    github: "https://github.com/Kimbohy/devzilla",
    website: "https://devzilla-97iv.vercel.app",
  },
];

function Work() {
  return (
    <div id="work" className="pt-20 md:pt-24">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl text-second bg-slate-900">
        Work
      </h2>
      <div className="flex flex-col gap-16 md:gap-24 bg-slate-900 h-max pt-8 md:pt-16 overflow-hidden">
        {projects.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
