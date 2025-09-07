import { cn } from "@/utils/cn";
import React from "react";
import { motion } from "motion/react";

export const BackgroundGradient = ({
  children,
  className,
  containerClassName,
  animate = true,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  animate?: boolean;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 50%",
    },
    animate: {
      backgroundPosition: ["0, 50%", "100% 50%", "0 50%"],
    },
  };
  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-40 group-hover:opacity-60 blur-xl transition duration-500 will-change-transform",
          " bg-[radial-gradient(circle_farthest-side_at_0_100%,var(--color-accent),transparent),radial-gradient(circle_farthest-side_at_100%_0,var(--color-primary),transparent),radial-gradient(circle_farthest-side_at_100%_100%,var(--color-secondary),transparent),radial-gradient(circle_farthest-side_at_0_0,var(--color-gradient-mid),var(--color-background))]"
        )}
      />
      <motion.div
        variants={animate ? variants : undefined}
        initial={animate ? "initial" : undefined}
        animate={animate ? "animate" : undefined}
        transition={
          animate
            ? {
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse",
              }
            : undefined
        }
        style={{
          backgroundSize: animate ? "400% 400%" : undefined,
        }}
        className={cn(
          "absolute inset-0 rounded-2xl z-[1] will-change-transform opacity-40",
          "bg-[radial-gradient(circle_farthest-side_at_0_100%,var(--color-accent),transparent),radial-gradient(circle_farthest-side_at_100%_0,var(--color-primary),transparent),radial-gradient(circle_farthest-side_at_100%_100%,var(--color-secondary),transparent),radial-gradient(circle_farthest-side_at_0_0,var(--color-gradient-mid),var(--color-background))]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};
