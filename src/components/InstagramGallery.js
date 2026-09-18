import React from "react";
import SectionHeading from "./SectionHeading";
import ScrollReveal from "./ScrollReveal";
import "../styles/instagram.css";

const posts = [
  "/images/misc/instagram-1.webp",
  "/images/misc/instagram-2.webp",
  "/images/misc/instagram-3.webp",
  "/images/misc/instagram-4.webp",
  "/images/misc/instagram-5.webp",
  "/images/misc/instagram-6.webp",
];

export default function InstagramGallery() {
  return (
    <section className="gw-instagram">
      <div className="gw-container">
        <SectionHeading eyebrow="@goldenweddingdecor" title="Recent Work" align="center" />
      </div>

      <div className="gw-container gw-instagram__grid">
        {posts.map((src, i) => (
          <ScrollReveal delay={i * 60} key={src} className="gw-instagram__item">
            <img loading="lazy" src={src} alt="Recent Golden Wedding project" />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
