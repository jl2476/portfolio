"use client";

import React, { useState } from "react";
import { personalInfo } from "@/data/portfolio";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with Formspree, EmailJS, etc.
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="section-enter">
      <h2 className="section-title">contact</h2>
      <p className="section-text">
        want to work together or just say hi? drop me a message! 💌
      </p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-name">
            name
          </label>
          <input
            id="contact-name"
            className="form-input"
            type="text"
            placeholder="your name..."
            value={formData.name}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-email">
            email
          </label>
          <input
            id="contact-email"
            className="form-input"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, email: e.target.value }))
            }
            required
          />
        </div>
        <div className="form-group">
          <label className="form-label" htmlFor="contact-message">
            message
          </label>
          <textarea
            id="contact-message"
            className="form-textarea"
            placeholder="say something nice..."
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            required
          />
        </div>
        <button type="submit" className="form-submit">
          {submitted ? "✨ sent!" : "send message ✉"}
        </button>
      </form>

      <div className="contact-info">
        <div className="contact-info-item">
          <span>📧</span>
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </div>
        <div className="contact-info-item">
          <span>🐙</span>
          <a href={personalInfo.github} target="_blank" rel="noopener noreferrer">
            github
          </a>
        </div>
        <div className="contact-info-item">
          <span>💼</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer">
            linkedin
          </a>
        </div>
      </div>
    </div>
  );
}
