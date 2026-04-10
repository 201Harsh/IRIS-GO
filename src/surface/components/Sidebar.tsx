import { motion } from 'framer-motion';
import { MessageSquare, Network, Settings } from 'lucide-react';
import { GiGearStick } from 'react-icons/gi';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const navItems = [
    { id: 'console', icon: MessageSquare, label: 'Chat' },
    { id: 'gateways', icon: Network, label: 'Apps' },
    { id: 'config', icon: GiGearStick, label: 'Config' },
  ];

  return (
    <div className="md:w-20 w-full md:h-full h-16 border-t md:border-t-0 md:border-r border-white/5 flex md:flex-col flex-row items-center justify-around md:justify-start md:py-6 bg-[#020202]/90 backdrop-blur-xl z-30 absolute md:relative bottom-4">
      <div className="hidden md:flex w-10 h-10 border border-[#00FF9D]/30 rounded-xl items-center justify-center bg-[#00FF9D]/10 text-[#00FF9D] font-black mb-8 shadow-[0_0_15px_rgba(0,255,157,0.1)]">
        IG
      </div>
      <div className="flex md:flex-col flex-row space-x-6 md:space-x-0 md:space-y-6 w-full items-center justify-center">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`cursor-pointer relative group p-3 rounded-xl transition-all duration-300 ${
              activeTab === item.id
                ? 'bg-[#00FF9D]/10 text-[#00FF9D]'
                : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}
            title={item.label}
          >
            <item.icon size={22} />
            {activeTab === item.id && (
              <motion.div
                layoutId="sidebarIndicator"
                className="absolute md:left-0 md:bottom-auto bottom-0 md:top-1/2 md:-translate-y-1/2 left-1/2 -translate-x-1/2 md:translate-x-0 md:w-1 md:h-6 w-6 h-1 bg-[#00FF9D] md:rounded-r-md rounded-t-md shadow-[0_0_10px_#00FF9D]"
              />
            )}
          </button>
        ))}
      </div>

      <div className="hidden md:flex grow" />
      <button className="hidden md:flex text-white/40 hover:text-white p-3 transition-colors">
        <Settings size={22} />
      </button>
    </div>
  );
}
