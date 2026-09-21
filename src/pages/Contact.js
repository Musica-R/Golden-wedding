import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import ContactSection from "../components/ContactSection";
import "../styles/contact-page.css";
import MapSection from "../components/MapSection";

export default function Contact() {
  return (
    <div className="gw-page gw-contact-page">
      <section className="gw-contact-page__hero">
        <img
          src="/images/misc/final-cta.webp"
          alt="Couple celebrating at their wedding reception"
        />
        <div className="gw-contact-page__hero-scrim" />
        <div className="gw-container gw-contact-page__hero-content">
          <ScrollReveal>
            <p className="gw-eyebrow" style={{ color: "var(--gw-gold-light)" }}>
              Get in Touch
            </p>
            <h1 className="gw-contact-page__title">Let's Begin Your Story</h1>
            <hr className="gw-divider" />
            <p className="gw-contact-page__lead">
              Whether you have a date and venue already, or you're just
              beginning to imagine the day — we'd love to hear from you.
            </p>
          </ScrollReveal>
        </div>
      </section>
      <ContactSection showForm />
      <MapSection />
    </div>
  );
}
