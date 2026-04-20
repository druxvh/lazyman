"use client";

import { Keyboard, Mouse, Wifi, Zap } from "lucide-react";

export default function Features() {
  return (
    <section className="space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Built for power users.
        </h2>
        <p className="text-white/60 max-w-xl mx-auto">
          Engineered from the ground up for low latency and high precision.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-8 rounded-xl bg-linear-to-br from-white/5 to-transparent border border-white/10 flex flex-col justify-center">
          <Zap className="w-8 h-8 text-yellow-400 mb-6" />
          <h3 className="text-2xl font-bold mb-3">Warp-Speed Movement</h3>
          <p className="text-white/60">
            Bypasses traditional tweening animations by utilizing direct
            coordinate warping via WebSockets, resulting in jitter-free,{" "}
            <span className="text-white">sub-50ms latency</span>.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-linear-to-bl from-white/5 to-transparent border border-white/10 flex flex-col justify-center">
          <Keyboard className="w-8 h-8 text-blue-400 mb-6" />
          <h3 className="text-2xl font-bold mb-3">Native Mobile Typing</h3>
          <p className="text-white/60">
            Type using your phone&apos;s native keyboard with auto-correct and
            predictive text. Hit enter, and the entire string is{" "}
            <span className="text-white">burst-transmitted</span> to your PC
            instantly.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center">
          <Wifi className="w-8 h-8 text-emerald-400 mb-6" />
          <h3 className="text-2xl font-bold mb-3">100% Local Network</h3>
          <p className="text-white/60">
            No cloud servers, no account logins, and no data tracking.
            Everything happens entirely on your secure home Wi-Fi network.
          </p>
        </div>

        <div className="p-8 rounded-xl bg-white/5 border border-white/10 flex flex-col justify-center">
          <Mouse className="w-8 h-8 text-rose-400 mb-6" />
          <h3 className="text-2xl font-bold mb-3">Hardware-Level Control</h3>
          <p className="text-white/60">
            Powered by Nut.js, Lazyman interacts directly with your operating
            system&apos;s hardware interrupts. It works on{" "}
            <span className="text-white font-mono text-sm border-b border-white/30">
              Windows
            </span>
            ,{" "}
            <span className="text-white font-mono text-sm border-b border-white/30">
              macOS
            </span>
            , and{" "}
            <span className="text-white font-mono text-sm border-b border-white/30">
              Linux
            </span>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
