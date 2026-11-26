import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

// Image lives in the /public folder -> served from the site root
const LOGO_SRC = "/assets/golden-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/collections", label: "Collections" },
  { to: "/categories", label: "Categories" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header className={`gw-navbar ${scrolled ? "gw-navbar--scrolled" : ""}`}>
      <div className="gw-navbar__inner gw-container">
        <Link
          to="/"
          className="gw-navbar__mark"
          aria-label="Golden Wedding Company – Home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src={LOGO_SRC}
            alt=""
            className="gw-navbar__logo"
            width="800"
            height="656"
          />
          <span className="gw-navbar__brand">
            <span className="gw-navbar__brand-name">Golden</span>
            <span className="gw-navbar__brand-sub">Wedding Company</span>
          </span>
        </Link>

        <nav className="gw-navbar__links">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `gw-navbar__link ${isActive ? "gw-navbar__link--active" : ""}`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className={`gw-navbar__toggle ${menuOpen ? "gw-navbar__toggle--open" : ""}`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="gw-navbar-mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <div
        className={`gw-navbar__overlay ${menuOpen ? "gw-navbar__overlay--open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <div
        id="gw-navbar-mobile-menu"
        className={`gw-navbar__mobile ${menuOpen ? "gw-navbar__mobile--open" : ""}`}
      >
        <div className="gw-navbar__mobile-head">
          <Link
            to="/"
            className="gw-navbar__mobile-mark"
            aria-label="Golden Wedding Company – Home"
            onClick={() => setMenuOpen(false)}
          >
            <img
              src={LOGO_SRC}
              alt=""
              className="gw-navbar__mobile-logo"
              width="800"
              height="656"
            />
            <span className="gw-navbar__mobile-brand">
              <span className="gw-navbar__mobile-brand-name">Golden</span>
              <span className="gw-navbar__mobile-brand-sub">Wedding Company</span>
            </span>
          </Link>
          <button
            className="gw-navbar__mobile-close"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            &times;
          </button>
        </div>

        <nav className="gw-navbar__mobile-links">
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              style={{ transitionDelay: `${i * 50}ms` }}
              className={({ isActive }) =>
                `gw-navbar__mobile-link ${isActive ? "gw-navbar__mobile-link--active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              {/* <span className="gw-navbar__mobile-link-index">
                {String(i + 1).padStart(2, "0")}
              </span> */}
              <span className="gw-navbar__mobile-link-label">{link.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="gw-navbar__mobile-foot">
          {/* <a href="tel:+918714542030" className="gw-navbar__mobile-phone">
            +91 87145 42030
          </a> */}
          <Link
            to="/contact"
            className="gw-btn gw-btn--gold gw-navbar__mobile-cta"
            onClick={() => setMenuOpen(false)}
          >
            Get in Touch &rarr;
          </Link>
        </div>
      </div>
    </header>
  );
}