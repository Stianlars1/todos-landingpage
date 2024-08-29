"use client";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import React, { ReactNode, useEffect } from "react";
type VariantType = "default" | "up" | "down" | "left" | "right";

type FadeProps = {
  children: ReactNode;
  filter?: boolean;
  duration?: number;
  staggerTime?: number;
  delay?: number;
  variant?: VariantType;
  scaleSize?: number;
  once?: boolean;
  translateAmount?: number;
  className?: string;
};

const Fade = ({
  children,
  filter = true,
  duration = 1,
  staggerTime = 0.1,
  delay = 0.2,
  variant = "default",
  scaleSize = undefined,
  once = true,
  translateAmount = undefined,
  className = "",
}: FadeProps) => {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, {
    once: true,
    amount: 0.5,
  });

  useEffect(() => {
    if (!isInView || !scope.current) return;
    if (isInView) {
      setTimeout(() => {
        animate(
          ".fadeChild",
          {
            opacity: 1,
            filter: filter ? "blur(0px)" : "none",
            transform: "translateY(0) scale(1)",
          },
          {
            duration: duration,
            delay: stagger(staggerTime),
          }
        );
      }, delay);
    }
  }, [scope.current, isInView]);

  const initialStyleObject = getInitialStyleObject(
    variant,
    filter,
    scaleSize,
    translateAmount
  );

  const RenderChildrens = () => {
    return (
      <motion.div className={className} ref={scope}>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child as React.ReactElement<any>, {
              className: `${child.props.className || ""} fadeChild`,
              style: {
                ...initialStyleObject,
                ...child.props.style,
              },
            });
          }
          return child;
        })}
      </motion.div>
    );
  };

  return <RenderChildrens />;
};

const getInitialStyleObject = (
  variant: VariantType,
  filter: boolean,
  scaleSize?: number,
  translateAmount?: number
) => {
  const baseStyle = {
    opacity: 0,
    filter: filter ? "blur(20px)" : "none",
  };

  if (variant === "up") {
    return {
      ...baseStyle,
      transform: `${
        translateAmount
          ? `translateY(${translateAmount}px)`
          : "translateY(15px     )"
      } ${scaleSize ? `scale(${scaleSize})` : "scale(1)"}`,
    };
  }
  if (variant === "down") {
    return {
      ...baseStyle,
      transform: `${
        translateAmount
          ? `translateY(-${translateAmount}px)`
          : "translateY(-15px)"
      } ${scaleSize ? `scale(${scaleSize})` : "scale(1)"}`,
    };
  }

  if (variant === "left") {
    return {
      ...baseStyle,
      transform: `${
        translateAmount
          ? `translateX(${translateAmount}px)`
          : "translateX(15px)"
      } ${scaleSize ? `scale(${scaleSize})` : "scale(1)"}`,
    };
  }

  if (variant === "right") {
    return {
      ...baseStyle,
      transform: `${
        translateAmount
          ? `translateX(-${translateAmount}px)`
          : "translateX(-15px    )"
      } ${scaleSize ? `scale(${scaleSize})` : "scale(1)"}`,
    };
  }

  return baseStyle;
};

export default Fade;
