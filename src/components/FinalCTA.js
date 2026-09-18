import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import "../styles/final-cta.css";

export default function FinalCTA() {
  return (
    <section className="gw-final-cta">
      <img
        src="/images/misc/final-cta.webp"
        alt="Celebratory candid moment on the dance floor"
        className="gw-final-cta__image"
        loading="lazy"
      />
      <div className="gw-final-cta__scrim" />
      <ScrollReveal className="gw-final-cta__content gw-container">
        <h2 className="gw-final-cta__title">
          Your Wedding.
          <br />
          Your Story.
          <br />
          Your Moment.
        </h2>
        <p className="gw-final-cta__sub">
          Let&rsquo;s create something unforgettable together.
        </p>
        <Link to="/contact" className="gw-btn gw-btn--light gw-final-cta__cta">
          Begin Your Wedding Story &rarr;
        </Link>
      </ScrollReveal>
    </section>
  );
}
