import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ScrollReveal from "../../components/ScrollReveal";
import ContactSection from "../../components/ContactSection";
import categories from "../../data/categories";
import listings from "../../data/listings";
import "../../styles/listing-details.css";

export default function ListingDetailsPage() {
  const { slug, listingId } = useParams();
  const category = categories.find((c) => c.slug === slug);
  const listing = listings.find((l) => l.id === listingId && l.categorySlug === slug);

  if (!category || !listing) {
    return <Navigate to="/categories" replace />;
  }

  const related = listings
    .filter((l) => l.categorySlug === slug && l.id !== listing.id)
    .slice(0, 2);

  return (
    <div className="gw-page gw-listing-details">
      <section className="gw-listing-details__hero">
        <img src={listing.image} alt={listing.name} />
        <div className="gw-listing-details__hero-scrim" />
        <div className="gw-container gw-listing-details__hero-content">
          <p className="gw-listing-details__breadcrumb">
            <Link to="/categories">Categories</Link> <span>&rsaquo;</span>{" "}
            <Link to={`/categories/${slug}`}>{category.name}</Link> <span>&rsaquo;</span>{" "}
            {listing.name}
          </p>
          <h1 className="gw-listing-details__title">{listing.name}</h1>
        </div>
      </section>

      <section className="gw-listing-details__body">
        <div className="gw-container gw-listing-details__grid">
          <ScrollReveal className="gw-listing-details__main">
            <p className="gw-eyebrow">{listing.category}</p>
            <h2 className="gw-listing-details__heading">About this listing</h2>
            <p className="gw-listing-details__desc">{listing.description}</p>
            <p className="gw-listing-details__desc">
              Every booking made through Golden Wedding is coordinated by our
              in-house planning team, so styling stays consistent with the
              rest of your celebration — from first consultation to the day
              itself.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} className="gw-listing-details__sidebar">
            <div className="gw-listing-details__card">
              {listing.rating && (
                <p className="gw-listing-details__rating">&#9733; {listing.rating} rating</p>
              )}
              {listing.location && (
                <p className="gw-listing-details__row">
                  <span>Location</span>
                  {listing.location}
                </p>
              )}
              {listing.price && (
                <p className="gw-listing-details__row">
                  <span>Price</span>
                  {listing.price}
                </p>
              )}
              <Link to="/contact" className="gw-btn gw-listing-details__cta">
                Enquire Now
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="gw-listing-details__related">
          <div className="gw-container">
            <p className="gw-eyebrow">More in {category.name}</p>
            <div className="gw-listing-details__related-grid">
              {related.map((item) => (
                <Link
                  to={`/categories/${slug}/${item.id}`}
                  className="gw-listing-details__related-card"
                  key={item.id}
                >
                  <img src={item.image} alt={item.name} loading="lazy" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <ContactSection />
    </div>
  );
}
