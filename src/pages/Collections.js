import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import Collections from "../components/Collections";
// import ContactSection from "../components/ContactSection";
import "../styles/collections-page.css";

export default function CollectionsPage() {
  return (
    <div className="gw-page gw-collections-page">
      <section className="gw-collections-page__hero">
        <img
          src="/images/collections/royal-wedding.webp"
          alt="Royal wedding decor collection"
        />
        <div className="gw-collections-page__hero-scrim" />
        <div className="gw-container gw-collections-page__hero-content">
          <ScrollReveal>
            <p className="gw-eyebrow" style={{ color: "var(--gw-gold-light)" }}>
              Explore
            </p>
            <h1 className="gw-collections-page__title">Wedding Collections</h1>
            <hr className="gw-divider" />
            <p className="gw-collections-page__lead">
              Every celebration has its own language. These are the styles
              we design within — traditional, royal, contemporary, and
              everything a couple imagines in between.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <Collections  showExplore={false} />
      {/* <ContactSection /> */}
    </div>
  );
}
