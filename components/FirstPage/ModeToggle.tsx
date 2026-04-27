"use client";

import { motion } from "motion/react";
import { useMode } from "@/context/PortfolioMode";
import styles from "./ModeToggle.module.css";

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

export default function ModeToggle() {
  const { mode, toggle } = useMode();

  return (
    <motion.button
      onClick={toggle}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={{ type: "spring", stiffness: 40, delay: 0.35 }}
      className={`${styles.toggle} ${mode === "ml" ? styles.mlActive : ""}`}
      aria-label={`Switch to ${mode === "dev" ? "ML" : "DEV"} mode`}
      type="button"
    >
      <span className={styles.slider} aria-hidden="true" />

      <span
        className={`${styles.label} ${mode === "dev" ? styles.labelActive : ""}`}
      >
        DEV
      </span>
      <span
        className={`${styles.label} ${mode === "ml" ? styles.labelActive : ""}`}
      >
        ML
      </span>
    </motion.button>
  );
}
