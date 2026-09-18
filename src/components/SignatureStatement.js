import React, { useEffect, useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import "../styles/statement.css";

/**
 * Full-width parallax background-image section with a typography
 * overlay. Reusable — pass image/alt/lines to create additional
 * "breathing space" moments between content sections (see
 * BackgroundStatement usages in Home.js).
 *
 * Kept its original default props so the existing call site
 * (<SignatureStatement />) on the homepage renders unchanged.
 */
export default function SignatureStatement({
  image = "/images/misc/statement-1.webp",
  alt = "Carved gold ceremony stage detail",
  lines = ["We don't decorate spaces.", "We create memories within them."],
  height = "60vh",
}) {
  const sectionRef = useRef(null);
  const [offset, setOffset] = useState(0);
  const reducedMotion = useRef(
    typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  useEffect(() => {
    if (reducedMotion.current) return undefined;
    let ticking = false;

    const update = () => {
      const node = sectionRef.current;
      if (!node) {
        ticking = false;
        return;
      }
      const rect = node.getBoundingClientRect();
      const viewportH = window.innerHeight;
      // Progress through the viewport, roughly -1 to 1.
      const progress = (rect.top + rect.height / 2 - viewportH / 2) / viewportH;
      setOffset(progress * 40);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="gw-statement" ref={sectionRef} style={{ height }}>
      <img
        src={image}
        alt={alt}
        className="gw-statement__image"
        loading="lazy"
        style={{ transform: `translateY(${offset}px) scale(1.15)` }}
      />
      <div className="gw-statement__scrim" />
      <ScrollReveal className="gw-statement__content gw-container">
        <p className="gw-statement__text">
          {lines.map((line, i) => (
            <React.Fragment key={line}>
              {line}
              {i < lines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </p>
      </ScrollReveal>
    </section>
  );
}
