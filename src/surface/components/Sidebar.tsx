import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Network, Settings, PanelLeftClose, X } from 'lucide-react';
import { GiGearStick } from 'react-icons/gi';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (open: boolean) => void;
}

export default function Sidebar({
  activeTab,
  setActiveTab,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SidebarProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const navItems = [
    { id: 'console', icon: MessageSquare, label: 'Chat' },
    { id: 'gateways', icon: Network, label: 'Apps' },
    { id: 'config', icon: GiGearStick, label: 'Config' },
  ];

  const handleNavClick = (id: string) => {
    setActiveTab(id);
    if (isMobileMenuOpen) setIsMobileMenuOpen(false);
  };

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <div
        className={`
          fixed md:relative top-0 left-0 h-full z-50
          transition-all duration-300 ease-in-out
          ${isExpanded ? 'md:w-64' : 'md:w-20'}
          ${isMobileMenuOpen ? 'translate-x-0 w-64' : '-translate-x-full md:translate-x-0'}
          border-r border-white/5 flex flex-col items-start py-6 bg-[#020202]/95 backdrop-blur-xl shadow-2xl md:shadow-none
        `}
      >
        <div className="w-full flex items-center justify-between px-5 mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center space-x-3 cursor-pointer outline-none md:pointer-events-auto pointer-events-none"
          >
            <div className="w-10 h-10 border border-[#00FF9D]/30 rounded-xl flex items-center justify-center bg-[#00FF9D]/10 text-[#00FF9D] font-black shadow-[0_0_15px_rgba(0,255,157,0.1)] shrink-0">
              IG
            </div>

            <AnimatePresence>
              {(isExpanded || isMobileMenuOpen) && (
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

          {isExpanded && !isMobileMenuOpen && (
            <button
              onClick={() => setIsExpanded(false)}
              className="hidden md:block text-white/30 hover:text-white transition-colors"
            >
              <PanelLeftClose size={18} />
            </button>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="md:hidden text-white/50 hover:text-white p-2"
          >
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col space-y-2 w-full items-start px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`cursor-pointer relative group px-4 py-3 w-full flex items-center rounded-xl transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-[#00FF9D]/10 text-[#00FF9D]'
                  : 'text-white/40 hover:text-white hover:bg-white/5'
              }`}
              title={!isExpanded && !isMobileMenuOpen ? item.label : ''}
            >
              <item.icon size={22} className="shrink-0" />

              <AnimatePresence>
                {(isExpanded || isMobileMenuOpen) && (
                  <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    className="ml-4 text-sm font-medium tracking-wide whitespace-nowrap overflow-hidden"
                  >
                    {item.label}
                  </motion.span>
                )}
              </AnimatePresence>

              {activeTab === item.id && (
                <motion.div
                  layoutId="sidebarIndicator"
                  className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-[#00FF9D] rounded-r-md shadow-[0_0_10px_#00FF9D]"
                />
              )}
            </button>
          ))}
        </div>

        <div className="flex grow" />

        <div className="flex w-full px-3">
          <button
            className={`flex items-center text-white/40 hover:text-white px-4 py-3 w-full rounded-xl hover:bg-white/5 transition-colors ${isExpanded || isMobileMenuOpen ? 'justify-start' : 'justify-center'}`}
          >
            <Settings size={22} className="shrink-0" />
            <AnimatePresence>
              {(isExpanded || isMobileMenuOpen) && (
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
    </>
  );
}
