import React, { useEffect, useRef, useState } from "react";
import "../styles/scroll-progress.css";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  const ticking = useRef(false);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? Math.min(100, Math.max(0, (scrollTop / docHeight) * 100)) : 0;
      setProgress(pct);
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const displayPct = String(Math.round(progress)).padStart(2, "0");

  return (
    <div className="gw-scroll-progress" aria-hidden="true">
      {/* Desktop: vertical gold line + percentage */}
      {/* <div className="gw-scroll-progress__vertical">
        <span className="gw-scroll-progress__pct">{displayPct}%</span>
        <div className="gw-scroll-progress__track">
          <div
            className="gw-scroll-progress__fill"
            style={{ height: `${progress}%` }}
          />
        </div>
      </div> */}

      {/* Mobile: thin horizontal bar */}
      <div className="gw-scroll-progress__horizontal">
        <div
          className="gw-scroll-progress__horizontal-fill"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}
