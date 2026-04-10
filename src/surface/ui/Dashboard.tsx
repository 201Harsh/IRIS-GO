import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Terminal,
  Activity,
  Cpu,
  Network,
  Settings,
  ShieldAlert,
  Send,
  Command,
  GitBranch,
  FolderCode,
} from 'lucide-react';
import { GiGearStick } from 'react-icons/gi';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('telemetry');
  const [inputValue, setInputValue] = useState('');
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

  // Simulated Visual Automation Logs
  const [logs, setLogs] = useState([
    {
      time: '00:00:01',
      source: 'SYSTEM',
      text: 'Kernel initialized. WSS tunnel active.',
      color: 'text-[#00FF9D]',
    },
    {
      time: '00:00:02',
      source: 'ORCHESTRATOR',
      text: 'Awaiting mobile payload...',
      color: 'text-white/50',
    },
  ]);

  // Auto-scroll terminal
  useEffect(() => {
    endOfTerminalRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newLog = {
      time: new Date().toLocaleTimeString('en-US', { hour12: false }),
      source: 'USER',
      text: inputValue,
      color: 'text-white',
    };

    setLogs((prev) => [...prev, newLog]);
    setInputValue('');

    // Simulate Orchestrator delegating to Executor
    setTimeout(() => {
      setLogs((prev) => [
        ...prev,
        {
          time: new Date().toLocaleTimeString('en-US', { hour12: false }),
          source: 'EXECUTOR',
          text: `Executing local tool: [fs.readFile] on workspace...`,
          color: 'text-[#00E5FF]',
        },
      ]);
    }, 600);
  };

  return (
    <div className="flex h-screen w-screen bg-[#020202] text-white font-mono overflow-hidden selection:bg-[#00FF9D] selection:text-black">
      {/* Background Mesh/Glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#00FF9D 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00FF9D]/[0.03] rounded-full blur-[120px] pointer-events-none" />

      {/* SIDEBAR: Navigation */}
      <div className="w-20 border-r border-[#00FF9D]/10 flex flex-col items-center py-6 bg-[#020202]/80 backdrop-blur-md z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
        <div className="w-12 h-12 border border-[#00FF9D]/30 rounded-xl flex items-center justify-center bg-[#00FF9D]/10 text-[#00FF9D] font-black tracking-tighter mb-8 shadow-[0_0_15px_rgba(0,255,157,0.15)]">
          IG
        </div>

        <div className="flex flex-col space-y-6 w-full items-center">
          {[
            { id: 'telemetry', icon: Terminal, label: 'CONSOLE' },
            { id: 'agents', icon: Network, label: 'SWARM' },
            { id: 'config', icon: GiGearStick, label: 'CONFIG' },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`relative group p-3 rounded-xl transition-all duration-300 ${
                activeTab === item.id
                  ? 'bg-[#00FF9D]/10 text-[#00FF9D] shadow-[inset_2px_0_0_#00FF9D]'
                  : 'text-white/30 hover:text-white hover:bg-white/5'
              }`}
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
        <div className="flex-grow" />
        <button className="text-white/30 hover:text-white p-3 transition-colors">
          <Settings size={22} />
        </button>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col relative z-10">
        {/* HEADER: Telemetry & Status */}
        <div className="h-14 border-b border-[#00FF9D]/10 flex items-center justify-between px-8 bg-[#020202]/80 backdrop-blur-md">
          <div className="flex items-center space-x-8 text-[11px] tracking-widest font-bold">
            <span className="text-[#00FF9D] text-sm flex items-center">
              <Activity size={16} className="mr-2" /> ENGINE v1.0
            </span>

            <div className="flex items-center space-x-3 hidden sm:flex">
              <span className="text-white/40">CPU:</span>
              <span className="text-[#00FF9D]">14%</span>
              <div className="w-16 h-1.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                <div className="h-full w-[14%] bg-[#00FF9D] shadow-[0_0_5px_#00FF9D]" />
              </div>
            </div>

            <div className="flex items-center space-x-3 hidden sm:flex">
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

        {/* WORKSPACE: Visual Automation Console */}
        <div className="flex-1 flex p-6 gap-6 overflow-hidden">
          {/* Left: Live Terminal Feed */}
          <div className="flex-1 border border-[#00FF9D]/10 bg-[#050505] rounded-2xl flex flex-col overflow-hidden shadow-2xl relative">
            <div className="h-10 border-b border-[#00FF9D]/10 bg-white/[0.02] flex items-center px-4 justify-between">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50 border border-red-500/20" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50 border border-yellow-500/20" />
                <div className="w-3 h-3 rounded-full bg-green-500/50 border border-green-500/20" />
              </div>
              <span className="text-[10px] font-bold text-white/30 tracking-widest">
                LOCAL EXECUTION LOG
              </span>
            </div>

            <div className="flex-1 p-6 overflow-y-auto custom-scrollbar font-mono text-xs leading-relaxed space-y-3">
              <AnimatePresence>
                {logs.map((log, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="flex items-start space-x-4"
                  >
                    <span className="text-white/20 shrink-0">{log.time}</span>
                    <span className={`w-24 shrink-0 font-bold ${log.color}`}>[{log.source}]</span>
                    <span className="text-white/80 whitespace-pre-wrap">{log.text}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
              <div ref={endOfTerminalRef} />
            </div>

            {/* Command Input Tray */}
            <div className="p-4 border-t border-[#00FF9D]/10 bg-white/[0.01]">
              <form
                onSubmit={handleCommand}
                className="flex items-center bg-[#020202] border border-white/10 rounded-xl focus-within:border-[#00FF9D]/50 focus-within:shadow-[0_0_15px_rgba(0,255,157,0.1)] transition-all px-2"
              >
                <Command size={16} className="text-[#00FF9D]/50 ml-3" />
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Inject payload..."
                  className="flex-1 bg-transparent text-white placeholder-white/20 outline-none py-3 px-4 text-sm font-mono"
                />
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 mr-1 text-[#00FF9D] disabled:text-white/10 hover:bg-[#00FF9D]/10 rounded-lg transition-colors"
                >
                  <Send size={16} />
                </button>
              </form>
            </div>
          </div>

          {/* Right: Active Tools / Context */}
          <div className="w-80 flex flex-col space-y-6">
            {/* Context Card */}
            <div className="p-5 border border-[#00FF9D]/10 bg-[#050505] rounded-2xl">
              <h3 className="text-[10px] text-white/50 font-bold tracking-widest mb-4 flex items-center border-b border-white/5 pb-2">
                <Cpu size={14} className="mr-2 text-[#00FF9D]" /> ORCHESTRATOR STATUS
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/60">Current Goal</span>
                  <span className="text-[10px] text-[#00FF9D] bg-[#00FF9D]/10 px-2 py-1 rounded">
                    IDLE
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-white/60">Sub-Agents</span>
                  <span className="text-xs font-bold text-white">3 Deployed</span>
                </div>
              </div>
            </div>

            {/* Allowed Capabilities */}
            <div className="flex-1 p-5 border border-white/5 bg-[#050505] rounded-2xl">
              <h3 className="text-[10px] text-white/50 font-bold tracking-widest mb-4 flex items-center border-b border-white/5 pb-2">
                <ShieldAlert size={14} className="mr-2 text-[#00E5FF]" /> AUTHORIZED TOOLS
              </h3>
              <div className="space-y-3">
                {[
                  { name: 'Local Terminal', icon: Terminal, active: true },
                  { name: 'File System R/W', icon: FolderCode, active: true },
                  { name: 'Git Operations', icon: GitBranch, active: true },
                ].map((tool, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-3 rounded-xl border border-white/5 bg-[#020202]"
                  >
                    <div className="flex items-center space-x-3">
                      <tool.icon
                        size={16}
                        className={tool.active ? 'text-[#00FF9D]' : 'text-white/20'}
                      />
                      <span className="text-xs font-medium text-white/80">{tool.name}</span>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
