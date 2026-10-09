import { useCallback, useEffect, useRef, useState } from "react";

const EXCHANGE_DELAY = 150;

/**
 * Logique partagée par les piles d'images (web et mobile) :
 *  - `bringToFront(i)` : met l'image cliquée en première position
 *  - `rotate()`        : envoie la première image à la fin (swipe)
 */
export function useImageStack(initialImages: string[]) {
  const [images, setImages] = useState<string[]>(initialImages);
  const [isExchanging, setIsExchanging] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const reorder = useCallback((reorderFn: (list: string[]) => string[]) => {
    setIsExchanging(true);
    timeoutRef.current = setTimeout(() => {
      setImages(reorderFn);
      setIsExchanging(false);
    }, EXCHANGE_DELAY);
  }, []);

  const bringToFront = useCallback(
    (index: number) =>
      reorder((list) => {
        const next = [...list];
        const [clicked] = next.splice(index, 1);
        next.unshift(clicked);
        return next;
      }),
    [reorder],
  );

  const rotate = useCallback(
    () =>
      reorder((list) => {
        if (list.length < 2) return list;
        const [first, ...rest] = list;
        return [...rest, first];
      }),
    [reorder],
  );

  return { images, isExchanging, bringToFront, rotate };
}
