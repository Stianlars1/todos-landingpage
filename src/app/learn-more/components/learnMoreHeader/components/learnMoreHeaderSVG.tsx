"use client";
import { TasksSVG } from "../../../../../../public/images/about-us/TasksSVG";
import styles from "./css/learnMoreHeaderSVG.module.css";
export const LearnMoreHeaderSVG = ({
  className = "",
}: {
  className?: string;
}) => {
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageWrapper}>
        <TasksSVG className={`${styles.image} ${className}`} />
      </div>
      <div className={styles.imageShade} />
    </div>
  );
};
