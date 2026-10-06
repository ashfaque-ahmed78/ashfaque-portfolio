"use client";

import {
  ArrowUpRight,
  Bot,
  Brain,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Layers3,
  Network,
  Workflow,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";

const skillGroups = [
  {
    title: "AI & LLM",
    subtitle: "Core AI stack",
    icon: Brain,
    featured: true,
    skills: [
      "Generative AI",
      "LLMs",
      "Prompt Engineering",
      "Transformers",
      "RAG",
      "AI Agents",
      "LangChain",
      "LangGraph",
      "MCP",
    ],
  },
  {
    title: "Agentic AI",
    subtitle: "Intelligent systems",
    icon: Bot,
    featured: true,
    skills: [
      "Agent Architecture",
      "Multi-Agent Systems",
      "Tool Calling",
      "Memory",
      "Subgraphs",
      "Human-in-the-Loop",
      "LangSmith",
      "Evaluation",
    ],
  },
  {
    title: "Machine Learning",
    subtitle: "ML & deep learning",
    icon: Network,
    featured: false,
    skills: [
      "Machine Learning",
      "Deep Learning",
      "CNN",
      "ANN",
      "RNN",
      "NLP",
      "Transfer Learning",
      "PyTorch",
      "Scikit-learn",
    ],
  },
  {
    title: "Backend & APIs",
    subtitle: "Application layer",
    icon: Code2,
    featured: false,
    skills: [
      "Python",
      "FastAPI",
      "REST APIs",
      "PostgreSQL",
      "SQL",
      "Webhooks",
      "API Integration",
    ],
  },
  {
    title: "AI Automation",
    subtitle: "Workflow systems",
    icon: Workflow,
    featured: true,
    skills: [
      "n8n",
      "AI Automation",
      "Workflow Automation",
      "Google APIs",
      "Tool Integration",
      "MCP Tools",
      "Webhooks",
    ],
  },
  {
    title: "Deployment & Infrastructure",
    subtitle: "Production stack",
    icon: Cloud,
    featured: false,
    skills: [
      "Docker",
      "AWS",
      "Render",
      "Streamlit",
      "Git",
      "GitHub",
      "Environment Variables",
    ],
  },
];

const engineeringPrinciples = [
  {
    icon: Layers3,
    title: "System Thinking",
    text: "Designing AI applications as complete systems rather than isolated models.",
  },
  {
    icon: Wrench,
    title: "Tool Integration",
    text: "Connecting LLMs with APIs, databases, tools, workflows, and external services.",
  },
  {
    icon: Database,
    title: "Context & Memory",
    text: "Building systems that retrieve useful information and maintain meaningful context.",
  },
  {
    icon: GitBranch,
    title: "Production Mindset",
    text: "Thinking about evaluation, deployment, reliability, and maintainability.",
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden border-t border-blue-400/10 bg-[#040a16] px-6 py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-10%] top-[-8%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.07] blur-[120px]" />
        <div className="absolute right-[-8%] top-[20%] h-[360px] w-[360px] rounded-full bg-cyan-400/[0.045] blur-[110px]" />
        <div className="absolute bottom-[-10%] left-[35%] h-[300px] w-[300px] rounded-full bg-blue-500/[0.035] blur-[100px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.7) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.7) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-200/60">
                Technical Skills
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
              The stack behind
              <span className="block text-blue-400">the systems.</span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
              My focus is building intelligent applications where models,
              agents, tools, data, APIs, and automation work together.
            </p>
          </div>
        </Reveal>

        {/* Primary AI Stack */}
        <Reveal delay={100}>
          <div className="mt-16">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500/50" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300/50">
                Primary Focus
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {skillGroups
                .filter((group) => group.featured)
                .map((group) => {
                  const Icon = group.icon;

                  return (
                    <div
                      key={group.title}
                      className="group relative overflow-hidden rounded-3xl border border-blue-400/10 bg-[#07111f]/90 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:border-blue-400/30 hover:shadow-[0_20px_80px_rgba(37,99,235,0.12)]"
                    >
                      {/* Card glow */}
                      <div className="pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full bg-blue-500/[0.07] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.14]" />

                      <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

                      <div className="relative">
                        <div className="flex items-start justify-between">
                          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.07] shadow-[0_0_30px_rgba(37,99,235,0.08)]">
                            <Icon className="h-5 w-5 text-blue-300" />
                          </div>

                          <span className="rounded-full border border-blue-400/15 bg-blue-500/[0.05] px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-blue-300/60">
                            Core
                          </span>
                        </div>

                        <h3 className="mt-7 text-xl font-semibold text-white">
                          {group.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-500">
                          {group.subtitle}
                        </p>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {group.skills.map((skill, index) => (
                            <span
                              key={skill}
                              className={`rounded-full border px-3 py-1.5 text-xs transition ${
                                index < 3
                                  ? "border-blue-400/20 bg-blue-500/[0.08] text-blue-100/75"
                                  : "border-white/[0.07] bg-white/[0.025] text-slate-400"
                              } hover:border-blue-400/30 hover:text-blue-100`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </Reveal>

        {/* Supporting Stack */}
        <Reveal delay={180}>
          <div className="mt-14">
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-blue-500/35" />

              <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300/45">
                Supporting Stack
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {skillGroups
                .filter((group) => !group.featured)
                .map((group) => {
                  const Icon = group.icon;

                  return (
                    <div
                      key={group.title}
                      className="group relative overflow-hidden rounded-3xl border border-blue-400/[0.08] bg-[#050c17]/90 p-7 transition duration-500 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-[#07111f]"
                    >
                      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/[0.035] blur-3xl transition group-hover:bg-blue-500/[0.08]" />

                      <div className="relative">
                        <div className="flex items-center gap-4">
                          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/[0.05]">
                            <Icon className="h-4 w-4 text-blue-300/70 transition group-hover:text-blue-300" />
                          </div>

                          <div>
                            <h3 className="text-base font-semibold text-white">
                              {group.title}
                            </h3>

                            <p className="mt-0.5 text-xs text-slate-500">
                              {group.subtitle}
                            </p>
                          </div>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                          {group.skills.map((skill) => (
                            <span
                              key={skill}
                              className="rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1.5 text-xs text-slate-400 transition hover:border-blue-400/20 hover:bg-blue-500/[0.05] hover:text-blue-200"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </Reveal>

        {/* Engineering Principles */}
        <Reveal delay={240}>
          <div className="mt-20 border-t border-blue-400/10 pt-14">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300/45">
                  How I Engineer
                </p>

                <h3 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  Beyond knowing the tools.
                </h3>
              </div>

              <p className="max-w-md text-sm leading-6 text-slate-500">
                Technologies change quickly. The engineering principles behind
                reliable AI systems matter even more.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {engineeringPrinciples.map((principle) => {
                const Icon = principle.icon;

                return (
                  <div
                    key={principle.title}
                    className="group rounded-2xl border border-blue-400/[0.08] bg-[#050c17]/80 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-400/20 hover:bg-[#07111f]"
                  >
                    <Icon className="h-5 w-5 text-blue-300/70 transition group-hover:text-cyan-300" />

                    <h4 className="mt-5 text-sm font-semibold text-white">
                      {principle.title}
                    </h4>

                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {principle.text}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Bottom Statement */}
        <Reveal delay={300}>
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-blue-400/10 bg-[#07111f]/80 p-8 shadow-[0_20px_80px_rgba(0,0,0,0.18)] sm:p-10 md:flex md:items-center md:justify-between">
            <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-500/[0.08] blur-3xl" />

            <div className="relative">
              <p className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Always learning. Always building.
              </p>

              <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                Currently exploring advanced RAG, AI automation, evaluation,
                and production-grade agent systems.
              </p>
            </div>

            <a
              href="#work"
              className="relative mt-6 inline-flex shrink-0 items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-cyan-300 md:mt-0"
            >
              See my work
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}