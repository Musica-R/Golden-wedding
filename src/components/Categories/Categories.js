import React from "react";
import SectionHeading from "../SectionHeading";
import CategoryGrid from "./CategoryGrid";
import categories from "../../data/categories";
import "../../styles/categories.css";

export default function Categories({ heading = true, limit }) {
  const list = limit ? categories.slice(0, limit) : categories;

  return (
    <section className="gw-categories">
      <div className="gw-container">
        {heading && (
          <SectionHeading
            eyebrow="Everything For Your Wedding"
            title="Browse by Category"
            align="center"
          />
        )}
      </div>
      <div className="gw-container">
        <CategoryGrid categories={list} />
      </div>
    </section>
  );
}
