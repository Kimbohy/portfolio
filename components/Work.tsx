import WorkCard from "./Work/WorkCard";

export interface WorkTech {
  name: string;
  isMain?: boolean;
}

export interface ProjectData {
  title: string;
  description: string;
  longDescription: string; // Added this field
  imagePaths: string[];
  tech: WorkTech[];
  github?: string | string[];
  website?: string;
  key?: number;
}

const projects: ProjectData[] = [
  {
    title: "Cards-tor",
    description: "Card market place",
    longDescription:
      "A modern card marketplace platform built with React. Features include real-time card trading, advanced search filters. Users can browse, buy, sell, and trade collectible cards in a responsive interface.",
    imagePaths: [
      "/images/cards-tor/cards_tor1.png",
      "/images/cards-tor/cards_tor2.png",
      "/images/cards-tor/cards_tor3.png",
      "/images/cards-tor/cards_tor4.png",
    ],
    tech: [
      { name: "react", isMain: true },
      { name: "css" },
      { name: "javascript" },
    ],
    github: "https://github.com/Kimbohy/Cards-tor",
    website: "https://cards-tor.vercel.app",
  },
  {
    title: "Whatapp",
    description: "Real-time messaging application",
    longDescription:
      "Whatapp is a real-time messaging platform inspired by WhatsApp, built with React and NestJS. It integrates MongoDB for data storage and Redis for caching, while leveraging Socket.io for real-time communication. The application provides user authentication, chat creation, message exchange, and live updates, offering a practical learning experience in scalable backend architecture and modern frontend development.",
    imagePaths: [
      "/images/whatapp/whatapp1.png",
      "/images/whatapp/whatapp2.png",
      "/images/whatapp/whatapp3.png",
      "/images/whatapp/whatapp4.png",
    ],
    tech: [
      { name: "react", isMain: true },
      { name: "nestjs", isMain: true },
      { name: "mongodb" },
      { name: "redis" },
      { name: "socket.io" },
      { name: "tailwindcss" },
    ],
    github: "https://github.com/Kimbohy/whatapp",
    // website: "https://whatapp.vercel.app",
  },

  {
    title: "Video Games Sales Analytics",
    description: "Web application for analyzing video game sales data",
    longDescription:
      "Video Games Sales Analytics is a web application built with React and .NET that leverages a Kaggle dataset containing video game sales statistics. The platform allows users to visualize data through interactive charts, perform searches, and explore trends in the video game market across regions, platforms, and genres. Key features include dynamic filtering, graphical insights, and data-driven exploration tools for better understanding of the gaming industry.",
    imagePaths: [
      "/images/vgsales/vgsales1.png",
      "/images/vgsales/vgsales2.png",
      "/images/vgsales/vgsales3.png",
      "/images/vgsales/vgsales4.png",
    ],
    tech: [
      { name: "react", isMain: true },
      { name: "dotnet" },
      { name: "tailwindcss" },
      { name: "chartjs" },
      { name: "motion" },
      { name: "mysql" },
      { name: "typescript" },
      { name: "csharp" },
    ],
    github: "https://github.com/Kimbohy/video_game_sales_analytics_platform",
  },
  {
    title: "Ta Lenta",
    description: "Collaborative platform for learning and innovation",
    longDescription:
      "Ta Lenta is a collaborative platform designed to foster learning, innovation, and community engagement across various domains. It provides a space for users to share projects, learn new skills, and connect with like-minded individuals. Key capabilities include user authentication, domain creation, project sharing, collaborative interactions, notifications system, and profile management.",
    imagePaths: [
      "/images/talenta/talenta1.png",
      "/images/talenta/talenta2.png",
      "/images/talenta/talenta3.png",
      "/images/talenta/talenta4.png",
    ],
    tech: [
      { name: "nextjs", isMain: true },
      { name: "tailwindcss" },
      { name: "nextAuth" },
      { name: "motion" },
      { name: "nodejs" },
      { name: "typescript" },
    ],
    github: "https://github.com/Kimbohy/devzilla",
    website: "https://devzilla-97iv.vercel.app",
  },
  {
    title: "Rahona",
    description: "Cloud gaming platform",
    longDescription:
      "Rahona is a cloud gaming platform that allows users to stream and play video games directly from the cloud. The platform uses Libretro for game emulation, enabling users to access a wide range of games without the need for high-end hardware. Key features include user authentication, game library management, real-time playing,command mapping, and game state saving.",
    imagePaths: [
      "/images/rahona/rahona1.png",
      "/images/rahona/rahona2.png",
      "/images/rahona/rahona3.png",
      "/images/rahona/rahona4.png",
    ],
    tech: [
      { name: "react", isMain: true },
      { name: "nestjs", isMain: true },
      { name: "cpp", isMain: true },
      { name: "webrtc" },
      { name: "socket.io" },
      { name: "tailwindcss" },
      { name: "prisma" },
      { name: "postgreSQL" },
      { name: "motion" },
      { name: "typescript" },
    ],
    github: [
      "https://github.com/Kimbohy/rahona-client",
      "https://github.com/Kimbohy/rahona-server",
    ],
  },
];

function Work() {
  return (
    <div id="work" className="pt-20 md:pt-24">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl text-secondary bg-background">
        Work
      </h2>
      <div className="flex flex-col gap-16 md:gap-24 bg-background h-max pt-8 md:pt-16 ">
        {projects.map((project, index) => (
          <WorkCard key={index} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Work;
