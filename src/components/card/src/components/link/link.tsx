import { FC } from "react";

export const LinkCard: FC<LinkCardProps> = ({
  variant = "default",
  title,
  description,
  icon,
  ...props
}) => {
  return <a className="card" {...props}></a>;
};
