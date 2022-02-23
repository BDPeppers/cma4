// import React from "react";
import React, { useState } from 'react';
import CTAButton from '../btns/cta';
//for UI kit -> make navbar a reusable componement 


function NavBar() {
    return ( 
    <>
        <nav className="cma-navbar">
            <div className='cma-nav-wrapper'>
                <ul className="cma-socials">
                    <li className="cma-insta">
                        <a href='https://www.instagram.com/cmafitness/'>
                            <span className='cma-insta-wrapper'>
                                <img src="https://ik.imagekit.io/0ef3zk1rums/Cma4/ig-instagram_Zg2psQKho.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642366761692"
                                    alt="CMA Fitenss Instagram - @cmafitness | @cma_the_dungeon" />
                            </span>
                            @cmafitness
                        </a>
                    </li>
                    <li className="cma-insta">
                        <a href='https://www.instagram.com/cma_the_dungeon/'>
                            <span className='cma-insta-wrapper'>
                                <img src="https://ik.imagekit.io/0ef3zk1rums/Cma4/ig-instagram_Zg2psQKho.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642366761692"
                                    alt="CMA Fitenss Instagram - @cma_the_dungeon" />
                            </span>
                            @cma_the_dungeon
                        </a> 
                    </li>

                    <li className="cma-facebook">
                        <a href="https://www.facebook.com/fitwithchan/">
                            <span className="cma-facebook-wrapper">
                                <img src="https://ik.imagekit.io/0ef3zk1rums/Cma4/facebook-round-color_EeUVFqiGb.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642366761551"
                                    alt="CMA Fitness Facebook - Fit With Chan" />
                            </span>
                            Fit With Chan
                            </a> 
                    </li>
                    
                    <li className="cma-youtube">
                        <a href="https://www.youtube.com/channel/UC-_H7sCOzwr_gHzMok8lgJw/videos">
                            <span className="cma-youtube-wrapper">
                                <img src="https://ik.imagekit.io/0ef3zk1rums/Cma4/youtube-color_wfpsTOSi-qo.png?ik-sdk-version=javascript-1.4.3&updatedAt=1642366761644"
                                    alt="CMA Fitness Youtube - CMA Fitness" />
                            </span>                        
                            CMA Fitness
                        </a> 
                    </li>
                </ul>
                <ul className='cma-links'>
                    <a href='#'>Home</a>
                    <a href="#">About</a>
                    {/* <CTAButton variant='contained' text='Home'/>
                    <CTAButton variant='contained' text='About'/> */}
                </ul>
            </div>            
        </nav>
    
    </> );
}

export default NavBar;