// "use client";
import { GridSection } from "@/components/grid/components/gridSection/gridSection";
import { GridContainer } from "@/components/grid/components/gridcontainer/gridcontainer";

import type { Metadata, Viewport } from "next";

import { ContactContent } from "./components/contactContent/contactContent";
import { ContactHeader } from "./components/contactHeader/contactHeader";
import styles from "./css/contact.module.css";
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export const metadata: Metadata = {
  title: "Contact Us | TaskBuddy",
  description:
    "Get in touch with the TaskBuddy team for support, feedback, or general inquiries. We're here to help!",
  keywords: ["TaskBuddy", "contact", "support", "feedback", "task management"],
  openGraph: {
    title: "Contact Us | TaskBuddy",
    description: "Reach out to the TaskBuddy team for support and inquiries.",
    url: "https://taskbuddy.dev/contact",
    siteName: "TaskBuddy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | TaskBuddy",
    description: "Need help or have questions? Contact the TaskBuddy team.",
  },
};

export default function Home() {
  return (
    <>
      <GridContainer>
        <GridSection className={styles.gridSection} size="large">
          <ContactHeader />

          <ContactContent />
        </GridSection>
      </GridContainer>
    </>
  );
}
