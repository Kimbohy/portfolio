"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

export const InfiniteMovingItems = ({
  items,
  direction = "left",
  speed = "fast",
  suffix = "",
  className,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  suffix?: string;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [lastX, setLastX] = useState(0);
  const [lastTime, setLastTime] = useState(0);
  const velocityRef = React.useRef(0);
  const animationRef = React.useRef<number | null>(null);

  const [start, setStart] = useState(false);
  const repeatedItems = useMemo(() => {
    const repeatCount = Math.max(3, Math.ceil(36 / Math.max(items.length, 1)));
    return Array.from({ length: repeatCount }, (_, repeatIndex) =>
      items.map((item, itemIndex) => ({
        key: `${repeatIndex}-${itemIndex}-${item}`,
        value: item,
      })),
    ).flat();
  }, [items]);

  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const startDrag = (clientX: number) => {
    if (!containerRef.current) return;
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    setIsDragging(true);
    setStartX(clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
    setLastX(clientX);
    setLastTime(Date.now());
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    startDrag(e.pageX);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    startDrag(e.touches[0].pageX);
  };

  const moveDrag = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;

    const now = Date.now();
    const deltaX = clientX - lastX;
    const deltaTime = now - lastTime;

    if (deltaTime > 0) {
      const currentVelocity = deltaX / deltaTime;
      velocityRef.current = currentVelocity;
    }

    const x = clientX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    containerRef.current.scrollLeft = scrollLeft - walk;
    checkAndResetScroll();

    setLastX(clientX);
    setLastTime(now);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    e.preventDefault();
    moveDrag(e.pageX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
    moveDrag(e.touches[0].pageX);
  };

  const checkAndResetScroll = () => {
    if (!containerRef.current || !scrollerRef.current) return;

    const scrollLeft = containerRef.current.scrollLeft;
    const scrollWidth = scrollerRef.current.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    const maxScroll = scrollWidth - containerWidth;

    // Reset position when reaching boundaries for infinite effect
    if (scrollLeft <= 0) {
      containerRef.current.scrollLeft = maxScroll / 2;
    } else if (scrollLeft >= maxScroll) {
      containerRef.current.scrollLeft = maxScroll / 2;
    }
  };

  const momentumScroll = () => {
    if (!containerRef.current || Math.abs(velocityRef.current) < 0.1) return;

    containerRef.current.scrollLeft -= velocityRef.current * 10;
    checkAndResetScroll();
    velocityRef.current *= 0.95; // Friction

    if (Math.abs(velocityRef.current) > 0.1) {
      animationRef.current = requestAnimationFrame(momentumScroll);
    }
  };

  const endDrag = () => {
    setIsDragging(false);
    if (Math.abs(velocityRef.current) > 0.5) {
      momentumScroll();
    }
  };

  const handleMouseUp = () => {
    endDrag();
  };

  const handleMouseLeave = () => {
    endDrag();
  };

  const handleTouchEnd = () => {
    endDrag();
  };
  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollWidth = scrollerRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const initialScrollLeft = (scrollWidth - containerWidth) / 2;
      containerRef.current.scrollLeft = initialScrollLeft;

      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }

      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "1000s");
      }
      setStart(true);
    }
  }, [direction, speed, items.length]);
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[1500px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] cursor-grab",
        isDragging && "cursor-grabbing",
        className,
      )}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full items-center shrink-0 gap-10 py-4 w-max flex-nowrap select-none",
          start && !isDragging && "animate-scroll",
        )}
      >
        {repeatedItems.map((item) => (
          <li key={item.key}>
            <Image
              src={`/images/icons/${item.value + suffix}.svg`}
              alt={item.value}
              height={80}
              width={80}
              className="h-10 w-10 md:h-20 md:min-w-20 object-contain"
              sizes="(min-width: 768px) 80px, 40px"
              draggable={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
