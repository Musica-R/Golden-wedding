import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import collections from "../data/collections";
import "../styles/collections.css";

export default function Collections({ limit, showExplore = false }) {
  const list = limit ? collections.slice(0, limit) : collections;

  return (
    <section className="gw-collections">
      <div className="gw-container">
        <SectionHeading
          eyebrow="Wedding Collections"
          title="A style for every celebration."
          align="center"
        />
      </div>

      <div className="gw-container gw-collections__grid">
        {list.map((collection, i) => (
          <ScrollReveal
            delay={(i % 3) * 100}
            key={collection.slug}
            className={`gw-collections__item gw-collections__item--${collection.size}`}
          >
            <Link to="/collections" className="gw-collections__link">
              <div className="gw-collections__image-wrap">
                <img
                  src={collection.image}
                  alt={collection.name}
                  className="gw-collections__image"
                  loading="lazy"
                />

                <div className="gw-collections__scrim" />
              </div>

              <div className="gw-collections__text">
                <p className="gw-collections__meta">
                  {collection.location} &middot; {collection.eventType}
                </p>

                <h3 className="gw-collections__name">{collection.name}</h3>

                <p className="gw-collections__desc">{collection.description}</p>

                {showExplore && (
                  <span className="gw-collections__explore">
                    <span>Explore Collection</span>

                    <span className="gw-collections__arrow" aria-hidden="true">
                      &rarr;
                    </span>
                  </span>
                )}
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
