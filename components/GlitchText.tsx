"use client";
import { useEffect, useState, type HTMLAttributes } from "react";

// ─── Hook: periodic glitch bursts ───────────────────────────────────────────
function useGlitch(active: boolean) {
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!active) return;

    let burstTimer: ReturnType<typeof setTimeout>;
    let resetTimer: ReturnType<typeof setTimeout>;

    const loop = () => {
      burstTimer = setTimeout(
        () => {
          setOn(true);
          resetTimer = setTimeout(() => {
            setOn(false);
            loop();
          }, 220);
        },
        3000 + Math.random() * 5000,
      );
    };

    loop();

    return () => {
      clearTimeout(burstTimer);
      clearTimeout(resetTimer);
      setOn(false);
    };
  }, [active]);

  return active && on;
}

type GlitchTextProps = {
  text: string;
  as?: keyof HTMLElementTagNameMap;
  enabled?: boolean;
  className?: string;
} & HTMLAttributes<HTMLElement>;

// ─── GlitchText ──────────────────────────────────────────────────────────────
/**
 * Props:
 *   text      — final text to display
 *   as        — HTML tag (default "span")
 *   enabled   — trigger the effect (pair with inView)
 *   className — extra Tailwind/CSS classes
 */
export default function GlitchText({
  text,
  as: Tag = "span",
  enabled = true,
  className = "",
  ...rest
}: GlitchTextProps) {
  const glitching = useGlitch(enabled);

  return (
    <Tag
      className={`gt-wrap${glitching ? " gt-on" : ""}${className ? " " + className : ""}`}
      data-text={text}
      {...rest}
    >
      {text}
    </Tag>
  );
}
