import * as React from "react";
import MobileNav from "./MobileNav/MobileNav";
import { Button } from "@mui/material";
import Link from "next/link";

export interface IDesktopNavProps {
  navLinks: Array<string>;
}

export default function NavigationBar(props: IDesktopNavProps) {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="company-nav-header">
          <h1 className="company-nav-header-name">
            <span className="header">CMAFITNESS</span>
          </h1>
        </div>
        <div className="desktop-nav-links">
          {props.navLinks?.map((link) => (
            <Link key={link} href={`/${link}`}>
              {link}
            </Link>
          ))}
          <Button className="yt-bg nav-header-btn">
            <Link href="https://secure.peakpayment.com/8821/join/?o_club_url=8821">
              Join Now
            </Link>
          </Button>
        </div>
        <div className="mobile-nav-links">
          <MobileNav navLinks={props.navLinks} />
        </div>
      </div>
    </nav>
  );
}
