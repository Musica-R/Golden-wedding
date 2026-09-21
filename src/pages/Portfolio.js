import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import WeddingCard from "../components/WeddingCard";
import ContactSection from "../components/ContactSection";
import weddings from "../data/weddings";
import "../styles/portfolio-page.css";

export default function Portfolio() {
  return (
    <div className="gw-page gw-portfolio-page">
      <section className="gw-portfolio-page__hero">
        <img
          src="/images/portfolio/amara-rohan-cover.webp"
          alt="A celebration from our portfolio of styled weddings"
        />
        <div className="gw-portfolio-page__hero-scrim" />
        <div className="gw-container gw-portfolio-page__hero-content">
          <ScrollReveal>
            <p className="gw-eyebrow" style={{ color: "var(--gw-gold-light)" }}>
              Portfolio
            </p>
            <h1 className="gw-portfolio-page__title">Stories We've Been Trusted With</h1>
            <hr className="gw-divider" />
            <p className="gw-portfolio-page__lead">
              A collection of celebrations from across Kerala — each one
              designed around its own place, family and season.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="gw-portfolio-page__intro">
        <div className="gw-container gw-portfolio-page__intro-inner">
          <ScrollReveal>
            <p className="gw-eyebrow">Selected Work</p>
            <h2 className="gw-portfolio-page__intro-title">
              Every wedding tells its own story.
            </h2>
            <p className="gw-portfolio-page__intro-body">
              Browse a few of the celebrations we've had the honour of
              designing — each one shaped by its own venue, family and
              vision. Select a story below to see it in full.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="gw-portfolio-page__grid-wrap">
        <div className="gw-container gw-portfolio-page__grid">
          {weddings.map((wedding, i) => (
            <WeddingCard wedding={wedding} delay={(i % 3) * 100} key={wedding.slug} />
          ))}
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
