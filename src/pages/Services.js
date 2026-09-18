import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import Services from "../components/Services";
import Pricing from "../components/Pricing";
import ContactSection from "../components/ContactSection";
import "../styles/services-page.css";

export default function ServicesPage() {
  return (
    <div className="gw-page gw-services-page">
      <section className="gw-services-page__hero">
        <img
          src="/images/services/stage-decoration.webp"
          alt="Ornate traditional wedding stage decoration"
        />
        <div className="gw-services-page__hero-scrim" />
        <div className="gw-container gw-services-page__hero-content">
          <ScrollReveal>
            <p className="gw-eyebrow" style={{ color: "var(--gw-gold-light)" }}>
              What We Do
            </p>
            <h1 className="gw-services-page__title">
              Every celebration, designed as one complete story.
            </h1>
            <hr className="gw-divider" />
            <p className="gw-services-page__lead">
              From the first sketch of a mandap to the last lantern of the
              reception, our services cover every visible and invisible detail
              of your celebration.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Services layout="grid" explore={false} />
      <Pricing />
      {/* <ContactSection /> */}
    </div>
  );
}
