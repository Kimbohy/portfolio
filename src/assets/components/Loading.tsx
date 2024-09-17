import { motion } from "framer-motion";

export const InfiniteAnimation = () => (
  <motion.div
    animate={{
      scale: [1, 1.1, 1.1, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
    transition={{
      duration: 2,
      repeat: Infinity,
      repeatDelay: 5,
      ease: "easeInOut",
    }}
    className="bg-second w-3 h-3"
  />
);

function Loading() {
  return (
    <div className="loading w-full h-full absolute z-50 flex items-end p-10">
      <InfiniteAnimation/>
    </div>
  );
}

export default Loading;
