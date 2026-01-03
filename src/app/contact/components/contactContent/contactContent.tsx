import Link from "next/link";
import styles from "./css/contactContent.module.css";

export const ContactContent = () => {
  return (
    <section className={styles.contactContent}>
      <div className={styles.contentItem}>
        <h2>Get in Touch</h2>
        <p>
          <strong>Email</strong>:{" "}
          <a className="linkHref" href="mailto:post@taskbuddy.dev">
            post@taskbuddy.dev
          </a>
        </p>
        <p>
          <strong>Support</strong>:{" "}
          <a className="linkHref" href="mailto:support@taskbuddy.dev">
            support@taskbuddy.dev
          </a>
        </p>
      </div>

      <div className={styles.contentItem}>
        <h2>Frequently Asked Questions</h2>
        <p>
          Check out our{" "}
          <a className="linkHref" href="/faq">
            FAQ
          </a>{" "}
          for quick answers to common questions.
        </p>
      </div>

      <div className={styles.contentItem}>
        <h2>Stay Connected</h2>
        <p>Follow us for updates, tips, and more:</p>
        <ul className={styles.list}>
          <Link
            href="https://github.com/stianlars1"
            className={`${styles.listItem} linkHref`}
          >
            GitHub: stianlars1
          </Link>
          <Link
            href="https://stianlarsen.com"
            className={`${styles.listItem} linkHref`}
          >
            Website: stianlarsen.com
          </Link>
          <Link
            href="https://instagram.com/stianlarsen"
            className={`${styles.listItem} linkHref`}
          >
            Instagram: /stianlarsen
          </Link>
        </ul>
      </div>
    </section>
  );
};
