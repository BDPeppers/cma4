import type { NextPage } from "next";
import Head from "next/head";
import CmaCalendar from "../src/components/features/Calendar/CmaCalendar";
import Carousel from "../src/components/features/Carousel/Carousel";
import Banner from "../src/components/Home/Banner/Banner";
import HomeLanding from "../src/components/Home/Landing/HomeLanding";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>CMA Fitness - Warner Robins Gym and Fitness Near You</title>
        <meta
          name="description"
          content="Warner Robins gym providing quality fitness to the Middle GA area.
                  Offering bodybuilding competition prep, personal training, meal and training guides,
                  group fitness classes, and even a gym daycare."
        />
      </Head>
      <HomeLanding />
      <Banner />
      <section className="section-wrapper cma-calendar-sect">
        <h1 className="cma-schedule-header header">Group Fitness Schedule</h1>
        <CmaCalendar />
      </section>
      <section className="section-wrapper cma-testimonials blk-bg">
        <h1 className="cma-testimonials-header header">Client Testimonials</h1>
        <Carousel />
      </section>
    </>
  );
};

export default Home;
