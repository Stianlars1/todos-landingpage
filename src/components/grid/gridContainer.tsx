import { GridProps } from "@/types/types";
import "./css/gridContainer.css";

export const GridContainer = ({ children }: GridProps) => {
  return <div className="grid-container">{children}</div>;
};
