import { ReactElement, ReactNode } from "react";

import "./css/gridMainContentWrapper.css";
export const GridMainContentWrapper = ({
  children,
}: {
  children: ReactElement | ReactElement[] | ReactNode | ReactNode[];
}) => {
  return <div className="grid-main-content-wrapper">{children}</div>;
};
