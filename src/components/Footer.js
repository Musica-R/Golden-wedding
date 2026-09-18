import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.css";

const quickLinks = [
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/collections", label: "Collections" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const hours = [
  { day: "Monday", time: "9 am–8 pm", note: "Sree Narayana Guru Samadhi — hours might differ" },
  { day: "Tuesday", time: "9 am–8 pm" },
  { day: "Wednesday", time: "9 am–8 pm" },
  { day: "Thursday", time: "9 am–8 pm" },
  { day: "Friday", time: "9 am–8 pm" },
  { day: "Saturday", time: "9 am–8 pm" },
  { day: "Sunday", time: "9 am–8 pm" },
];

const PinIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2c-4.14 0-7.5 3.36-7.5 7.5 0 5.63 6.53 11.54 6.8 11.79a1 1 0 0 0 1.4 0c.27-.25 6.8-6.16 6.8-11.79C19.5 5.36 16.14 2 12 2Zm0 10.25a2.75 2.75 0 1 1 0-5.5 2.75 2.75 0 0 1 0 5.5Z"
    />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M6.6 10.8c1.4 2.8 3.8 5.2 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.3 1L6.6 10.8Z"
    />
  </svg>
);

const ClockIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm.75 5v5.4l4.2 2.5-.75 1.3-5.2-3.1V7h1.75Z"
    />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 2c2.7 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.47.66.26 1.22.6 1.77 1.15.55.55.9 1.11 1.15 1.77.25.64.42 1.37.47 2.43.05 1.06.06 1.42.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.47 2.43a4.9 4.9 0 0 1-1.15 1.77 4.9 4.9 0 0 1-1.77 1.15c-.64.25-1.37.42-2.43.47-1.06.05-1.42.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.47a4.9 4.9 0 0 1-1.77-1.15 4.9 4.9 0 0 1-1.15-1.77c-.25-.64-.42-1.37-.47-2.43C2.01 15.06 2 14.7 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.47-2.43.26-.66.6-1.22 1.15-1.77A4.9 4.9 0 0 1 5.45.53c.64-.25 1.37-.42 2.43-.47C8.94.01 9.3 0 12 0Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.25A3.25 3.25 0 1 1 12 6.75a3.25 3.25 0 0 1 0 6.5ZM17.5 4.5a1.2 1.2 0 1 0 0 2.4 1.2 1.2 0 0 0 0-2.4Z"
    />
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.79 14.11c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.09.28-3.63-.76-3.07-1.26-5.04-4.4-5.19-4.6-.15-.2-1.24-1.65-1.24-3.15 0-1.5.79-2.24 1.07-2.55.28-.3.6-.38.8-.38.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.61.85 2.11.92 2.26.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.64-.08.17-.2.73-.86.93-1.15.2-.3.4-.24.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.73-.16 1.41Z"
    />
  </svg>
);

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="gw-footer">
      <div className="gw-container gw-footer__grid">
        <div className="gw-footer__brand">
          <p className="gw-footer__mark">Golden Wedding</p>
          <p className="gw-footer__tag">Decorators &amp; Events</p>
          <p className="gw-footer__about">
            Wedding and event coordinator offering customised décor for
            venues, ceremonies and receptions across Palakkad, Kerala.
          </p>
          <div className="gw-footer__socials">
            <a
              href="https://www.instagram.com/golden_wedding_company?stkn=MXNqNWtybnU2ejJhNA=="
              target="_blank"
              rel="noreferrer"
              aria-label="Follow us on Instagram"
              className="gw-footer__social-icon"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://wa.me/918714542030"
              target="_blank"
              rel="noreferrer"
              aria-label="Message us on WhatsApp"
              className="gw-footer__social-icon"
            >
              <WhatsappIcon />
            </a>
          </div>
        </div>

        <div className="gw-footer__col">
          <p className="gw-footer__heading">Quick Links</p>
          <nav className="gw-footer__nav">
            {quickLinks.map((link) => (
              <Link key={link.to} to={link.to}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="gw-footer__col">
          <p className="gw-footer__heading">Get in Touch</p>
          <div className="gw-footer__contact">
            <a
              href="https://maps.google.com/?q=QJCM%2B797+Opp+kanikkamatha+school+DJM+complex+near+Petrol+Pump+Palakkad+Kerala+678006"
              target="_blank"
              rel="noreferrer"
              className="gw-footer__contact-row"
            >
              <PinIcon />
              <span>
                QJCM+797, Opp kanikkamatha school, DJM complex, near Petrol
                Pump, Palakkad, Kerala 678006
              </span>
            </a>
            <a href="tel:+918714542030" className="gw-footer__contact-row">
              <PhoneIcon />
              <span>+91 87145 42030</span>
            </a>
          </div>
        </div>

        <div className="gw-footer__col">
          <p className="gw-footer__heading">
            <ClockIcon />
            <span>Hours</span>
          </p>
          <ul className="gw-footer__hours">
            {hours.map((h) => (
              <li key={h.day} className="gw-footer__hours-row">
                <span className="gw-footer__hours-day">{h.day}</span>
                <span className="gw-footer__hours-time">
                  {h.time}
                  {h.note && (
                    <span className="gw-footer__hours-note">{h.note}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="gw-container gw-footer__bottom">
        <span>&copy; {year} Golden Wedding Decorators &amp; Events. All rights reserved.</span>
        <span className="gw-footer__bottom-location">Palakkad, Kerala</span>
      </div>
    </footer>
  );
}
