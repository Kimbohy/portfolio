import { BookOpen } from "lucide-react";
import Messaging from "./Contact/Messaging";
import Image from "next/image";

function Contact({
  mode = "dev",
  sectionId = "contact",
}: {
  mode?: "dev" | "ml";
  sectionId?: string;
}) {
  return (
    <div id={sectionId} className="pt-20 bg-background">
      <h2 className="p-3 md:p-5 text-4xl md:text-6xl text-secondary bg-background">
        {mode === "ml" ? "Contact for ML" : "Contact"}
      </h2>
      {mode === "ml" && (
        <p className="px-3 md:px-5 text-secondary/80 bg-background text-base md:text-lg">
          Open to collaboration on intelligent products and AI systems.
        </p>
      )}
      <div className="flex flex-col min-h-screen bg-background pb-8">
        <Messaging />

        <div className="flex flex-col md:flex-row justify-end gap-7 p-2 md:p-5 mt-auto">
          <a
            href="https://github.com/Kimbohy"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/icons/github_b.svg"
              alt="GitHub"
              className="mt-1"
              width={16}
              height={16}
            />
            <span className="text-secondary text-sm md:text-base">
              /Kimbohy
            </span>
          </a>
          <a
            href="https://linkedin.com/in/lovatiana-rabarijaona"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-2 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/images/icons/linkedin.svg"
              alt="LinkedIn"
              width={16}
              height={16}
            />
            <span className="text-secondary text-sm md:text-base truncate">
              /in/lovatiana-rabarijaona
            </span>
          </a>
          <a
            href="/rickroll"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 md:gap-2 hover:opacity-80 transition-opacity"
          >
            <BookOpen size={16} className="text-secondary" />
            <span className="text-secondary text-sm md:text-base">
              /rickroll
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
