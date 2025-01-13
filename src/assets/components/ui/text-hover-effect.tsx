"use client";
import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const TextHoverEffect = ({
  text,
  duration,
}: {
  text: string;
  duration?: number;
  automatic?: boolean;
}) => {
  const svgRef = useRef<SVGSVGElement>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);
  const [maskPosition, setMaskPosition] = useState({ cx: "50%", cy: "50%" });
  const [isTouching, setIsTouching] = useState(false);

  useEffect(() => {
    if (svgRef.current && cursor.x !== null && cursor.y !== null) {
      const svgRect = svgRef.current.getBoundingClientRect();
      const cxPercentage = ((cursor.x - svgRect.left) / svgRect.width) * 100;
      const cyPercentage = ((cursor.y - svgRect.top) / svgRect.height) * 100;
      setMaskPosition({
        cx: `${cxPercentage}%`,
        cy: `${cyPercentage}%`,
      });
    }
  }, [cursor]);

  useEffect(() => {
    const handleTouch = (e: TouchEvent) => {
      e.preventDefault(); // Prevent scroll while touching
      const touch = e.touches[0];
      const svgRect = svgRef.current?.getBoundingClientRect();
      if (svgRect) {
        // Adjust cursor position relative to SVG bounds
        setCursor({
          x: touch.clientX - window.scrollX,
          y: touch.clientY - window.scrollY,
        });
      }
      setIsTouching(true);
      setHovered(true);
    };

    const handleTouchEnd = () => {
      setIsTouching(false);
      // Add a small delay before removing hover effect
      setTimeout(() => setHovered(false), 150);
    };

    if (svgRef.current) {
      svgRef.current.addEventListener("touchstart", handleTouch, {
        passive: false,
      });
      svgRef.current.addEventListener("touchmove", handleTouch, {
        passive: false,
      });
      svgRef.current.addEventListener("touchend", handleTouchEnd);
      svgRef.current.addEventListener("touchcancel", handleTouchEnd);
    }

    return () => {
      if (svgRef.current) {
        svgRef.current.removeEventListener("touchstart", handleTouch);
        svgRef.current.removeEventListener("touchmove", handleTouch);
        svgRef.current.removeEventListener("touchend", handleTouchEnd);
        svgRef.current.removeEventListener("touchcancel", handleTouchEnd);
      }
    };
  }, []);

  return (
    <svg
      ref={svgRef}
      width="100%"
      height="100%"
      viewBox="0 0 300 100"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onMouseMove={(e) => setCursor({ x: e.clientX, y: e.clientY })}
      className={`select-none z-20 ${isTouching ? "touch-none" : "touch-auto"}`}
    >
      <defs>
        <linearGradient
          id="textGradient"
          gradientUnits="userSpaceOnUse"
          cx="50%"
          cy="50%"
          r="25%"
        >
          {hovered && (
            <>
              <stop offset="0%" stopColor={"var(--yellow-500)"} />
              <stop offset="25%" stopColor={"var(--red-500)"} />
              <stop offset="50%" stopColor={"var(--blue-500)"} />
              <stop offset="75%" stopColor={"var(--cyan-500)"} />
              <stop offset="100%" stopColor={"var(--violet-500)"} />
            </>
          )}
        </linearGradient>

        <motion.radialGradient
          id="revealMask"
          gradientUnits="userSpaceOnUse"
          r={isTouching ? "30%" : "20%"} // Larger radius on touch
          animate={maskPosition}
          transition={{
            duration: isTouching ? 0.1 : duration ?? 0,
            ease: "easeOut",
          }}
        >
          <stop offset="0%" stopColor="white" />
          <stop offset="100%" stopColor="black" />
        </motion.radialGradient>
        <mask id="textMask">
          <rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            fill="url(#revealMask)"
          />
        </mask>
      </defs>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[helvetica] font-bold stroke-neutral-200 dark:stroke-neutral-800 fill-transparent text-6xl sm:text-6xl md:text-6xl lg:text-6xl"
        style={{ opacity: hovered ? 0.7 : 0 }}
      >
        {text}
      </text>
      <motion.text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        strokeWidth="0.3"
        className="font-[helvetica] font-bold fill-transparent text-6xl sm:text-6xl md:text-6xl lg:text-6xl stroke-neutral-200 dark:stroke-neutral-800"
        initial={{ strokeDashoffset: 1000, strokeDasharray: 1000 }}
        animate={{
          strokeDashoffset: 0,
          strokeDasharray: 1000,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        {text}
      </motion.text>
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        stroke="url(#textGradient)"
        strokeWidth="0.3"
        mask="url(#textMask)"
        className="font-[helvetica] font-bold fill-transparent text-6xl sm:text-6xl md:text-6xl lg:text-6xl"
      >
        {text}
      </text>
    </svg>
  );
};
