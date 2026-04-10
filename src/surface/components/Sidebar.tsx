import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Network, Settings } from 'lucide-react';
import { GiGearStick } from 'react-icons/gi';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'console', icon: Terminal, label: 'CONSOLE' },
    { id: 'gateways', icon: Network, label: 'GATEWAYS' },
    { id: 'config', icon: GiGearStick, label: 'CONFIG' },
  ];

  return (
    <div className="w-20 border-r border-[#00FF9D]/10 flex flex-col items-center py-6 bg-[#020202]/80 backdrop-blur-md z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
      <div className="w-12 h-12 border border-[#00FF9D]/30 rounded-xl flex items-center justify-center bg-[#00FF9D]/10 text-[#00FF9D] font-black tracking-tighter mb-8 shadow-[0_0_15px_rgba(0,255,157,0.15)]">
        IG
      </div>

      <div className="flex flex-col space-y-6 w-full items-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`relative group p-3 rounded-xl transition-all duration-300 ${
              activeTab === item.id
                ? 'bg-[#00FF9D]/10 text-[#00FF9D] shadow-[inset_2px_0_0_#00FF9D]'
                : 'text-white/30 hover:text-white hover:bg-white/5'
            }`}
            title={item.label}
          >
            <item.icon size={22} />
            {activeTab === item.id && (
              <motion.div
                layoutId="sidebarDot"
                className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#00FF9D] rounded-r-md shadow-[0_0_10px_#00FF9D]"
              />
            )}
          </button>
        ))}
      </div>
      <div className="grow" />
      <button className="text-white/30 hover:text-white p-3 transition-colors">
        <Settings size={22} />
      </button>
    </div>
  );
}
