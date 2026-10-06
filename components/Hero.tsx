"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Bot,
  Cpu,
  GitBranch,
  Menu,
  Network,
  Sparkles,
  Workflow,
  X,
  Zap,
} from "lucide-react";

export default function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#030712] px-6 text-white">
      {/* =========================================================
          BACKGROUND
      ========================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Blue atmospheric glow */}
        <div className="absolute left-[55%] top-[-220px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-blue-600/[0.12] blur-[150px]" />

        <div className="absolute bottom-[-250px] left-[45%] h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-500/[0.06] blur-[150px]" />

        <div className="absolute right-[-200px] top-[30%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.06] blur-[130px]" />

        {/* Subtle AI grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.035)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* Top fade */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-blue-950/20 to-transparent" />

        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#030712] to-transparent" />
      </div>

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

      <nav className="relative z-50 mx-auto flex max-w-7xl items-center justify-between border-b border-blue-400/10 py-6">
        <a
          href="#"
          onClick={closeMenu}
          className="text-sm font-semibold tracking-[0.25em] text-white"
        >
          ASHFAQUE
        </a>

        <div className="hidden items-center gap-8 text-sm text-slate-400 md:flex">
          <a
            href="#work"
            className="transition hover:text-blue-300"
          >
            Work
          </a>

          <a
            href="#skills"
            className="transition hover:text-blue-300"
          >
            Skills
          </a>

          <a
            href="#about"
            className="transition hover:text-blue-300"
          >
            About
          </a>

          <a
            href="#contact"
            className="transition hover:text-blue-300"
          >
            Contact
          </a>
        </div>

        <a
          href="#hire"
          className="hidden items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.08] px-4 py-2 text-xs text-blue-100 transition hover:border-blue-400/40 hover:bg-blue-500/[0.15] sm:inline-flex"
        >
          Let&apos;s Talk
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>

        {/* Mobile menu */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/[0.08] text-white transition hover:bg-blue-500/[0.15] md:hidden"
        >
          {menuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* =========================================================
          MOBILE NAVIGATION
      ========================================================= */}

      <div
        className={`absolute left-0 right-0 top-[89px] z-40 border-b border-blue-400/10 bg-[#030712]/95 px-6 backdrop-blur-xl transition-all duration-300 md:hidden ${
          menuOpen
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-4 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl py-6">
          <div className="flex flex-col">
            <a
              href="#work"
              onClick={closeMenu}
              className="border-b border-blue-400/10 py-4 text-sm text-slate-400 transition hover:text-blue-300"
            >
              Work
            </a>

            <a
              href="#skills"
              onClick={closeMenu}
              className="border-b border-blue-400/10 py-4 text-sm text-slate-400 transition hover:text-blue-300"
            >
              Skills
            </a>

            <a
              href="#about"
              onClick={closeMenu}
              className="border-b border-blue-400/10 py-4 text-sm text-slate-400 transition hover:text-blue-300"
            >
              About
            </a>

            <a
              href="#contact"
              onClick={closeMenu}
              className="border-b border-blue-400/10 py-4 text-sm text-slate-400 transition hover:text-blue-300"
            >
              Contact
            </a>

            <a
              href="#hire"
              onClick={closeMenu}
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-400"
            >
              Let&apos;s Talk
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          HERO CONTENT
      ========================================================= */}

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-89px)] max-w-7xl items-center gap-16 py-20 lg:grid-cols-[1.05fr_0.95fr]">
        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}

        <div>
          {/* Availability */}
          <div
            className="animate-fade-in inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.07] px-4 py-2 text-sm text-blue-100/70"
            style={{ animationDelay: "100ms" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

            Available for AI Projects
          </div>

          {/* Role */}
          <p
            className="animate-fade-up mt-8 text-sm font-medium uppercase tracking-[0.25em] text-blue-300/55"
            style={{ animationDelay: "200ms" }}
          >
            AI Agent Developer · GenAI Engineer
          </p>

          {/* Main heading */}
          <h1
            className="animate-fade-up mt-5 max-w-4xl text-[clamp(2.8rem,12vw,5rem)] font-semibold leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-8xl"
            style={{ animationDelay: "300ms" }}
          >
            I build
            <span className="block bg-gradient-to-r from-blue-300 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
              intelligent AI systems.
            </span>
          </h1>

          {/* Description */}
          <p
            className="animate-fade-up mt-7 max-w-2xl text-[15px] leading-7 text-slate-400 sm:text-base md:text-lg"
            style={{ animationDelay: "450ms" }}
          >
            I design and build AI agents, RAG systems, automation workflows,
            and production-ready LLM applications that solve real problems.
          </p>

          {/* CTA */}
          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            style={{ animationDelay: "550ms" }}
          >
            <a
              href="#work"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(59,130,246,0.18)] transition hover:bg-blue-400"
            >
              Explore My Work
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="#hire"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/[0.06] px-6 py-3 text-sm font-medium text-blue-100 transition hover:border-blue-400/40 hover:bg-blue-500/[0.12]"
            >
              Hire Me
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <a
              href="/resume/Ashfaque-Ahmed-CV.pdf"
              download="Ashfaque-Ahmed-CV.pdf"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-6 py-3 text-sm font-medium text-slate-200 transition hover:border-blue-400/30 hover:bg-blue-500/[0.06]"
            >
              Download CV
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Social */}
          <div
            className="animate-fade-up mt-8 flex gap-6 text-sm text-slate-500"
            style={{ animationDelay: "650ms" }}
          >
            <a
              href="https://github.com/ashfaque-ahmed78"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-300"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/ashfaque-ahmed-29a05332b/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-blue-300"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        {/* =====================================================
            RIGHT — AI AUTOMATION VISUAL
        ===================================================== */}

        <div
          className="animate-fade-in relative flex items-center justify-center"
          style={{ animationDelay: "500ms" }}
        >
          <div className="relative flex h-[390px] w-[390px] items-center justify-center sm:h-[500px] sm:w-[500px]">
            {/* =================================================
                BLUE ATMOSPHERIC GLOW
            ================================================= */}

            <div className="absolute inset-10 rounded-full bg-blue-600/[0.10] blur-[70px]" />

            <div className="absolute inset-20 rounded-full bg-cyan-400/[0.05] blur-[50px]" />

            {/* =================================================
                ORBIT RINGS
            ================================================= */}

            <div className="absolute inset-5 rounded-full border border-blue-400/[0.12]" />

            <div className="absolute inset-12 rounded-full border border-blue-400/[0.08]" />

            <div className="absolute inset-20 rounded-full border border-cyan-400/[0.06]" />

            {/* =================================================
                PROFILE IMAGE
            ================================================= */}

            <div className="relative z-20 h-[260px] w-[260px] overflow-hidden rounded-full border border-blue-300/30 bg-[#07111f] shadow-[0_0_80px_rgba(37,99,235,0.18)] sm:h-[320px] sm:w-[320px]">
              <img
                src="/profile/ashfaque-ahmed.png"
                alt="Ashfaque Ahmed - AI Agent Developer and GenAI Engineer"
                className="h-full w-full object-cover object-center"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-blue-950/25 via-transparent to-blue-100/[0.04]" />

              {/* Profile status */}
              <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-blue-300/20 bg-[#020617]/85 px-4 py-2 text-xs text-blue-100/80 backdrop-blur-xl">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                Building AI Systems
              </div>
            </div>

            {/* =================================================
                TOP AI CORE
            ================================================= */}

            <div className="absolute left-1/2 top-0 z-30 flex -translate-x-1/2 items-center gap-2 rounded-full border border-blue-400/20 bg-[#06101f]/90 px-4 py-2 text-xs text-blue-200 shadow-[0_0_25px_rgba(37,99,235,0.12)] backdrop-blur-xl">
              <Bot className="h-3.5 w-3.5 text-blue-400" />
              AI AGENT
            </div>

            {/* =================================================
                LEFT — LANGGRAPH
            ================================================= */}

            <div className="absolute left-[-5px] top-[23%] z-40 rounded-xl border border-blue-400/20 bg-[#050b18]/90 px-4 py-3 shadow-[0_0_25px_rgba(37,99,235,0.10)] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <GitBranch className="h-4 w-4 text-blue-400" />

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Agent
                  </p>

                  <p className="mt-1 text-sm font-medium text-blue-100">
                    LangGraph
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                RIGHT — RAG
            ================================================= */}

            <div className="absolute right-[-5px] top-[28%] z-40 rounded-xl border border-cyan-400/20 bg-[#050b18]/90 px-4 py-3 shadow-[0_0_25px_rgba(34,211,238,0.08)] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Network className="h-4 w-4 text-cyan-400" />

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Knowledge
                  </p>

                  <p className="mt-1 text-sm font-medium text-cyan-100">
                    RAG
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM LEFT — MCP
            ================================================= */}

            <div className="absolute bottom-[16%] left-[2%] z-40 rounded-xl border border-blue-400/20 bg-[#050b18]/90 px-4 py-3 shadow-[0_0_25px_rgba(37,99,235,0.10)] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Cpu className="h-4 w-4 text-blue-400" />

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Tools
                  </p>

                  <p className="mt-1 text-sm font-medium text-blue-100">
                    MCP
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                BOTTOM RIGHT — AUTOMATION
            ================================================= */}

            <div className="absolute bottom-[11%] right-[-2%] z-40 rounded-xl border border-cyan-400/25 bg-[#06111f]/95 px-4 py-3 shadow-[0_0_30px_rgba(34,211,238,0.12)] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Workflow className="h-4 w-4 text-cyan-400" />

                <div>
                  <p className="text-[10px] uppercase tracking-wider text-slate-500">
                    Automation
                  </p>

                  <p className="mt-1 text-sm font-medium text-cyan-100">
                    n8n Workflows
                  </p>
                </div>
              </div>
            </div>

            {/* =================================================
                EXTRA — LLM
            ================================================= */}

            <div className="absolute bottom-0 left-1/2 z-30 -translate-x-1/2 rounded-full border border-blue-400/20 bg-[#050b18]/90 px-4 py-2 shadow-[0_0_25px_rgba(37,99,235,0.10)] backdrop-blur-xl">
              <div className="flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5 text-blue-400" />

                <span className="text-xs text-blue-100/80">
                  LLM + Tools + Automation
                </span>
              </div>
            </div>

            {/* =================================================
                AUTOMATION CONNECTION DOTS
            ================================================= */}

            <div className="absolute left-[21%] top-[45%] z-10 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

            <div className="absolute right-[21%] top-[49%] z-10 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

            <div className="absolute bottom-[27%] left-[29%] z-10 h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_12px_rgba(59,130,246,0.9)]" />

            <div className="absolute bottom-[25%] right-[28%] z-10 h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.9)]" />

            {/* =================================================
                SMALL ZAP ACCENT
            ================================================= */}

            <div className="absolute right-[20%] top-[9%] z-30 flex h-9 w-9 items-center justify-center rounded-full border border-blue-400/20 bg-blue-500/[0.08]">
              <Zap className="h-4 w-4 text-blue-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}