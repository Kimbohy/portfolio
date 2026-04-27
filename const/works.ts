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

export const projects: ProjectData[] = [
  {
    title: "Cards-tor",
    description: "Card market place",
    longDescription:
      "A modern deck marketplace built with Next.js and Elysia. It features user authentication, product listings, back office management, and a beautiful dark mode. The platform use Elysia directly from the api routes in Next.js, showcasing seamless integration between frontend and backend.",
    imagePaths: [
      "/images/cards-tor/cards_tor1.png",
      "/images/cards-tor/cards_tor2.png",
      "/images/cards-tor/cards_tor3.png",
      "/images/cards-tor/cards_tor4.png",
    ],
    tech: [
      { name: "nextjs", isMain: true },
      { name: "elysia" },
      { name: "prisma" },
      { name: "shadcn-ui" },
      { name: "better-auth" },
      { name: "tailwindcss" },
      { name: "motion" },
      { name: "nuqs" },
      { name: "lucide" },
      { name: "bun" },
      { name: "postgreSQL" },
      { name: "typescript" },
      { name: "react" },
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
      { name: "react" },
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
  {
    title: "DoQuest",
    description: "A gamified todo app with a retro 8-bit RPG theme",
    longDescription:
      "DoQuest is a gamified todo app where users complete tasks as RPG-style quests. Each quest rewards EXP and gold, allowing players to level up and track their progress. Built with Flutter and Riverpod using clean architecture, it features a pixel-art UI, smooth animations, and local data persistence.",
    imagePaths: [
      "/images/doquest/do-quest1.png",
      "/images/doquest/do-quest2.png",
      "/images/doquest/do-quest3.png",
      "/images/doquest/do-quest4.png",
    ],
    tech: [{ name: "flutter", isMain: true }, { name: "dart" }],
    github: "https://github.com/Kimbohy/do_quest",
  },
  {
    title: "Lumos",
    description: "AI-powered smart home automation system",
    longDescription:
      "Lumos is a smart home project using vocal commands to control devices. It has two versions: one integrated with external LLM API and another using totally local AI with n8n, whisper, and models running on a local machine. The system allows users to manage their smart home devices through natural language commands, providing a seamless and efficient home automation experience.",
    imagePaths: ["/images/lumos/lumos.png"],
    tech: [
      { name: "n8n", isMain: true },
      { name: "python" },
      { name: "gemini" },
      { name: "flutter" },
      { name: "arduino" },
      { name: "dart" },
    ],
    github: "https://github.com/Kimbohy/lumos",
  },
];

export const mlProjects: ProjectData[] = [
  {
    title: "Credit Scoring",
    description:
      "Predicting loan default probability from customer financial data across African markets",
    longDescription:
      "Built a robust and generalisable machine learning pipeline to estimate the likelihood of loan default for both existing customers and new applicants. The challenge focused on highly diverse customer profiles and dynamic market conditions across Africa. Beyond prediction accuracy, the solution was designed to support production credit scoring by transforming model probabilities into practical risk bands and scalable score buckets for lending decisions.",
    imagePaths: ["/images/vgsales/vgsales1.png"],
    tech: [{ name: "python", isMain: true }, { name: "jupyter" }],
  },
  {
    title: "Lumos",
    description: "AI-powered smart home automation system",
    longDescription:
      "Lumos is a smart home project using vocal commands to control devices. It has two versions: one integrated with external LLM API and another using totally local AI with n8n, whisper, and models running on a local machine. The system allows users to manage their smart home devices through natural language commands, providing a seamless and efficient home automation experience.",
    imagePaths: ["/images/lumos/lumos.png"],
    tech: [
      { name: "n8n", isMain: true },
      { name: "python" },
      { name: "gemini" },
      { name: "flutter" },
      { name: "arduino" },
      { name: "dart" },
    ],
    github: "https://github.com/Kimbohy/lumos",
  },
];
