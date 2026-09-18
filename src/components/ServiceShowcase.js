import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import "../styles/service-showcase.css";

export default function ServiceShowcase({
  service,
  index,
  showExplore = false,
}) {
  const reversed = index % 2 === 1;

  return (
    <div
      className={`gw-service-row ${reversed ? "gw-service-row--reversed" : ""}`}
    >
      <ScrollReveal className="gw-service-row__image-wrap">
        <img
          src={service.image}
          alt={service.title}
          className="gw-service-row__image"
          loading="lazy"
        />
      </ScrollReveal>

      <ScrollReveal delay={120} className="gw-service-row__text">
        <span className="gw-service-row__number">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="gw-service-row__title">{service.title}</h3>

        <hr className="gw-divider" />

        <p className="gw-service-row__desc">{service.description}</p>

        {service.startingPrice && (
          <p className="gw-service-row__price">
            Starting from {service.startingPrice}
          </p>
        )}

        {showExplore && (
          <Link to="/services" className="gw-service-row__link">
            <span>Explore Service</span>

            <span className="gw-service-row__arrow" aria-hidden="true">
              &rarr;
            </span>
          </Link>
        )}
      </ScrollReveal>
    </div>
  );
}
