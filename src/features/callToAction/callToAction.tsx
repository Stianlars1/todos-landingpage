import { SectionHeader } from "@/components/sectionHeader/sectionHeader";
import { SectionWrapper } from "@/components/sectionWrapper/sectionWrapper";
import { APP_URL_SIGNUP } from "@/utils/constants";
import { Button } from "@stianlarsen/react-ui-kit";
import Link from "next/link";
import styles from "./css/callToAction.module.css";
export const CallToAction = () => {
  const featureTag = "Get Started";
  const title = "Ready to Boost Your Productivity?";
  const description =
    "Sign up now and start experiencing the benefits of TaskBuddy.";
  return (
    <>
      <SectionWrapper>
        <SectionHeader
          feature={featureTag}
          title={title}
          description={description}
        />

        <CallToActionContent />
      </SectionWrapper>
    </>
  );
};

const CallToActionContent = () => {
  const onClick = () => {};
  return (
    <div className={styles.callToActionContent}>
      <Link href={APP_URL_SIGNUP}>
        <Button variant="primary" className={styles.ctaButton}>
          Get Started
        </Button>
      </Link>
      <p className={styles.ctaDescription}>
        Join thousands of users who are boosting their productivity with
        TaskBuddy. No credit card required.
      </p>
    </div>
  );
};
