import React, { useMemo, useState } from "react";
import ScrollReveal from "../ScrollReveal";
import GalleryFilter from "../GalleryFilter/GalleryFilter";
import Lightbox from "../Lightbox/Lightbox";
import gallery, { GALLERY_CATEGORIES } from "../../data/gallery";
import "../../styles/gallery.css";
import "../../styles/wedding-gallery.css";

const categoryLabel = (slug) =>
  GALLERY_CATEGORIES.find((c) => c.slug === slug)?.label || slug;

export default function Gallery() {
  const [active, setActive] = useState("all");
  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const items = useMemo(
    () => (active === "all" ? gallery : gallery.filter((img) => img.category === active)),
    [active]
  );

  const close = () => setActiveIndex(null);
  const showNext = () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length));
  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + items.length) % items.length));

  return (
    <section className="gw-wgallery">
      <div className="gw-container">
        <GalleryFilter
          categories={GALLERY_CATEGORIES}
          active={active}
          onChange={(slug) => {
            setActive(slug);
            setActiveIndex(null);
          }}
        />
      </div>

      <div className="gw-container gw-wgallery__grid" key={active}>
        {items.map((img, i) => (
          <ScrollReveal
            key={img.src + img.caption}
            delay={(i % 6) * 60}
            className="gw-wgallery__item"
          >
            <button
              type="button"
              className="gw-wgallery__button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open image: ${img.caption}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                decoding="async"
                className="gw-wgallery__image"
              />
              <span className="gw-wgallery__overlay">
                <span className="gw-wgallery__label">{categoryLabel(img.category)}</span>
                <span className="gw-wgallery__caption">{img.caption}</span>
              </span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      {isOpen && (
        <Lightbox
          items={items.map((img) => ({ ...img, categoryLabel: categoryLabel(img.category) }))}
          activeIndex={activeIndex}
          onClose={close}
          onNext={showNext}
          onPrev={showPrev}
        />
      )}
    </section>
  );
}
