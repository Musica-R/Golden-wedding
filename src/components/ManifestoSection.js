import React from "react";
import RevealHeading from "./RevealHeading";
import "../styles/manifesto.css";

export default function ManifestoSection() {
  return (
    <section className="gw-manifesto">
      <div className="gw-container">
        <RevealHeading
          as="h2"
          className="gw-manifesto__text"
          text="We Create Weddings That Live Beyond The Day."
        />
      </div>
    </section>
  );
}
