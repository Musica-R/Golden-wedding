import React from "react";

export default function GalleryFilter({ categories, active, onChange }) {
  return (
    <div className="gw-gfilter" role="tablist" aria-label="Filter gallery by category">
      {categories.map((cat) => (
        <button
          key={cat.slug}
          type="button"
          role="tab"
          aria-selected={active === cat.slug}
          className={`gw-gfilter__pill ${active === cat.slug ? "gw-gfilter__pill--active" : ""}`}
          onClick={() => onChange(cat.slug)}
        >
          <span className="gw-gfilter__thumb">
            <img src={cat.image} alt="" loading="lazy" decoding="async" />
          </span>
          <span className="gw-gfilter__label">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
