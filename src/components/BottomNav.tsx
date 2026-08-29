"use client";

import React from "react";

export type Section = "home" | "about" | "projects" | "skills" | "resume" | "contact";

interface BottomNavProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: { section: Section; icon: string; label: string }[] = [
  { section: "about", icon: "👤", label: "about" },
  { section: "projects", icon: "⟨/⟩", label: "projects" },
  { section: "skills", icon: "🛠", label: "skills" },
  { section: "resume", icon: "📄", label: "resume" },
  { section: "contact", icon: "✉", label: "contact" },
  { section: "home", icon: "⭐", label: "home" },
];

export default function BottomNav({ activeSection, onNavigate }: BottomNavProps) {
  return (
    <div className="bottom-nav">
      {navItems.map((item) => (
        <button
          key={item.section}
          className={`nav-item ${activeSection === item.section ? "active" : ""}`}
          onClick={() => onNavigate(item.section)}
          aria-label={`Navigate to ${item.label}`}
        >
          <span className="nav-icon">{item.icon}</span>
          <span className="nav-label">{item.label}</span>
        </button>
      ))}
    </div>
  );
}
