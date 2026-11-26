import React, { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/hero.css";

const SLIDES = [
  {
    image: "/assets/image1.webp",
    alt: "Grand ivory and gold wedding mandap with hanging floral canopy",
  },
  {
    image: "/assets/image2.webp",
    alt: "Modern white and gold wedding aisle styled with florals",
  },
  {
    image: "/assets/image3.webp",
    alt: "Grand floral-dressed venue entrance",
  },
  {
    image: "/assets/image4.webp",
    alt: "Ornate traditional wedding stage decoration",
  },
];

const AUTOPLAY_MS = 5500;

export default function Hero() {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);

  const goTo = useCallback((index) => {
    setActive((index + SLIDES.length) % SLIDES.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, AUTOPLAY_MS);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handleDotClick = (index) => {
    goTo(index);
    resetTimer();
  };

  return (
    <section className="gw-hero">
      <div className="gw-hero-page__hero-scrim" />
      <div className="gw-hero__media">
        {SLIDES.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={slide.alt}
            className={`gw-hero__slide ${i === active ? "gw-hero__slide--active" : ""}`}
            loading={i === 0 ? "eager" : "lazy"}
          />
        ))}
        <div className="gw-hero__scrim" />
      </div>

      <div className="gw-hero__content gw-container">
        <p className="gw-hero__eyebrow">Weddings • Events • Décor</p>
        <h1 className="gw-hero__headline">
          Where Every Celebration
          <br />
          Becomes a Story.
        </h1>
        <p className="gw-hero__lead">
          Bespoke wedding experiences, extraordinary décor and unforgettable
          celebrations.
        </p>
        <div className="gw-hero__ctas">
          <a href="#featured-weddings" className="gw-btn gw-btn--light gw-hero__cta">
            Explore Our Stories
          </a>
          <Link to="/contact" className="gw-btn gw-btn--gold gw-hero__cta">
            Plan Your Celebration
          </Link>
        </div>
      </div>

      <div className="gw-hero__dots" role="tablist" aria-label="Hero image slides">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.image}
            type="button"
            role="tab"
            aria-selected={i === active}
            aria-label={`Show slide ${i + 1}`}
            className={`gw-hero__dot ${i === active ? "gw-hero__dot--active" : ""}`}
            onClick={() => handleDotClick(i)}
          />
        ))}
      </div>

      <div className="gw-hero__scroll" aria-hidden="true">
        <span className="gw-hero__scroll-line" />
        <span className="gw-hero__scroll-label">Scroll</span>
      </div>
    </section>
  );
}
