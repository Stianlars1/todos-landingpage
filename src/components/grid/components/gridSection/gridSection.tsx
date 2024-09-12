import { ReactElement, ReactNode } from "react";
import styles from "./css/gridSection.module.css";

export const GridSection = ({
  children,
  size = "default",
  className = "",
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  size?: "default" | "large" | "unlimited";
  className?: string;
}) => {
  const sizeClass =
    size === "unlimited"
      ? styles.gridSectionUnlimited
      : size === "large"
      ? styles.large
      : styles.gridSection;
  return <section className={` ${className} ${sizeClass}`}>{children}</section>;
};
