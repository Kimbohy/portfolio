"use client";

import {
  createContext,
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { parseAsStringLiteral, useQueryState } from "nuqs";

export const MODES = ["dev", "ml"] as const;
export type Mode = (typeof MODES)[number];

const modeParser = parseAsStringLiteral(MODES)
  .withDefault("dev")
  .withOptions({ history: "replace", shallow: true, clearOnDefault: true });

type UrlSetter = (mode: Mode) => unknown;

interface ModeContextType {
  mode: Mode;
  toggle: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType | null>(null);

/**
 * Synchronise le mode avec le paramètre d'URL `?mode=ml`.
 *
 * Ce composant est le SEUL à lire les search params. Il est isolé dans son
 * propre <Suspense> : sans ça, `useSearchParams` (utilisé en interne par nuqs)
 * force Next.js à rendre TOUTE la page côté client (bailout CSR).
 */
function ModeUrlSync({
  onUrlModeChange,
  registerUrlSetter,
}: {
  onUrlModeChange: (mode: Mode) => void;
  registerUrlSetter: (setter: UrlSetter | null) => void;
}) {
  const [urlMode, setUrlMode] = useQueryState("mode", modeParser);

  useEffect(() => {
    registerUrlSetter(setUrlMode);
    return () => registerUrlSetter(null);
  }, [registerUrlSetter, setUrlMode]);

  // URL -> état (arrivée sur ?mode=ml, retour arrière, etc.)
  useEffect(() => {
    onUrlModeChange(urlMode);
  }, [urlMode, onUrlModeChange]);

  return null;
}

export function PortfolioProvider({ children }: { children: ReactNode }) {
  // Le rendu serveur démarre toujours en "dev" ; l'URL est appliquée après hydratation.
  const [mode, setModeState] = useState<Mode>("dev");
  const urlSetterRef = useRef<UrlSetter | null>(null);

  const registerUrlSetter = useCallback((setter: UrlSetter | null) => {
    urlSetterRef.current = setter;
  }, []);

  // état -> URL
  const setMode = useCallback((next: Mode) => {
    setModeState(next);
    void urlSetterRef.current?.(next);
  }, []);

  const toggle = useCallback(() => {
    if (window.location.hash) {
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${window.location.search}`,
      );
    }
    setMode(mode === "dev" ? "ml" : "dev");
  }, [mode, setMode]);

  const value = useMemo(
    () => ({ mode, toggle, setMode }),
    [mode, toggle, setMode],
  );

  return (
    <ModeContext.Provider value={value}>
      {children}
      <Suspense fallback={null}>
        <ModeUrlSync
          onUrlModeChange={setModeState}
          registerUrlSetter={registerUrlSetter}
        />
      </Suspense>
    </ModeContext.Provider>
  );
}

export function useMode() {
  const context = useContext(ModeContext);
  if (!context) {
    throw new Error("useMode must be used within a <PortfolioProvider>");
  }
  return context;
}
