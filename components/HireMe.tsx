"use client";

import {
  ArrowUpRight,
  Bot,
  Database,
  Workflow,
  Code2,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Agents",
    description:
      "Intelligent agents that reason, use tools, maintain context, and complete multi-step tasks.",
    items: [
      "LangGraph Agents",
      "Multi-Agent Systems",
      "Tool Calling",
      "Memory & HITL",
    ],
  },
  {
    icon: Database,
    title: "RAG & Knowledge Systems",
    description:
      "AI systems that connect LLMs with your private documents, databases, and knowledge sources.",
    items: [
      "Document RAG",
      "Vector Search",
      "Knowledge Assistants",
      "Context Retrieval",
    ],
  },
  {
    icon: Workflow,
    title: "AI Automation",
    description:
      "Automated workflows that connect AI with business tools and eliminate repetitive manual work.",
    items: [
      "n8n Automation",
      "Google APIs",
      "Webhooks",
      "Workflow Agents",
    ],
  },
  {
    icon: Code2,
    title: "LLM Applications",
    description:
      "Production-ready AI applications with modern backends, APIs, interfaces, and deployment.",
    items: [
      "FastAPI Backends",
      "LLM Applications",
      "MCP Integrations",
      "Docker Deployment",
    ],
  },
];

export default function HireMe() {
  return (
    <section
      id="hire"
      className="relative overflow-hidden border-t border-blue-400/10 bg-[#030712] px-6 py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-100px] h-[520px] w-[750px] -translate-x-1/2 rounded-full bg-blue-600/[0.07] blur-[140px]" />

        <div className="absolute left-[-10%] top-[45%] h-[350px] w-[350px] rounded-full bg-cyan-400/[0.035] blur-[130px]" />

        <div className="absolute right-[-10%] bottom-[10%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-4 py-2 text-sm text-blue-200/70">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.7)]" />
            Available for AI projects
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.25em] text-blue-300/45">
            Hire Me
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Let&apos;s build something
            <span className="block text-blue-400">
              intelligent.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
            Have an AI idea, automation problem, or product that needs
            intelligent features? I can help turn it into a working system.
          </p>
        </div>

        {/* Services */}
        <div className="mt-16 grid gap-5 md:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-3xl border border-blue-400/10 bg-[#07111f]/90 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-blue-400/25 hover:shadow-[0_20px_70px_rgba(37,99,235,0.08)]"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute right-[-80px] top-[-80px] h-40 w-40 rounded-full bg-blue-500/[0.06] blur-3xl transition duration-500 group-hover:bg-blue-500/[0.12]" />

                <div className="relative">
                  <div className="mb-7 flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.07] transition duration-300 group-hover:border-blue-400/30 group-hover:bg-blue-500/[0.11]">
                      <Icon className="h-5 w-5 text-blue-300" />
                    </div>

                    <ArrowUpRight className="h-5 w-5 text-blue-300/25 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-300" />
                  </div>

                  <h3 className="text-xl font-semibold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-lg text-sm leading-6 text-slate-400">
                    {service.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {service.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-blue-400/10 bg-[#030712]/70 px-3 py-1.5 text-xs text-slate-400 transition hover:border-blue-400/20 hover:text-blue-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="relative mt-16 overflow-hidden rounded-3xl border border-blue-400/15 bg-[#07111f]">
          {/* CTA glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-120px] h-72 w-[600px] -translate-x-1/2 rounded-full bg-blue-500/[0.09] blur-[100px]" />

          <div className="relative px-7 py-12 text-center md:px-12 md:py-16">
            <div className="relative">
              <p className="text-sm uppercase tracking-[0.2em] text-blue-300/45">
                Have a project in mind?
              </p>

              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Tell me what you&apos;re building.
              </h3>

              <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-400">
                Whether you need an AI agent, RAG system, automation workflow,
                or complete LLM application, let&apos;s discuss the problem and
                build the right solution.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
                <a
                  href="mailto:ashfaqueahmed3150@gmail.com"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_30px_rgba(37,99,235,0.18)] transition hover:bg-blue-400 hover:shadow-[0_0_35px_rgba(37,99,235,0.28)]"
                >
                  Start a Conversation
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ashfaque-ahmed-29a05332b/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.04] px-6 py-3 text-sm font-medium text-blue-100 transition hover:border-blue-400/30 hover:bg-blue-500/[0.08]"
                >
                  Connect on LinkedIn
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom statement */}
        <div className="mt-10 text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-300/30">
            AI Agents · GenAI · RAG · Automation · Production Systems
          </p>
        </div>
      </div>
    </section>
  );
}