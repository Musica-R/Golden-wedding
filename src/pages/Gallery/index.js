import React from "react";
import ScrollReveal from "../../components/ScrollReveal";
import Gallery from "../../components/Gallery/Gallery";
import ContactSection from "../../components/ContactSection";
import "../../styles/gallery-page.css";

export default function GalleryPage() {
  return (
    <div className="gw-page gw-gallery-page">
      <section className="gw-gallery-page__hero">
        <img src="/images/gallery/gallery-6-wide.webp" alt="Golden Wedding gallery" />
        <div className="gw-gallery-page__hero-scrim" />
        <div className="gw-container gw-gallery-page__hero-content">
          <ScrollReveal>
            <p className="gw-eyebrow" style={{ color: "var(--gw-gold-light)" }}>
              Gallery
            </p>
            <h1 className="gw-gallery-page__title">The Wedding Gallery</h1>
            <hr className="gw-divider" />
          </ScrollReveal>
        </div>
      </section>

      <div className="gw-container gw-page-intro">
        <ScrollReveal>
          <p className="gw-page-intro__text">
            An editorial look through every part of the celebration —
            bridal, mandap, decor, and everything in between. Filter by
            moment, or browse it all.
          </p>
        </ScrollReveal>
      </div>

      <Gallery />
      <ContactSection />
    </div>
  );
}
