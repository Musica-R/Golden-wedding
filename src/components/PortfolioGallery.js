import React, { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import gallery from "../data/gallery";
import "../styles/gallery.css";

export default function PortfolioGallery({ limit = 8 }) {
  const items = limit ? gallery.slice(0, limit) : gallery;

  const [activeIndex, setActiveIndex] = useState(null);
  const isOpen = activeIndex !== null;

  const close = useCallback(() => setActiveIndex(null), []);
  const showNext = useCallback(
    () => setActiveIndex((i) => (i === null ? null : (i + 1) % items.length)),
    [items.length],
  );
  const showPrev = useCallback(
    () =>
      setActiveIndex((i) =>
        i === null ? null : (i - 1 + items.length) % items.length,
      ),
    [items.length],
  );

  useEffect(() => {
    if (!isOpen) return undefined;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "ArrowLeft") showPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close, showNext, showPrev]);

  return (
    <section className="gw-gallery">
      <div className="gw-container">
        <SectionHeading
          eyebrow="The Studio Gallery"
          title="Moments, composed."
          align="center"
        />
      </div>

      <div className="gw-container gw-gallery__grid">
        {items.map((img, i) => (
          <ScrollReveal
            key={img.caption}
            delay={(i % 3) * 100}
            className={`gw-gallery__item gw-gallery__item--${img.size}`}
          >
            <button
              type="button"
              className="gw-gallery__button"
              onClick={() => setActiveIndex(i)}
              aria-label={`Open image: ${img.caption}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="gw-gallery__image"
                loading="lazy"
              />
              <span className="gw-gallery__caption">{img.caption}</span>
            </button>
          </ScrollReveal>
        ))}
      </div>

      <div className="gw-container gw-gallery__more">
        <Link to="/gallery" className="gw-btn gw-btn--gold" style={{color:'black'}}>
          Explore Gallery &rarr;
        </Link>
      </div>

      {isOpen && (
        <div className="gw-lightbox" role="dialog" aria-modal="true">
          <button
            className="gw-lightbox__close"
            onClick={close}
            aria-label="Close image viewer"
          >
            &times;
          </button>
          <button
            className="gw-lightbox__nav gw-lightbox__nav--prev"
            onClick={showPrev}
            aria-label="Previous image"
          >
            &larr;
          </button>
          <figure className="gw-lightbox__figure">
            <img
              src={items[activeIndex].full}
              alt={items[activeIndex].caption}
              className="gw-lightbox__image"
            />
            <figcaption className="gw-lightbox__caption">
              {items[activeIndex].caption} &middot; {activeIndex + 1} /{" "}
              {items.length}
            </figcaption>
          </figure>
          <button
            className="gw-lightbox__nav gw-lightbox__nav--next"
            onClick={showNext}
            aria-label="Next image"
          >
            &rarr;
          </button>
        </div>
      )}
    </section>
  );
}
