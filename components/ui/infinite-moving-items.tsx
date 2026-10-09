"use client";

import { cn } from "@/utils/cn";
import { useEffect, useMemo, useRef, useState } from "react";
import type { MouseEvent, TouchEvent } from "react";
import Image from "next/image";

const SPEED_TO_DURATION = {
  fast: "20s",
  normal: "40s",
  slow: "1000s",
} as const;

export const InfiniteMovingItems = ({
  items,
  direction = "left",
  speed = "fast",
  suffix = "",
  className,
}: {
  items: string[];
  direction?: "left" | "right";
  speed?: keyof typeof SPEED_TO_DURATION;
  suffix?: string;
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const animationRef = useRef<number | null>(null);
  const velocityRef = useRef(0);
  // Valeurs de drag : stockées dans une ref (et pas en state) pour ne pas
  // re-render toute la liste à chaque mouvement de souris.
  const dragRef = useRef({
    active: false,
    startX: 0,
    scrollLeft: 0,
    lastX: 0,
    lastTime: 0,
  });

  const [isDragging, setIsDragging] = useState(false);
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
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const checkAndResetScroll = () => {
    if (!containerRef.current || !scrollerRef.current) return;

    const { scrollLeft } = containerRef.current;
    const maxScroll =
      scrollerRef.current.scrollWidth - containerRef.current.offsetWidth;

    // Remet au milieu quand on atteint un bord, pour l'effet infini
    if (scrollLeft <= 0 || scrollLeft >= maxScroll) {
      containerRef.current.scrollLeft = maxScroll / 2;
    }
  };

  const startDrag = (clientX: number, timeStamp: number) => {
    const container = containerRef.current;
    if (!container) return;
    if (animationRef.current) cancelAnimationFrame(animationRef.current);

    velocityRef.current = 0;
    dragRef.current = {
      active: true,
      startX: clientX - container.offsetLeft,
      scrollLeft: container.scrollLeft,
      lastX: clientX,
      lastTime: timeStamp,
    };
    setIsDragging(true);
  };

  const moveDrag = (clientX: number, timeStamp: number) => {
    const container = containerRef.current;
    const drag = dragRef.current;
    if (!drag.active || !container) return;

    const deltaTime = timeStamp - drag.lastTime;
    if (deltaTime > 0) {
      velocityRef.current = (clientX - drag.lastX) / deltaTime;
    }

    const walk = clientX - container.offsetLeft - drag.startX;
    container.scrollLeft = drag.scrollLeft - walk;
    checkAndResetScroll();

    drag.lastX = clientX;
    drag.lastTime = timeStamp;
  };

  const momentumScroll = () => {
    if (!containerRef.current || Math.abs(velocityRef.current) < 0.1) return;

    containerRef.current.scrollLeft -= velocityRef.current * 10;
    checkAndResetScroll();
    velocityRef.current *= 0.95; // friction

    if (Math.abs(velocityRef.current) > 0.1) {
      animationRef.current = requestAnimationFrame(momentumScroll);
    }
  };

  const endDrag = () => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    setIsDragging(false);
    if (Math.abs(velocityRef.current) > 0.5) momentumScroll();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!dragRef.current.active) return;
    e.preventDefault();
    moveDrag(e.pageX, e.timeStamp);
  };

  const handleTouchMove = (e: TouchEvent) => {
    moveDrag(e.touches[0].pageX, e.timeStamp);
  };

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    container.scrollLeft = (scroller.scrollWidth - container.offsetWidth) / 2;
    container.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse",
    );
    container.style.setProperty(
      "--animation-duration",
      SPEED_TO_DURATION[speed],
    );
    setStart(true);
  }, [direction, speed, items.length]);

  return (
    <div
      ref={containerRef}
      className={cn(
        // touch-pan-y : le swipe horizontal est géré en JS, le vertical reste natif
        "scroller relative z-20 max-w-[1500px] touch-pan-y overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] cursor-grab",
        isDragging && "cursor-grabbing",
        className,
      )}
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        WebkitOverflowScrolling: "touch",
      }}
      onMouseDown={(e) => startDrag(e.pageX, e.timeStamp)}
      onMouseMove={handleMouseMove}
      onMouseUp={endDrag}
      onMouseLeave={endDrag}
      onTouchStart={(e) => startDrag(e.touches[0].pageX, e.timeStamp)}
      onTouchMove={handleTouchMove}
      onTouchEnd={endDrag}
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
