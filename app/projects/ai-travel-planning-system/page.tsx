import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cloud,
  Code2,
  Database,
  GitBranch,
  Hotel,
  Map,
  Plane,
  ShieldCheck,
  Sparkles,
  Users,
  Wallet,
  Workflow,
} from "lucide-react";

const agents = [
  {
    icon: Plane,
    name: "Flight Agent",
    description:
      "Handles flight-related planning and integrates aviation data into the travel workflow.",
  },
  {
    icon: Hotel,
    name: "Hotel Agent",
    description:
      "Finds and evaluates accommodation options based on the travel requirements.",
  },
  {
    icon: Cloud,
    name: "Weather Agent",
    description:
      "Retrieves weather information to make the travel plan more useful and realistic.",
  },
  {
    icon: Wallet,
    name: "Budget Agent",
    description:
      "Analyzes estimated travel costs and keeps the overall plan aligned with the user's budget.",
  },
  {
    icon: Map,
    name: "Itinerary Agent",
    description:
      "Combines the gathered information into a structured and practical travel itinerary.",
  },
];

const technologies = [
  "Python",
  "LangGraph",
  "Groq",
  "FastAPI",
  "Streamlit",
  "PostgreSQL",
  "Docker",
  "Render",
  "Tavily",
  "AviationStack",
  "OpenWeather",
];

const architecture = [
  "User Request",
  "Supervisor",
  "Specialized Agents",
  "Tools & APIs",
  "PostgreSQL",
  "Final Itinerary",
];

export default function AITravelPlanningSystem() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Background */}
      <div className="pointer-events-none fixed inset-0 -z-0">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-white/[0.035] blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.018)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.018)_1px,transparent_1px)] bg-[size:70px_70px]" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 border-b border-white/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-white/45 transition hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>

          <span className="text-xs font-medium uppercase tracking-[0.25em] text-white/25">
            Case Study
          </span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative z-10 px-6 pb-24 pt-20 md:pb-32 md:pt-28">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/45">
              <Sparkles className="h-3.5 w-3.5" />
              AI Travel Planning System
            </div>

            <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-white md:text-7xl lg:text-8xl">
              Planning travel with
              <span className="block text-white/35">
                multiple AI agents.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-base leading-7 text-white/45 md:text-lg md:leading-8">
              A multi-agent AI travel planning system that coordinates
              specialized agents for flights, hotels, weather, budget, and
              itinerary generation to create a complete travel plan.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/ashfaque-ahmed78/AI-Travel-Planning-System"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
              >
                View on GitHub
                <ArrowUpRight className="h-4 w-4" />
              </a>

              <a
                href="#architecture"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
              >
                Explore Architecture
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Project Meta */}
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            <div className="bg-black/80 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                Type
              </p>
              <p className="mt-2 text-sm text-white/70">
                Multi-Agent AI System
              </p>
            </div>

            <div className="bg-black/80 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                Framework
              </p>
              <p className="mt-2 text-sm text-white/70">LangGraph</p>
            </div>

            <div className="bg-black/80 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                Backend
              </p>
              <p className="mt-2 text-sm text-white/70">FastAPI</p>
            </div>

            <div className="bg-black/80 p-6">
              <p className="text-xs uppercase tracking-[0.18em] text-white/25">
                Deployment
              </p>
              <p className="mt-2 text-sm text-white/70">
                Docker + Render
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="relative z-10 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">
              The Problem
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
              Travel planning involves too many disconnected decisions.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-white/45 md:text-lg">
              Planning a trip requires combining multiple types of information:
              flights, accommodation, weather, costs, destinations, and daily
              activities. Traditional applications often handle these pieces
              independently.
            </p>

            <p className="mt-6 text-base leading-8 text-white/45 md:text-lg">
              I designed this system around a multi-agent architecture where
              specialized AI agents can handle individual responsibilities
              while a supervisor coordinates the overall workflow.
            </p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="relative z-10 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">
              The Solution
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
              One system. Multiple specialized agents.
            </h2>

            <p className="mt-6 text-base leading-7 text-white/45 md:text-lg">
              Instead of building one large AI prompt, the system separates
              responsibilities into focused agents and connects them through
              LangGraph.
            </p>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {agents.map((agent) => {
              const Icon = agent.icon;

              return (
                <div
                  key={agent.name}
                  className="group rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04]">
                    <Icon className="h-5 w-5 text-white/65" />
                  </div>

                  <h3 className="mt-5 text-lg font-medium text-white">
                    {agent.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/40">
                    {agent.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section
        id="architecture"
        className="relative z-10 border-t border-white/10 px-6 py-24 md:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">
              Architecture
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
              Designed as an orchestration system.
            </h2>

            <p className="mt-6 text-base leading-7 text-white/45 md:text-lg">
              LangGraph provides the orchestration layer, allowing the
              supervisor to coordinate specialized agents and move information
              through the workflow.
            </p>
          </div>

          {/* Architecture Flow */}
          <div className="mt-14 overflow-x-auto rounded-3xl border border-white/10 bg-white/[0.025] p-8 md:p-12">
            <div className="flex min-w-[850px] items-center justify-center">
              {architecture.map((item, index) => (
                <div key={item} className="flex items-center">
                  <div className="flex min-w-[120px] flex-col items-center">
                    <div
                      className={`flex h-16 w-16 items-center justify-center rounded-2xl border ${
                        index === 1
                          ? "border-white/25 bg-white/[0.08]"
                          : "border-white/10 bg-white/[0.03]"
                      }`}
                    >
                      {index === 0 && (
                        <Users className="h-5 w-5 text-white/65" />
                      )}

                      {index === 1 && (
                        <Workflow className="h-5 w-5 text-white/65" />
                      )}

                      {index === 2 && (
                        <Sparkles className="h-5 w-5 text-white/65" />
                      )}

                      {index === 3 && (
                        <Code2 className="h-5 w-5 text-white/65" />
                      )}

                      {index === 4 && (
                        <Database className="h-5 w-5 text-white/65" />
                      )}

                      {index === 5 && (
                        <CheckCircle2 className="h-5 w-5 text-white/65" />
                      )}
                    </div>

                    <p className="mt-3 text-center text-xs text-white/40">
                      {item}
                    </p>
                  </div>

                  {index < architecture.length - 1 && (
                    <ArrowRight className="mx-2 h-4 w-4 shrink-0 text-white/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Architecture Details */}
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <GitBranch className="h-5 w-5 text-white/50" />

              <h3 className="mt-5 text-base font-medium">
                Graph Orchestration
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                LangGraph manages state, agent transitions, and the overall
                execution flow.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <ShieldCheck className="h-5 w-5 text-white/50" />

              <h3 className="mt-5 text-base font-medium">
                Supervisor Guardrails
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                A supervisor controls the workflow and helps ensure that
                specialized agents are used appropriately.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <Users className="h-5 w-5 text-white/50" />

              <h3 className="mt-5 text-base font-medium">
                Human-in-the-Loop
              </h3>

              <p className="mt-3 text-sm leading-6 text-white/40">
                Important workflow decisions can involve human approval before
                continuing execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Decisions */}
      <section className="relative z-10 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">
              Engineering Decisions
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
              Built around separation of responsibility.
            </h2>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-medium text-white">
                Why multiple agents?
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                Separating responsibilities makes the system easier to reason
                about, modify, debug, and extend than a single monolithic
                prompt.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white">
                Why LangGraph?
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                The workflow requires state, branching, agent coordination,
                tool execution, and human approval. A graph-based architecture
                provides explicit control over those transitions.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-white">
                Why a separate backend?
              </h3>

              <p className="mt-3 text-sm leading-7 text-white/40">
                FastAPI provides a clean API boundary between the AI workflow
                and the user interface, making the system easier to deploy and
                integrate with other clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="relative z-10 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/30">
            Technology Stack
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
            The tools behind the system.
          </h2>

          <div className="mt-12 flex flex-wrap gap-3">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/[0.025] px-4 py-2.5 text-sm text-white/50 transition hover:border-white/20 hover:text-white"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment */}
      <section className="relative z-10 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[1fr_0.8fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/30">
              Deployment
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight md:text-5xl">
              From local development to production.
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-8 text-white/45">
              The application is structured for deployment using Docker and
              cloud infrastructure. The frontend and backend architecture keeps
              the AI workflow separated from the presentation layer.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.025] p-8">
            <div className="space-y-6">
              {[
                "Dockerized application",
                "FastAPI backend",
                "Streamlit interface",
                "PostgreSQL state/checkpoint storage",
                "Environment-based API configuration",
                "Render deployment workflow",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-white/50" />

                  <span className="text-sm text-white/50">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="relative z-10 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm uppercase tracking-[0.25em] text-white/30">
            What This Demonstrates
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-3xl font-semibold text-white">5+</p>
              <p className="mt-2 text-sm text-white/35">
                Specialized AI agents
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-3xl font-semibold text-white">10+</p>
              <p className="mt-2 text-sm text-white/35">
                Integrated technologies
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-3xl font-semibold text-white">1</p>
              <p className="mt-2 text-sm text-white/35">
                Coordinated travel workflow
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
              <p className="text-3xl font-semibold text-white">E2E</p>
              <p className="mt-2 text-sm text-white/35">
                AI system architecture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 border-t border-white/10 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.25em] text-white/30">
            Explore the Code
          </p>

          <h2 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">
            Want to see how it&apos;s built?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/40">
            Explore the implementation, architecture, and project source code
            on GitHub.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
            <a
              href="https://github.com/ashfaque-ahmed78/AI-Travel-Planning-System"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              View GitHub Repository
              <ArrowUpRight className="h-4 w-4" />
            </a>

            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-6 py-3 text-sm font-medium text-white transition hover:bg-white/[0.08]"
            >
              Back to Portfolio
              <ArrowLeft className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-xs text-white/25 sm:flex-row">
          <p>© {new Date().getFullYear()} Ashfaque Ahmed</p>

          <p>AI Agent Developer · GenAI Engineer</p>
        </div>
      </footer>
    </main>
  );
}