"use client";
import { Tag } from "@/components/ui/tag/tag";
import { useIsDarkmodeActive } from "@/hooks/useIsDarkmode";
import { APP_URL_SIGNUP } from "@/utils/constants";
import { Libre_Franklin } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./css/header.module.css";

const Libre = Libre_Franklin({ subsets: ["latin"] });

export const Header = () => {
  const [isClient, setIsClient] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { isDarkmodeActive } = useIsDarkmodeActive();

  useEffect(() => {
    setIsClient(true);
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
            <Tag
              backgroundHEX={"#FFC107"}
              textColorHEX={"#000"}
              className={styles.tag}
              width={"fit-content"}
            >
              ⚠ Under construction
            </Tag>
            <h1 className={Libre.className}>
              Effortless Task Management with TaskBuddy
            </h1>
            <p className={Libre.className}>
              Streamline your workflow, boost productivity, and achieve your
              goals with TaskBuddy - the ultimate task management app.
            </p>
          </div>
          <div
            className={`${styles.cta} ${imageLoaded ? styles.ctaLoaded : ""}`}
          >
            <Link href={APP_URL_SIGNUP}>
              <button>Get Started</button>
            </Link>
            <button>Learn More</button>
          </div>
        </div>

        <div className={styles.right}>
          <div
            className={styles.imageWrapper}
            style={{ visibility: imageLoaded ? "visible" : "hidden" }}
          >
            <Image
              draggable={false}
              src={`/images/${
                isDarkmodeActive ? "hero_dark" : "hero_light"
              }.png`}
              alt="TaskBuddy hero image"
              width={0}
              height={0}
              sizes="100%"
              style={{ width: "100%", height: "auto" }}
              loading="eager"
              priority
              fetchPriority="high"
              className={`${styles.image} ${
                imageLoaded ? styles.imageLoaded : ""
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            <div className={styles.imageShimmer} />
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
