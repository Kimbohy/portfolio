"use client";
import { WorkTech } from "@/const/works";
import { TechImageWithTooltip } from "../ui/TechImage";
import { getTechByName, TechType, techTypeLabels } from "@/const/tech";
import { getMainTech } from "@/utils/tech.utils";
import { LayoutGroup, motion } from "motion/react";
import Image from "next/image";

interface TechListProps {
  tech: WorkTech[];
  techDetailsOpen: boolean;
  projectId: string;
}

export function TechList({ tech, techDetailsOpen, projectId }: TechListProps) {
  const renderTechImage = (t: WorkTech) => {
    const techData = getTechByName(t.name);
    const uniqueId = `${projectId}-${t.name}`;

    if (techDetailsOpen && techData) {
      return (
        <TechImageWithTooltip
          key={uniqueId}
          tech={techData}
          layoutId={uniqueId}
          className="w-7 h-7 md:w-9 md:h-9"
        />
      );
    } else {
      return (
        <motion.div
          key={uniqueId}
          layout="position"
          layoutId={uniqueId}
          transition={{
            layout: { duration: 0.4, ease: "easeInOut" },
          }}
          className="relative inline-block"
        >
          <Image
            src={`/images/icons/${t.name}.svg`}
            alt={t.name}
            width={36}
            height={36}
            className="w-7 h-7 md:w-9 md:h-9"
          />
        </motion.div>
      );
    }
  };

  if (!techDetailsOpen) {
    const mainTech = getMainTech(tech) || [];
    return <LayoutGroup>{mainTech.map(renderTechImage)}</LayoutGroup>;
  }

  // Group tech by type
  const groupedTech = tech.reduce(
    (acc, t) => {
      const techData = getTechByName(t.name);
      const type = techData?.type || "library";
      if (!acc[type]) {
        acc[type] = [];
      }
      acc[type].push(t);
      return acc;
    },
    {} as Record<TechType, WorkTech[]>,
  );

  const typeOrder: TechType[] = [
    "language",
    "framework",
    "library",
    "database",
    "auth",
    "tools",
  ];

  const sortedTypes = typeOrder.filter((type) => groupedTech[type]?.length > 0);

  return (
    <LayoutGroup>
      <div className="w-full p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {sortedTypes.map((type) => (
            <div key={type} className="flex flex-col">
              <h4 className="text-background/70 text-xs font-medium uppercase tracking-wider mb-1">
                {techTypeLabels[type]}
              </h4>
              <div className="w-full h-[1px] bg-background/20 mb-2" />
              <div className="flex flex-wrap gap-1">
                {groupedTech[type].map(renderTechImage)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </LayoutGroup>
  );
}
