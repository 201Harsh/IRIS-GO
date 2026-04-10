import React from 'react';
import { Activity, ShieldCheck, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="h-16 border-b border-[#00FF9D]/10 flex items-center justify-between px-4 md:px-6 bg-[#020202]/80 backdrop-blur-xl z-20 sticky top-0 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      {/* Left: Hamburger Menu (Mobile) + Bold Logo */}
      <div className="flex items-center space-x-3">
        {/* Mobile Hamburger Button */}
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <Menu size={22} />
        </button>

        {/* Premium Bold Text Logo */}
        <div className="flex items-center bg-white/[0.02] border border-white/5 px-3 md:px-4 py-1.5 rounded-xl cursor-default select-none">
          <span className="text-white font-black tracking-widest text-lg drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
            IRIS{' '}
            <span className="text-[#00FF9D] drop-shadow-[0_0_12px_rgba(0,255,157,0.4)]">GO</span>
          </span>
        </div>
      </div>

      {/* Right: Telemetry & Status */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono font-medium text-white/40 bg-white/[0.02] px-2.5 py-1.5 rounded-lg border border-white/5">
          <Activity size={12} className="text-[#00E5FF]" />
          <span>SYSTEM IDLE</span>
        </div>

        <div className="flex items-center space-x-2 text-[10px] font-bold tracking-widest uppercase border border-[#00FF9D]/20 bg-[#00FF9D]/10 px-3 py-1.5 rounded-lg shadow-[0_0_15px_rgba(0,255,157,0.1)] cursor-default">
          <div className="relative flex h-2 w-2 mr-1 md:mr-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF9D] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#00FF9D]"></span>
          </div>
          <span className="text-[#00FF9D] hidden md:flex items-center shadow-sm">
            <ShieldCheck size={12} className="mr-1.5 opacity-80" />
            Kernel Synced
          </span>
        </div>
      </div>
    </div>
  );
}
