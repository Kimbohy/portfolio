"use client";

import type { ReactNode } from "react";
import { useMode } from "@/context/PortfolioMode";
import styles from "./ModeScene.module.css";

/**
 * Affiche les deux portfolios (Dev / ML) et anime la transition entre les deux.
 * Les panneaux reçoivent leur contenu en `props` : ils restent des Server
 * Components, seul ce wrapper est côté client.
 */
export default function ModeScene({
  dev,
  ml,
}: {
  dev: ReactNode;
  ml: ReactNode;
}) {
  const { mode } = useMode();

  return (
    <>
      <div aria-live="polite" className="sr-only">
        {mode === "dev" ? "Development mode enabled" : "ML mode enabled"}
      </div>

      <div className={styles.scene} data-mode={mode}>
        {/* `inert` : le panneau masqué n'est plus focusable ni lu par les lecteurs d'écran */}
        <div
          className={`${styles.panel} ${styles.panelDev}`}
          inert={mode !== "dev"}
        >
          {dev}
        </div>
        <div
          className={`${styles.panel} ${styles.panelMl}`}
          inert={mode !== "ml"}
        >
          {ml}
        </div>
      </div>
    </>
  );
}
