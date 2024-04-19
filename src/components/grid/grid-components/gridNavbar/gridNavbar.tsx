import { FaGithub } from "react-icons/fa";

import { HamburgerMenu } from "@/components/hamburger/hamburger";
import { socialMedia } from "@/content/content";
import { iconSize } from "@/utils/constants";
import { Button } from "@stianlarsen/react-ui-kit";
import Link from "next/link";
import "./css/gridNavbar.css";
export const GridNavbar = () => {
  return (
    <div className="grid-container__navbar navbar">
      {/* <Image src="/logo.svg" alt="logo" /> */}
      <div className="title-burger-wrapper">
        <HamburgerMenu />
        <Link className="title" href={"/"}>
          <pre>
            <code>React UI kit</code>
          </pre>
        </Link>
      </div>

      <nav className="grid-container__navbar__nav ">
        <Button variant="icon" href={socialMedia.GITHUB.url}>
          <FaGithub fontWeight={200} size={iconSize} />
        </Button>
      </nav>
    </div>
  );
};
