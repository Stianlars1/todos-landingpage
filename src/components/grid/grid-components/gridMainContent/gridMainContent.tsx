import { ReactElement, ReactNode } from "react";
import "./css/gridMainContent.css";

export const GridMainContent = ({
  children,
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
}) => {
  return <div className="grid-main-content">{children}</div>;
};
