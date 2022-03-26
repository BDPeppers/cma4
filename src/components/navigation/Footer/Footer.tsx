import * as React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import CmaMap from '../../features/Map/Map';
import { defaultMapProps } from '../../features/Map/Map';
import Link from 'next/link';

export default function Footer () {
  return (
    <>
      <CmaMap center={defaultMapProps.center} zoom={defaultMapProps.zoom}/>
      <footer className='cma-footer blk-bg'>
        <div className="cma-footer-wrapper">
          <div className="cma-footer footer-box">
            <h1><span>CMAFITNESS</span></h1>
            <h3>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h3>
          </div>
          <div className="cma-staff-hours footer-box">
            <h1>Staff Hours</h1>
            <h3>Mon - Thur:</h3>
            <h3>9:00AM - 1:00PM</h3>
            <h3>4:00PM - 8:00PM</h3>
            <h3>Fri - Sat:</h3>
            <h3>9:00AM - 1:00PM</h3>
            <h3>Sun:</h3>
            <h3>Closed</h3>
            <h1><span>CMA</span> Kidz Care Hours</h1>
            <h3>Mon - Thur:</h3>
            <h3>9:00AM - 1:00PM</h3>
            <h3>4:00PM - 8:00PM</h3>
            <h3>Fri - Sat:</h3>
            <h3>9:00AM - 1:00PM</h3>
            <h3>Sun:</h3>
            <h3>Closed</h3>
          </div>
          <div className="cma-contact footer-box">
            <h1>Contact</h1>
            <h3>Phone: 478-333-1376</h3>
            <h3>Email: info@cmafitness.fit</h3>
            <h1>Connect</h1>
            <FacebookIcon/>
            <YouTubeIcon/>
            <div className="insta-box">
              <InstagramIcon className='insta-icon'/>
              <h3>
                <Link href="https://www.instagram.com/cma_the_dungeon/">
                  @cma_the_dungeon
                </Link>              
              </h3>
            </div>
            <div className="insta-box">
              <InstagramIcon className='insta-icon'/>
              <h3>
                <Link href="https://www.instagram.com/cmafitness/">
                  @cmafitness
                </Link>
              </h3>
            </div>
            <div className="insta-box">
              <InstagramIcon className='insta-icon'/>
              <h3>
                <Link href="https://www.instagram.com/scorpiondoll77/">
                  Meet the owner!
                </Link>              
              </h3>
            </div>          
          </div>
          <div className="location">
            <h1><span>CMA</span>Fitness</h1>
            <h3>198 S Houston Lake Rd Suite D</h3>
            <h1>The Dungeon</h1>
            <h3>198 S Houston Lake Rd Suite E</h3>
          </div>
        </div>
      </footer>
    </>
    
  );
}
