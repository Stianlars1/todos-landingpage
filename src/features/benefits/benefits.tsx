import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { Tag } from "@/components/ui/tag/tag";
export const Benefits = () => {
  const feature = "Key benefits";
  const title = "Unlock Your Team's Potential with TaskBuddy";
  const description =
    "TaskBuddy offers a range of benefits to help you and your team work more efficiently and effectively.";
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
