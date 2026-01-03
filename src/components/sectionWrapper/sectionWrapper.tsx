import { Libre_Franklin } from "next/font/google";
import styles from "./css/sectionWrapper.module.css";
const Libre = Libre_Franklin({ subsets: ["latin"] });

interface Props {
  children: React.ReactNode;
  className?: string;
}
export const SectionWrapper = ({ children, className = "" }: Props) => {
  return (
    <>
      <div
        className={`${styles.sectionWrapper} ${Libre.className} ${className}`}
      >
        {children}
      </div>
    </>
  );
};
