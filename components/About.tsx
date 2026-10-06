"use client";

import { ArrowUpRight, Bot, Code2, Network, Workflow } from "lucide-react";
import Reveal from "./Reveal";

export default function About() {
  const highlights = [
    {
      icon: Bot,
      title: "AI Agents",
      description:
        "Building intelligent agents that reason, use tools, maintain context, and execute multi-step tasks.",
    },
    {
      icon: Network,
      title: "RAG Systems",
      description:
        "Designing knowledge-grounded AI systems that retrieve relevant information before generating responses.",
    },
    {
      icon: Workflow,
      title: "AI Automation",
      description:
        "Connecting AI models, APIs, tools, and workflows to automate real-world business processes.",
    },
    {
      icon: Code2,
      title: "Production AI",
      description:
        "Turning AI prototypes into usable applications with APIs, databases, Docker, and cloud deployment.",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-blue-400/10 bg-[#040a16] px-6 py-28 sm:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-180px] top-[10%] h-[500px] w-[500px] rounded-full bg-blue-600/[0.07] blur-[140px]" />

        <div className="absolute right-[-180px] bottom-[5%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.045] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.018)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Heading */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-4 py-2 text-xs uppercase tracking-[0.2em] text-blue-300/70">
              About Me
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Building useful AI,
              <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                not just demos.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
              I&apos;m an AI Agent Developer and GenAI Engineer focused on
              designing intelligent systems that combine LLMs, agents,
              knowledge, tools, automation, and production-ready backends.
            </p>
          </div>
        </Reveal>

        {/* Main content */}
        <div className="mt-16 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Story */}
          <Reveal delay={100}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-blue-400/10 bg-[#050b18]/80 p-7 backdrop-blur-xl sm:p-9">
              <div className="absolute right-0 top-0 h-48 w-48 rounded-full bg-blue-600/[0.06] blur-[80px]" />

              <div className="relative">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-400/70">
                  Engineering Mindset
                </p>

                <p className="mt-6 text-lg leading-8 text-slate-300">
                  I enjoy taking an idea from{" "}
                  <span className="text-white">problem → architecture → implementation → deployment</span>.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  My work focuses on practical AI engineering: connecting
                  models with tools, building agent workflows, retrieving
                  useful knowledge, integrating APIs, and creating systems
                  that can actually be used outside a notebook.
                </p>

                <p className="mt-5 leading-8 text-slate-400">
                  I&apos;m continuously improving my skills in agentic AI,
                  advanced RAG, automation, evaluation, and production
                  deployment.
                </p>

                <a
                  href="#work"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-blue-300 transition hover:text-cyan-300"
                >
                  Explore my work
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>

          {/* Highlights */}
          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={150 + index * 80}>
                  <div className="group relative h-full overflow-hidden rounded-3xl border border-blue-400/10 bg-[#050b18]/75 p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-[#07111f]">
                    {/* Hover glow */}
                    <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-500/[0.08] blur-3xl transition group-hover:bg-blue-500/[0.14]" />

                    <div className="relative">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.07] text-blue-300 transition group-hover:border-blue-400/30 group-hover:bg-blue-500/[0.12]">
                        <Icon className="h-5 w-5" />
                      </div>

                      <h3 className="mt-6 text-lg font-medium text-white">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Stats */}
        <Reveal delay={350}>
          <div className="mt-6 grid overflow-hidden rounded-3xl border border-blue-400/10 bg-[#050b18]/70 sm:grid-cols-4">
            {[
              ["10+", "AI Projects"],
              ["6+", "AI Technologies"],
              ["5+", "AI Agents"],
              ["24/7", "Learning & Building"],
            ].map(([value, label], index) => (
              <div
                key={label}
                className={`px-6 py-7 text-center sm:py-8 ${
                  index !== 3 ? "border-b border-blue-400/10 sm:border-b-0 sm:border-r" : ""
                }`}
              >
                <p className="text-2xl font-semibold text-white sm:text-3xl">
                  {value}
                </p>

                <p className="mt-2 text-xs uppercase tracking-[0.16em] text-slate-500">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}