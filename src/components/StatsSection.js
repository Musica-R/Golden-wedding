import React, { useEffect, useRef, useState } from "react";
import "../styles/stats.css";

const stats = [
  { value: 100, suffix: "+", label: "Celebrations Designed" },
  { value: 50, suffix: "+", label: "Dream Venues" },
  { value: 10, suffix: "+", label: "Years of Experience" },
  { value: 100, suffix: "%", label: "Bespoke Designs" },
];

function CountUpStat({ value, suffix, label, delay }) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return undefined;

    const reduced =
      window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduced) {
      setDisplay(value);
      return undefined;
    }

    const duration = 1400;
    const start = performance.now() + delay;
    let frame;

    const tick = (now) => {
      const elapsed = now - start;
      if (elapsed < 0) {
        frame = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, value, delay]);

  return (
    <div ref={ref} className="gw-stats__item">
      <span className="gw-stats__value">
        {display}
        {suffix}
      </span>
      <span className="gw-stats__label">{label}</span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="gw-stats">
      <div className="gw-container gw-stats__grid">
        {stats.map((stat, i) => (
          <CountUpStat
            key={stat.label}
            value={stat.value}
            suffix={stat.suffix}
            label={stat.label}
            delay={i * 120}
          />
        ))}
      </div>
    </section>
  );
}
