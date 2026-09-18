import React from "react";
import "../styles/map-section.css";

export default function MapSection() {
  return (
    <section className="gw-map-section">
      <iframe
        title="Golden Wedding Decorators & Events — location on Google Maps"
        className="gw-map-section__frame"
        src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=Golden wedding decorators & events, QJCM+797, Opp kanikkamatha school, DJM complex, near Petrol Pump, Palakkad, Kerala 678006&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </section>
  );
}
