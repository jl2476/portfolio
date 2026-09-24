"use client";

import React from "react";
import {
  PixelHomeIcon,
  PixelAboutIcon,
  PixelProjectsIcon,
  PixelSkillsIcon,
  PixelResumeIcon,
  PixelContactIcon,
} from "./PixelIcons";

export type Section = "home" | "about" | "projects" | "skills" | "resume" | "contact";

interface BottomNavProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

const navItems: { section: Section; icon: React.ReactNode; label: string }[] = [
  { section: "about", icon: <PixelAboutIcon />, label: "about" },
  { section: "projects", icon: <PixelProjectsIcon />, label: "projects" },
  { section: "skills", icon: <PixelSkillsIcon />, label: "skills" },
  { section: "resume", icon: <PixelResumeIcon />, label: "resume" },
  { section: "contact", icon: <PixelContactIcon />, label: "contact" },
  { section: "home", icon: <PixelHomeIcon />, label: "home" },
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
