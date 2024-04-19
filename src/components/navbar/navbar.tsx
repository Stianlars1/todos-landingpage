import { FaGithub } from "react-icons/fa";

import { HamburgerMenu } from "@/components/hamburger/hamburger";
import { socialMedia } from "@/content/content";
import { iconSize } from "@/utils/constants";
import { Button } from "@stianlarsen/react-ui-kit";
import { GeistMono } from "geist/font/mono";
import Image from "next/image";
import Link from "next/link";
import "./css/navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-wrapper">
        <div className="title-burger-wrapper">
          <HamburgerMenu />
          <Link className="title" href={"/"}>
            <Image
              src={"/android-chrome-512x512.png"}
              width={40}
              height={40}
              alt="logo"
            />
            <pre>
              <code className={GeistMono.className}>React Code Preview</code>
            </pre>
          </Link>
        </div>

        <nav className="grid-container__navbar__nav ">
          <Button variant="icon" href={socialMedia.GITHUB.url}>
            <FaGithub fontWeight={200} size={iconSize} />
          </Button>
        </nav>
      </div>
    </div>
  );
};
