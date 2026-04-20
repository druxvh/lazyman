"use client";

import { Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="mt-32 text-center bg-emerald-950/20 border border-emerald-500/20 rounded-[3rem] p-12 md:p-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)]" />
      <div className="relative z-10 flex flex-col items-center space-y-6">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Ready to drop the mouse?
        </h2>
        <p className="text-white/60 text-lg max-w-md">
          Download the package and turn your phone into the ultimate remote.
        </p>
        <a
          href="/lazyman.zip"
          download
          className="mt-4 group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-black bg-emerald-400 rounded-full overflow-hidden transition-all"
        >
          <div
            className="absolute inset-0 w-full h-full
          bg-linear-to-r from-emerald-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          />
          <Download className="w-5 h-5 relative z-10" />
          <span className="relative z-10">Get Lazyman Now</span>
        </a>
      </div>
    </section>
  );
}
