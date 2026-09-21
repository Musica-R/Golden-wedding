import React, { useMemo, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import ScrollReveal from "../../components/ScrollReveal";
import FilterBar from "../../components/CategoryListing/FilterBar";
import ListingGrid from "../../components/CategoryListing/ListingGrid";
import ContactSection from "../../components/ContactSection";
import categories from "../../data/categories";
import listings from "../../data/listings";
import "../../styles/category-listing.css";
import "../../styles/category-details.css";

export default function CategoryDetailsPage() {
  const { slug } = useParams();
  const category = categories.find((c) => c.slug === slug);

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("featured");

  // Reset local filter state whenever the category changes (navigating
  // between category pills), so filters don't leak across categories.
  React.useEffect(() => {
    setSearch("");
    setSort("featured");
  }, [slug]);

  const filtered = useMemo(() => {
    if (!category) return [];
    let items = listings.filter((l) => l.categorySlug === category.slug);

    if (search.trim()) {
      const q = search.trim().toLowerCase();
      items = items.filter(
        (l) =>
          l.name.toLowerCase().includes(q) ||
          l.location.toLowerCase().includes(q) ||
          l.description.toLowerCase().includes(q)
      );
    }

    const priceValue = (l) => Number(l.price.replace(/[^0-9]/g, "")) || 0;

    if (sort === "price-asc") items = [...items].sort((a, b) => priceValue(a) - priceValue(b));
    if (sort === "price-desc") items = [...items].sort((a, b) => priceValue(b) - priceValue(a));
    if (sort === "rating") items = [...items].sort((a, b) => b.rating - a.rating);

    return items;
  }, [category, search, sort]);

  if (!category) {
    return <Navigate to="/categories" replace />;
  }

  return (
    <div className="gw-page gw-category-details">
      <section className="gw-category-details__hero">
        <img src={category.image} alt={category.name} />
        <div className="gw-category-details__hero-scrim" />
        <div className="gw-container gw-category-details__hero-content">
          <p className="gw-category-details__breadcrumb">
            <Link to="/categories">Categories</Link> <span>&rsaquo;</span> {category.name}
          </p>
          <h1 className="gw-category-details__title">{category.name}</h1>
          <p className="gw-category-details__lead">{category.description}</p>
        </div>
      </section>

      <section className="gw-category-details__body">
        <div className="gw-container">
          <ScrollReveal>
            <FilterBar
              categories={categories}
              activeSlug={category.slug}
              search={search}
              onSearchChange={setSearch}
              sort={sort}
              onSortChange={setSort}
              resultCount={filtered.length}
            />
          </ScrollReveal>
          <ListingGrid listings={filtered} />
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
