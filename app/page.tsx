"use client";

import Header from "@/components/FirstPage/Header";
import DevPortfolio from "@/components/DevPortfolio";
import MLPortfolio from "@/components/MLPortfolio";
import { useMode } from "@/context/PortfolioMode";
import styles from "./page.module.css";

export default function Home() {
  const { mode } = useMode();

  return (
    <main className={styles.main}>
      <Header />

      <div aria-live="polite" className="sr-only">
        {mode === "dev" ? "Development mode enabled" : "ML mode enabled"}
      </div>

      <div className={styles.scene} data-mode={mode}>
        <div className={`${styles.panel} ${styles.panelDev}`}>
          <DevPortfolio />
        </div>

        <div className={`${styles.panel} ${styles.panelMl}`}>
          <MLPortfolio />
        </div>
      </div>
    </main>
  );
}
