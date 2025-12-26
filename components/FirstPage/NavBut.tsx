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
  onClick,
}: {
  text: string;
  to: string;
  D_lay: number;
  onClick?: () => void;
}) {
  return (
    <motion.a
      href={to}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", stiffness: 40, delay: D_lay }}
      className="h-full group flex items-center justify-center"
      onClick={onClick}
    >
      <span className="relative inline-block cursor-pointer text-secondary text-base md:text-xl lg:text-2xl group-hover:translate-y-[-4px] transition-all duration-200">
        {text}
      </span>
    </motion.a>
  );
}

export default NavBut;
