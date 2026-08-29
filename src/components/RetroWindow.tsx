"use client";

import React from "react";

interface RetroWindowProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export default function RetroWindow({ title, children, className }: RetroWindowProps) {
  return (
    <div className={`retro-window ${className || ""}`}>
      <div className="window-titlebar">
        <span className="window-title">{title}</span>
        <div className="window-controls">
          <div className="window-btn minimize" />
          <div className="window-btn maximize" />
          <div className="window-btn close" />
        </div>
      </div>
      {children}
    </div>
  );
}
