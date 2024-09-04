import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CardSpotlight } from "./ui/card-spotlight";

const containerVariants = {
  hidden_l: {
    opacity: 0,
    x: "-10vw",
  },
  hidden_r: {
    opacity: 0,
    x: "10vw",
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      delay: 0.5,
      stiffness: 30,
    },
  },
};

function Card({ title, description, position }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const class_name = clsx(
    "w-56 cursor-default relative rounded-xl",
    position ? "left-[-12rem]" : "left-48"
  );

  const finalPosition = position ? "hidden_l" : "hidden_r";

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial={finalPosition}
      animate={isInView ? "visible" : finalPosition}
      className={class_name}
      style={{
        backgroundColor: "rgb(38, 38, 38)",
        maskImage: "radial-gradient(350px at 97.5px 107px, white, transparent 80%)",
      }}
    >
      <CardSpotlight className="p-6 flex flex-col gap-5 h-72 rounded-xl">
        <h3 className="text-second text-3xl underline underline-offset-auto z-30">
          {title}
        </h3>
        <p className="text-second text-1xl z-30">{description}</p>
      </CardSpotlight>
    </motion.div>
  );
}

export default Card;
