"use client";
import { Libre_Franklin } from "next/font/google";
import { Reveal } from "../ui/reveal/reveal";
import { Tag } from "../ui/tag/tag";
import styles from "./css/sectionHeader.module.css";
const Libre = Libre_Franklin({ subsets: ["latin"] });

interface Props {
  feature?: string;
  title: string;
  description: string;
  children?: React.ReactNode;
  animation?: boolean;
  className?: string;
}
export const SectionHeader = ({
  feature,
  title,
  description,
  children,
  animation = true,
  className = "",
}: Props) => {
  return (
    <>
      <div
        className={`${styles.sectionHeader} ${className}`}
        suppressHydrationWarning
      >
        {animation && feature && feature.length > 0 && (
          <Reveal delay={0.1} type="opacity" duration={1} width="100%">
            <Tag>{feature}</Tag>
          </Reveal>
        )}
        {!animation && feature && feature.length > 0 && <Tag>{feature}</Tag>}
        {animation ? (
          <>
            <Reveal delay={0.15} type="opacity" duration={1} width="100%">
              <h2 className={`${styles.title} ${Libre.className}`}>{title}</h2>
            </Reveal>
            <Reveal delay={0.2} type="opacity" duration={1} width="100%">
              <p
                className={`description ${styles.description} ${Libre.className}`}
              >
                {description}
              </p>
            </Reveal>
          </>
        ) : (
          <>
            <h2 className={`${styles.title} ${Libre.className}`}>{title}</h2>
            <p
              className={`description ${styles.description} ${Libre.className}`}
            >
              {description}
            </p>
          </>
        )}
        {children && children}
      </div>
    </>
  );
};
