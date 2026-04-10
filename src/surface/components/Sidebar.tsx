import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Network, Settings, PanelLeftClose } from 'lucide-react';
import { GiGearStick } from 'react-icons/gi';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Sidebar({ activeTab, setActiveTab }: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const navItems = [
    { id: 'console', icon: MessageSquare, label: 'Chat' },
    { id: 'gateways', icon: Network, label: 'Apps' },
    { id: 'config', icon: GiGearStick, label: 'Config' },
  ];

  return (
    <div
      className={`transition-all duration-300 ease-in-out ${
        isExpanded ? 'md:w-64' : 'md:w-20'
      } w-full md:h-full h-16 border-t md:border-t-0 md:border-r border-white/5 flex md:flex-col flex-row items-center md:items-start justify-around md:justify-start md:py-6 bg-[#020202]/90 backdrop-blur-xl z-30 absolute md:relative bottom-4 md:bottom-0`}
    >
      <div className="hidden md:flex w-full items-center justify-between px-5 mb-8">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center space-x-3 cursor-pointer outline-none"
        >
          <div className="w-10 h-10 border border-[#00FF9D]/30 rounded-xl flex items-center justify-center bg-[#00FF9D]/10 text-[#00FF9D] font-black shadow-[0_0_15px_rgba(0,255,157,0.1)] shrink-0">
            IG
          </div>
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 'auto' }}
                exit={{ opacity: 0, width: 0 }}
                className="text-white font-bold tracking-widest whitespace-nowrap overflow-hidden"
              >
                IRIS GO
              </motion.span>
            )}
          </AnimatePresence>
        </button>

        {isExpanded && (
          <button
            onClick={() => setIsExpanded(false)}
            className="text-white/30 hover:text-white transition-colors"
          >
            <PanelLeftClose size={18} />
          </button>
        )}
      </div>

      <div className="flex md:flex-col flex-row space-x-6 md:space-x-0 md:space-y-2 w-full items-center md:items-start md:px-3">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`cursor-pointer relative group p-3 md:px-4 md:py-3 md:w-full flex items-center rounded-xl transition-all duration-300 ${
              activeTab === item.id
                ? 'bg-[#00FF9D]/10 text-[#00FF9D]'
                : 'text-white/40 hover:text-white hover:bg-white/5'
            }`}
            title={!isExpanded ? item.label : ''}
          >
            <item.icon size={22} className="shrink-0" />

            <AnimatePresence>
              {isExpanded && (
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="hidden md:block ml-4 text-sm font-medium tracking-wide whitespace-nowrap overflow-hidden"
                >
                  {item.label}
                </motion.span>
              )}
            </AnimatePresence>

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
      <div className="hidden md:flex w-full px-3">
        <button
          className={`flex items-center text-white/40 hover:text-white p-3 md:px-4 md:py-3 md:w-full rounded-xl hover:bg-white/5 transition-colors ${isExpanded ? 'justify-start' : 'justify-center'}`}
        >
          <Settings size={22} className="shrink-0" />
          <AnimatePresence>
            {isExpanded && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="ml-4 text-sm font-medium tracking-wide whitespace-nowrap overflow-hidden"
              >
                Settings
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
    </div>
  );
}
