"use client";
import { NavlinkType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { handleCloseNav } from "../../../../utils";
import "./css/navlinks.css";

export const NavLink = ({ value }: { value: NavlinkType }) => {
  const { url, name } = value;
  const pathname = usePathname();
  const isActive = url === pathname;
  const liClassName = `navlink ${isActive ? "navlink-active" : ""} `;

  return (
    <li key={url} className={liClassName}>
      <Link onClick={handleCloseNav} href={url}>
        {name}
      </Link>
    </li>
  );
};
