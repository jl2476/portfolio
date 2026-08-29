"use client";

import React, { useState } from "react";
import StarryBackground from "@/components/StarryBackground";
import RetroWindow from "@/components/RetroWindow";
import BottomNav, { Section } from "@/components/BottomNav";
import SocialIcons from "@/components/SocialIcons";
import Console from "@/components/Console";
import HomeSection from "@/components/HomeSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ResumeSection from "@/components/ResumeSection";
import ContactSection from "@/components/ContactSection";

const sectionTitles: Record<Section, string> = {
  home: "home",
  about: "about",
  projects: "projects",
  skills: "skills",
  resume: "resume",
  contact: "contact",
};

export default function Home() {
  const [activeSection, setActiveSection] = useState<Section>("home");

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <HomeSection />;
      case "about":
        return <AboutSection />;
      case "projects":
        return <ProjectsSection />;
      case "skills":
        return <SkillsSection />;
      case "resume":
        return <ResumeSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <HomeSection />;
    }
  };

  return (
    <>
      <StarryBackground />
      <main className="main-layout">
        <RetroWindow title={sectionTitles[activeSection]}>
          <div className="window-content" key={activeSection}>
            {renderSection()}
          </div>
          <BottomNav activeSection={activeSection} onNavigate={setActiveSection} />
        </RetroWindow>
        <SocialIcons />
        <Console />
      </main>
    </>
  );
}
