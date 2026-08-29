"use client";

import React from "react";
import { experience, personalInfo } from "@/data/portfolio";

export default function ResumeSection() {
  return (
    <div className="section-enter">
      <h2 className="section-title">resume</h2>
      <div className="timeline">
        {experience.map((exp, i) => (
          <div key={i} className="timeline-item">
            <h3 className="timeline-title">{exp.title}</h3>
            <p className="timeline-company">{exp.company}</p>
            <p className="timeline-period">{exp.period}</p>
            <p className="timeline-desc">{exp.description}</p>
          </div>
        ))}
      </div>
      <a
        href={personalInfo.resumeUrl}
        download
        target="_blank"
        rel="noopener noreferrer"
        className="resume-download"
      >
        📥 download resume
      </a>
    </div>
  );
}
