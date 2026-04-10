import React from 'react';
import { Activity } from 'lucide-react';

export default function Header() {
  return (
    <div className="h-14 border-b border-[#00FF9D]/10 flex items-center justify-between px-8 bg-[#020202]/80 backdrop-blur-md">
      <div className="flex items-center space-x-8 text-[11px] tracking-widest font-bold">
        <span className="text-[#00FF9D] text-sm flex items-center">
          <Activity size={16} className="mr-2" /> ENGINE v1.0
        </span>

        <div className="items-center space-x-3 hidden sm:flex">
          <span className="text-white/40">CPU:</span>
          <span className="text-[#00FF9D]">14%</span>
          <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div className="h-full w-[14%] bg-[#00FF9D] shadow-[0_0_5px_#00FF9D]" />
          </div>
        </div>

        <div className="items-center space-x-3 hidden sm:flex">
          <span className="text-white/40">RAM:</span>
          <span className="text-[#00E5FF]">2.1GB</span>
          <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
            <div className="h-full w-[35%] bg-[#00E5FF] shadow-[0_0_5px_#00E5FF]" />
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-3 text-[10px] text-[#00FF9D] tracking-widest border border-[#00FF9D]/30 px-3 py-1.5 rounded-lg bg-[#00FF9D]/5 shadow-[0_0_10px_rgba(0,255,157,0.1)]">
        <div className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-pulse" />
        <span>MIDDLEWARE: ACTIVE</span>
      </div>
    </div>
  );
}
