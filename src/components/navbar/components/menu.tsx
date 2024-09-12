"use client";
import { useBrowserInfo } from "@/hooks/useBrowserInfo";
import { APP_URL_LOGIN, APP_URL_SIGNUP } from "@/utils/constants";
import Link from "next/link";
import { useEffect } from "react";
import { CiMenuFries } from "react-icons/ci";
import styles from "./css/menu.module.css";
export const NavbarDesktopMenu = () => {
  return (
    <div className={styles.menu}>
      <ul className={styles.list}>
        <Link href={"/about-us"} className={styles.item}>
          About us
        </Link>
        <Link href={"/learn-more"} className={styles.item}>
          Learn more
        </Link>
        <Link href={"/contact"} className={styles.item}>
          Contact
        </Link>
      </ul>
      <div className={styles.CTA}>
        <a
          href={APP_URL_SIGNUP}
          className={`${styles.button} ${styles.signUp}`}
        >
          Sign up
        </a>
        <a href={APP_URL_LOGIN} className={`${styles.button} ${styles.login}`}>
          Log in
        </a>
      </div>

      <button className={styles.hamburgerWrapper} onClick={toggleNativeMenu}>
        <CiMenuFries className={styles.hamburger} width={16} />
      </button>
    </div>
  );
};
export const NavbarNativeMenu = () => {
  const { isMobile } = useBrowserInfo();
  const spanClass = isMobile ? styles.mobileHoverItem : styles.hoverItem;
  const linkClass = isMobile
    ? `${styles.nativeMobileItem} ${styles.nativeItem}`
    : styles.nativeItem;
  return (
    <>
      <div className={styles.nativeMenu}>
        <ul className={styles.nativeList}>
          <Link
            href={"/learn-more"}
            onClick={toggleNativeMenu}
            className={linkClass}
            style={{ animationDelay: "0.25s" }}
          >
            Learn more
            <span className={spanClass}>
              Explore TaskBuddy&apos;s key features
            </span>
          </Link>

          <Link
            href={"/about-us"}
            className={linkClass}
            style={{ animationDelay: "0.5s" }}
            onClick={toggleNativeMenu}
          >
            About us
            <span className={spanClass}>Learn our story and values</span>
          </Link>

          <Link
            href={"/contact"}
            className={linkClass}
            style={{ animationDelay: "0.75s" }}
            onClick={toggleNativeMenu}
          >
            Contact
            <span className={spanClass}>
              Reach out for support or inquiries
            </span>
          </Link>
        </ul>
      </div>
    </>
  );
};

export const toggleNativeMenu = () => {
  const isOpen = document.body.getAttribute("data-nav-open") === "true";
  document.body.setAttribute("data-nav-open", (!isOpen).toString());
};

export const NativeBackdrop = () => {
  useEffect(() => {
    // add ESC key listener to toggle toggleNativeMenu
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        toggleNativeMenu();
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);
  return <div onClick={toggleNativeMenu} className={styles.nativeBackdrop} />;
};
