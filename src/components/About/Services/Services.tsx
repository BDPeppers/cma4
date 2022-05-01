import React from "react";
import ServiceCardList from "./ServiceCard/ServiceCardList";

export default function Services() {
  return (
    <section className="blk-bg cma-services">
      <div className="cma-service-summary">
        <h1 className="cma-service-headline header">Gym Services</h1>
        <h3 className="cma-service-tagline">
          <span>CMA</span>Fitness provides personal and group tailored training
          sessions. We target men and women of all ages looking for help
          reaching their health and fitness goals.
        </h3>
      </div>
      <div className="service-cards">
        <ServiceCardList />
      </div>
    </section>
  );
}
