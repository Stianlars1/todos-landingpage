// "use client";
import { GridSection } from "@/components/grid/components/gridSection/gridSection";
import { GridContainer } from "@/components/grid/components/gridcontainer/gridcontainer";

import type { Metadata, Viewport } from "next";

import { FaqContent } from "./components/faqContent/faqContent";
import { FaqHeader } from "./components/faqHeader/faqHeader";
import styles from "./css/faq.module.css";
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export const metadata: Metadata = {
  title: "Frequently Asked Questions | TaskBuddy",
  description:
    "Find answers to common questions about TaskBuddy, including features, security, and getting started.",
  keywords: [
    "TaskBuddy",
    "FAQ",
    "frequently asked questions",
    "support",
    "task management",
  ],
  openGraph: {
    title: "Frequently Asked Questions | TaskBuddy",
    description:
      "Get answers to the most common questions about using TaskBuddy.",
    url: "https://taskbuddy.dev/faq",
    siteName: "TaskBuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | TaskBuddy",
    description: "Find quick answers to common questions about TaskBuddy.",
  },
};

export default function Home() {
  return (
    <>
      <GridContainer>
        <GridSection className={styles.gridSection} size="large">
          <FaqHeader />

          <FaqContent />
        </GridSection>
      </GridContainer>
    </>
  );
}
