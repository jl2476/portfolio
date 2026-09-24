"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { consoleCommands, projects } from "@/data/portfolio";
import { PixelIcon } from "./PixelIcons";

interface ConsoleLine {
  text?: string;
  content?: React.ReactNode;
  type: "command" | "output" | "error" | "system";
}

export default function Console() {
  const [lines, setLines] = useState<ConsoleLine[]>([
    {
      text: '  welcome to portfolio-sh! type "help" for commands.',
      type: "system",
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = useCallback(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [lines, scrollToBottom]);

  const handleCommand = useCallback(
    (cmd: string) => {
      const trimmed = cmd.trim().toLowerCase();

      const newLines: ConsoleLine[] = [
        ...lines,
        { text: `visitor@portfolio:~$ ${cmd}`, type: "command" },
      ];

      if (trimmed === "") {
        setLines(newLines);
        return;
      }

      if (trimmed === "clear") {
        setLines([]);
        return;
      }

      // Handle echo
      if (trimmed.startsWith("echo ")) {
        const msg = cmd.trim().slice(5);
        newLines.push({ text: `  ${msg}`, type: "output" });
        setLines(newLines);
        return;
      }

      // Handle ls projects with rich SVG PixelIcons
      if (trimmed === "ls projects") {
        newLines.push({
          content: (
            <div className="console-projects-list">
              {projects.map((p) => (
                <div key={p.title} className="console-project-item">
                  <PixelIcon name={p.iconName} size="14" className="console-project-icon" />
                  <span>{p.title}</span>
                </div>
              ))}
            </div>
          ),
          type: "output",
        });
        setLines(newLines);
        return;
      }

      const command = consoleCommands[trimmed];
      if (command) {
        newLines.push({ text: command.output, type: "output" });
      } else {
        newLines.push({
          text: `  command not found: ${trimmed}. type "help" for available commands.`,
          type: "error",
        });
      }

      setLines(newLines);
    },
    [lines]
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const cmd = input;
      if (cmd.trim()) {
        setHistory((prev) => [...prev, cmd]);
      }
      setHistoryIndex(-1);
      handleCommand(cmd);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length > 0) {
        const newIndex =
          historyIndex === -1 ? history.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setInput(history[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= history.length) {
          setHistoryIndex(-1);
          setInput("");
        } else {
          setHistoryIndex(newIndex);
          setInput(history[newIndex]);
        }
      }
    }
  };

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div className="console-window" onClick={focusInput}>
      <div className="console-titlebar">
        <span className="console-title">
          <span>▸</span> terminal
        </span>
        <div className="window-controls">
          <div className="window-btn minimize" />
          <div className="window-btn maximize" />
          <div className="window-btn close" />
        </div>
      </div>
      <div className="console-body" ref={bodyRef}>
        {lines.map((line, i) => (
          <div
            key={i}
            className={`console-output-line ${line.type}`}
          >
            {line.content}
          </div>
        ))}
        <div className="console-input-line">
          <span className="console-prompt">visitor@portfolio:~$&nbsp;</span>
          <input
            ref={inputRef}
            className="console-input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            autoFocus
            spellCheck={false}
            aria-label="Console input"
          />
        </div>
      </div>
    </div>
  );
}
