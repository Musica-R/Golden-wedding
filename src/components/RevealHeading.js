import React, { useEffect, useRef, useState } from "react";

/**
 * Splits `text` into words and reveals them progressively, word by
 * word, the first time the heading enters the viewport. Pure CSS
 * transform + IntersectionObserver — no animation library.
 *
 * Usage: <RevealHeading as="h2" className="gw-h2" text="We Create Weddings" />
 */
export default function RevealHeading({ text, as: Tag = "h2", className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span
          className={`gw-word-reveal ${visible ? "gw-word-reveal--visible" : ""}`}
          key={`${word}-${i}`}
          style={{ transitionDelay: `${i * 70}ms` }}
        >
          <span className="gw-word-reveal__inner" style={{ transitionDelay: `${i * 70}ms` }}>
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </span>
        </span>
      ))}
    </Tag>
  );
}
