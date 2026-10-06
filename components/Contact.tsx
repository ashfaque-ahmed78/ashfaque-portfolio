"use client";

import { ArrowUpRight, Mail } from "lucide-react";

import Reveal from "@/components/Reveal";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-blue-400/10 bg-[#040a16] px-6 py-28"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/3 top-[-120px] h-[500px] w-[700px] rounded-full bg-blue-600/[0.07] blur-[140px]" />

        <div className="absolute right-[-10%] bottom-[-10%] h-[420px] w-[420px] rounded-full bg-cyan-400/[0.035] blur-[130px]" />

        <div
          className="absolute inset-0 opacity-[0.018]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(59,130,246,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.8) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.8fr] lg:items-end">
            {/* Main contact content */}
            <div>
              <p className="mb-4 text-sm uppercase tracking-[0.25em] text-blue-300/45">
                Contact
              </p>

              <h2 className="max-w-3xl text-4xl font-semibold tracking-tight text-white md:text-6xl">
                Let&apos;s turn your idea into an
                <span className="text-blue-400"> AI system.</span>
              </h2>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
                Have a project, startup idea, automation problem, or AI
                product in mind? I&apos;d love to hear about it.
              </p>

              <a
                href="mailto:ashfaqueahmed3150@gmail.com"
                className="group mt-8 inline-flex items-center gap-3 text-lg text-white transition"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/[0.06]">
                  <Mail className="h-5 w-5 text-blue-300" />
                </span>

                <span className="transition group-hover:text-blue-300">
                  ashfaqueahmed3150@gmail.com
                </span>

                <ArrowUpRight className="h-4 w-4 text-blue-300/40 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
              </a>
            </div>

            {/* Social links */}
            <div className="relative overflow-hidden rounded-3xl border border-blue-400/10 bg-[#07111f]/90 p-7 shadow-[0_20px_70px_rgba(37,99,235,0.05)]">
              <div className="pointer-events-none absolute right-[-70px] top-[-70px] h-40 w-40 rounded-full bg-blue-500/[0.08] blur-3xl" />

              <div className="relative">
                <p className="text-sm text-blue-300/45">
                  Connect with me
                </p>

                <div className="mt-6 space-y-3">
                  <a
                    href="https://github.com/ashfaque-ahmed78"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-blue-400/10 bg-[#030712]/70 px-5 py-4 transition hover:border-blue-400/25 hover:bg-blue-500/[0.05]"
                  >
                    <span className="text-sm text-slate-300 transition group-hover:text-white">
                      GitHub
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-blue-300/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                  </a>

                  <a
                    href="https://www.linkedin.com/in/ashfaque-ahmed-29a05332b/"
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between rounded-xl border border-blue-400/10 bg-[#030712]/70 px-5 py-4 transition hover:border-blue-400/25 hover:bg-blue-500/[0.05]"
                  >
                    <span className="text-sm text-slate-300 transition group-hover:text-white">
                      LinkedIn
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-blue-300/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                  </a>

                  <a
                    href="mailto:ashfaqueahmed3150@gmail.com"
                    className="group flex items-center justify-between rounded-xl border border-blue-400/10 bg-[#030712]/70 px-5 py-4 transition hover:border-blue-400/25 hover:bg-blue-500/[0.05]"
                  >
                    <span className="flex items-center gap-3 text-sm text-slate-300 transition group-hover:text-white">
                      <Mail className="h-5 w-5 text-blue-300" />
                      Email Me
                    </span>

                    <ArrowUpRight className="h-4 w-4 text-blue-300/30 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-blue-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Availability */}
        <Reveal className="mt-20">
          <div className="flex flex-col justify-between gap-5 border-t border-blue-400/10 pt-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />

              <span className="text-sm text-slate-400">
                Available for freelance & remote AI projects
              </span>
            </div>

            <p className="text-sm text-blue-300/35">
              AI Agent Developer · GenAI Engineer
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}