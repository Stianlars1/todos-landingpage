"use client";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { SectionWrapper } from "@/components/sectionWrapper/sectionWrapper";
import { useState } from "react";
import { Features } from "../features/features";
import { KeyFeatures } from "../keyFeatures/keyFeatures";
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
        <SectionHeader
          feature={feature}
          title={title}
          description={description}
          animation={true}
        />
        {!showExamples && <Features toggleExamples={toggleExamples} />}
        {showExamples && <KeyFeatures toggleExamples={toggleExamples} />}
      </SectionWrapper>
    </>
  );
};
