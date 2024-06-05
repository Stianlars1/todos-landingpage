import { TaskBuddyLogo } from "@/assets/logos/taskBuddyLogoSvg";
import styles from "./css/navbar.module.css";
export const Navbar = () => {
  return (
    <div>
      <nav className={styles.navbar}>
        <TaskBuddyLogo className={styles.taskbuddyLogo} />
        <code>TaskBuddy.dev</code>
      </nav>
    </div>
  );
};
