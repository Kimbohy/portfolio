"use client";

import { useMode } from "@/context/PortfolioMode";
import styles from "./ModeToggle.module.css";

export default function ModeToggle() {
  const { mode, toggle } = useMode();

  return (
    <button
      onClick={toggle}
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
    </button>
  );
}
