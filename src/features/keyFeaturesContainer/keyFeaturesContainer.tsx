"use client";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { SectionWrapper } from "@/components/sectionWrapper/sectionWrapper";
import { LightBeam } from "@stianlarsen/react-light-beam";
import { useState } from "react";
import styles from "./css/keyFeaturesContainer.module.css";
import { Features } from "./features/features";
import { KeyFeatures } from "./keyFeatures/keyFeatures";
export const KeyFeaturesContainer = () => {
  const [showExamples, setShowExamples] = useState<boolean>(false);
  const [hasRendered, setHasRendered] = useState(false);
  const toggleExamples = () => {
    setShowExamples(!showExamples);
    if (!hasRendered) {
      setHasRendered(true);
    }
  };

  const feature = "Key features";
  const title = "Unlock Your Productivity with TaskBuddy";
  const description =
    "TaskBuddy offers a comprehensive set of features to help you stay organized and achieve your goals.";
  return (
    <>
      <SectionWrapper>
        <LightBeam
          className={`${styles.lightBeam} ${styles.lightBeamLoaded}`}
          colorDarkmode="hsl(var(--primary) / 1)"
          colorLightmode="hsl(var(--foreground) / 0.2)"
          key={"features_beam"}
          fullWidth={0.8}
        />
        <SectionHeader
          feature={feature}
          title={title}
          description={description}
          animation={true}
          className={styles.sectionHeader}
        />
        {!showExamples && <Features toggleExamples={toggleExamples} />}
        {showExamples && <KeyFeatures toggleExamples={toggleExamples} />}
      </SectionWrapper>
    </>
  );
};
