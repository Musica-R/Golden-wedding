import React, { useEffect, useState } from "react";
import "../styles/preloader.css";

export default function Preloader() {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setLeaving(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`gw-preloader ${leaving ? "gw-preloader--leaving" : ""}`}>
      <div className="gw-preloader__mark">
        <svg
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <circle
            cx="32"
            cy="32"
            r="30"
            stroke="var(--gw-gold)"
            strokeWidth="1"
            className="gw-preloader__ring"
          />
          <text
            x="32"
            y="39"
            textAnchor="middle"
            fontFamily="'Cormorant Garamond', serif"
            fontSize="22"
            fill="var(--gw-espresso)"
          >
            GW
          </text>
        </svg>
      </div>
      <p className="gw-preloader__label">Golden Wedding Events &amp; Decor</p>
      <span className="gw-preloader__gold-line" />
    </div>
  );
}
