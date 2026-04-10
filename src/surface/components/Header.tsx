import React from 'react';
import { ChevronDown, Activity, ShieldCheck } from 'lucide-react';

export default function Header() {
  return (
    <div className="h-16 border-b border-[#00FF9D]/10 flex items-center justify-between px-6 bg-[#020202]/80 backdrop-blur-xl z-20 sticky top-0 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Left: Model / Context Selector */}
      <button className="flex items-center space-x-3 bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 hover:border-white/10 px-4 py-2 rounded-xl transition-all cursor-pointer group">
        <div className="flex items-center">
          <span className="text-white font-bold tracking-wider text-sm">IRIS</span>
          <span className="text-[#00FF9D] font-mono text-[9px] font-bold tracking-widest ml-2 bg-[#00FF9D]/10 px-1.5 py-0.5 rounded border border-[#00FF9D]/20 uppercase">
            v1.0 Local
          </span>
        </div>
        <ChevronDown size={14} className="text-white/30 group-hover:text-white transition-colors" />
      </button>

      {/* Right: Telemetry & Status */}
      <div className="flex items-center space-x-4">
        {/* State Indicator (Hidden on small mobile) */}
        <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono font-medium text-white/40 bg-white/[0.02] px-2.5 py-1.5 rounded-lg border border-white/5">
          <Activity size={12} className="text-[#00E5FF]" />
          <span>SYSTEM IDLE</span>
        </div>

        {/* Professional Status Pill with Ping Animation */}
        <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase border border-[#00FF9D]/20 bg-[#00FF9D]/10 px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(0,255,157,0.1)] cursor-default">
          {/* Live Pulsing Dot */}
          <div className="relative flex h-2 w-2 mr-1">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF9D]"></span>
          </div>

          <span className="text-[#00FF9D] flex items-center shadow-sm">
            <ShieldCheck size={12} className="mr-1.5 opacity-80" />
            Kernel Synced
          </span>
        </div>
      </div>
    </div>
  );
}
