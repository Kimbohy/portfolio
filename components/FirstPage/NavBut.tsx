import { motion } from "motion/react";

const containerVariants = {
  hidden: {
    opacity: 0,
    scale: 1,
    y: "-10vh",
  },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function NavBut({
  text,
  to,
  D_lay,
}: {
  text: string;
  to: string;
  D_lay: number;
}) {
  return (
    <motion.a
      href={to}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.1,
        transition: { stiffness: 300 },
      }}
      transition={{ type: "spring", stiffness: 40, delay: D_lay }}
      className="relative inline-block cursor-pointer text-secondary text-base md:text-xl lg:text-2xl"
    >
      {text}
    </motion.a>
  );
}

export default NavBut;
