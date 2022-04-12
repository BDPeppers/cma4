import Button from "@mui/material/Button";
import Link from "next/link";
import * as React from "react";

export default function DesktopHomeLanding() {
  return (
    <section className="cma-landing-wrapper desktop-home-landing">
      <div className="cma-home-cta">
        <h1 className="header">Challenge.</h1>
        <h1 className="header">Motivate.</h1>
        <h1 className="header">Achieve.</h1>
        <h3 className="cma-home-tagline">
          The best fitness experience in Warner Robins
        </h3>
        <div className="cma-landing-desktop-home-buttons">
          <Button className="blk-bg">
            <Link href="/About">Learn More</Link>
          </Button>
          <Button className="blk-bg">
            <Link href={"https://secure.peakpayment.com/8821/join"}>
              Memberships
            </Link>
          </Button>
        </div>
      </div>
      <div className="dumbell">
        <div className="bar long">
          <h1 className="brand-name header">
            <span className="cma header">CMA</span>FITNESS
          </h1>
        </div>
        <div className="ring"></div>
        <div className="big-weight"></div>
        <div className="big-weight"></div>
        <div className="small-weight"></div>
        <div className="ring"></div>
        <div className="bar short"></div>
      </div>
    </section>
  );
}
