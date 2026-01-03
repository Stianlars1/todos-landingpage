"use client";

import { useIsDarkmodeActive } from "@/hooks/useIsDarkmode";
import { ReactElement, useEffect } from "react";

export const AppWrapper = ({
  children,
}: {
  children: ReactElement | ReactElement[];
}) => {
  const { isDarkmodeActive } = useIsDarkmodeActive();
  useEffect(() => {
    const body = document.querySelector("body");
    const matchMedia = window.matchMedia("(prefers-color-scheme: dark)");
    const isDark = matchMedia.matches;
    if (isDark) {
      body?.classList.add("dark");
    } else {
      body?.classList.add("light");
    }
  }, []);
  return <>{children}</>;
};
