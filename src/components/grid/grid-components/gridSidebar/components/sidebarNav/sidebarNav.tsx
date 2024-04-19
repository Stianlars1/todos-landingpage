import { navLinks } from "@/content/content";
import react from "react";
import { NavLink } from "./components/navlinks/navlink";
import { NavlMenu } from "./components/navlinks/navlinkMenu";

export const SidebarNav = react.memo(() => {
  return (
    <nav>
      <ul>
        {Object.entries(navLinks).map(([key, value]) => {
          const hasMenu = value.menu && value.menu.length > 0;
          if (hasMenu) {
            return <NavlMenu key={value.url} value={value} />;
          }
          return <NavLink key={value.url} value={value} />;
        })}
      </ul>
    </nav>
  );
});
