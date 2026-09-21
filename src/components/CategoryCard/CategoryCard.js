import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "../ScrollReveal";

export default function CategoryCard({ category, index = 0 }) {
  return (
    <ScrollReveal delay={(index % 6) * 70} className="gw-cat-card">
      <Link to={`/categories/${category.slug}`} className="gw-cat-card__link">
        <div className="gw-cat-card__image-wrap">
          <img
            src={category.image}
            alt={category.name}
            className="gw-cat-card__image"
            loading="lazy"
            decoding="async"
          />
        </div>
        <h3 className="gw-cat-card__name">{category.name}</h3>
      </Link>
    </ScrollReveal>
  );
}
