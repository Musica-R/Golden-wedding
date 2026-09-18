import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import testimonials from "../data/testimonials";
import "../styles/testimonials.css";

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState("next");
  const current = testimonials[index];

  const go = (dir) => {
    setDirection(dir === 1 ? "next" : "prev");
    setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
  };

  return (
    <section className="gw-testimonial">
      <div className="gw-container">
        <SectionHeading eyebrow="From Our Couples" title="Written After the Day" align="center" />

        <ScrollReveal className="gw-testimonial__body">
          <div className="gw-testimonial__photo-wrap">
            <img
              key={current.photo}
              src={current.photo}
              alt={`${current.names}, ${current.location}`}
              className={`gw-testimonial__photo gw-testimonial__photo--${direction}`}
              loading="lazy"
            />
          </div>

          <div key={current.names} className={`gw-testimonial__text gw-testimonial__text--${direction}`}>
            <p className="gw-testimonial__quote">&ldquo;{current.quote}&rdquo;</p>
            <p className="gw-testimonial__names">{current.names}</p>
            <p className="gw-testimonial__location">
              {current.location} &middot; {current.eventType}
            </p>
          </div>

          <div className="gw-testimonial__nav">
            <button onClick={() => go(-1)} aria-label="Previous testimonial">
              &larr;
            </button>
            <span className="gw-testimonial__count">
              {index + 1} / {testimonials.length}
            </span>
            <button onClick={() => go(1)} aria-label="Next testimonial">
              &rarr;
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
