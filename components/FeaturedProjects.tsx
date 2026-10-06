"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Bot,
  Brain,
  BriefcaseBusiness,
  CheckCircle2,
  FileText,
  Plane,
  Sparkles,
  Workflow,
  Wrench,
} from "lucide-react";
import Reveal from "./Reveal";

const projects = [
  {
    number: "01",
    category: "Multi-Agent AI",
    title: "AI Travel Planning System",
    description:
      "A production-oriented multi-agent travel planner that coordinates specialized AI agents for flights, hotels, weather, budget, and itinerary generation.",
    result:
      "Built with LangGraph orchestration, supervisor guardrails, human-in-the-loop approval, external APIs, persistent state, and cloud deployment.",
    tags: [
      "LangGraph",
      "Groq",
      "FastAPI",
      "PostgreSQL",
      "Docker",
      "Render",
    ],
    icon: Plane,
    featured: true,
    github:
      "https://github.com/ashfaque-ahmed78/AI-Travel-Planning-System",
    caseStudy: "/projects/ai-travel-planning-system",
    demo: null,
  },
  {
    number: "02",
    category: "AI Automation",
    title: "Personal AI Assistant",
    description:
      "An AI-powered personal assistant designed around n8n workflows, webhooks, Gmail, Google Calendar, and intelligent task automation.",
    result:
      "Designed to connect everyday productivity tools with AI-driven workflows and automation.",
    tags: ["n8n", "AI Automation", "Webhooks", "Gmail", "Google Calendar"],
    icon: Workflow,
    github: "https://github.com/ashfaque-ahmed78",
    caseStudy: null,
    demo: null,
  },
  {
    number: "03",
    category: "Agentic AI",
    title: "AI Content Agent",
    description:
      "A LangGraph-based content generation system that researches topics, creates structured content, uses external tools, and supports human approval.",
    result:
      "Combines LLM reasoning, web research, MCP tools, workflow control, and human-in-the-loop interaction.",
    tags: ["LangGraph", "Groq", "Tavily", "MCP", "Streamlit"],
    icon: Bot,
    github: "https://github.com/ashfaque-ahmed78",
    caseStudy: null,
    demo: null,
  },
  {
    number: "04",
    category: "AI + Backend",
    title: "JobFlow AI",
    description:
      "An AI-powered job matching backend that parses resumes and evaluates job opportunities based on candidate information.",
    result:
      "Built a FastAPI backend with PDF resume parsing, job-data integration, ranking logic, and match scoring.",
    tags: ["Python", "FastAPI", "AI Matching", "PDF Parsing", "REST API"],
    icon: BriefcaseBusiness,
    github: "https://github.com/ashfaque-ahmed78",
    caseStudy: null,
    demo: null,
  },
  {
    number: "05",
    category: "MCP",
    title: "MCP AI Agent",
    description:
      "An AI agent connected to MCP tools for performing calculations and retrieving information through structured tool calls.",
    result:
      "Demonstrates practical tool calling, MCP integration, agent reasoning, and external capability access.",
    tags: ["MCP", "AI Agent", "Tool Calling", "Python", "LLM"],
    icon: Wrench,
    github: "https://github.com/ashfaque-ahmed78",
    caseStudy: null,
    demo: null,
  },
  {
    number: "06",
    category: "Conversational AI",
    title: "LangGraph College AI Assistant",
    description:
      "A conversational college assistant built with LangGraph that maintains context and uses structured agent workflows.",
    result:
      "Implemented conversational memory, LangGraph workflows, Groq-powered responses, and a Streamlit interface.",
    tags: ["LangGraph", "Groq", "Memory", "Streamlit", "Python"],
    icon: Bot,
    github: "https://github.com/ashfaque-ahmed78",
    caseStudy: null,
    demo: null,
  },
  {
    number: "07",
    category: "Computer Vision",
    title: "Brain Tumor Detection",
    description:
      "A deep learning computer vision application for brain tumor classification using CNN and transfer learning.",
    result:
      "Achieved approximately 97% classification accuracy using an EfficientNet-based transfer learning approach.",
    tags: ["CNN", "EfficientNet", "Transfer Learning", "PyTorch", "Streamlit"],
    icon: Brain,
    github: "https://github.com/ashfaque-ahmed78",
    caseStudy: null,
    demo: null,
  },
  {
    number: "08",
    category: "NLP",
    title: "T5 Dialogue Summarization",
    description:
      "A transformer-based NLP system designed to summarize conversational dialogue using a fine-tuned T5 model.",
    result:
      "Implemented model training, evaluation, and deployment using the Hugging Face ecosystem.",
    tags: ["T5", "Transformers", "NLP", "PyTorch", "Hugging Face"],
    icon: FileText,
    github: "https://github.com/ashfaque-ahmed78",
    caseStudy: null,
    demo: null,
  },
];

function ProjectLinks({
  project,
}: {
  project: (typeof projects)[number];
}) {
  return (
    <div className="mt-7 flex flex-wrap gap-3">
      {project.caseStudy && (
        <Link
          href={project.caseStudy}
          className="group/link inline-flex items-center gap-2 rounded-full bg-blue-600 px-4 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:bg-blue-500"
        >
          Case Study
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </Link>
      )}

      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="group/link inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.04] px-4 py-2.5 text-xs font-medium text-slate-400 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.08] hover:text-white"
      >
        GitHub
        <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
      </a>

      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="group/link inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.04] px-4 py-2.5 text-xs font-medium text-slate-400 transition-all duration-300 hover:border-blue-400/30 hover:bg-blue-500/[0.08] hover:text-white"
        >
          Live Demo
          <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
        </a>
      )}
    </div>
  );
}

function ArchitectureNode({
  label,
  value,
  className = "",
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div
      className={`absolute rounded-xl border border-blue-400/15 bg-[#07111f]/90 px-3 py-2.5 shadow-2xl backdrop-blur-xl sm:px-4 sm:py-3 ${className}`}
    >
      <p className="text-[9px] uppercase tracking-[0.18em] text-blue-300/40">
        {label}
      </p>

      <p className="mt-1 text-xs text-slate-300 sm:text-sm">{value}</p>
    </div>
  );
}

export default function FeaturedProjects() {
  const featuredProject = projects[0];
  const FeaturedIcon = featuredProject.icon;

  return (
    <section
      id="work"
      className="relative overflow-hidden border-t border-blue-400/10 bg-[#030914] px-6 py-24 md:py-32"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[150px]" />

        <div className="absolute left-[-200px] top-[45%] h-[450px] w-[450px] rounded-full bg-cyan-500/[0.035] blur-[130px]" />

        <div className="absolute right-[-180px] bottom-[10%] h-[450px] w-[450px] rounded-full bg-blue-500/[0.04] blur-[130px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.018)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-blue-400/50" />

                <p className="text-xs font-medium uppercase tracking-[0.25em] text-blue-300/60">
                  Selected Work
                </p>
              </div>

              <h2 className="mt-5 text-4xl font-semibold tracking-[-0.03em] text-white md:text-6xl">
                Systems I&apos;ve
                <span className="block bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  built.
                </span>
              </h2>

              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
                A selection of AI systems, agents, automation workflows, and
                machine learning applications built around real engineering
                problems.
              </p>
            </div>

            <a
              href="https://github.com/ashfaque-ahmed78"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex shrink-0 items-center gap-2 text-sm text-slate-500 transition hover:text-blue-300"
            >
              View GitHub
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </Reveal>

        {/* Featured Project */}
        <Reveal delay={100}>
          <article className="group relative mt-16 overflow-hidden rounded-[2rem] border border-blue-400/15 bg-[#050b18]/85 shadow-[0_25px_100px_rgba(0,0,0,0.28)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              {/* Visual */}
              <div className="relative min-h-[430px] overflow-hidden border-b border-blue-400/10 bg-[#020617] lg:min-h-[560px] lg:border-b-0 lg:border-r">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(37,99,235,0.16),transparent_48%)]" />

                {/* Grid */}
                <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(59,130,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.025)_1px,transparent_1px)] [background-size:55px_55px]" />

                {/* Decorative glow */}
                <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/[0.08] blur-3xl" />

                <div className="absolute left-6 top-6 flex items-center gap-2 rounded-full border border-blue-400/15 bg-[#050b18]/70 px-3 py-1.5 backdrop-blur-xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                  <span className="text-[10px] uppercase tracking-[0.18em] text-blue-200/50">
                    AI System
                  </span>
                </div>

                <div className="absolute right-6 top-6 rounded-full border border-blue-400/15 bg-[#050b18]/70 px-3 py-1.5 text-[10px] uppercase tracking-[0.18em] text-blue-200/40 backdrop-blur-xl">
                  LangGraph
                </div>

                {/* Architecture */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative h-[270px] w-[270px] sm:h-[350px] sm:w-[350px]">
                    {/* Rings */}
                    <div className="absolute inset-0 animate-[spin_35s_linear_infinite] rounded-full border border-blue-400/15" />

                    <div className="absolute inset-8 rounded-full border border-blue-400/[0.10]" />

                    <div className="absolute inset-16 animate-[spin_25s_linear_infinite_reverse] rounded-full border border-dashed border-cyan-400/[0.10]" />

                    {/* Connection lines */}
                    <div className="absolute left-1/2 top-0 h-1/2 w-px origin-bottom bg-gradient-to-t from-blue-400/20 to-transparent" />

                    <div className="absolute bottom-0 left-1/2 h-1/2 w-px origin-top bg-gradient-to-b from-blue-400/20 to-transparent" />

                    <div className="absolute left-0 top-1/2 h-px w-1/2 origin-right bg-gradient-to-l from-blue-400/20 to-transparent" />

                    <div className="absolute right-0 top-1/2 h-px w-1/2 origin-left bg-gradient-to-r from-blue-400/20 to-transparent" />

                    {/* Center */}
                    <div className="absolute left-1/2 top-1/2 flex h-24 w-24 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-3xl border border-blue-300/25 bg-blue-500/[0.08] shadow-[0_0_60px_rgba(37,99,235,0.22)] backdrop-blur-xl transition duration-500 group-hover:border-blue-300/40 group-hover:bg-blue-500/[0.12]">
                      <FeaturedIcon className="h-7 w-7 text-blue-300" />

                      <span className="mt-2 text-[9px] uppercase tracking-[0.18em] text-blue-200/40">
                        Planner
                      </span>
                    </div>

                    <ArchitectureNode
                      label="Agent"
                      value="Supervisor"
                      className="left-[-20px] top-1/2 -translate-y-1/2"
                    />

                    <ArchitectureNode
                      label="Flight"
                      value="AviationStack"
                      className="right-[-35px] top-[12%]"
                    />

                    <ArchitectureNode
                      label="Weather"
                      value="OpenWeather"
                      className="right-[-25px] bottom-[13%]"
                    />

                    <ArchitectureNode
                      label="State"
                      value="PostgreSQL"
                      className="bottom-[-12px] left-1/2 -translate-x-1/2"
                    />

                    <ArchitectureNode
                      label="Deploy"
                      value="Docker + Render"
                      className="left-[8%] top-[-18px]"
                    />
                  </div>
                </div>

                {/* Bottom label */}
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-blue-300/30">
                      Featured Project
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      Multi-agent travel orchestration
                    </p>
                  </div>

                  <div className="hidden items-center gap-1.5 sm:flex">
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400/20" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400/40" />
                    <span className="h-1.5 w-1.5 rounded-full bg-blue-400/70" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center p-7 sm:p-9 md:p-10 lg:p-12">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300/40">
                    {featuredProject.number} / {featuredProject.category}
                  </span>

                  <span className="hidden text-xs text-slate-600 sm:block">
                    Multi-Agent System
                  </span>
                </div>

                <h3 className="mt-7 text-3xl font-semibold tracking-[-0.03em] text-white md:text-4xl">
                  {featuredProject.title}
                </h3>

                <p className="mt-5 text-sm leading-7 text-slate-400 md:text-base">
                  {featuredProject.description}
                </p>

                {/* Engineering highlight */}
                <div className="mt-7 rounded-2xl border border-blue-400/10 bg-blue-500/[0.035] p-5">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-blue-300/70" />

                    <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-blue-200/40">
                      Engineering Highlights
                    </p>
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {featuredProject.result}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                  {[
                    "Multi-Agent",
                    "Tool Calling",
                    "HITL",
                    "Persistent State",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 rounded-lg border border-blue-400/10 bg-blue-500/[0.025] px-2.5 py-2"
                    >
                      <CheckCircle2 className="h-3 w-3 text-blue-400/70" />

                      <span className="text-[10px] text-slate-500">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-blue-400/10 bg-blue-500/[0.025] px-3 py-1.5 text-xs text-slate-500 transition-colors hover:border-blue-400/25 hover:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ProjectLinks project={featuredProject} />
              </div>
            </div>
          </article>
        </Reveal>

        {/* Other Projects */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {projects.slice(1).map((project, index) => {
            const Icon = project.icon;

            return (
              <Reveal key={project.title} delay={150 + index * 60}>
                <article className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-blue-400/10 bg-[#050b18]/75 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:bg-[#07111f] md:p-8">
                  {/* Hover atmosphere */}
                  <div className="pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full bg-blue-500/[0.045] blur-3xl transition group-hover:bg-blue-500/[0.10]" />

                  {/* Card top */}
                  <div className="relative flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-medium uppercase tracking-[0.2em] text-blue-300/30">
                        {project.number}
                      </span>

                      <span className="h-px w-5 bg-blue-400/10" />

                      <span className="text-[10px] uppercase tracking-[0.15em] text-slate-600">
                        Project
                      </span>
                    </div>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-blue-400/10 bg-blue-500/[0.035] transition-all duration-300 group-hover:border-blue-400/25 group-hover:bg-blue-500/[0.08]">
                      <Icon className="h-[18px] w-[18px] text-blue-300/60 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-300" />
                    </div>
                  </div>

                  <div className="relative">
                    <p className="mt-7 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-300/35">
                      {project.category}
                    </p>

                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.025em] text-white">
                      {project.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-400">
                      {project.description}
                    </p>

                    {/* Result */}
                    <div className="mt-6 border-l border-blue-400/15 pl-4 transition-colors duration-300 group-hover:border-blue-400/35">
                      <p className="text-sm leading-6 text-slate-500">
                        {project.result}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mt-7 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-blue-400/10 bg-blue-500/[0.02] px-3 py-1.5 text-[11px] text-slate-500 transition-colors duration-300 group-hover:border-blue-400/20 group-hover:text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="relative mt-auto pt-2">
                    <ProjectLinks project={project} />
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={250}>
          <div className="relative mt-16 overflow-hidden rounded-3xl border border-blue-400/10 bg-[#050b18]/70 p-8 backdrop-blur-xl md:p-10">
            <div className="pointer-events-none absolute right-[-100px] top-[-120px] h-72 w-72 rounded-full bg-blue-600/[0.08] blur-3xl" />

            <div className="pointer-events-none absolute left-[-100px] bottom-[-150px] h-72 w-72 rounded-full bg-cyan-500/[0.035] blur-3xl" />

            <div className="relative flex flex-col items-center justify-between gap-6 text-center md:flex-row md:text-left">
              <div>
                <p className="text-xl font-medium text-white">
                  Building something with AI?
                </p>

                <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500">
                  Let&apos;s turn the idea into a reliable, useful system —
                  from architecture to deployment.
                </p>
              </div>

              <a
                href="#hire"
                className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(37,99,235,0.18)] transition-all duration-300 hover:bg-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.28)]"
              >
                Start a Project
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}