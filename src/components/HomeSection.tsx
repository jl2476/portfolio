"use client";

import React from "react";
import { personalInfo } from "@/data/portfolio";

export default function HomeSection() {
  return (
    <div className="section-enter home-section">
      <p className="home-greeting">~ welcome to my corner of the internet ~</p>
      <h1 className="home-name">{personalInfo.name}</h1>
      <p className="home-role">{personalInfo.title}</p>
      <p className="home-tagline">
        building cool things on the web, one pixel at a time ✨
      </p>
      <div className="home-sparkles">🌙 ⭐ 🌟 ⭐ 🌙</div>
    </div>
  );
}
