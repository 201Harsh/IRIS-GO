export default function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen bg-[#020202] text-[#00FF9D] font-mono relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF9D]/[0.03] rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center space-y-6 z-10">
        <div className="inline-flex items-center space-x-2 border border-[#00FF9D]/30 px-3 py-1 rounded bg-[#00FF9D]/5 mb-2">
          <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse shadow-[0_0_8px_#00FF9D]"></div>
          <span className="text-[#00FF9D] text-[10px] tracking-widest font-bold">
            SYSTEM LINK ESTABLISHED
          </span>
        </div>

        <h1 className="text-5xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
          SURFACE UI <span className="text-[#00FF9D]">ONLINE</span>
        </h1>

        <p className="text-white/40 tracking-widest text-xs uppercase max-w-md mx-auto leading-relaxed">
          The headless engine is listening on port 3042. Vite middleware is
          active.
        </p>
      </div>
    </div>
  );
}
