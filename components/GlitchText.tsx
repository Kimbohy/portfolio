"use client";
import { useEffect, useRef, useState, type HTMLAttributes } from "react";

// ─── CSS injected once ───────────────────────────────────────────────────────
const CSS = `
  @keyframes _gt_top {
    0%   { clip-path: inset(0 0 90% 0);   transform: translate(-4px,-1px); }
    33%  { clip-path: inset(30% 0 50% 0); transform: translate( 3px, 1px); }
    66%  { clip-path: inset(60% 0 20% 0); transform: translate(-2px, 0);   }
    100% { clip-path: inset(85% 0 0 0);   transform: translate( 0,   0);   }
  }
  @keyframes _gt_bot {
    0%   { clip-path: inset(80% 0 0 0);   transform: translate( 4px, 1px); }
    33%  { clip-path: inset(50% 0 30% 0); transform: translate(-3px,-1px); }
    66%  { clip-path: inset(20% 0 60% 0); transform: translate( 2px, 0);   }
    100% { clip-path: inset(0 0 90% 0);   transform: translate( 0,   0);   }
  }
  @keyframes _gt_skew {
    0%,100% { transform: skewX(0deg);  }
    20%     { transform: skewX(-3deg); }
    60%     { transform: skewX( 2deg); }
  }

  /* ::before & ::after hidden by default — ONLY visible during .gt-on */
  .gt-wrap {
    position: relative;
    display: inline-block;
  }
  .gt-wrap::before,
  .gt-wrap::after {
    content: attr(data-text);
    position: absolute;
    inset: 0;
    opacity: 0;           /* ← KEY FIX: invisible by default */
    pointer-events: none;
    white-space: pre-wrap;
    word-break: break-word;
  }
  .gt-wrap.gt-on {
    animation: _gt_skew 0.25s steps(2) forwards;
  }
  .gt-wrap.gt-on::before {
    opacity: 1;
    color: #0ff;
    mix-blend-mode: screen;
    animation: _gt_top 0.25s steps(3) forwards;
  }
  .gt-wrap.gt-on::after {
    opacity: 1;
    color: #f0f;
    mix-blend-mode: screen;
    animation: _gt_bot 0.25s steps(3) forwards;
  }
`;

let _injected = false;
function injectCSS() {
  if (_injected || typeof document === "undefined") return;
  const s = document.createElement("style");
  s.textContent = CSS;
  document.head.appendChild(s);
  _injected = true;
}

// ─── Hook: periodic glitch bursts ───────────────────────────────────────────
function useGlitch(active: boolean) {
  const [on, setOn] = useState(false);
  const burstTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!active) {
      setOn(false);
      return;
    }

    const clearTimers = () => {
      if (burstTimer.current) {
        clearTimeout(burstTimer.current);
        burstTimer.current = null;
      }
      if (resetTimer.current) {
        clearTimeout(resetTimer.current);
        resetTimer.current = null;
      }
    };

    const loop = () => {
      burstTimer.current = setTimeout(
        () => {
          setOn(true);
          resetTimer.current = setTimeout(() => {
            setOn(false);
            loop();
          }, 220);
        },
        3000 + Math.random() * 5000,
      );
    };

    loop();

    return clearTimers;
  }, [active]);

  return on;
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
 *   delay     — ms before scramble starts
 *   speed     — ms per character (lower = faster)
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
  useEffect(() => {
    injectCSS();
  }, []);

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
