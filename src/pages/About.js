import React from "react";
import ScrollReveal from "../components/ScrollReveal";
import SectionHeading from "../components/SectionHeading";
import ProcessSection from "../components/ProcessSection";
import StatsSection from "../components/StatsSection";
// import ContactSection from "../components/ContactSection";
import "../styles/about.css";

export default function About() {
  return (
    <div className="gw-page gw-about">
      <section className="gw-about__hero">
        <img
          src="/images/about/about-hero.webp"
          alt="Grand traditional wedding stage designed by the studio"
        />
        <div className="gw-about__hero-scrim" />
        <div className="gw-container gw-about__hero-content">
          <p className="gw-eyebrow" style={{ color: "var(--gw-gold-light)" }}>
            About the Studio
          </p>
          <h1 className="gw-about__hero-title">
            A studio built on restraint, craft and story.
          </h1>
        </div>
      </section>

      <section className="gw-about__story">
        <div className="gw-container gw-about__story-grid">
          <ScrollReveal className="gw-about__story-image-wrap">
            <img
              loading="lazy" src="/images/about/studio-office.webp"
              alt="The Golden Wedding studio office"
              className="gw-about__story-image"
            />
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="gw-eyebrow">Our Beginning</p>
            <h2 className="gw-about__story-title">
              Founded in Palakkad, built for every kind of Kerala wedding.
            </h2>
            <hr className="gw-divider" />
            <p className="gw-about__story-body">
              Golden Wedding Events &amp; Decor began fifteen years ago with
              a single lakeside wedding and a belief that décor
              should serve the story, not compete with it. What started as
              a small floral and styling practice has grown into a
              full-service design studio, working across backwater resorts,
              heritage homes, beaches and private gardens throughout Kerala.
            </p>
            <p className="gw-about__story-body">
              We remain intentionally selective — a limited number of
              celebrations each season, so that every one receives the
              same depth of attention as our first.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="gw-about__values">
        <div className="gw-container">
          <SectionHeading
            eyebrow="What We Believe"
            title="Principles behind every celebration"
            align="center"
          />
          <div className="gw-about__values-grid">
            {[
              {
                title: "Restraint over spectacle",
                text: "We add only what a space and story genuinely need — never more.",
              },
              {
                title: "Craft over convenience",
                text: "Every garland, drape and structure is built and finished by hand.",
              },
              {
                title: "Presence over production",
                text: "Our goal is a day the couple can actually be inside, not manage.",
              },
            ].map((value, i) => (
              <ScrollReveal delay={i * 130} key={value.title} className="gw-about__value">
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <StatsSection />
      {/* <ContactSection /> */}
    </div>
  );
}
