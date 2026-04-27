"use client";

import { useEffect } from "react";
import Header from "@/components/FirstPage/Header";
import DevPortfolio from "@/components/DevPortfolio";
import MLPortfolio from "@/components/MLPortfolio";
import { useMode } from "@/context/PortfolioMode";
import styles from "./page.module.css";

const DEV_SECTION_IDS = new Set(["top", "about", "work", "contact"]);
const ML_SECTION_IDS = new Set(["top-ml", "about-ml", "work-ml", "contact-ml"]);

export default function Home() {
  const { mode, setMode } = useMode();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const { hash } = window.location;
    if (!hash) return;

    const rawId = hash.replace("#", "");
    const isMlHash = rawId.endsWith("-ml");
    const baseId = isMlHash ? rawId.replace(/-ml$/, "") : rawId;

    if (!DEV_SECTION_IDS.has(baseId) && !ML_SECTION_IDS.has(rawId)) return;

    const targetMode = isMlHash ? "ml" : "dev";
    if (targetMode !== mode) {
      setMode(targetMode);
    }

    const normalizedId = targetMode === "ml" ? `${baseId}-ml` : baseId;
    if (rawId !== normalizedId) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}#${normalizedId}`,
      );
      const targetEl = document.getElementById(normalizedId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [mode, setMode]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const clearHash = () => {
      const { hash, pathname, search } = window.location;
      if (!hash) return;

      const rawId = hash.replace("#", "");
      const baseId = rawId.endsWith("-ml") ? rawId.replace(/-ml$/, "") : rawId;

      if (!DEV_SECTION_IDS.has(baseId) && !ML_SECTION_IDS.has(rawId)) return;

      window.setTimeout(() => {
        window.history.replaceState(null, "", `${pathname}${search}`);
      }, 400);
    };

    window.addEventListener("hashchange", clearHash);
    clearHash();

    return () => {
      window.removeEventListener("hashchange", clearHash);
    };
  }, []);

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
