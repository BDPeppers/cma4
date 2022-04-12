import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import CmaCalendar from "../src/components/features/Calendar/CmaCalendar";
import Calendar from "../src/components/features/Calendar/CmaCalendar";
import Carousel from "../src/components/features/Carousel/Carousel";
import Banner from "../src/components/Home/Banner/Banner";
import HomeLanding from "../src/components/Home/Landing/HomeLanding";
import styles from "../styles/Home.module.css";

const testimonials = ["test 1", "test 2", "test 3"];

// NextPage = getInitialProps ~ enables SSR in a page and allows you to do initial data polpulation, it means sending the page
// with the data already populated from the server ~ is async

const Home: NextPage = () => {
  return (
    <>
      <HomeLanding />
      <Banner />
      <section className="section-wrapper cma-calendar-sect">
        <h1 className="cma-schedule-header header">Group Fitness Schedule</h1>
        <CmaCalendar />
      </section>
      <section className="section-wrapper cma-testimonials blk-bg">
        <Carousel slides={testimonials} />
      </section>
    </>
  );
};

export default Home;
