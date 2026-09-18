import React from "react";
import SectionHeading from "./SectionHeading";
import ServiceShowcase from "./ServiceShowcase";
import services from "../data/services";
import "../styles/services.css";

export default function Services({ limit, explore }) {
  const list = limit ? services.slice(0, limit) : services;

  return (
    <section className="gw-services">
      <div className="gw-container">
        <SectionHeading
          eyebrow="Signature Services"
          title="Every element of the day, designed as one story."
        />
      </div>

      <div className="gw-container gw-services__list">
        {list.map((service, i) => (
          <ServiceShowcase
            service={service}
            index={i}
            key={service.slug}
            showExplore={explore}
          />
        ))}
      </div>
    </section>
  );
}
