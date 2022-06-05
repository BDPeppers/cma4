import { Button } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export default function Banner() {
  return (
    <div className="cma-banner-wrapper blk-bg">
      <div className="cma-banner">
        <h2 className="cma-banner-txt-1">
          {/* &quot;Accept the challenge, stay motivated, achieve, set goals and a
          more healthier life overall.&quot; */}
          We're going to turn it up this summer with a little pain and a lotta
          gain!! Join us 6/6-6/30 and we&apos;ll help you get CMA fit!
        </h2>
        <br />
        <br />
        <br />
        {/* <h2 className="cma-banner-txt-2">Summertime Boot Camp Sign Up</h2> */}
        <Button className="yt-bg banner-btn">
          <Link
            href={
              "https://www.eventbrite.com/e/summertime-boot-camp-tickets-355179711077?aff=ebdssbdestsearch"
            }
          >
            Summertime Boot Camp Sign Up
          </Link>
        </Button>
      </div>
    </div>
  );
}
