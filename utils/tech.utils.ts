import { WorkTech } from "@/components/Work";

export const getMainTech = (tech: WorkTech[], max = 5): WorkTech[] | null => {
  const mainTech = tech.filter((t) => t.isMain);
  if (mainTech.length < max) {
    const remainingTech = tech.filter((t) => !t.isMain);
    const techs = [
      ...mainTech,
      ...remainingTech.slice(0, max - mainTech.length),
    ];
    return techs;
  }
  return mainTech.slice(0, max);
};
