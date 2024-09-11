// "use client";
import { GridSection } from "@/components/grid/components/gridSection/gridSection";
import { GridContainer } from "@/components/grid/components/gridcontainer/gridcontainer";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import type { Viewport } from "next";
import { DashboardsSVG } from "./assets/dashboardsSVG";
import { AboutUsContent } from "./components/aboutUs/aboutUsContent";
import styles from "./css/aboutUs.module.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export default function Home() {
  return (
    <>
      <GridContainer>
        <GridSection className={styles.gridSection} size="large">
          <SectionHeader
            title="Bringing Simplicity to Task Management"
            description="At TaskBuddy, we’re on a mission to make productivity effortless by providing a task management tool that adapts to your needs. We believe that managing tasks should be simple and intuitive, freeing you to focus on what truly matters -  getting things done with ease."
            animation={false}
            className={styles.sectionHeader}
          />

          <div className={styles.imageWrapper}>
            <div className={styles.image}>
              <DashboardsSVG className={styles.svg} />
            </div>
          </div>

          <AboutUsContent />
        </GridSection>
      </GridContainer>
    </>
  );
}
