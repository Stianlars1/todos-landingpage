"use client";
import { IconChevron } from "@/assets/icons";
import { NavlinkType } from "@/types/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { handleCloseNav } from "../../../../utils";
import "./css/navlinks.css";

export const NavlMenu = ({ value }: { value: NavlinkType }) => {
  const { url, name, menu } = value;

  const pathname = usePathname();
  // Check if the current path starts with the menu base URL (supports sub-routes)
  const isActive = pathname.startsWith(url);
  // Optionally, determine if the menu should be highlighted
  const isHighlighted = url !== pathname && pathname.startsWith(url);
  // Initialize the menuOpen state based on whether the current URL starts with the menu's base URL
  const [menuOpen, setMenuOpen] = useState(isActive);

  const collapsed = menu && menuOpen;

  const liClassName = `navlink-menu ${isActive ? "navlink-menu-active" : ""} ${
    isHighlighted ? "navlink-menu-highlighted" : " "
  } ${menuOpen ? "navlink-menu-open" : ""}`;

  useEffect(() => {
    if (isActive) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }
  }, [isActive, url]);

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };
  const handleMenuLickClick = () => {
    handleCloseNav();
  };

  return (
    <li className={liClassName}>
      <div className="navlink-menu__link-wrapper">
        <Link onClick={handleMenuClick} className="" key={url} href={url}>
          {name}
        </Link>{" "}
        <IconChevron
          size={16}
          onClick={() => {
            setMenuOpen(!menuOpen);
          }}
        />
      </div>

      {collapsed && (
        <>
          <ul className="navlink-menu__ul">
            {menu.map((item, index: number) => {
              const isMenuActive = item.url === pathname;
              const menuLiClassname = `navlink-menu__ul__link ${
                isMenuActive ? " navlink-menu-active__ul__link-active " : ""
              } `;
              return (
                <Link
                  className={menuLiClassname}
                  key={item.url}
                  href={item.url}
                  style={{ animationDelay: `${index * 35}ms` }}
                  onClick={handleMenuLickClick}
                >
                  {item.name}
                </Link>
              );
            })}
          </ul>
        </>
      )}
    </li>
  );
};
