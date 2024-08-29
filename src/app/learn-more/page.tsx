// "use client";
import { GridSection } from "@/components/grid/components/gridSection/gridSection";
import { GridContainer } from "@/components/grid/components/gridcontainer/gridcontainer";

import type { Viewport } from "next";
import { LearnMoreHeader } from "./components/learnMoreHeader/learnMoreHeader";

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
        <GridSection size="large">
          <LearnMoreHeader />
        </GridSection>
      </GridContainer>
    </>
  );
}
