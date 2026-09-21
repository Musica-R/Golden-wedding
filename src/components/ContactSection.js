import React from "react";
import { Link } from "react-router-dom";
import ScrollReveal from "./ScrollReveal";
import ContactForm from "./ContactForm";
import "../styles/contact.css";

export default function ContactSection({ showForm = false }) {
  return (
    <section className="gw-contact" id="contact">
      <div
        className={`gw-container gw-contact__grid ${
          showForm ? "" : "gw-contact__grid--cta"
        }`}
      >
        <ScrollReveal>
          <p className="gw-eyebrow">Enquire</p>
          <h2 className="gw-intro__headline" style={{ color: "var(--gw-ivory)" }}>
            Begin your story with us.
          </h2>
          <hr className="gw-divider" />
          <p className="gw-contact__intro-body">
            Tell us a little about the celebration you're imagining, and one
            of our designers will reach out within two business days to
            begin the conversation.
          </p>
          <div className="gw-contact__detail">
            <span>+91 87145 42030</span>
            <span>
              QJCM+797, Opp kanikkamatha school, DJM complex, near Petrol
              Pump, Palakkad, Kerala 678006
            </span>
            <span>Open daily &middot; 9 am–8 pm</span>
          </div>

          {!showForm && (
            <Link to="/contact" className="gw-btn gw-btn--gold gw-contact__cta">
              Get in Touch &rarr;
            </Link>
          )}
        </ScrollReveal>

        {showForm && (
          <ScrollReveal delay={150}>
            <ContactForm />
          </ScrollReveal>
        )}
      </div>
    </section>
  );
}
