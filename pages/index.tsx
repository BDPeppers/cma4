import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Banner from '../src/components/Home/Banner/Banner'
import HomeLanding from '../src/components/Home/Landing/HomeLanding'
import styles from '../styles/Home.module.css'

// NextPage = getInitialProps ~ enables SSR in a page and allows you to do initial data polpulation, it means sending the page
// with the data already populated from the server ~ is async

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CMA Fitness - Warner Robins Gym and Fitness Near You</title>
        <meta 
        name="description" 
        content="Warner Robins gym providing quality fitness to the Middle GA area.
                  Offering bodybuilding competition prep, personal training, meal and training guides,
                  group fitness classes, and even a gym daycare." />
        <link rel="icon" href="/cma.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@200;300;400;600&display=swap" rel="stylesheet"/>
      </Head>
      <HomeLanding/>
      <Banner/>
    </>
      

      

  )
}

export default Home
