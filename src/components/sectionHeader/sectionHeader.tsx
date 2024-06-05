import { Libre_Franklin } from "next/font/google";
import { Tag } from "../ui/tag/tag";
import styles from "./css/sectionHeader.module.css";
const Libre = Libre_Franklin({ subsets: ["latin"] });

interface Props {
  feature: string;
  title: string;
  description: string;
  children?: React.ReactNode;
}
export const SectionHeader = ({
  feature,
  title,
  description,
  children,
}: Props) => {
  return (
    <>
      <div className={styles.sectionHeader}>
        {feature && feature.length > 0 && <Tag>{feature}</Tag>}
        <h2 className={`${styles.title} ${Libre.className}`}>{title}</h2>
        <p className={`${styles.description} ${Libre.className}`}>
          {description}
        </p>
        {children && children}
      </div>
    </>
  );
};
