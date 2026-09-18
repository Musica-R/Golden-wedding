import React, { useEffect, useRef, useState } from "react";

/**
 * Wraps children and fades/slides them up into view the first time
 * they cross into the viewport. Respects prefers-reduced-motion via CSS.
 */
export default function ScrollReveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}) {
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
      { threshold: 0.18, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const extraVisible =
    visible && className.includes("gw-word-reveal") ? "gw-word-reveal--visible" : "";

  return (
    <Tag
      ref={ref}
      className={`gw-reveal ${visible ? "gw-reveal--visible" : ""} ${className} ${extraVisible}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
