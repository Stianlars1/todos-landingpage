// "use client";
import { GridSection } from "@/components/grid/components/gridSection/gridSection";
import { GridContainer } from "@/components/grid/components/gridcontainer/gridcontainer";

import type { Metadata, Viewport } from "next";
import { LearnMoreHeader } from "./components/learnMoreHeader/learnMoreHeader";

import { LearnMoreContent } from "./components/learnMoreContent/learnMoreContent";
import styles from "./css/learnMore.module.css";
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export const metadata: Metadata = {
  title: "Learn More | TaskBuddy",
  description:
    "Explore the powerful features of TaskBuddy that streamline your task management and boost productivity. Discover the dashboard, task viewer, and more.",
  keywords: [
    "TaskBuddy",
    "Learn More",
    "task management",
    "dashboard",
    "task viewer",
    "features",
  ],
  openGraph: {
    title: "Learn More | TaskBuddy",
    description:
      "Discover how TaskBuddy's advanced features can improve your workflow. Explore the dashboard, task viewer, and more.",
    url: "https://taskbuddy.dev/learn-more",
    siteName: "TaskBuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Learn More | TaskBuddy",
    description:
      "Explore TaskBuddy's features that make task management easier.",
  },
};

export default function Home() {
  return (
    <>
      <GridContainer>
        <GridSection className={styles.gridSection} size="unlimited">
          <LearnMoreHeader />

          <LearnMoreContent />
        </GridSection>
      </GridContainer>
    </>
  );
}
