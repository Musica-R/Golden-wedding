import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/floating-cta.css";

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.79.47 3.47 1.29 4.93L2 22l5.3-1.39a9.9 9.9 0 0 0 4.74 1.21h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.79 14.11c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.09.28-3.63-.76-3.07-1.26-5.04-4.4-5.19-4.6-.15-.2-1.24-1.65-1.24-3.15 0-1.5.79-2.24 1.07-2.55.28-.3.6-.38.8-.38.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.61.85 2.11.92 2.26.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.26 1.64 2.04 1.13 1 2.08 1.32 2.38 1.47.3.15.47.13.64-.08.17-.2.73-.86.93-1.15.2-.3.4-.24.66-.15.27.1 1.72.81 2.02.96.3.15.5.22.57.35.08.13.08.73-.16 1.41Z"
    />
  </svg>
);

export default function FloatingContactCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY >= 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Desktop: vertical pill on the side */}
      <Link
        to="/contact"
        className={`gw-floating-cta gw-floating-cta1--desktop ${
          visible ? "gw-floating-cta--visible" : ""
        }`}
      >
        Let&rsquo;s Plan Your Wedding
      </Link>

      <Link
        to="https://wa.me/918714542030"
        className={`gw-floating-cta gw-floating-cta2--desktop ${
          visible ? "gw-floating-cta--visible" : ""
        }`}
      >
        <WhatsappIcon />
      </Link>

      {/* Scroll to top */}
      <button
        type="button"
        onClick={scrollToTop}
        className={`gw-floating-cta gw-floating-cta3--desktop ${
          visible ? "gw-floating-cta--visible" : ""
        }`}
        aria-label="Scroll to top"
      >
        →
      </button>

      {/* Mobile */}
      <Link
        to="/contact"
        className={`gw-floating-cta gw-floating-cta--mobile ${
          visible ? "gw-floating-cta--visible" : ""
        }`}
      >
        Enquire Now
      </Link>
    </>
  );
}
