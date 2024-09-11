import styles from "./css/contactContent.module.css";

export const ContactContent = () => {
  return (
    <section className={styles.contactContent}>
      <div className={styles.contactInfo}>
        <h2>Get in Touch</h2>
        <p>
          <strong>Email</strong>:{" "}
          <a href="mailto:post@taskbuddy.dev">post@taskbuddy.dev</a>
        </p>
        <p>
          <strong>Support</strong>:{" "}
          <a href="mailto:support@taskbuddy.dev">support@taskbuddy.dev</a>
        </p>
      </div>

      <div className={styles.faq}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Check out our <a href="/faq">FAQ</a> for quick answers to common
          questions.
        </p>
      </div>

      <div className={styles.social}>
        <h2>Stay Connected</h2>
        <p>Follow us for updates, tips, and more:</p>
        <ul>
          <li>
            <a href="https://github.com/stianlars1">GitHub: stianlars1</a>
          </li>
          <li>
            <a href="https://stianlarsen.com">Website: stianlarsen.com</a>
          </li>
          <li>
            <a href="https://instagram.com/stianlarsen">
              Instagram: /stianlarsen
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
