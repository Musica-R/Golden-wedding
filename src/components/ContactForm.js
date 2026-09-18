import React, { useState } from "react";
import "../styles/contact.css";

const eventTypes = [
  "Wedding Ceremony",
  "Mandap & Décor",
  "Reception",
  "Sangeet / Mehendi",
  "Destination Wedding",
  "Other Celebration",
];

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    eventType: eventTypes[0],
    venue: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="gw-contact-form gw-contact-form--done">
        <h3>Thank you, {form.name.split(" ")[0] || "there"}.</h3>
        <p>Your story has reached us. We'll be in touch within two business days.</p>
      </div>
    );
  }

  return (
    <form className="gw-contact-form" onSubmit={handleSubmit}>
      <div className="gw-contact-form__row">
        <label>
          <span>Name</span>
          <input name="name" value={form.name} onChange={handleChange} required />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" value={form.phone} onChange={handleChange} required />
        </label>
      </div>

      <div className="gw-contact-form__row">
        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <span>Event Date</span>
          <input type="date" name="date" value={form.date} onChange={handleChange} />
        </label>
      </div>

      <div className="gw-contact-form__row">
        <label>
          <span>Event Type</span>
          <select name="eventType" value={form.eventType} onChange={handleChange}>
            {eventTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span>Venue / Location</span>
          <input name="venue" value={form.venue} onChange={handleChange} />
        </label>
      </div>

      <label className="gw-contact-form__full">
        <span>Tell us about your celebration</span>
        <textarea
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
      </label>

      <button type="submit" className="gw-btn gw-btn--gold gw-contact-form__submit">
        Begin Your Story
      </button>
    </form>
  );
}
