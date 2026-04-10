import React from 'react';
import { ChevronDown, Zap } from 'lucide-react';

export default function Header() {
  return (
    <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-[#020202]/80 backdrop-blur-md z-20 sticky top-0">
      {/* Model / Context Selector */}
      <button className="flex items-center space-x-2 hover:bg-white/5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer group">
        <span className="text-white font-semibold tracking-wide text-lg">
          IRIS <span className="text-white/50 font-normal">v1.0</span>
        </span>
        <ChevronDown size={16} className="text-white/40 group-hover:text-white transition-colors" />
      </button>

      {/* Professional Status Pill */}
      <div className="flex items-center space-x-2 text-[11px] font-medium tracking-wider uppercase border border-[#00FF9D]/20 bg-[#00FF9D]/5 px-3 py-1.5 rounded-full shadow-[0_0_15px_rgba(0,255,157,0.05)]">
        <Zap size={12} className="text-[#00FF9D]" />
        <span className="text-[#00FF9D]">Kernel Attached</span>
      </div>
    </div>
  );
}
