"use client";

import React from "react";
import { projects } from "@/data/portfolio";
import { PixelIcon } from "./PixelIcons";

export default function ProjectsSection() {
  return (
    <div className="section-enter">
      <h2 className="section-title">projects</h2>
      <div className="projects-grid">
        {projects.map((project, i) => (
          <div key={i} className="project-card">
            <div className="project-header">
              <span className="project-icon">
                <PixelIcon name={project.icon} size="2.2rem" />
              </span>
              <h3 className="project-title">{project.title}</h3>
            </div>
            <p className="project-desc">{project.description}</p>
            <div className="project-tech">
              {project.techStack.map((tech, j) => (
                <span key={j} className="tech-tag">
                  {tech}
                </span>
              ))}
            </div>
            <div className="project-links">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  ⟨ github ⟩
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  ⟨ live demo ⟩
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
