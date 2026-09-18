import React from "react";
import ScrollReveal from "./ScrollReveal";
import "../styles/section-heading.css";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  light = false,
}) {
  return (
    <ScrollReveal
      className={`gw-section-heading gw-section-heading--${align} ${
        light ? "gw-section-heading--light" : ""
      }`}
    >
      {eyebrow && <p className="gw-eyebrow">{eyebrow}</p>}
      <h2 className="gw-section-heading__title">{title}</h2>
      <hr className={`gw-divider ${align === "center" ? "gw-divider--center" : ""}`} />
    </ScrollReveal>
  );
}
