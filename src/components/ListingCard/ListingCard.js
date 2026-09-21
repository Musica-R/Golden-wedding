import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

export default function ListingCard({ listing, index = 0 }) {
  return (
    <ScrollReveal delay={(index % 6) * 70} className="gw-listing-card">
      <div className="gw-listing-card__image-wrap">
        <img
          src={listing.image}
          alt={listing.name}
          className="gw-listing-card__image"
          loading="lazy"
          decoding="async"
        />
        {listing.rating && (
          <span className="gw-listing-card__rating">&#9733; {listing.rating}</span>
        )}
      </div>
      <div className="gw-listing-card__body">
        <p className="gw-listing-card__category">{listing.category}</p>
        <h3 className="gw-listing-card__name">{listing.name}</h3>
        <p className="gw-listing-card__desc">{listing.description}</p>
        <div className="gw-listing-card__meta">
          {listing.location && (
            <span className="gw-listing-card__location">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M12 22s7-7.58 7-12.5A7 7 0 0 0 5 9.5C5 14.42 12 22 12 22Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" />
              </svg>
              {listing.location}
            </span>
          )}
          {listing.price && <span className="gw-listing-card__price">{listing.price}</span>}
        </div>
        <Link
          to={`/categories/${listing.categorySlug}/${listing.id}`}
          className="gw-listing-card__btn"
        >
          View Details
        </Link>
      </div>
    </ScrollReveal>
  );
}
