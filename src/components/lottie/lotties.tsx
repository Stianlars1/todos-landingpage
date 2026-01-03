"use client";
import { useIsDarkmodeActive } from "@/hooks/useIsDarkmode";
import Lottie from "lottie-react";
import boostAnimation from "./animations/boostAnimation.json";
import fastAnimation from "./animations/fastAnimation.json";
import lockAnimation from "./animations/lockAnimation.json";
import lockAnimationDarkmode from "./animations/lockAnimationDarkmode.json";
import privacyAnimation from "./animations/privacyAnimation.json";
import pulseAnimation from "./animations/pulseAnimation.json";
import securityAnimation from "./animations/securityAnimation.json";

export const PrivacyAnimation = ({
  widthHeight = 250,
  className = "",
}: {
  widthHeight?: number | undefined;
  className?: string;
}) => {
  const newClassname = `${className} lottie-animation"`;
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: privacyAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: newClassname,
  };

  return <Lottie {...defaultLottieOptions} />;
};
export const SecurityAnimation = ({
  widthHeight = 150,
  className = "",
}: {
  widthHeight?: number | undefined;
  className?: string;
}) => {
  const newClassname = `${className} lottie-animation"`;
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,

    animationData: securityAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: newClassname,
  };

  return <Lottie {...defaultLottieOptions} />;
};
export const FastAnimation = ({
  widthHeight = 250,
  className = "",
}: {
  widthHeight?: number | undefined;
  className?: string;
}) => {
  const newClassname = `${className} lottie-animation"`;
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: fastAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: newClassname,
  };

  return <Lottie {...defaultLottieOptions} />;
};
export const PulseAnimation = ({
  widthHeight = 250,
  className = "",
}: {
  widthHeight?: number | undefined;
  className?: string;
}) => {
  const newClassname = `${className} lottie-animation"`;
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: pulseAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: newClassname,
  };

  return <Lottie {...defaultLottieOptions} />;
};
export const LockAnimation = ({
  widthHeight = 350,
  className = "",
}: {
  widthHeight?: number | undefined;
  className?: string;
}) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();
  const newClassname = `${className} lottie-animation"`;
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: isDarkmodeActive ? lockAnimationDarkmode : lockAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: newClassname,
  };

  return <Lottie {...defaultLottieOptions} />;
};
export const BoostAnimation = ({
  widthHeight = undefined,
  className = "",
}: {
  widthHeight?: number | undefined;
  className?: string;
}) => {
  const newClassname = `${className} lottie-animation"`;
  const defaultLottieOptions = {
    loop: true,
    autoplay: true,
    animationData: boostAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
    style: {
      width: `${widthHeight}px`,
      height: `${widthHeight}px`,
    },
    className: newClassname,
  };

  return <Lottie {...defaultLottieOptions} />;
};
