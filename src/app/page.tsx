import { GridSection } from "@/components/grid/components/gridSection/gridSection";
import { GridContainer } from "@/components/grid/components/gridcontainer/gridcontainer";
import { Benefits } from "@/features/benefits/benefits";
import { CallToAction } from "@/features/callToAction/callToAction";
import { Demo } from "@/features/demo/demo";
import { Header } from "@/features/header/header";
import { HowItWorks } from "@/features/howItWorks/howItWorks";
import { KeyFeaturesContainer } from "@/features/keyFeaturesContainer/keyFeaturesContainer";
import { Testimonials } from "@/features/testimonials/testimonials";

export default function Home() {
  return (
    <>
      <GridContainer>
        <GridSection size="large">
          <Header />
        </GridSection>

        <GridSection>
          <KeyFeaturesContainer />
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
        {/* 
        <GridSection>
          <Why />
        </GridSection> */}

        {/* <GridSection>
          <Pricing />
        </GridSection> */}

        <GridSection>
          <Testimonials />
        </GridSection>
      </GridContainer>
    </>
  );
}
