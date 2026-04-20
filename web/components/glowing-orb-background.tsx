"use client";

export default function GlowingOrbBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-100 bg-emerald-500/25 blur-[120px] rounded-full opacity-50" />
      <div className="absolute bottom-0 right-0 w-125 h-125 bg-blue-500/10 blur-[150px] rounded-full opacity-30" />
    </div>
  );
}
