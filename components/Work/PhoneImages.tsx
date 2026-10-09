import { motion } from "motion/react";
import Image from "next/image";
import { useImageStack } from "./useImageStack";

const MotionDiv = motion.div;

/** Ratio d'une capture mobile (largeur / hauteur), ex. 1008 × 2244. */
const PHONE_RATIO = 1008 / 2244;
/** Part visible (en % de la largeur d'un téléphone) de chaque téléphone placé derrière. */
const VISIBLE_PART = 0.28;
/** Marge intérieure du panneau (doit correspondre à `p-4`, gauche + droite). */
const PANEL_PADDING = "2rem";

/**
 * Pile de captures MOBILE.
 *
 * Le panneau a exactement les mêmes dimensions que la pile web (3:2 sur desktop),
 * donc la carte ne change pas de hauteur. Les téléphones sont affichés en éventail,
 * centrés, avec la même interaction que la pile web (clic = mettre devant,
 * glisser = image suivante).
 *
 * Les tailles sont calculées en CSS (unités `cqh` / `cqw` du conteneur) : aucun
 * calcul en JavaScript, aucun ResizeObserver.
 */
export default function PhoneImages({ imagePaths }: { imagePaths: string[] }) {
  const { images, isExchanging, bringToFront, rotate } =
    useImageStack(imagePaths);

  const phoneWidth = `(100cqh * ${PHONE_RATIO})`;
  // Décalage entre deux téléphones, réduit automatiquement s'il y en a beaucoup
  const gaps = Math.max(images.length - 1, 1);
  const step = `max(1.25rem, min(${phoneWidth} * ${VISIBLE_PART}, (100cqw - ${PANEL_PADDING} - ${phoneWidth}) / ${gaps}))`;

  return (
    <div className="flex justify-center items-stretch w-full md:w-[600px] aspect-square md:aspect-[3/2] p-4 rounded-xl bg-secondary/5 ring-1 ring-secondary/10 overflow-hidden [container-type:size] mt-20 ml-4">
      {images.map((image, index) => {
        const brightness = 1 / (1 + index * 0.7);
        return (
          <MotionDiv
            key={image}
            layout
            className="relative shrink-0 h-full rounded-[1.75rem] border-[5px] border-neutral-800 bg-black overflow-hidden shadow-xl cursor-pointer select-none"
            style={{
              aspectRatio: PHONE_RATIO,
              marginLeft: index === 0 ? 0 : `calc(${step} - ${phoneWidth})`,
              zIndex: 10 - index,
              filter: `brightness(${brightness})`,
            }}
            onClick={() => bringToFront(index)}
            animate={{ opacity: isExchanging ? 0.5 : 1 }}
            transition={{ duration: 0.3 }}
            whileHover={index !== 0 ? { x: 8 } : undefined}
            drag={index === 0 && images.length > 1 ? "x" : false}
            dragSnapToOrigin
            dragConstraints={{ left: -120, right: 120 }}
            dragElastic={0.1}
            onDragEnd={(_event, info) => {
              if (index === 0 && Math.abs(info.offset.x) > 40) rotate();
            }}
          >
            <Image
              src={image}
              alt="Mobile app screenshot"
              fill
              className="object-cover"
              loading={index === 0 ? "eager" : "lazy"}
              sizes="(min-width: 768px) 180px, 45vw"
              draggable={false}
            />
          </MotionDiv>
        );
      })}
    </div>
  );
}
