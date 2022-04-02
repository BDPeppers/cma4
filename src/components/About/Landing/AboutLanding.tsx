import Button from '@mui/material/Button';
import Link from 'next/link';
import * as React from 'react';


export default function AboutLanding () {
  return (
    <section className='cma-landing-wrapper'>
      <h1 className="cma-about-landing-headline">
        Why <span>CMA</span>Fitness?
      </h1>
      <h2>
        <span>CMA</span>Fitness is a locally and minority-owned gym in 
        Warner Robins, GA. We are the best gym in Warner Robins to provide 
        you with the most well-rounded fitness experience Middle GA has to 
        offer. This a full-service gym offering quality bodybuilding 
        competition prep, personal training, meal and training guides, 
        group fitness classes, and even a gym daycare.
      </h2>
      <Link href={'#'}>
        <Button>Guest Pass</Button>
      </Link>
      <Link href={'#'}>
        <Button>Memberships</Button>
      </Link>
    </section>
  );
}
