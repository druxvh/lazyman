"use client";

import { Apple, Monitor, Smartphone } from "lucide-react";
import { CodeBlock } from "../code-block";

export default function Setup() {
  return (
    <section id="how-it-works" className="space-y-16 py-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
          Setup <span className="text-emerald-400 italic">in minutes</span>
        </h2>
        <p className="text-white/50 max-w-lg mx-auto">
          No technical background required. Just follow these three easy steps.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
        {/* Step 1 */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-sm">
                1
              </span>
              <h3 className="text-xl font-bold">Install the Engine</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              To run Lazyman, your PC needs{" "}
              <span className="text-white">Node.js</span>. Search for{" "}
              <strong>PowerShell</strong> (Windows) or <strong>Terminal</strong>{" "}
              (Mac) in your search bar, open it, and copy/paste one of these:
            </p>
          </div>
          <div className="md:col-span-3 space-y-4">
            <CodeBlock
              label="Windows (PowerShell)"
              command="winget install OpenJS.NodeJS"
            />
            <CodeBlock
              label="Mac / Linux (Terminal)"
              command="curl -fsSL https://fnm.vercel.app/install | bash && fnm install --lts"
            />
          </div>
        </div>

        <div className="h-px bg-white/5 w-full" />

        {/* Step 2 */}
        <div className="grid md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-sm">
                2
              </span>
              <h3 className="text-xl font-bold">Start Server</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              Extract{" "}
              <code className="text-white bg-white/10 px-1 rounded">
                lazyman.zip
              </code>
              . Find your system type below and run the file inside the folder.
            </p>
          </div>
          <div className="md:col-span-3 flex flex-col gap-4">
            <div className="p-6 rounded-md bg-white/3 border border-white/10 flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                <Monitor className="w-6 h-6 text-emerald-400" />
              </div>
              <div>
                <p className="text-white font-bold">Windows Users</p>
                <p className="text-xs text-white/40 mt-1 uppercase tracking-widest font-mono">
                  Double click:{" "}
                  <span className="text-emerald-400">start.bat</span>
                </p>
              </div>
            </div>
            <div className="p-6 rounded-md bg-white/3 border border-white/10 space-y-4">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 flex items-center justify-center">
                  <Apple className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-white font-bold">Mac / Linux Users</p>
                  <p className="text-xs text-white/40 mt-1 italic tracking-widest">
                    Run once in terminal to allow the app:
                  </p>
                </div>
              </div>
              <CodeBlock
                label="Copy into Terminal"
                command="chmod +x start.sh && ./start.sh"
              />
            </div>
          </div>
        </div>

        <div className="h-px bg-white/5 w-full" />

        {/* Step 3 */}
        <div className="grid md:grid-cols-5 gap-8 items-start pb-10">
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center font-bold text-sm">
                3
              </span>
              <h3 className="text-xl font-bold">Connect Phone</h3>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              A QR Code will appear in the black window. Scan it with your phone
              camera or scanner. Make sure both are on the same Wi-Fi!
            </p>
          </div>
          <div className="md:col-span-3 bg-linear-to-br from-emerald-500/10 to-transparent border border-emerald-500/20 p-8 rounded-md flex items-center gap-6">
            <Smartphone className="w-10 h-10 text-emerald-400 shrink-0" />
            <p className="text-sm text-white/70 italic leading-relaxed">
              The control interface will open instantly on your mobile browser.
              You&apos;re ready to go!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
