import * as React from 'react';
import MobileNav from './MobileNav/MobileNav';
import { Button } from '@mui/material';
import Link from 'next/link';

export interface IDesktopNavProps {
    navLinks: Array<string>
}

export default function NavigationBar (props: IDesktopNavProps) {
  return (
    <nav className='navbar'>
        <div className="nav-wrapper">
            <div className='company-nav-header'>
                <h1 className='company-nav-header-name'><span>CMAFITNESS</span></h1>
            </div>
            <div className='desktop-nav-links'>
                {props.navLinks?.map((link) => (
                    <Link href="#">
                        {link}
                    </Link>
                ))}
                <Button className='yt-bg'>Join Now</Button>
            </div>
            <div className="mobile-nav-links">
                <MobileNav navLinks={props.navLinks}/>
            </div>
        </div>
      </nav>
  );
}
