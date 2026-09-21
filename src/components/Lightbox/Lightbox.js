import React, { useCallback, useEffect, useRef } from "react";

const SWIPE_THRESHOLD = 45;

export default function Lightbox({ items, activeIndex, onClose, onNext, onPrev }) {
  const touchStartX = useRef(null);
  const item = items[activeIndex];

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onNext, onPrev]);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e) => {
      if (touchStartX.current === null) return;
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      if (delta > SWIPE_THRESHOLD) onPrev();
      else if (delta < -SWIPE_THRESHOLD) onNext();
      touchStartX.current = null;
    },
    [onNext, onPrev]
  );

  if (!item) return null;

  return (
    <div
      className="gw-lightbox"
      role="dialog"
      aria-modal="true"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <button className="gw-lightbox__close" onClick={onClose} aria-label="Close image viewer">
        &times;
      </button>
      <button
        className="gw-lightbox__nav gw-lightbox__nav--prev"
        onClick={onPrev}
        aria-label="Previous image"
      >
        &larr;
      </button>
      <figure className="gw-lightbox__figure">
        <img src={item.full || item.src} alt={item.caption} className="gw-lightbox__image" />
        <figcaption className="gw-lightbox__caption">
          {item.categoryLabel && <span className="gw-lightbox__tag">{item.categoryLabel}</span>}
          {item.caption} &middot; {activeIndex + 1} / {items.length}
        </figcaption>
      </figure>
      <button
        className="gw-lightbox__nav gw-lightbox__nav--next"
        onClick={onNext}
        aria-label="Next image"
      >
        &rarr;
      </button>
    </div>
  );
}
