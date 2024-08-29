import clsx from "clsx";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

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

function Cart({ title, description, position }) {
  const ref = useRef(null); 
  const isInView = useInView(ref, { once: true }); 

  const class_name = clsx(
    "w-56 h-72 p-6 bg-third flex flex-col gap-5 rounded-2xl cursor-default relative",
    position ? "left-[-11rem]" : "left-44"
  );
  const finalPosition = position ? "hidden_l" : "hidden_r";

  return (
    <motion.div
      ref={ref} 
      variants={containerVariants}
      initial={finalPosition}
      animate={isInView ? "visible" : finalPosition} 
      className={class_name}
    >
      <h3 className="text-white text-3xl underline underline-offset-auto">
        {title}
      </h3>
      <p className="text-white text-1xl">{description}</p>
    </motion.div>
  );
}

export default Cart;
