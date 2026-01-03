import styles from "./css/contactHeader.module.css";

export const ContactHeader = () => {
  return (
    <header className={styles.header}>
      <h1>Contact Us</h1>
      <p>
        We’d love to hear from you! Whether you have questions, feedback, or
        just want to say hello, feel free to reach out.
      </p>
    </header>
  );
};
