import * as React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";

import CmaMap from "../../features/Map/Map";
import { defaultMapProps } from "../../features/Map/Map";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <CmaMap center={defaultMapProps.center} zoom={defaultMapProps.zoom} />
      <footer className="cma-footer blk-bg">
        <div className="cma-footer-wrapper">
          <div className="cma-footer long-footer-box">
            <h1 className="footer-header">
              <span className="header">CMA FITNESS</span>
            </h1>
            <h2 className="footer-tagline">
              We provide a new experience in fitness! Fall in love with the
              lifestyle and have fun in the process.
            </h2>
            <hr />
          </div>
          <div className="cma-staff-hours footer-box">
            <h1 className="footer-header header">Staff Hours</h1>

            <h2>Mon - Thur:</h2>
            <h2>9:00AM - 1:00PM</h2>
            <h2>4:00PM - 8:00PM</h2>
            <h2>Fri - Sat:</h2>
            <h2>9:00AM - 1:00PM</h2>
            <h2>Sun:</h2>
            <h2>Closed</h2>
          </div>
          <div className="cma-staff-hours footer-box">
            <h1 className="footer-header header">
              <span className="header">CMA</span> Kidz Care Hours
            </h1>
            <h2>Mon - Thur:</h2>
            <h2>9:00AM - 1:00PM</h2>
            <h2>4:00PM - 8:00PM</h2>
            <h2>Fri - Sat:</h2>
            <h2>9:00AM - 1:00PM</h2>
            <h2>Sun:</h2>
            <h2>Closed</h2>
          </div>
          <div className="cma-contact footer-box">
            <h1 className="footer-header header">Contact</h1>
            <h2>Phone:</h2>
            <h2>478-333-1376</h2>
            <h2>Email:</h2>
            <h2>info@cmafitness.fit</h2>
          </div>
          <div className="footer-box location">
            <h1 className="footer-header header">
              <span className="header">CMA</span>Fitness
            </h1>
            <h2>198 S Houston Lake Rd Suite D</h2>
            <h1 className="footer-sub-header header">The Dungeon</h1>
            <h2>198 S Houston Lake Rd Suite E</h2>
          </div>
          <div className="footer-social long-footer-box">
            <div className="social-box">
              <YouTubeIcon className="social-icon" />
              <h2>
                <Link href="https://www.youtube.com/channel/UC-_H7sCOzwr_gHzMok8lgJw/videos">
                  CMA Fitness
                </Link>
              </h2>
            </div>
            <div className="social-box">
              <FacebookIcon className="social-icon" />
              <h2>
                <Link href="https://www.facebook.com/fitwithchan/">
                  @fitwithchan
                </Link>
              </h2>
            </div>
            <div className="social-box">
              <InstagramIcon className="social-icon" />
              <h2>
                <Link href="https://www.instagram.com/cmafitness/">
                  @cmafitness
                </Link>
              </h2>
            </div>
            <div className="social-box">
              <InstagramIcon className="social-icon" />
              <h2>
                <Link href="https://www.instagram.com/cma_the_dungeon/">
                  @cma_the_dungeon
                </Link>
              </h2>
            </div>
            <div className="social-box">
              <InstagramIcon className="social-icon" />
              <h2>
                <Link href="https://www.instagram.com/scorpiondoll77/">
                  Meet the owner!
                </Link>
              </h2>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
