import { motion } from "framer-motion";

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
  // to,
  D_lay,
}: {
  text: string;
  to?: string;
  D_lay: number;
}) {
  return (
    <motion.span
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      whileHover={{
        scale: 1.1,
        transition: { stiffness: 300 },
      }}
      transition={{ type: "spring", stiffness: 40, delay: D_lay }}
      className="relative inline-block cursor-default text-second"
    >
      {text}
    </motion.span>
  );
}

export default NavBut;
