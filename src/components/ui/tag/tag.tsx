import { Libre_Franklin } from "next/font/google";
import { CSSProperties } from "react";
import cssstyles from "./css/tag.module.css";
const Libre = Libre_Franklin({ subsets: ["latin"] });
export const Tag = ({
  children,
  width,
  className = " ",
  backgroundHEX = " ",
  textColorHEX = " ",
  style,
}: {
  children: string;
  width?: "fit-content" | "100%";
  className?: string;
  backgroundHEX?: string;
  textColorHEX?: string;
  style?: CSSProperties;
}) => {
  const styles: CSSProperties = {
    ...style,
    width: width,
    backgroundColor: backgroundHEX,
    color: textColorHEX,
  };
  return (
    <div
      style={styles}
      className={`${cssstyles.tag} ${className} ${Libre.className}`}
    >
      {children}
    </div>
  );
};
