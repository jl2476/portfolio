"use client";

import React from "react";
import { skills } from "@/data/portfolio";

export default function SkillsSection() {
  const categories = Array.from(new Set(skills.map((s) => s.category)));

  return (
    <div className="section-enter">
      <h2 className="section-title">skills</h2>
      {categories.map((category) => (
        <div key={category} className="skills-category">
          <h3 className="skills-category-title">{"> "}{category}</h3>
          <div className="skills-tags">
            {skills
              .filter((s) => s.category === category)
              .map((skill, i) => (
                <span key={i} className="skill-tag">
                  {skill.name}
                </span>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
