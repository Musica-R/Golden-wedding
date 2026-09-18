import React from "react";
import ScrollReveal from "./ScrollReveal";

export default function CollectionCard({ collection, index }) {
  return (
    <ScrollReveal
      delay={(index % 4) * 100}
      className="gw-collection-card"
    >
      <div className="gw-collection-card__image-wrap">
        <img
          src={collection.image}
          alt={collection.name}
          className="gw-collection-card__image"
          loading="lazy"
        />
        <div className="gw-collection-card__scrim" />
      </div>
      <div className="gw-collection-card__text">
        <p className="gw-collection-card__meta">
          {collection.location} &middot; {collection.eventType}
        </p>
        <h3 className="gw-collection-card__name">{collection.name}</h3>
        <p className="gw-collection-card__desc">{collection.description}</p>
      </div>
    </ScrollReveal>
  );
}
