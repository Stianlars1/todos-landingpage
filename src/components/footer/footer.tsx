"use client";
import { TaskBuddyFooterLogo } from "@/assets/logos/taskBuddyLogoSvg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaEnvelope, FaGithub, FaInstagram } from "react-icons/fa";
import styles from "./css/footer.module.css";
const PATH_MAP = {
  ABOUT_US: "/about-us",
  CONTACT: "/contact",
  LEARN_MORE: "/learn-more",
  ROOT: "/",
};
export const Footer = () => {
  const pathName = usePathname();
  return (
    <footer className={styles.footer}>
      <TaskbuddyLogo />
      <div className={styles.footerContent}>
        <div className={styles.sections}>
          <Copyright />
          <nav aria-label="Social Media Links" className={styles.sectionItem}>
            <h3 className={styles.heading3}>Connect with Me</h3>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>
                <Link
                  className={styles.link}
                  href="https://stianlarsen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Stian Larsen's personal portfolio website"
                >
                  <Image
                    src={"/stian-bitmoji.png"}
                    width={50}
                    height={50}
                    alt="Bitmoji of Stian Larsen"
                    className={styles.bitmoji}
                    fetchPriority="auto"
                  />
                  stianlarsen.com
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={styles.link}
                  href="https://github.com/stianlars1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Stian Larsen's GitHub profile"
                >
                  <FaGithub className={styles.socialIcon} />
                  <span>/stianlars1</span>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={styles.link}
                  href="https://instagram.com/stianlarsen"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Visit Stian Larsen's Instagram profile"
                >
                  <FaInstagram className={styles.socialIcon} />
                  <span>stianlarsen</span>
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={styles.link}
                  href="mailto:stian.larsen@mac.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Send an email to Stian Larsen"
                >
                  <FaEnvelope className={styles.socialIcon} />
                  <span>stian.larsen@mac.com</span>
                </Link>
              </li>
            </ul>
          </nav>

          <nav aria-label="TaskBuddy Links" className={styles.sectionItem}>
            <h3 className={styles.heading3}>Explore TaskBuddy</h3>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>
                <Link
                  className={`${styles.link} ${
                    pathName === PATH_MAP.LEARN_MORE ? styles.active : ""
                  }`}
                  href="https://taskbuddy.dev"
                  aria-label="Learn more about TaskBuddy"
                >
                  Learn More
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={`${styles.link} ${
                    pathName === PATH_MAP.ABOUT_US ? styles.active : ""
                  }`}
                  href="https://taskbuddy.dev/about"
                  aria-label="About TaskBuddy"
                >
                  About Us
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={`${styles.link} ${
                    pathName === PATH_MAP.CONTACT ? styles.active : ""
                  }`}
                  href="https://taskbuddy.dev/contact"
                  aria-label="Contact TaskBuddy"
                >
                  Contact
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={`${styles.link} ${
                    pathName === PATH_MAP.ROOT ? styles.active : ""
                  }`}
                  href="https://taskbuddy.dev"
                  aria-label="TaskBuddy Root Landing Page"
                >
                  Home
                </Link>
              </li>
            </ul>
          </nav>

          <nav
            aria-label="TaskBuddy Access Links"
            className={styles.sectionItem}
          >
            <h3 className={styles.heading3}>Get Started</h3>
            <ul className={styles.itemList}>
              <li className={styles.listItem}>
                <Link
                  className={styles.link}
                  href="https://app.taskbuddy.dev/signup"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Sign up for TaskBuddy"
                >
                  Sign Up
                </Link>
              </li>
              <li className={styles.listItem}>
                <Link
                  className={styles.link}
                  href="https://app.taskbuddy.dev/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Log in to TaskBuddy"
                >
                  Log In
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <CopyrightMobile />
    </footer>
  );
};

const Copyright = () => {
  const yearEstablished = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div
        className={`${styles.sectionItem} ${styles.copyright} ${styles.copyrightMobileHidden}`}
      >
        <div className={styles.copyrightLogo}>
          <TaskBuddyFooterLogo className={styles.taskBuddyCheckmark} />
          <span className={styles.footerTaskBuddyText}>TaskBuddy</span>
        </div>

        <div className={styles.copyrightInfo}>
          <p className={styles.copyrightInfoParagraph}>
            ©{" "}
            {yearEstablished !== currentYear
              ? `${yearEstablished} - ${currentYear}`
              : currentYear}{" "}
            Stian Larsen. <br />
            All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
const TaskbuddyLogo = () => {
  return (
    <>
      <div className={`${styles.TaskBuddyLogo}`}>
        <div className={styles.copyrightLogo}>
          <TaskBuddyFooterLogo className={styles.taskBuddyCheckmark} />
          <span className={styles.footerTaskBuddyText}>TaskBuddy</span>
        </div>
      </div>
    </>
  );
};
const CopyrightMobile = () => {
  const yearEstablished = 2024;
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className={`${styles.copyrightMobile}`}>
        <div className={styles.copyrightInfo}>
          <p className={styles.copyrightInfoParagraph}>
            ©{" "}
            {yearEstablished !== currentYear
              ? `${yearEstablished} - ${currentYear}`
              : currentYear}{" "}
            Stian Larsen. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
};
