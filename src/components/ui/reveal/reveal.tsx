"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { ReactElement, ReactNode, useEffect, useRef } from "react";
type MotionProps = "down" | "extraDown" | "up" | "left" | "right" | "opacity";

export interface RevealProps {
  children?: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  type: MotionProps;
  isInViewOverride?: boolean;
  delay?: number;
  width?: "fit-content" | "100%";
  className?: string;
  reset?: boolean;
  duration?: number;
  onRevealed?: () => void;
  threshold?: number;
  nestedClassname?: string;
  margin?: string;
}

const getMotionProps = (type: MotionProps) => {
  switch (type) {
    case "down":
      return {
        variants: {
          hidden: { opacity: 0, y: -40 },
          visible: { opacity: 1, y: 0 },
        },
      };
    case "extraDown":
      return {
        variants: {
          hidden: { opacity: 1, y: -150 },
          visible: { opacity: 1, y: 0 },
        },
      };
    case "up":
      return {
        variants: {
          hidden: { opacity: 0, y: 40 },
          visible: { opacity: 1, y: 0 },
        },
      };
    case "left":
      return {
        variants: {
          hidden: { opacity: 0, x: 40 },
          visible: { opacity: 1, x: 0 },
        },
      };
    case "right":
      return {
        variants: {
          hidden: { opacity: 0, x: -40 },
          visible: { opacity: 1, x: 0 },
        },
      };
    case "opacity":
      return {
        variants: {
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        },
      };
  }
};

export const Reveal = ({
  children,
  isInViewOverride,
  reset = false,
  type,
  delay = 0.25,
  width = "fit-content",
  className = "",
  nestedClassname = "",
  duration = 0.5,
  threshold = 0.4,
  onRevealed,
  margin = "50px 0px 50px 0px",
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: reset ? false : true,
    amount: threshold,
    margin: margin,
  });

  const motionProps = getMotionProps(type);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView || isInViewOverride) {
      mainControls.start("visible");
      if (onRevealed) {
        onRevealed();
      }
    } else if (reset) {
      // Reset animation only when scrolling up near the top of the page
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, onRevealed, reset]);

  return (
    <>
      <div
        className={`reveal ${className}`}
        ref={ref}
        style={{ position: "relative", width }}
      >
        <motion.div
          {...motionProps}
          initial="hidden"
          animate={mainControls}
          transition={{ duration: duration, delay: delay }}
          className={`reveal-motion-wrapper reveal__motion-wrapper ${nestedClassname}`}
        >
          {children}
        </motion.div>
      </div>
    </>
  );
};
export const EasyReveal = ({
  children,
  reset = false,
  type,
  delay = 0.15,
  width = "fit-content",
  className = "",
  duration = 0.5,
  threshold = 0.4,
  margin = "50px 0px 25px 0px",
  onRevealed,
}: RevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: reset ? false : true,
    amount: threshold,
    margin: margin,
  });

  const motionProps = getMotionProps(type);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      if (onRevealed) {
        onRevealed();
      }
    } else if (reset) {
      // Reset animation only when scrolling up near the top of the page
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, onRevealed, reset]);

  return (
    <motion.div
      ref={ref}
      style={{ position: "relative", width }}
      {...motionProps}
      initial="hidden"
      animate={mainControls}
      transition={{ duration: duration, delay: delay }}
      className={`reveal-motion-wrapper reveal__motion-wrapper ${className}`}
    >
      {children}
    </motion.div>
  );
};
