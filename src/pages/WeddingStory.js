import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ScrollReveal from "../components/ScrollReveal";
import ContactSection from "../components/ContactSection";
import weddings from "../data/weddings";
import "../styles/wedding-story.css";

export default function WeddingStory() {
  const { slug } = useParams();
  const wedding = weddings.find((w) => w.slug === slug);

  if (!wedding) {
    return <Navigate to="/portfolio" replace />;
  }

  const currentIndex = weddings.findIndex((w) => w.slug === slug);
  const next = weddings[(currentIndex + 1) % weddings.length];

  return (
    <div className="gw-page gw-wedding-story">
      <section className="gw-wedding-story__hero">
        <img src={wedding.cover} alt={wedding.title} />
        <div className="gw-wedding-story__hero-scrim" />
        <div className="gw-container gw-wedding-story__hero-content">
          <Link to="/portfolio" className="gw-wedding-story__back">
            &larr; All Stories
          </Link>
          <p className="gw-eyebrow" style={{ color: "var(--gw-gold-light)" }}>
            {wedding.location} &middot; {wedding.eventType} &middot; {wedding.year}
          </p>
          <h1 className="gw-wedding-story__title">{wedding.title}</h1>
        </div>
      </section>

      <section className="gw-wedding-story__body">
        <div className="gw-container gw-wedding-story__body-grid">
          <ScrollReveal>
            <p className="gw-wedding-story__lead">{wedding.story}</p>
            <p className="gw-wedding-story__full">{wedding.fullStory}</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="gw-wedding-story__gallery">
        <div className="gw-container gw-wedding-story__gallery-grid">
          {wedding.gallery.map((src, i) => (
            <ScrollReveal delay={i * 120} key={src} className="gw-wedding-story__gallery-item">
              <img loading="lazy" src={src} alt={`${wedding.title} detail ${i + 1}`} />
            </ScrollReveal>
          ))}
        </div>
      </section>

      <section className="gw-wedding-story__next">
        <Link to={`/portfolio/${next.slug}`} className="gw-wedding-story__next-link">
          <img loading="lazy" src={next.cover} alt={next.title} className="gw-wedding-story__next-image" />
          <div className="gw-wedding-story__next-scrim" />
          <div className="gw-wedding-story__next-content">
            <p className="gw-eyebrow" style={{ color: "var(--gw-gold-light)" }}>
              Next Story
            </p>
            <h2>{next.title}</h2>
          </div>
        </Link>
      </section>

      <ContactSection />
    </div>
  );
}
