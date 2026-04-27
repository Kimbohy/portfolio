"use client";

import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  type ReactNode,
} from "react";
import { useQueryState } from "nuqs";

export type Mode = "dev" | "ml";

interface ModeContextType {
  mode: Mode;
  toggle: () => void;
  setMode: (mode: Mode) => void;
}

const ModeContext = createContext<ModeContextType>({
  mode: "dev",
  toggle: () => undefined,
  setMode: () => undefined,
});

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useQueryState<Mode>("mode", {
    defaultValue: "dev",
    history: "replace",
    shallow: true,
    clearOnDefault: true,
    parse: (value) => (value === "ml" ? "ml" : "dev"),
    serialize: (value) => value,
  });

  const toggle = useCallback(() => {
    setMode(mode === "dev" ? "ml" : "dev");
  }, [mode, setMode]);

  const contextValue = useMemo(
    () => ({
      mode,
      toggle,
      setMode,
    }),
    [mode, toggle, setMode],
  );

  return (
    <ModeContext.Provider value={contextValue}>{children}</ModeContext.Provider>
  );
}

export function useMode() {
  return useContext(ModeContext);
}
