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
          <div className="cma-footer long-footer-box">
            <h1 className='footer-header'><span>CMAFITNESS</span></h1>
            <h3 className='footer-tagline'>
            We provide a new experience in fitness! Fall in love with the lifestyle and have fun in the process.
            </h3>
            <hr />
          </div>
          <div className="cma-staff-hours footer-box">
            <h1 className='footer-header'>Staff Hours</h1>
            
            <h3>Mon - Thur:</h3>
            <h3>9:00AM - 1:00PM</h3>
            <h3>4:00PM - 8:00PM</h3>
            <h3>Fri - Sat:</h3>
            <h3>9:00AM - 1:00PM</h3>
            <h3>Sun:</h3>
            <h3>Closed</h3>
            <h3>24/7 key fob access</h3> 
          </div>
          <div className="cma-staff-hours footer-box">
          <h1 className='footer-header'><span>CMA</span> Kidz Care Hours</h1>
            <h3>Mon - Thur:</h3>
            <h3>9:00AM - 1:00PM</h3>
            <h3>4:00PM - 8:00PM</h3>
            <h3>Fri - Sat:</h3>
            <h3>9:00AM - 1:00PM</h3>
            <h3>Sun:</h3>
            <h3>Closed</h3>
            
          </div>
          <div className="cma-contact footer-box">
            <h1 className='footer-header'>Contact</h1>
            <h3>Phone:</h3>
            <h3>478-333-1376</h3>
            <h3>Email:</h3>
            <h3>info@cmafitness.fit</h3>
          </div>
          <div className="footer-box location">
            <h1 className='footer-header'><span>CMA</span>Fitness</h1>
            <h3>198 S Houston Lake Rd Suite D</h3>
            <h1 className='footer-sub-header'>The Dungeon</h1>
            <h3>198 S Houston Lake Rd Suite E</h3>
          </div>
          <div className="footer-social long-footer-box">         
            <div className="social-box">
              <YouTubeIcon className='social-icon'/>
              <h3>
                <Link href="https://www.youtube.com/channel/UC-_H7sCOzwr_gHzMok8lgJw/videos">
                 CMA Fitness
                </Link>              
              </h3>
            </div>
            <div className="social-box">
              <FacebookIcon className='social-icon'/>
              <h3>
                <Link href="https://www.facebook.com/fitwithchan/">
                  @fitwithchan
                </Link>              
              </h3>
            </div>
            <div className="social-box">
              <InstagramIcon className='social-icon'/>
              <h3>
                <Link href="https://www.instagram.com/cmafitness/">
                  @cmafitness
                </Link>
              </h3>
            </div>
            <div className="social-box">
              <InstagramIcon className='social-icon'/>
              <h3>
                <Link href="https://www.instagram.com/cma_the_dungeon/">
                  @cma_the_dungeon
                </Link>              
              </h3>
            </div>
            <div className="social-box">
              <InstagramIcon className='social-icon'/>
              <h3>
                <Link href="https://www.instagram.com/scorpiondoll77/">
                  Meet the owner!
                </Link>              
              </h3>
            </div>        
          </div>
          
        </div>
      </footer>
    </>
    
  );
}
