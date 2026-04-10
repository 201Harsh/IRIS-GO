import React from 'react';
import { Activity } from 'lucide-react';

export default function Header() {
  return (
    <div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-[#020202] z-20 relative">
      <div className="flex items-center space-x-2 font-semibold">
        <Activity size={18} className="text-[#00FF9D]" />
        <span className="tracking-wide text-white">
          IRIS <span className="text-white/40">GO</span>
        </span>
      </div>

      <div className="flex items-center space-x-2 text-xs font-medium">
        <div className="w-2 h-2 bg-[#00FF9D] rounded-full animate-pulse shadow-[0_0_8px_#00FF9D]" />
        <span className="text-white/50 tracking-wider uppercase">System Online</span>
      </div>
    </div>
  );
}
