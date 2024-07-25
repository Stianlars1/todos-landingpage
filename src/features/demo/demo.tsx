import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { SectionWrapper } from "@/components/sectionWrapper/sectionWrapper";
import { Reveal } from "@/components/ui/reveal/reveal";
import { TaskDemo } from "@/playground/demos/taskDemo";
import { Libre_Franklin } from "next/font/google";
import styles from "./css/demo.module.css";

const Libre = Libre_Franklin({ subsets: ["latin"] });

export const Demo = () => {
  const feature = "Interactive Demo";
  const title = "Easy to Use – Try It Out Yourself!";
  const description =
    "Experience the intuitive drag-and-drop feature of TaskBuddy by trying out our interactive demo.";
  return (
    <SectionWrapper>
      <SectionHeader
        feature={feature}
        title={title}
        description={description}
      />

      <InteractiveDemo />
    </SectionWrapper>
  );
};

const InteractiveDemo = () => {
  return (
    <div className={`${styles.content} ${Libre.className}`}>
      <Reveal threshold={0.1} reset delay={0.25} type="opacity" width="100%">
        <div className={styles.playground}>
          <TaskDemo />
        </div>
      </Reveal>
    </div>
  );
};
