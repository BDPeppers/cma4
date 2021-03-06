import Button from "@mui/material/Button";
import * as React from "react";
import Image from "next/image";
import cma from "../../../../../public/imgs/cma-mobile.png";
import Link from "next/link";

export default function MobileHomeLanding() {
  return (
    <section className="cma-landing-wrapper mobile-home-landing">
      <div className="cma-landing-home-img">
        <Image src={cma} alt="CMA Fitness - Warner Robins Gym near you" />
      </div>
      <div className="cma-landing-home-mobile-buttons">
        <Button className="blk-bg">
          <Link href="/About">Learn More</Link>
        </Button>
        <Button className="blk-bg">
          <a href={"https://secure.peakpayment.com/8821/join"}>Memberships</a>
        </Button>
      </div>
    </section>
  );
}
