import styles from "./css/contactHeader.module.css";

export const FaqHeader = () => {
  return (
    <header className={styles.header}>
      <h1>Frequently Asked Questions</h1>
      <p className={styles.description}>
        Find answers to the most common questions about using TaskBuddy. Whether
        you&apos;re curious about features, data security, or getting started,
        we&apos;ve got you covered.
      </p>
    </header>
  );
};
