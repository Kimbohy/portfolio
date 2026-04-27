"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Mode = "dev" | "ml";

interface ModeContextType {
  mode: Mode;
  toggle: () => void;
  setMode: (mode: Mode) => void;
}

const STORAGE_KEY = "portfolio-mode";

const ModeContext = createContext<ModeContextType>({
  mode: "dev",
  toggle: () => undefined,
  setMode: () => undefined,
});

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<Mode>("dev");

  useEffect(() => {
    const savedMode = window.localStorage.getItem(STORAGE_KEY);
    if (savedMode === "dev" || savedMode === "ml") {
      setModeState(savedMode);
    }
  }, []);

  const setMode = (nextMode: Mode) => {
    setModeState(nextMode);
    window.localStorage.setItem(STORAGE_KEY, nextMode);
  };

  const toggle = () => {
    setMode(mode === "dev" ? "ml" : "dev");
  };

  const contextValue = useMemo(
    () => ({
      mode,
      toggle,
      setMode,
    }),
    [mode],
  );

  return (
    <ModeContext.Provider value={contextValue}>{children}</ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
