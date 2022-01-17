import React from 'react';
import CTAButton from '../../navigation/btns/cta';


function Landing(props) {
    return ( 
    <>
      <section className='cma-landing'>
        <div className='cma-header-text-sect'>
          <h1>Challenge. Motivate. Achieve.</h1>
        </div>
        <div className='cma-tagline-text-sect'>
          <h3>The best fitness experience in Warner Robins, GA</h3>
        </div>
        <div className='cma-cta-btns'>
          <CTAButton variant='outlined' text='About'/>
          <CTAButton variant='outlined' text='Memberships'/>
        </div>
        <img className="cma-landing-art" src="https://ik.imagekit.io/0ef3zk1rums/Cma4/cma_JP3D5DKssU7.PNG?ik-sdk-version=javascript-1.4.3&updatedAt=1642451334522" alt='CMA Fitness - Warner Robins Gym'/>

        
        

      </section>
      
    </> 
    );
}

export default Landing;