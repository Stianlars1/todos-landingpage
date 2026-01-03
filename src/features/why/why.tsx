"use client";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useRef } from "react";
import styles from "./css/why.module.css";
export const Why = () => {
  console.log("This is the WHY section");
  const parentRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress, scrollY } = useScroll({ container: parentRef });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scrollYProgressscroll: ", latest);
  });
  useMotionValueEvent(scrollY, "change", (latest) => {
    console.log("Page scrollY scroll: ", latest);
  });
  return (
    <>
      <div className={styles.why} ref={parentRef}>
        <motion.div className={styles.item}>
          <h2 style={{ transform: `translateY(${scrollY}px)` }}>
            This section has a scroll effect!
          </h2>
        </motion.div>
      </div>
    </>
  );
};
