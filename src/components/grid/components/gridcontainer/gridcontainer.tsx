import { ReactElement, ReactNode } from "react";
import styles from "./css/gridcontainer.module.css";

export const GridContainer = ({
  children,
}: {
  children: ReactElement | ReactElement | ReactNode | ReactNode[];
}) => {
  return <main className={styles.gridContainer}>{children}</main>;
};
