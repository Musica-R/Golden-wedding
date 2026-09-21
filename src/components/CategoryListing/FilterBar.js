import React from "react";
import { Link } from "react-router-dom";

export default function FilterBar({
  categories,
  activeSlug,
  search,
  onSearchChange,
  sort,
  onSortChange,
  resultCount,
}) {
  return (
    <div className="gw-filterbar">
      <div className="gw-filterbar__row">
        <div className="gw-filterbar__search">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.7" />
            <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
          </svg>
          <input
            type="search"
            placeholder="Search listings..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            aria-label="Search listings"
          />
        </div>

        <label className="gw-filterbar__sort">
          Sort by
          <select value={sort} onChange={(e) => onSortChange(e.target.value)}>
            <option value="featured">Featured</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </label>
      </div>

      <div className="gw-filterbar__pills" role="tablist" aria-label="Filter by category">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            to={`/categories/${cat.slug}`}
            role="tab"
            aria-selected={cat.slug === activeSlug}
            className={`gw-filterbar__pill ${
              cat.slug === activeSlug ? "gw-filterbar__pill--active" : ""
            }`}
          >
            <span className="gw-filterbar__thumb">
              <img src={cat.image} alt="" loading="lazy" decoding="async" />
            </span>
            <span className="gw-filterbar__pill-label">{cat.name}</span>
          </Link>
        ))}
      </div>

      <p className="gw-filterbar__count">
        {resultCount} listing{resultCount === 1 ? "" : "s"} found
      </p>
    </div>
  );
}
