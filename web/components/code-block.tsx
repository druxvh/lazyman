"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CodeBlock({
  command,
  label,
}: {
  command: string;
  label: string;
}) {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedText(text);
      setTimeout(() => setCopiedText(null), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="group relative flex flex-col gap-2 w-full">
      <div className="flex justify-between items-center px-1">
        <span className="text-[10px] font-bold uppercase tracking-widest text-white/30">
          {label}
        </span>
      </div>
      <div className="relative flex items-center bg-black/50 border border-white/10 rounded-md p-4 font-mono text-xs md:text-sm overflow-hidden group-hover:border-emerald-500/30 transition-colors">
        <code className="text-emerald-400 pr-10">{command}</code>
        <button
          onClick={() => copyToClipboard(command)}
          className="absolute right-3 p-2 rounded-md bg-white/5 hover:bg-white/10 transition-colors text-white/90 hover:text-white cursor-pointer"
        >
          {copiedText === command ? (
            <Check className="size-4 text-emerald-400" />
          ) : (
            <Copy className="size-4 stroke-[0.85px]" />
          )}
        </button>
      </div>
    </div>
  );
}
