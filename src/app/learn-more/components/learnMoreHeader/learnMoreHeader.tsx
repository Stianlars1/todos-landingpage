import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { Libre_Franklin } from "next/font/google";
import { LearnMoreHeaderSVG } from "./components/learnMoreHeaderSVG";
const Libre = Libre_Franklin({ subsets: ["latin"] });

export const LearnMoreHeader = async () => {
  return (
    <header>
      <SectionHeader
        title="Curious about TaskBuddy?"
        description="We've packed tons of features into our application to support all needs."
        animation={false}
      />
      <LearnMoreHeaderSVG />
    </header>
  );
};
