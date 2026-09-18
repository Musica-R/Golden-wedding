import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import "../styles/wedding-card.css";

export default function WeddingCard({ wedding, delay = 0 }) {
  return (
    <ScrollReveal delay={delay} className="gw-wedding-card">
      <Link to={`/portfolio/${wedding.slug}`} className="gw-wedding-card__link">
        <div className="gw-wedding-card__image-wrap">
          <img loading="lazy" src={wedding.cover} alt={wedding.title} className="gw-wedding-card__image" />
          <span className="gw-wedding-card__view">View Story</span>
        </div>
        <div className="gw-wedding-card__meta">
          <h3 className="gw-wedding-card__title">{wedding.title}</h3>
          <p className="gw-wedding-card__sub">
            {wedding.location} &middot; {wedding.eventType}
          </p>
          <p className="gw-wedding-card__story">{wedding.story}</p>
        </div>
      </Link>
    </ScrollReveal>
  );
}
