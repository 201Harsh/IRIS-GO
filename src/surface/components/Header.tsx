import { Activity, ShieldCheck, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  return (
    <div className="h-16 border-b border-[#00FF9D]/10 flex items-center justify-between px-4 md:px-6 bg-[#020202]/80 backdrop-blur-xl z-20 sticky top-0 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex items-center space-x-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 -ml-2 text-white/50 hover:text-white transition-colors cursor-pointer"
        >
          <Menu size={22} />
        </button>

        <div className="flex items-center">
          <span className="text-white font-bold tracking-wider text-sm">IRIS</span>
          <span className="text-[#00FF9D] font-mono text-[9px] font-bold tracking-widest ml-2 bg-[#00FF9D]/10 px-1.5 py-0.5 rounded border border-[#00FF9D]/20 uppercase">
            v1.0 Local
          </span>
        </div>
      </div>

      {/* Right: Telemetry & Status */}
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2 text-[10px] font-mono font-medium text-white/40 bg-white/2 px-2.5 py-1.5 rounded-lg border border-white/5">
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
