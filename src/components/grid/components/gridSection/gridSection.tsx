import { ReactElement, ReactNode } from "react";
import styles from "./css/gridSection.module.css";

export const GridSection = ({
  children,
  size = "default",
  className = "",
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  size?: "default" | "large";
  className?: string;
}) => {
  const sizeClass = size === "large" ? styles.large : "";
  return (
    <section className={`${styles.gridSection} ${className} ${sizeClass}`}>
      {children}
    </section>
  );
};
