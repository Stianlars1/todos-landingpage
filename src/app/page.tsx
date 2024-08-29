// "use client";
import { GridSection } from "@/components/grid/components/gridSection/gridSection";
import { GridContainer } from "@/components/grid/components/gridcontainer/gridcontainer";
import { Benefits } from "@/features/benefits/benefits";
import { CallToAction } from "@/features/callToAction/callToAction";
import { DashboardShowcase } from "@/features/dashboardShowcase/dashboardShowcase";
import { Demo } from "@/features/demo/demo";
import { Header } from "@/features/header/header";
import { HowItWorks } from "@/features/howItWorks/howItWorks";
import { KeyFeaturesContainer } from "@/features/keyFeaturesContainer/keyFeaturesContainer";

import type { Viewport } from "next";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f4f6" },
    { media: "(prefers-color-scheme: dark)", color: "#020817" },
  ],
};

export default async function Home() {
  return (
    <>
      <GridContainer>
        <GridSection size="large">
          <Header />
        </GridSection>

        {/* <GridSection>
          <CardStack />
        </GridSection> */}

        <GridSection>
          <KeyFeaturesContainer />
        </GridSection>

        <GridSection>
          <DashboardShowcase />
        </GridSection>

        <GridSection>
          <HowItWorks />
        </GridSection>

        <GridSection>
          <Benefits />
        </GridSection>

        <GridSection>
          <Demo />
        </GridSection>

        <GridSection>
          <CallToAction />
        </GridSection>

        {/* <>
          <Why />
        </> */}

        {/* <GridSection>
          <Pricing />
        </GridSection> */}

        {/* <GridSection>
          <Testimonials />
        </GridSection> */}

        <GridSection>
          <></>
        </GridSection>
      </GridContainer>
    </>
  );
}
