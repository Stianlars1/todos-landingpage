import { GridSection } from "@/components/grid/components/gridSection/gridSection";
import { GridContainer } from "@/components/grid/components/gridcontainer/gridcontainer";
import { Benefits } from "@/features/benefits/benefits";
import { Features } from "@/features/features/features";
import { Header } from "@/features/header/header";
import { Pricing } from "@/features/pricing/pricing";
import { Testimonials } from "@/features/testimonials/testimonials";
import { Why } from "@/features/why/why";

export default function Home() {
  return (
    <>
      <GridContainer>
        <GridSection size="large">
          <Header />
        </GridSection>

        <GridSection>
          <Features />
        </GridSection>

        <GridSection>
          <Benefits />
        </GridSection>

        <GridSection>
          <Why />
        </GridSection>

        <GridSection>
          <Pricing />
        </GridSection>

        <GridSection>
          <Testimonials />
        </GridSection>
      </GridContainer>
    </>
  );
}
