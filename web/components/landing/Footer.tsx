"use client";

import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-black overflow-hidden flex flex-col items-center">
      <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-20 mb-12">
        <div className="flex items-center gap-2 text-white/50 text-sm font-mono">
          {/* <Zap className="w-4 h-4" /> */}
          <span>Lazyman - Control your PC from your phone</span>
        </div>

        <div className="flex text-white/50 text-sm font-mono items-center">
          <p>built with ❤️ by</p>
          <a
            href="https://www.x.com/druxvh"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-1.5 flex hover:text-white transition-colors hover:underline italic font-bold"
          >
            <span>drx</span>
            <ArrowRight className="w-3 h-3 ml-0.5 -mt-0.5 -rotate-45" />
          </a>
        </div>
      </div>

      <div className="w-full flex justify-center select-none pointer-events-none ">
        <span className="text-[20vw] font-[1000] leading-[0.8] tracking-[-0.07em] uppercase opacity-20 bg-linear-to-b from-white to-transparent bg-clip-text text-transparent transition-all duration-700 hover:opacity-30">
          LAZYMAN
        </span>
      </div>
    </footer>
  );
}
