"use client";

import { useEffect } from "react";
import { useMode, type Mode } from "@/context/PortfolioMode";

const BASE_SECTION_IDS = new Set(["top", "about", "work", "contact"]);

/** "about-ml" -> { targetMode: "ml" } ; null si ce n'est pas une section connue */
function parseSectionHash(hash: string): { targetMode: Mode } | null {
  const rawId = hash.replace("#", "");
  const isMl = rawId.endsWith("-ml");
  const baseId = isMl ? rawId.slice(0, -3) : rawId;

  if (!BASE_SECTION_IDS.has(baseId)) return null;
  return { targetMode: isMl ? "ml" : "dev" };
}

/**
 * Gère les liens d'ancre (#about, #work-ml, ...) :
 *  - bascule dans le bon mode si le hash l'exige
 *  - nettoie le hash de l'URL après la navigation
 */
export default function HashSync() {
  const { mode, setMode } = useMode();

  useEffect(() => {
    const parsed = parseSectionHash(window.location.hash);
    if (parsed && parsed.targetMode !== mode) setMode(parsed.targetMode);
  }, [mode, setMode]);

  useEffect(() => {
    const clearHash = () => {
      const { hash, pathname, search } = window.location;
      if (!parseSectionHash(hash)) return;

      window.setTimeout(() => {
        window.history.replaceState(null, "", `${pathname}${search}`);
      }, 400);
    };

    window.addEventListener("hashchange", clearHash);
    clearHash();
    return () => window.removeEventListener("hashchange", clearHash);
  }, []);

  return null;
}
