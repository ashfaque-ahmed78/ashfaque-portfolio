import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-blue-500/10 bg-[#050b14] px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] text-white">
            ASHFAQUE
          </p>

          <p className="mt-1 text-xs text-slate-400">
            Building intelligent systems.
          </p>
        </div>

        <div className="flex items-center gap-6 text-xs text-slate-400">
          <a
            href="#work"
            className="transition-colors hover:text-cyan-400"
          >
            Work
          </a>

          <a
            href="#skills"
            className="transition-colors hover:text-cyan-400"
          >
            Skills
          </a>

          <a
            href="#about"
            className="transition-colors hover:text-cyan-400"
          >
            About
          </a>

          <a
            href="#contact"
            className="flex items-center gap-1 transition-colors hover:text-cyan-400"
          >
            Contact
            <ArrowUpRight className="h-3 w-3" />
          </a>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Ashfaque Ahmed
        </p>
      </div>
    </footer>
  );
}