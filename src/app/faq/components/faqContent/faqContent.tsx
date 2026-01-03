import { FAQAccordion } from "../faqAccordion/faqAccordion";
import styles from "./css/faqContent.module.css";

export const FaqContent = () => {
  return (
    <section className={styles.faqContent}>
      <FAQAccordion />
    </section>
  );
};
