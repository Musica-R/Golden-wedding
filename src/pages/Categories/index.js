import React from "react";
import ScrollReveal from "../../components/ScrollReveal";
import Categories from "../../components/Categories/Categories";
import ContactSection from "../../components/ContactSection";
import "../../styles/categories-page.css";

export default function CategoriesPage() {
  return (
    <div className="gw-page gw-categories-page">
      <section className="gw-categories-page__hero">
        <img
          src="/images/services/wedding-decor.webp"
          alt="Golden Wedding décor categories"
        />
        <div className="gw-categories-page__hero-scrim" />
        <div className="gw-container gw-categories-page__hero-content">
          <ScrollReveal>
            <p className="gw-eyebrow" style={{ color: "var(--gw-gold-light)" }}>
              Marketplace
            </p>
            <h1 className="gw-categories-page__title">Every Category, One Address</h1>
            <hr className="gw-divider" />
          </ScrollReveal>
        </div>
      </section>

      <div className="gw-container gw-page-intro">
        <ScrollReveal>
          <p className="gw-page-intro__text">
            From outfits to Pandits, browse the curated categories that make
            up a Golden Wedding celebration — each one leads to a
            hand-picked listing of specialists.
          </p>
        </ScrollReveal>
      </div>

      <Categories heading={false} />
      <ContactSection />
    </div>
  );
}
