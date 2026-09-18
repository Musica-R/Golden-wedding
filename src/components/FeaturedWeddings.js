import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "./SectionHeading";
import WeddingCard from "./WeddingCard";
import weddings from "../data/weddings";
import "../styles/featured.css";

export default function FeaturedWeddings({ limit = 3 }) {
  const list = weddings.slice(0, limit);

  return (
    <section className="gw-featured" id="featured-weddings">
      <div className="gw-container">
        <div className="gw-featured__head">
          <SectionHeading eyebrow="Portfolio" title="Featured Weddings" />
          <Link to="/portfolio" className="gw-featured__all">
            View All Stories
          </Link>
        </div>

        <div className="gw-featured__grid">
          {list.map((wedding, i) => (
            <WeddingCard wedding={wedding} delay={i * 120} key={wedding.slug} />
          ))}
        </div>
      </div>
    </section>
  );
}
