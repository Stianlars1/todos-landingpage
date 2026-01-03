import { NextFont } from "next/dist/compiled/@next/font";
import { CSSProperties } from "react";
import cssstyles from "./css/tag.module.css";
export const Tag = ({
  children,
  width,
  className = " ",
  backgroundHEX = " ",
  textColorHEX = " ",
  style,
  libre,
}: {
  children: string;
  width?: "fit-content" | "100%";
  className?: string;
  backgroundHEX?: string;
  textColorHEX?: string;
  style?: CSSProperties;
  libre?: NextFont;
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
      className={`${cssstyles.tag} ${className} ${libre?.className}`}
    >
      {children}
    </div>
  );
};
