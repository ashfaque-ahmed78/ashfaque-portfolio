"use client";

import {
  ArrowRight,
  CheckCircle2,
  Cloud,
  Code2,
  GitBranch,
  Search,
  Settings2,
  Sparkles,
} from "lucide-react";

import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Understand",
    subtitle: "Define the problem",
    description:
      "I first understand the business problem, users, constraints, data, and the outcome the system needs to achieve.",
    icon: Search,
    output: "Clear problem definition",
  },
  {
    number: "02",
    title: "Design",
    subtitle: "Plan the architecture",
    description:
      "I choose the right architecture, models, agents, data flow, tools, and integrations before writing the core implementation.",
    icon: GitBranch,
    output: "System architecture",
  },
  {
    number: "03",
    title: "Build",
    subtitle: "Develop the AI system",
    description:
      "I build the application layer, agent logic, prompts, RAG pipeline, APIs, memory, and supporting backend components.",
    icon: Code2,
    output: "Working AI system",
  },
  {
    number: "04",
    title: "Connect",
    subtitle: "Give AI real capabilities",
    description:
      "I connect models with APIs, databases, MCP tools, automation workflows, external services, and business systems.",
    icon: Settings2,
    output: "Tool-enabled AI",
  },
  {
    number: "05",
    title: "Evaluate",
    subtitle: "Test & improve",
    description:
      "I test outputs, agent behavior, retrieval quality, failure cases, latency, and overall system reliability.",
    icon: CheckCircle2,
    output: "Reliable AI behavior",
  },
  {
    number: "06",
    title: "Deploy",
    subtitle: "Ship to production",
    description:
      "I package and deploy the application using containers, cloud services, environment configuration, and production infrastructure.",
    icon: Cloud,
    output: "Production deployment",
  },
];

export default function BuildProcess() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-t border-blue-400/10 bg-[#030712] px-6 py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12%] top-[5%] h-[420px] w-[420px] rounded-full bg-blue-600/[0.06] blur-[130px]" />

        <div className="absolute right-[-10%] top-[25%] h-[400px] w-[400px] rounded-full bg-cyan-400/[0.04] blur-[120px]" />

        <div className="absolute bottom-[-15%] left-[35%] h-[350px] w-[350px] rounded-full bg-blue-500/[0.035] blur-[120px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-3 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />

                <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-200/60">
                  Engineering Process
                </p>
              </div>

              <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
                From problem to
                <span className="block text-blue-400">production.</span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                I approach AI projects as engineering systems—not just model
                demos. Every stage has a purpose, from understanding the
                problem to deploying a reliable product.
              </p>
            </div>

            <div className="hidden md:block">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-blue-400/10 bg-blue-500/[0.04]">
                <Sparkles className="h-7 w-7 text-blue-300/50" />
              </div>
            </div>
          </div>
        </Reveal>

        {/* Process Flow */}
        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="pointer-events-none absolute left-[7%] right-[7%] top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent lg:block" />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step, index) => {
              const Icon = step.icon;

              return (
                <Reveal key={step.number} delay={100 + index * 70}>
                  <article className="group relative h-full overflow-hidden rounded-3xl border border-blue-400/[0.09] bg-[#07111f]/90 p-7 shadow-[0_20px_70px_rgba(0,0,0,0.18)] transition duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:shadow-[0_20px_80px_rgba(37,99,235,0.10)]">
                    {/* Card glow */}
                    <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-blue-500/[0.05] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.12]" />

                    {/* Bottom accent */}
                    <div className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 group-hover:w-full" />

                    {/* Number / Icon */}
                    <div className="relative z-10 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.06] shadow-[0_0_30px_rgba(37,99,235,0.08)]">
                        <Icon className="h-5 w-5 text-blue-300/80 transition group-hover:text-cyan-300" />
                      </div>

                      <span className="text-xs font-medium tracking-[0.2em] text-blue-300/30">
                        {step.number}
                      </span>
                    </div>

                    {/* Title */}
                    <div className="relative mt-8">
                      <p className="text-xs uppercase tracking-[0.18em] text-blue-300/45">
                        {step.subtitle}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold tracking-tight text-white">
                        {step.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="relative mt-4 text-sm leading-6 text-slate-400">
                      {step.description}
                    </p>

                    {/* Output */}
                    <div className="relative mt-7 border-t border-blue-400/[0.08] pt-5">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">
                        Output
                      </p>

                      <div className="mt-2 flex items-center gap-2 text-sm text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)]" />

                        {step.output}
                      </div>
                    </div>

                    {/* Arrow */}
                    {index < steps.length - 1 && (
                      <div className="absolute -right-3 top-9 z-20 hidden h-6 w-6 items-center justify-center rounded-full border border-blue-400/15 bg-[#07111f] lg:flex">
                        <ArrowRight className="h-3 w-3 text-blue-300/40" />
                      </div>
                    )}
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Architecture Strip */}
        <Reveal delay={300}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-blue-400/10 bg-[#07111f]/80 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
            {/* Glow */}
            <div className="pointer-events-none absolute right-[-10%] top-[-80%] h-[300px] w-[300px] rounded-full bg-blue-500/[0.07] blur-[100px]" />

            <div className="relative border-b border-blue-400/[0.08] px-7 py-5 sm:px-8">
              <div className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.7)]" />

                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300/50">
                  Typical AI System Flow
                </p>
              </div>
            </div>

            <div className="relative flex flex-wrap items-center gap-3 px-7 py-7 sm:px-8">
              {[
                "User",
                "LLM",
                "Agent",
                "Tools",
                "Knowledge",
                "Evaluation",
                "Production",
              ].map((item, index, array) => (
                <div key={item} className="flex items-center gap-3">
                  <span
                    className={`rounded-full border px-4 py-2 text-xs transition ${
                      index === 2
                        ? "border-blue-400/25 bg-blue-500/[0.10] text-blue-200 shadow-[0_0_20px_rgba(37,99,235,0.08)]"
                        : "border-blue-400/[0.08] bg-[#030712] text-slate-400 hover:border-blue-400/20 hover:text-blue-200"
                    }`}
                  >
                    {item}
                  </span>

                  {index < array.length - 1 && (
                    <ArrowRight className="h-3.5 w-3.5 text-blue-400/25" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Bottom Statement */}
        <Reveal delay={350}>
          <div className="mt-14 flex flex-col gap-4 border-t border-blue-400/10 pt-8 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm leading-6 text-slate-500">
              The goal isn't simply to make an AI model respond. The goal is
              to build a useful, reliable, maintainable system around it.
            </p>

            <a
              href="#hire"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-cyan-300"
            >
              Start a project
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}