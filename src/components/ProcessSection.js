import React from "react";
import ScrollReveal from "./ScrollReveal";
import SectionHeading from "./SectionHeading";
import "../styles/process.css";

const steps = [
  {
    title: "Discover",
    text: "We begin with your story — the people, the place, the traditions that matter to you.",
  },
  {
    title: "Design",
    text: "A considered design concept, from mandap architecture to the smallest table detail.",
  },
  {
    title: "Create",
    text: "Our craftsmen and florists build every element by hand, on-site, ahead of the day.",
  },
  {
    title: "Celebrate",
    text: "We stay through every hour of the celebration, so you never have to think about it.",
  },
];

export default function ProcessSection() {
  return (
    <section className="gw-process">
      <div className="gw-container">
        <SectionHeading
          eyebrow="Our Approach"
          title="A process built for presence, not production."
          align="center"
        />

        <div className="gw-process__steps">
          {steps.map((step, i) => (
            <ScrollReveal delay={i * 130} key={step.title} className="gw-process__step">
              <span className="gw-process__order">{i + 1}</span>
              <h3 className="gw-process__title">{step.title}</h3>
              <p className="gw-process__text">{step.text}</p>
              {i < steps.length - 1 && <span className="gw-process__connector" />}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
