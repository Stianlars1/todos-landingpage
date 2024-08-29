"use client";
import { TaskBuddyLandingSVGDark } from "@/features/header/assets/taskBuddyLandingSVGDark";
import { TaskBuddyLandingSVGLight } from "@/features/header/assets/taskBuddyLandingSVGLight";
import { useIsDarkmodeActive } from "@/hooks/useIsDarkmode";
import styles from "./css/learnMoreHeaderSVG.module.css";
export const LearnMoreHeaderSVG = () => {
  const { isDarkmodeActive } = useIsDarkmodeActive();
  return (
    <div className={styles.imageContainer}>
      <div className={styles.imageWrapper}>
        {isDarkmodeActive ? (
          <TaskBuddyLandingSVGDark className={styles.image} />
        ) : (
          <TaskBuddyLandingSVGLight className={styles.image} />
        )}
      </div>
    </div>
  );
};
