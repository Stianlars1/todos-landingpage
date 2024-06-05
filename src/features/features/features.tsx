import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { Tag } from "@/components/ui/tag/tag";
export const Features = () => {
  const feature = "Key features";
  const title = "Unlock Your Productivity with TaskBuddy";
  const description =
    "TaskBuddy offers a comprehensive set of features to help you stay organized, collaborate with your team, and achieve your goals.";
  return (
    <>
      <SectionHeader feature={feature} title={title} description={description}>
        <Tag
          backgroundHEX={"#FFC107"}
          textColorHEX={"#000"}
          width={"fit-content"}
        >
          ⚠ Under construction
        </Tag>
      </SectionHeader>
    </>
  );
};
