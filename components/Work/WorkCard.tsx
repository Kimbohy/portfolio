"use client";
import Image from "next/image";
import WorkImages from "./WorkImages";
import { ProjectData } from "../Work";
import { useEffect, useRef, useState } from "react";
import { TechList } from "./TechList";

function WorkCard({
  title,
  description,
  longDescription,
  imagePaths,
  tech,
  github,
  website,
}: ProjectData) {
  const [techDetailsOpen, setTechDetailsOpen] = useState(false);
  const techRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Hover detection
  useEffect(() => {
    const techDiv = techRef.current;
    if (!techDiv) return;

    const handleMouseEnter = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setTechDetailsOpen(true);
    };

    const handleMouseLeave = () => {
      timeoutRef.current = setTimeout(() => {
        setTechDetailsOpen(false);
      }, 2000);
    };

    techDiv.addEventListener("mouseenter", handleMouseEnter);
    techDiv.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      techDiv.removeEventListener("mouseenter", handleMouseEnter);
      techDiv.removeEventListener("mouseleave", handleMouseLeave);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Click outside detection
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (techRef.current && !techRef.current.contains(event.target as Node)) {
        setTechDetailsOpen(false);
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
          timeoutRef.current = null;
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-end min-h-[24rem] gap-28 p-4 md:p-0">
      <div className="flex flex-col md:flex-row w-full md:pl-20 rounded-lg h-fit">
        <div className="relative w-full md:w-[700px] h-[300px] md:h-fit left-[-19px] md:left-[-80px] top-16">
          <WorkImages imagePaths={imagePaths} />
        </div>
        <div className="flex flex-col items-start p-4 md:p-10 mt-8 md:mt-0">
          <h3 className="text-3xl md:text-5xl text-secondary">{title}</h3>
          <p className="text-lg md:text-xl text-secondary mb-2">
            {description}
          </p>
          <p className="text-sm text-secondary/80 mb-4 max-w-md">
            {longDescription}
          </p>
          <div className="flex flex-wrap gap-4 mt-3 md:mt-5">
            {github && typeof github === "string" ? (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-background px-2 py-1 md:px-4 md:py-2 rounded-2xl hover:bg-opacity-80 transition-all text-sm md:text-base flex items-center gap-2 hover:scale-105"
              >
                <Image
                  src="/images/icons/github_bl.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                />
                GitHub
              </a>
            ) : Array.isArray(github) ? (
              github.map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-secondary text-background px-2 py-1 md:px-4 md:py-2 rounded-2xl hover:bg-opacity-80 transition-all text-sm md:text-base flex items-center gap-2 hover:scale-105"
                >
                  <Image
                    src="/images/icons/github_bl.svg"
                    alt={`GitHub Link ${index + 1}`}
                    width={16}
                    height={16}
                  />
                  GitHub {index + 1}
                </a>
              ))
            ) : null}
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-secondary text-background px-2 py-1 md:px-4 md:py-2 rounded-2xl hover:bg-opacity-80 transition-all text-sm md:text-base flex items-center gap-2 hover:scale-105"
              >
                <Image
                  src="/images/icons/glob.svg"
                  alt="Website"
                  width={20}
                  height={20}
                />
                Visit Site
              </a>
            )}
          </div>
          <div
            className={`bg-secondary rounded-2xl mt-4 md:mt-5 transition-all duration-300 ${
              techDetailsOpen
                ? "w-full md:w-[400px] p-0"
                : "w-full md:w-fit px-2 py-[5px] flex flex-wrap gap-1 justify-center items-center md:justify-start"
            }`}
            ref={techRef}
          >
            <TechList
              tech={tech}
              techDetailsOpen={techDetailsOpen}
              projectId={title}
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[2px] bg-secondary opacity-50"></div>
    </div>
  );
}

export default WorkCard;
