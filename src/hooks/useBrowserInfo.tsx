"use client";
import { useEffect, useState } from "react";

const detectSafari = (userAgent: string) =>
  /^((?!chrome|android).)*safari/i.test(userAgent);
const detectMobile = (userAgent: string) =>
  /iPhone|iPad|iPod|Android/i.test(userAgent);
const detectTouchDevice = () =>
  "ontouchstart" in window || navigator.maxTouchPoints > 0;

export const useBrowserInfo = () => {
  const [isSafari, setIsSafari] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const updateDeviceInfo = () => {
    if (typeof window === "undefined") return;
    const userAgent = window.navigator.userAgent;
    setIsSafari(detectSafari(userAgent));

    // Detect mobile based on user agent and touch capabilities
    const mobileDetected = detectMobile(userAgent) || detectTouchDevice();
    setIsMobile(mobileDetected);
    return;
  };

  useEffect(() => {
    updateDeviceInfo();
  }, []);

  return { isSafari, isMobile };
};
