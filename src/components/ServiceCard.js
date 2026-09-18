import React from "react";
import ScrollReveal from "./ScrollReveal";
import "../styles/service-card.css";

export default function ServiceCard({ service, index }) {
  return (
    <ScrollReveal delay={(index % 3) * 100} className="gw-service-card">
      <div className="gw-service-card__image-wrap">
        <img
          src={service.image}
          alt={service.title}
          className="gw-service-card__image"
          loading="lazy"
        />
      </div>
      <div className="gw-service-card__body">
        <h3 className="gw-service-card__title">{service.title}</h3>
        <p className="gw-service-card__desc">{service.description}</p>
        {service.startingPrice && (
          <p className="gw-service-card__price">
            Starting from {service.startingPrice}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
