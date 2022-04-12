import Button from "@mui/material/Button";
import Link from "next/link";
import * as React from "react";

export default function AboutLanding() {
  return (
    <section className="cma-landing-wrapper cma-about-landing">
      <h1 className="cma-about-landing-headline header">
        Why <span className="header">CMA</span>Fitness?
      </h1>
      <h2 className="about-landing-tagline">
        We are a locally and minority-owned gym in Warner Robins, GA. We are the
        best gym in Warner Robins to provide you with the most well-rounded
        fitness experience Middle GA has to offer. This a full-service gym
        offering quality bodybuilding competition prep, personal training, meal
        and training guides, group fitness classes, and even a gym daycare.
      </h2>
      <div className="cma-landing-about-buttons">
        <Link href={"https://secure.peakpayment.com/8821/prospect"}>
          <Button className="blk-bg">Guest Pass</Button>
        </Link>
        <Link href={"https://secure.peakpayment.com/8821/join"}>
          <Button className="blk-bg">Memberships</Button>
        </Link>
      </div>
    </section>
  );
}
