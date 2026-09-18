import React from "react";
import ScrollReveal from "./ScrollReveal";
import "../styles/intro.css";

export default function IntroSection() {
  return (
    <section className="gw-intro">
      <div className="gw-container gw-intro__grid">
        <ScrollReveal className="gw-intro__image-wrap">
          <img
            loading="lazy" src="/images/hero/aisle-modern-white-gold.webp"
            alt="Ceremony aisle styled in modern white and gold"
            className="gw-intro__image gw-intro__image--main"
          />
          <img
            loading="lazy" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&w=900&auto=format&fit=crop"
            alt="Wedding cake framed by a floral hoop"
            className="gw-intro__image gw-intro__image--accent"
          />
        </ScrollReveal>

        <ScrollReveal delay={150} className="gw-intro__text">
          <p className="gw-eyebrow">Golden Wedding Events &amp; Decor</p>
          <h2 className="gw-intro__headline">
            Fifteen years of building the world's most considered weddings.
          </h2>
          <hr className="gw-divider" />
          <p className="gw-intro__body">
            We are a bespoke wedding design studio working across India's
            most storied venues — palaces, havelis, lakesides and private
            gardens. Our practice sits at the intersection of architecture,
            floristry and event craft, with every celebration built from
            the ground up around the couple, the site and the season.
          </p>
          <p className="gw-intro__body">
            From the first sketch to the final candle, we design the full
            experience: planning, styling, décor and the quiet choreography
            that lets a family simply be present in the day.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
