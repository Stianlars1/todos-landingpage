"use client";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { SectionWrapper } from "@/components/sectionWrapper/sectionWrapper";
import { Reveal } from "@/components/ui/reveal/reveal";
import { useBrowserInfo } from "@/hooks/useBrowserInfo";
import { useEffect, useState } from "react";
import { howItWorksSteps, HowItWorksStepsType } from "./content";
import styles from "./css/howItWorks.module.css";

export const HowItWorks = () => {
  const title = "How TaskBuddy Works";
  const description =
    "Discover how TaskBuddy can simplify your task management process and keep you on track.";
  const featureTag = "Is it for you?";
  return (
    <SectionWrapper>
      <SectionHeader
        feature={featureTag}
        title={title}
        description={description}
      />

      <HowItWorksContent />
    </SectionWrapper>
  );
};

const HowItWorksContent = () => {
  const steps = howItWorksSteps;
  const { isMobile } = useBrowserInfo();
  const [isMobileSize, setIsMobileSize] = useState(isMobile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileSize(false);
      } else {
        setIsMobileSize(true);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);
  return (
    <>
      <div className={styles.content}>
        <ul className={styles.contentList}>
          {steps.map((step, index) => (
            <HowItWorksStep
              key={step.title}
              index={index}
              isMobileSize={isMobileSize}
              step={step}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

const HowItWorksStep = ({
  step,
  index,
  isMobileSize,
}: {
  step: HowItWorksStepsType;
  index: number;
  isMobileSize: boolean;
}) => {
  const Icon = step.icon;
  const [rendered, setRendered] = useState(false);

  return (
    <>
      <Reveal
        onRevealed={() => setRendered(true)}
        key={index}
        delay={0.1}
        type="left"
        width="100%"
        reset
      >
        <li
          className={`${styles.contentItem} ${
            rendered
              ? index % 2 === 0
                ? styles.contentItemAnimationEven
                : styles.contentItemAnimationOdd
              : ""
          }`}
          style={{
            marginLeft: `${index * (isMobileSize ? 10 : 40)}px`,
          }}
        >
          <h3>{step.title}</h3>
          <p>{step.description}</p>
          <span
            className={`${styles.itemIcon} ${
              isMobileSize ? styles.isMobile : ""
            }`}
          >
            {Icon}
          </span>
        </li>
      </Reveal>
    </>
  );
};
