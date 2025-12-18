// "use client";
import { GridSection } from "@/components/grid/components/gridSection/gridSection";
import { GridContainer } from "@/components/grid/components/gridcontainer/gridcontainer";
import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import type { Metadata, Viewport } from "next";
import { DashboardsSVG } from "./assets/dashboardsSVG";
import { AboutUsContent } from "./components/aboutUs/aboutUsContent";
import styles from "./css/aboutUs.module.css";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export const metadata: Metadata = {
  title: "About Us | TaskBuddy",
  description:
    "Learn about TaskBuddy's mission to simplify task management. Discover our vision, values, and meet the team behind the app.",
  keywords: [
    "TaskBuddy",
    "about us",
    "team",
    "mission",
    "productivity tool",
    "Stian Larsen",
  ],
  openGraph: {
    title: "About Us | TaskBuddy",
    description:
      "Get to know TaskBuddy and the team committed to making task management simple and effective.",
    url: "https://taskbuddy.dev/about-us",
    siteName: "TaskBuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | TaskBuddy",
    description: "Learn more about TaskBuddy's mission and the team behind it.",
  },
};

export default function Home() {
  return (
    <>
      <GridContainer>
        <GridSection className={styles.gridSection} size="unlimited">
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
