"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <div className="section-enter">
      <div className="about-avatar">👾</div>
      <h2 className="section-title">about me</h2>
      {personalInfo.bio.map((paragraph, i) => (
        <p key={i} className="section-text">
          {paragraph}
        </p>
      ))}
    </div>
  );
}
