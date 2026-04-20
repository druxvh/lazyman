"use client";

import { Download } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        lazyman v1.0 is now live
      </div>

      <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-4xl leading-tight">
        Control your PC. <br className="hidden md:block" />
        <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
          From your pocket.
        </span>
      </h1>

      <p className="text-lg md:text-xl text-white/60 max-w-2xl font-medium">
        Turn your smartphone into a zero-latency wireless device. Full mouse
        control, scrolling, and native keyboard typing over your local network.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
        <a
          href="/lazyman.zip"
          download
          className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-black bg-emerald-400 rounded-full overflow-hidden transition-transform "
        >
          <div className="absolute inset-0 w-full h-full bg-linear-to-r from-emerald-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <Download className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Download Lazyman</span>
        </a>

        <a
          href="#how-it-works"
          className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
        >
          How it works
        </a>
      </div>

      <p className="text-xs text-white/40 font-mono mt-4">
        Requires Bun or Node.js • Windows, macOS, Linux
      </p>
    </section>
  );
}
