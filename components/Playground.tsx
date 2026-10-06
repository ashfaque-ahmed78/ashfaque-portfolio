"use client";

import { useState } from "react";

import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  CheckCircle2,
  Database,
  MessageSquare,
  Send,
  Sparkles,
  Wrench,
  Zap,
} from "lucide-react";

import Reveal from "./Reveal";

type DemoType = "agent" | "rag" | "mcp";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

const demos = {
  agent: {
    label: "AI Agent",
    description:
      "An agent reasons through a task, chooses the right tools, and executes a workflow.",
    steps: ["User Request", "Agent", "Reasoning", "Tools", "Result"],
  },
  rag: {
    label: "RAG System",
    description:
      "A retrieval-augmented system connects an LLM with external knowledge for grounded answers.",
    steps: ["Question", "Retriever", "Knowledge", "LLM", "Answer"],
  },
  mcp: {
    label: "MCP Tools",
    description:
      "MCP connects AI models with external tools and services through a structured interface.",
    steps: ["AI Model", "MCP", "Tool", "Execution", "Result"],
  },
};

const suggestedQuestions = [
  "What AI projects has Ashfaque built?",
  "What are Ashfaque's main AI skills?",
  "Can Ashfaque build AI agents?",
  "What services does Ashfaque offer?",
];

export default function Playground() {
  const [activeDemo, setActiveDemo] = useState<DemoType>("agent");

  const [message, setMessage] = useState("");
  const [submittedMessage, setSubmittedMessage] = useState("");

  const [assistantMessage, setAssistantMessage] = useState("");
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);

  const [assistantLoading, setAssistantLoading] = useState(false);
  const [assistantError, setAssistantError] = useState("");

  const currentDemo = demos[activeDemo];

  const handleDemo = () => {
    setSubmittedMessage(
      message.trim() || "Show me how this AI system works."
    );
  };

  const handleAskAssistant = async () => {
    const userMessage = assistantMessage.trim();

    if (!userMessage || assistantLoading) {
      return;
    }

    setAssistantLoading(true);
    setAssistantError("");
    setAssistantMessage("");

    const history = chatMessages;

    setChatMessages((previous) => [
      ...previous,
      {
        role: "user",
        content: userMessage,
      },
    ]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: userMessage,
          history,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      setChatMessages((previous) => [
        ...previous,
        {
          role: "assistant",
          content: data.answer || "No response received.",
        },
      ]);
    } catch (error) {
      console.error("Assistant error:", error);

      setAssistantError(
        error instanceof Error
          ? error.message
          : "Unable to connect to Ashfaque AI."
      );
    } finally {
      setAssistantLoading(false);
    }
  };

  const clearChat = () => {
    setChatMessages([]);
    setAssistantMessage("");
    setAssistantError("");
  };

  return (
    <section
      id="playground"
      className="relative overflow-hidden border-t border-blue-400/10 bg-[#040a16] px-6 py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-120px] h-[550px] w-[850px] -translate-x-1/2 rounded-full bg-blue-600/[0.065] blur-[150px]" />

        <div className="absolute left-[-10%] top-[45%] h-[350px] w-[350px] rounded-full bg-cyan-400/[0.035] blur-[120px]" />

        <div className="absolute right-[-10%] bottom-[5%] h-[400px] w-[400px] rounded-full bg-blue-500/[0.04] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <Reveal>
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-3 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />

              <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-200/60">
                AI Playground
              </p>
            </div>

            <h2 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-6xl">
              See how the systems
              <span className="block text-blue-400">
                actually work.
              </span>
            </h2>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-400 md:text-lg">
              Explore simplified versions of the architectures I build:
              AI agents, retrieval systems, and tool-connected AI workflows.
            </p>
          </div>
        </Reveal>

        {/* Demo Selector */}
        <Reveal delay={100}>
          <div className="mt-12 flex flex-wrap gap-2 rounded-2xl border border-blue-400/10 bg-[#07111f]/80 p-2">
            {(Object.keys(demos) as DemoType[]).map((type) => {
              const demo = demos[type];
              const active = activeDemo === type;

              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setActiveDemo(type)}
                  className={`flex items-center gap-2 rounded-xl px-4 py-3 text-sm transition ${
                    active
                      ? "bg-blue-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.22)]"
                      : "text-slate-400 hover:bg-blue-500/[0.07] hover:text-blue-200"
                  }`}
                >
                  {type === "agent" && <Bot className="h-4 w-4" />}

                  {type === "rag" && <Database className="h-4 w-4" />}

                  {type === "mcp" && <Wrench className="h-4 w-4" />}

                  {demo.label}
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Architecture Demo */}
        <Reveal delay={150}>
          <div className="relative mt-6 overflow-hidden rounded-3xl border border-blue-400/10 bg-[#07111f]/90 shadow-[0_25px_90px_rgba(0,0,0,0.2)]">
            {/* Header */}
            <div className="border-b border-blue-400/[0.08] p-6 md:p-8">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/[0.07]">
                      {activeDemo === "agent" && (
                        <Bot className="h-5 w-5 text-blue-300" />
                      )}

                      {activeDemo === "rag" && (
                        <Database className="h-5 w-5 text-blue-300" />
                      )}

                      {activeDemo === "mcp" && (
                        <Wrench className="h-5 w-5 text-blue-300" />
                      )}
                    </div>

                    <h3 className="text-xl font-medium text-white">
                      {currentDemo.label}
                    </h3>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-6 text-slate-400">
                    {currentDemo.description}
                  </p>
                </div>

                <div className="inline-flex items-center gap-2 self-start rounded-full border border-emerald-400/20 bg-emerald-400/[0.06] px-3 py-1.5 text-xs text-emerald-300 md:self-auto">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.7)]" />

                  Interactive Demo
                </div>
              </div>
            </div>

            {/* Architecture Flow */}
            <div className="overflow-x-auto p-6 md:p-10">
              <div className="flex min-w-[700px] items-center justify-center">
                {currentDemo.steps.map((step, index) => (
                  <div key={step} className="flex items-center">
                    <div className="flex min-w-[115px] flex-col items-center">
                      <div
                        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl border ${
                          index === 0
                            ? "border-blue-400/30 bg-blue-500/[0.10] shadow-[0_0_30px_rgba(37,99,235,0.12)]"
                            : "border-blue-400/10 bg-[#030712]"
                        }`}
                      >
                        {index === 0 && (
                          <MessageSquare className="h-5 w-5 text-blue-300" />
                        )}

                        {index === 1 && (
                          <Bot className="h-5 w-5 text-blue-300/80" />
                        )}

                        {index === 2 && (
                          <Sparkles className="h-5 w-5 text-cyan-300/80" />
                        )}

                        {index === 3 && (
                          <Wrench className="h-5 w-5 text-blue-300/80" />
                        )}

                        {index >= 4 && (
                          <CheckCircle2 className="h-5 w-5 text-cyan-300/80" />
                        )}
                      </div>

                      <span className="mt-3 text-center text-xs text-slate-400">
                        {step}
                      </span>
                    </div>

                    {index < currentDemo.steps.length - 1 && (
                      <ArrowRight className="mx-2 h-4 w-4 shrink-0 text-blue-400/30" />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Input */}
            <div className="border-t border-blue-400/[0.08] p-6 md:p-8">
              <div className="flex flex-col gap-3 md:flex-row">
                <div className="flex-1 rounded-xl border border-blue-400/10 bg-[#030712]/70 px-4 py-3 transition focus-within:border-blue-400/25">
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        handleDemo();
                      }
                    }}
                    placeholder="Try a sample request..."
                    className="w-full bg-transparent text-sm text-white outline-none placeholder:text-slate-600"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleDemo}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white shadow-[0_0_25px_rgba(37,99,235,0.16)] transition hover:bg-blue-400"
                >
                  Run Demo
                  <Zap className="h-4 w-4" />
                </button>
              </div>

              {submittedMessage && (
                <div className="mt-5 rounded-xl border border-blue-400/10 bg-blue-500/[0.035] p-5">
                  <p className="text-xs uppercase tracking-[0.2em] text-blue-300/40">
                    Demo Request
                  </p>

                  <p className="mt-2 text-sm text-slate-300">
                    {submittedMessage}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-xs text-emerald-300">
                    <CheckCircle2 className="h-4 w-4" />
                    Architecture ready to process request
                  </div>
                </div>
              )}
            </div>
          </div>
        </Reveal>

        {/* Ask Ashfaque AI */}
        <Reveal delay={200}>
          <div className="relative mt-20 overflow-hidden rounded-3xl border border-blue-400/10 bg-[#07111f]/90 p-6 shadow-[0_25px_100px_rgba(0,0,0,0.2)] md:p-10">
            {/* Assistant glow */}
            <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-[320px] w-[320px] rounded-full bg-blue-500/[0.07] blur-[100px]" />

            <div className="relative flex flex-col gap-8">
              {/* AI Header */}
              <div className="flex flex-col justify-between gap-5 md:flex-row md:items-start">
                <div className="max-w-xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/15 bg-blue-500/[0.06] px-3 py-1.5 text-xs text-blue-200/60">
                    <Sparkles className="h-3.5 w-3.5 text-cyan-300" />
                    AI Portfolio Assistant
                  </div>

                  <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                    Ask Ashfaque AI
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-400 md:text-base">
                    Ask about my skills, projects, technologies, AI
                    engineering experience, or how I can help with your next
                    AI project.
                  </p>
                </div>

                {chatMessages.length > 0 && (
                  <button
                    type="button"
                    onClick={clearChat}
                    className="self-start rounded-xl border border-blue-400/10 px-4 py-2 text-xs text-slate-400 transition hover:border-blue-400/20 hover:bg-blue-500/[0.05] hover:text-blue-200"
                  >
                    Clear Chat
                  </button>
                )}
              </div>

              {/* Suggested Questions */}
              {chatMessages.length === 0 && (
                <div>
                  <p className="mb-3 text-xs uppercase tracking-[0.18em] text-blue-300/35">
                    Try asking
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {suggestedQuestions.map((question) => (
                      <button
                        key={question}
                        type="button"
                        onClick={() => setAssistantMessage(question)}
                        className="rounded-full border border-blue-400/10 bg-blue-500/[0.025] px-4 py-2 text-xs text-slate-400 transition hover:border-blue-400/25 hover:bg-blue-500/[0.06] hover:text-blue-200"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Chat Window */}
              <div className="min-h-[180px] rounded-2xl border border-blue-400/10 bg-[#030712]/75 p-4 md:p-6">
                {chatMessages.length === 0 ? (
                  <div className="flex min-h-[150px] flex-col items-center justify-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-400/15 bg-blue-500/[0.06]">
                      <Bot className="h-5 w-5 text-blue-300/70" />
                    </div>

                    <p className="mt-4 text-sm text-slate-400">
                      Start a conversation with Ashfaque AI.
                    </p>

                    <p className="mt-1 text-xs text-slate-600">
                      Ask about projects, skills, technologies, or hiring.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-5">
                    {chatMessages.map((chat, index) => (
                      <div
                        key={`${chat.role}-${index}`}
                        className={`flex ${
                          chat.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        <div
                          className={`max-w-[90%] rounded-2xl px-4 py-3 md:max-w-[80%] ${
                            chat.role === "user"
                              ? "bg-blue-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.12)]"
                              : "border border-blue-400/10 bg-blue-500/[0.045] text-slate-300"
                          }`}
                        >
                          {chat.role === "assistant" && (
                            <div className="mb-2 flex items-center gap-2">
                              <Bot className="h-3.5 w-3.5 text-cyan-300/70" />

                              <span className="text-[10px] uppercase tracking-[0.15em] text-blue-300/40">
                                Ashfaque AI
                              </span>
                            </div>
                          )}

                          <p className="whitespace-pre-wrap text-sm leading-6">
                            {chat.content}
                          </p>
                        </div>
                      </div>
                    ))}

                    {/* Loading */}
                    {assistantLoading && (
                      <div className="flex justify-start">
                        <div className="rounded-2xl border border-blue-400/10 bg-blue-500/[0.045] px-4 py-3">
                          <div className="flex items-center gap-2 text-xs text-slate-400">
                            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)]" />

                            Ashfaque AI is thinking...
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Error */}
              {assistantError && (
                <div className="rounded-xl border border-red-400/10 bg-red-400/[0.04] px-4 py-3">
                  <p className="text-sm text-red-300/80">
                    {assistantError}
                  </p>
                </div>
              )}

              {/* Chat Input */}
              <div className="rounded-2xl border border-blue-400/10 bg-[#030712]/80 p-3 transition focus-within:border-blue-400/25">
                <div className="flex gap-3">
                  <input
                    value={assistantMessage}
                    onChange={(e) => setAssistantMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleAskAssistant();
                      }
                    }}
                    placeholder="Ask something about Ashfaque..."
                    disabled={assistantLoading}
                    className="min-w-0 flex-1 bg-transparent px-2 text-sm text-white outline-none placeholder:text-slate-600 disabled:opacity-50"
                  />

                  <button
                    type="button"
                    onClick={handleAskAssistant}
                    disabled={
                      assistantLoading || !assistantMessage.trim()
                    }
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500 text-white shadow-[0_0_25px_rgba(37,99,235,0.18)] transition hover:bg-blue-400 disabled:cursor-not-allowed disabled:opacity-40"
                    aria-label="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </div>

                <div className="mt-2 px-2 text-[10px] text-slate-600">
                  Press Enter to send
                </div>
              </div>

              {/* AI Footer */}
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-blue-400/[0.08] pt-6 text-xs text-slate-600">
                <span>Portfolio Knowledge</span>
                <span>Conversation Memory</span>
                <span>Next.js API</span>
                <span>Groq LLM</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Bottom CTA */}
        <Reveal delay={250}>
          <div className="mt-10 flex flex-col items-start justify-between gap-5 border-t border-blue-400/10 pt-8 md:flex-row md:items-center">
            <div>
              <p className="text-sm text-slate-400">
                Built to demonstrate real AI engineering.
              </p>

              <p className="mt-1 text-xs text-slate-600">
                Architecture first. Useful systems second. Animations last.
              </p>
            </div>

            <a
              href="#hire"
              className="inline-flex items-center gap-2 text-sm text-blue-300 transition hover:text-cyan-300"
            >
              Work with me
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}