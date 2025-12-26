"use client";
import Image from "next/image";
import WorkImages from "./WorkImages";
import { ProjectData } from "../Work";

function WorkCard({
  title,
  description,
  longDescription,
  imagePaths,
  tech,
  github,
  website,
}: ProjectData) {
  return (
    <div className="flex flex-col items-center justify-end min-h-[24rem] gap-28 p-4 md:p-0">
      <div className="flex flex-col md:flex-row w-full md:pl-20 rounded-lg h-fit">
        <div className="relative w-full md:w-[700px] h-[300px] md:h-fit left-[-19px] md:left-[-80px] top-16 md:top-0">
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
          <div className="bg-secondary w-full md:w-64 h-11 rounded-2xl mt-4 md:mt-5 px-2 py-[5px] flex flex-wrap gap-1 justify-center md:justify-start">
            {tech.map((t, index) => (
              <Image
                key={index} // Add a unique key for each icon
                src={`/images/icons/${t}.svg`}
                alt={t}
                width={36} // Set width property
                height={36} // Set height property
                className="w-7 h-7 md:w-9 md:h-9"
              />
            ))}
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2 h-[2px] bg-secondary opacity-50"></div>
    </div>
  );
}

export default WorkCard;
