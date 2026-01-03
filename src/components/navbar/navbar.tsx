import { TaskBuddyLogo } from "@/assets/logos/taskBuddyLogoSvg";
import Link from "next/link";
import {
  NativeBackdrop,
  NavbarDesktopMenu,
  NavbarNativeMenu,
} from "./components/menu";
import styles from "./css/navbar.module.css";

export const Navbar = () => {
  return (
    <>
      <div className={styles.topBlur} />
      <div className={styles.navWrapper}>
        <nav className={styles.navbar}>
          <Link href="/" className={styles.link}>
            <TaskBuddyLogo className={styles.taskbuddyLogo} />
            <code className={styles.logoText}>TaskBuddy</code>
          </Link>

          <NavbarDesktopMenu />
        </nav>
        <NavbarNativeMenu />
      </div>
      <NativeBackdrop />
    </>
  );
};
