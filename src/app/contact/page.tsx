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
  title: "Contact",
  description: "Get in touch with us.",
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
