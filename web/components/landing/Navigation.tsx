"use client";

import { Star } from "lucide-react";

export default function Navigation() {
  return (
    <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
      <div className="flex items-center gap-2">
        <span className="font-bold text-xl tracking-tight">Lazyman</span>
      </div>
      <a
        href="https://github.com/druxvh/lazyman"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white/60 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
      >
        <Star className="w-4 h-4 text-yellow-300" />
        <span>Star on GitHub</span>
      </a>
    </nav>
  );
}
