// import React from "react";
import {
  Download,
  Terminal,
  Smartphone,
  Zap,
  Wifi,
  Mouse,
  Keyboard,
  ArrowRight,
  Star,
  // Github,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/30 font-sans overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Subtle grid pattern */}
        {/* <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:32px_32px]" /> */}
        {/* Glowing Orbs */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-emerald-500/25 blur-[120px] rounded-full opacity-50" />
        <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/10 blur-[150px] rounded-full opacity-30" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
            <Zap className="w-5 h-5 text-black" fill="currentColor" />
          </div>
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

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-20 pb-32">
        {/* Hero Section */}
        <section className="flex flex-col items-center text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            v1.0.0 is now live
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tighter max-w-4xl leading-tight">
            Control your PC. <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-emerald-400 to-cyan-400">
              From your pocket.
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-medium">
            Turn your smartphone into a zero-latency wireless peripheral. Full
            mouse control, scrolling, and native keyboard typing over your local
            network.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <a
              href="/lazyman.zip"
              download
              className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold text-black bg-white rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
            >
              <div className="absolute inset-0 w-full h-full bg-linear-to-r from-emerald-200 to-cyan-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Download Lazyman (.zip)</span>
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

        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-32" />

        {/* How It Works Section */}
        <section id="how-it-works" className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Zero configuration. Pure magic.
            </h2>
            <p className="text-white/60 max-w-xl mx-auto">
              Get up and running in less than 60 seconds. No accounts, no cloud
              sync, no weird IP typing.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Download className="w-6 h-6 text-emerald-400" />,
                step: "01",
                title: "Download & Extract",
                desc: "Grab the ZIP file using the button above and extract it anywhere on your computer.",
              },
              {
                icon: <Terminal className="w-6 h-6 text-cyan-400" />,
                step: "02",
                title: "Run the Server",
                desc: "Double click start.bat (Windows) or start.sh (Mac/Linux). Your firewall may ask for permission.",
              },
              {
                icon: <Smartphone className="w-6 h-6 text-purple-400" />,
                step: "03",
                title: "Scan & Control",
                desc: "A QR code will appear in your terminal. Scan it with your phone's camera to connect instantly.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-white/20 transition-colors group overflow-hidden"
              >
                <div className="absolute top-0 right-0 -mt-4 -mr-4 text-9xl font-black text-white/5 group-hover:text-white/10 transition-colors pointer-events-none select-none">
                  {item.step}
                </div>
                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent my-32" />

        {/* Features Section */}
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
            <div className="p-8 rounded-3xl bg-linear-to-br from-white/5 to-transparent border border-white/10 flex flex-col justify-center">
              <Zap className="w-8 h-8 text-yellow-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Warp-Speed Movement</h3>
              <p className="text-white/60">
                Bypasses traditional tweening animations by utilizing direct
                coordinate warping via WebSockets, resulting in jitter-free,{" "}
                <span className="text-white">sub-50ms latency</span>.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-linear-to-bl from-white/5 to-transparent border border-white/10 flex flex-col justify-center">
              <Keyboard className="w-8 h-8 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">Native Mobile Typing</h3>
              <p className="text-white/60">
                Type using your phone&apos;s native keyboard with auto-correct
                and predictive text. Hit enter, and the entire string is{" "}
                <span className="text-white">burst-transmitted</span> to your PC
                instantly.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center">
              <Wifi className="w-8 h-8 text-emerald-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">100% Local Network</h3>
              <p className="text-white/60">
                No cloud servers, no account logins, and no data tracking.
                Everything happens entirely on your secure home Wi-Fi network.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white/5 border border-white/10 flex flex-col justify-center">
              <Mouse className="w-8 h-8 text-rose-400 mb-6" />
              <h3 className="text-2xl font-bold mb-3">
                Hardware-Level Control
              </h3>
              <p className="text-white/60">
                Powered by Nut.js, Lazyman interacts directly with your
                operating system&apos;s hardware interrupts. It works on{" "}
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
              className="mt-4 group relative inline-flex items-center justify-center gap-2 px-8 py-4 font-bold text-black bg-emerald-400 rounded-full overflow-hidden hover:scale-105 active:scale-95 transition-all"
            >
              <div className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <Download className="w-5 h-5 relative z-10" />
              <span className="relative z-10">Get Lazyman Now</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 bg-black pt-16 overflow-hidden flex flex-col items-center">
        <div className="w-full max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 relative z-20 mb-12">
          <div className="flex items-center gap-2 text-white/50 text-sm font-mono">
            <Zap className="w-4 h-4" />
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
          <span
            className="text-[20vw] font-[1000] leading-[0.8] tracking-[-0.07em] uppercase opacity-20
                 bg-linear-to-b from-white to-transparent bg-clip-text text-transparent
                 transition-all duration-700 hover:opacity-30"
          >
            LAZYMAN
          </span>
        </div>
      </footer>
    </div>
  );
}
