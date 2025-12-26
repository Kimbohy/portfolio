export interface Tech {
  tech: string;
  name: string;
  desc: string;
  link: string;
}

const techList: Tech[] = [
  {
    tech: "angular",
    name: "Angular",
    desc: "A JavaScript framework for building web applications.",
    link: "https://angular.dev/",
  },
  {
    tech: "bash",
    name: "Bash",
    desc: "A Unix shell and command language.",
    link: "https://www.gnu.org/software/bash/",
  },
  {
    tech: "better-auth",
    name: "Better Auth",
    desc: "An authentication library for TypeScript.",
    link: "https://www.better-auth.com/",
  },
  {
    tech: "c",
    name: "C",
    desc: "A general-purpose programming language.",
    link: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    tech: "chartjs",
    name: "Chart.js",
    desc: "A simple and flexible JavaScript charting library",
    link: "https://www.chartjs.org/",
  },
  {
    tech: "cpp",
    name: "C++",
    desc: "A general-purpose programming language with performance in mind.",
    link: "https://en.cppreference.com/w/",
  },
  {
    tech: "css",
    name: "CSS",
    desc: "Style sheet language used for describing the presentation of a document.",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    tech: "express",
    name: "Express",
    desc: "Fast, unopinionated, minimalist web framework for Node.js.",
    link: "https://expressjs.com/",
  },
  {
    tech: "figma",
    name: "Figma",
    desc: "A web-based design tool for UI/UX collaboration.",
    link: "https://www.figma.com/",
  },
  {
    tech: "git",
    name: "Git",
    desc: "A distributed version-control system for tracking changes.",
    link: "https://git-scm.com/",
  },
  {
    tech: "github",
    name: "GitHub",
    desc: "A platform for hosting and reviewing code, managing projects, and building software.",
    link: "https://github.com/",
  },
  {
    tech: "html",
    name: "HTML",
    desc: "The standard markup language for documents designed to be displayed in a web browser.",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    tech: "java",
    name: "Java",
    desc: "A class-based, object-oriented programming language.",
    link: "https://www.java.com/",
  },
  {
    tech: "javascript",
    name: "JavaScript",
    desc: "A high-level, often just-in-time compiled, and multi-paradigm programming language.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    tech: "mongodb",
    name: "MongoDB",
    desc: "A document-oriented NoSQL database.",
    link: "https://www.mongodb.com/",
  },
  {
    tech: "motion",
    name: "Motion",
    desc: "A production-grade animation library for the web.",
    link: "https://motion.dev/",
  },
  {
    tech: "mysql",
    name: "MySQL",
    desc: "An open-source relational database management system.",
    link: "https://www.mysql.com/",
  },
  {
    tech: "nestjs",
    name: "NestJS",
    desc: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.",
    link: "https://nestjs.com/",
  },
  {
    tech: "nextAuth",
    name: "NextAuth.js",
    desc: "Authentication for Next.js applications.",
    link: "https://next-auth.js.org/",
  },
  {
    tech: "nextjs",
    name: "Next.js",
    desc: "The React framework for production.",
    link: "https://nextjs.org/",
  },
  {
    tech: "nodejs",
    name: "Node.js",
    desc: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
    link: "https://nodejs.org/",
  },
  {
    tech: "php",
    name: "PHP",
    desc: "A popular general-purpose scripting language especially suited to web development.",
    link: "https://www.php.net/",
  },
  {
    tech: "powershell",
    name: "PowerShell",
    desc: "A task automation and configuration management framework from Microsoft.",
    link: "https://learn.microsoft.com/powershell/",
  },
  {
    tech: "prisma",
    name: "Prisma ORM",
    desc: "A next-generation ORM for Node.js and TypeScript.",
    link: "https://www.prisma.io/docs/orm",
  },
  {
    tech: "react",
    name: "React",
    desc: "A JavaScript library for building user interfaces.",
    link: "https://react.dev/",
  },
  {
    tech: "redis",
    name: "Redis",
    desc: "An in-memory data structure store used as a database, cache and message broker.",
    link: "https://redis.io/",
  },
  {
    tech: "shadcn-ui",
    name: "shadcn/ui",
    desc: "A component library for building user interfaces.",
    link: "https://ui.shadcn.com/",
  },
  {
    tech: "socket.io",
    name: "Socket.IO",
    desc: "A library that enables low-latency, bidirectional and event-based communication.",
    link: "https://socket.io/",
  },
  {
    tech: "tailwindcss",
    name: "Tailwind CSS",
    desc: "A utility-first CSS framework for rapidly building custom user interfaces.",
    link: "https://tailwindcss.com/",
  },
  {
    tech: "typescript",
    name: "TypeScript",
    desc: "A typed superset of JavaScript that makes JavaScript my favorite language.",
    link: "https://www.typescriptlang.org/",
  },
  {
    tech: "webrtc",
    name: "WebRTC",
    desc: "An open framework for the web that enables Real-Time Communications (RTC).",
    link: "https://webrtc.org/",
  },
  {
    tech: "dotnet",
    name: ".NET",
    desc: "A free, open-source, cross-platform framework for building modern apps and powerful cloud services.",
    link: "https://dotnet.microsoft.com/",
  },
];

export default techList;

export function getTechByName(techName: string): Tech | undefined {
  const tech = techList.find((t) => t.tech === techName);
  if (!tech) {
    console.warn(`Tech with name "${techName}" not found.`);
    return undefined;
  }
  return tech;
}
