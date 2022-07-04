import { Button } from "@mui/material";
import Link from "next/link";
import * as React from "react";

export default function Banner() {
  return (
    <div className="cma-banner-wrapper blk-bg">
      <div className="cma-banner">
        <h2 className="cma-banner-txt-1">
          &quot;Accept the challenge, stay motivated, achieve, set goals and a
          more healthier life overall.&quot;
        </h2>

        <h2 className="cma-banner-txt-2">- Chanda Akles</h2>
        {/* 
        <Button className="yt-bg banner-btn">
          <Link
            href={
              "https://www.eventbrite.com/e/summertime-boot-camp-tickets-355179711077?aff=ebdssbdestsearch"
            }
          >
            Summertime Boot Camp Sign Up
          </Link> */}
        {/* </Button> */}
      </div>
    </div>
  );
}
