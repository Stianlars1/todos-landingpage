import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { Backdrop } from "./components/backdrop/backdrop";
import { CloseButton } from "./components/closeButton/closeButton";
import { SidebarNav } from "./components/sidebarNav/sidebarNav";
import "./css/gridSidebar.css";

export const GridSidebar = () => {
  return (
    <aside className={`grid-container__sidebar sidebar ${GeistSans.className}`}>
      <CloseButton />
      <Backdrop />
      <Link className="title" href={"/"}>
        <pre>
          <code className={GeistMono.className}>React Code Preview</code>
        </pre>
      </Link>
      <div className="sidebar__getting-started">Getting Started</div>
      <SidebarNav />
    </aside>
  );
};
