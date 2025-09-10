"use client";

import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";
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

  useEffect(() => {
    addAnimation();

    // Add non-passive touch event listeners
    const container = containerRef.current;
    if (container) {
      const handleTouchMove = (e: TouchEvent) => {
        e.preventDefault();
        moveDrag(e.touches[0].pageX);
      };

      const handleTouchStart = (e: TouchEvent) => {
        startDrag(e.touches[0].pageX);
      };

      const handleTouchEnd = () => {
        endDrag();
      };

      container.addEventListener("touchstart", handleTouchStart, {
        passive: false,
      });
      container.addEventListener("touchmove", handleTouchMove, {
        passive: false,
      });
      container.addEventListener("touchend", handleTouchEnd, {
        passive: false,
      });

      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        container.removeEventListener("touchstart", handleTouchStart);
        container.removeEventListener("touchmove", handleTouchMove);
        container.removeEventListener("touchend", handleTouchEnd);
      };
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);
  const [start, setStart] = useState(false);

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
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items multiple times for truly infinite effect
      for (let i = 0; i < 10; i++) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      // Set initial scroll position to middle for bidirectional scrolling
      const scrollWidth = scrollerRef.current.scrollWidth;
      const containerWidth = containerRef.current.offsetWidth;
      const initialScrollLeft = (scrollWidth - containerWidth) / 2;
      containerRef.current.scrollLeft = initialScrollLeft;

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "1000s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-[1500px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] cursor-grab",
        isDragging && "cursor-grabbing",
        className
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
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full items-center shrink-0 gap-10 py-4 w-max flex-nowrap select-none",
          start && !isDragging && "animate-scroll"
        )}
      >
        {items.map((t, index) => (
          <li key={index}>
            <Image
              src={`/images/icons/${t + suffix}.svg`}
              alt={t}
              height={80}
              width={80}
              className="h-10 w-10 md:h-20 md:w-20 object-contain"
              draggable={false}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
