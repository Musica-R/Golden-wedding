import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";

export default function CategoryGrid({ categories }) {
  return (
    <div className="gw-cat-grid">
      {categories.map((category, i) => (
        <CategoryCard category={category} index={i} key={category.slug} />
      ))}
    </div>
  );
}
