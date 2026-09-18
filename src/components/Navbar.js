import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/navbar.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/collections", label: "Collections" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <header className={`gw-navbar ${scrolled ? "gw-navbar--scrolled" : ""}`}>
      <div className="gw-navbar__inner gw-container">
        <Link to="/" className="gw-navbar__mark" onClick={() => setMenuOpen(false)}>
          Golden Wedding
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
        id="gw-navbar-mobile-menu"
        className={`gw-navbar__mobile ${menuOpen ? "gw-navbar__mobile--open" : ""}`}
      >
        {links.map((link, i) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === "/"}
            style={{ transitionDelay: `${i * 60}ms` }}
            className="gw-navbar__mobile-link"
            onClick={() => setMenuOpen(false)}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
    </header>
  );
}
