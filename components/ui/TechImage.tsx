import { Tech } from "@/const/tech";
import Image from "next/image";
import { motion } from "motion/react";

interface TechImageProps {
  tech: string;
  className?: string;
  layoutId?: string;
}

export default function TechImage({
  tech,
  className,
  layoutId,
}: TechImageProps) {
  return (
    <motion.div
      layout="position"
      layoutId={layoutId || `tech-${tech}`}
      transition={{
        layout: { duration: 0.4, ease: "easeInOut" },
      }}
      className="relative group inline-block"
    >
      <Image
        src={`/images/icons/${tech}.svg`}
        alt={tech}
        width={36}
        height={36}
        className={
          className + " cursor-pointer hover:translate-y-[-2px] transition-all"
        }
      />
    </motion.div>
  );
}

function TooltipContent({ tech }: { tech: Tech }) {
  return (
    <div className="p-3 max-w-xs">
      <h3 className="font-semibold text-lg mb-1 text-secondary">{tech.name}</h3>
      <p className="text-sm text-gray-300">{tech.desc}</p>
    </div>
  );
}

interface TechImageWithTooltipProps {
  tech: Tech;
  className?: string;
  layoutId?: string;
}

export function TechImageWithTooltip({
  tech,
  className,
  layoutId,
}: TechImageWithTooltipProps) {
  return (
    <motion.div
      layout="position"
      layoutId={layoutId || `tech-${tech.tech}`}
      transition={{
        layout: { duration: 0.4, ease: "easeInOut" },
      }}
      className="relative group inline-block"
    >
      {/* Tech Image */}
      <Image
        src={`/images/icons/${tech.tech}.svg`}
        alt={tech.name}
        width={36}
        height={36}
        className={
          className + " cursor-pointer hover:translate-y-[-2px] transition-all"
        }
        onClick={() => {
          window.open(tech.link, "_blank");
        }}
      />

      {/* Tooltip */}
      <div
        role="tooltip"
        className="
          absolute left-1/2 -translate-x-1/2 bottom-full mb-2
          opacity-0 invisible group-hover:opacity-100 group-hover:visible
          transition-all duration-500 ease-in-out
          bg-gray-900 border border-gray-700 rounded-lg shadow-xl
          z-50 pointer-events-none group-hover:pointer-events-auto
          min-w-max delay-150
        "
      >
        <TooltipContent tech={tech} />
        {/* Tooltip Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-gray-700" />
      </div>
    </motion.div>
  );
}
