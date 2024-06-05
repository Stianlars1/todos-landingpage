import { ReactElement, ReactNode } from "react";
import styles from "./css/gridSection.module.css";

export const GridSection = ({
  children,
  size = "default",
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
  size?: "default" | "large";
}) => {
  const sizeClass = size === "large" ? styles.large : "";
  return (
    <section className={`${styles.gridSection} ${sizeClass}`}>
      {children}
    </section>
  );
};
