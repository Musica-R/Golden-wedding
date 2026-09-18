import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import pricing from "../data/pricing";
import "../styles/pricing.css";

export default function Pricing() {
  return (
    <section className="gw-pricing">
      <div className="gw-container">
        <SectionHeading
          eyebrow="Packages"
          title="Choose the scale of your celebration."
          align="center"
        />

        <div className="gw-pricing__grid">
          {pricing.map((tier, i) => (
            <ScrollReveal
              delay={i * 130}
              key={tier.tier}
              className={`gw-pricing__card ${tier.featured ? "gw-pricing__card--featured" : ""}`}
            >
              <div className="gw-pricing__image-wrap">
                <img src={tier.image} alt={tier.tier} loading="lazy" />
              </div>
              <p className="gw-eyebrow">{tier.featured ? "Most Booked" : "Package"}</p>
              <h3 className="gw-pricing__tier">{tier.tier} Celebration</h3>
              <p className="gw-pricing__desc">{tier.description}</p>
              <div className="gw-pricing__price-block">
                <span className="gw-pricing__price-label">Starting from</span>
                <span className="gw-pricing__price">{tier.price}</span>
              </div>
              <ul className="gw-pricing__includes">
                {tier.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Link to="/contact" className="gw-btn gw-btn--gold gw-pricing__cta">
                Discuss Your Wedding
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
