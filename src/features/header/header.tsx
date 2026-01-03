"use client";
import { useIsDarkmodeActive } from "@/hooks/useIsDarkmode";
import { APP_URL_LEARN_MORE, APP_URL_SIGNUP } from "@/utils/constants";

import { Libre_Franklin } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TaskBuddyLandingSVGDark } from "./assets/taskBuddyLandingSVGDark";
import { TaskBuddyLandingSVGLight } from "./assets/taskBuddyLandingSVGLight";
import styles from "./css/header.module.css";
import { FadeWords } from "@stianlarsen/react-fade-effects";
import { BorderBeam } from "@stianlarsen/border-beam";

const Libre = Libre_Franklin({ subsets: ["latin"] });

export const Header = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isDarkmodeActive } = useIsDarkmodeActive();

  useEffect(() => {
    setTimeout(() => {
      setImageLoaded(true);
    }, 5);
  }, []);

  return (
    <>
      <header className={`${styles.header} ${Libre.className}`}>
        <div className={styles.left}>
          <div
            className={`${styles.focus} ${
              imageLoaded ? styles.focusLoaded : ""
            }`}
          >
            <h1 className={Libre.className}>
              <FadeWords
                delay={0}
                duration={1}
                variant="up"
                scaleSize={1.1}
                words="Effortless Task Management with TaskBuddy"
              />
            </h1>
            <div className={`${Libre.className} ${styles.description}`}>
              <FadeWords
                delay={500}
                variant="up"
                duration={0.5}
                staggerTime={0.025}
                scaleSize={1.1}
                words="Streamline your workflow, boost productivity, and achieve your
              goals with TaskBuddy - the ultimate task management app."
              />
            </div>
          </div>
          <div
            className={`${styles.cta} ${imageLoaded ? styles.ctaLoaded : ""}`}
          >
            <Link
              className={`${styles.get_started} ${styles.link}`}
              href={APP_URL_SIGNUP}
            >
              Get Started
            </Link>
            <Link
              className={`${styles.learn_more} ${styles.link}`}
              href={APP_URL_LEARN_MORE}
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className={styles.right}>
          <div
            className={styles.imageWrapper}
            style={{
              visibility: imageLoaded ? "visible" : "hidden",
              borderRadius: "0.5rem",
              overflow: "hidden",
            }}
          >
            {isDarkmodeActive ? (
              <TaskBuddyLandingSVGDark
                className={`${styles.landingSVG} ${styles.image} ${
                  imageLoaded ? styles.imageLoaded : ""
                }`}
                style={undefined}
              />
            ) : (
              <TaskBuddyLandingSVGLight
                className={`${styles.landingSVG} ${styles.image} ${
                  imageLoaded ? styles.imageLoaded : ""
                }`}
                style={undefined}
              />
            )}

            <div className={styles.imageShimmer} />
            {imageLoaded && (
              <BorderBeam
                duration={5.3}
                size={300}
                colorFrom="hsl(var(--foreground))"
                colorTo="transparent"
                // colorFrom="#9c40ff"
                // colorTo="hsl(var(--primary))"
                className={`${styles.borderBeam} ${
                  imageLoaded ? styles.borderBeamLoaded : ""
                }`}
              />
            )}
          </div>
          <div
            className={styles.imagePlaceholder}
            style={{ display: imageLoaded ? "none" : "block" }}
          ></div>
        </div>
      </header>
    </>
  );
};
