import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Cpu, ShieldAlert, Send, Command, GitBranch, FolderCode } from 'lucide-react';

export default function TerminalConsole() {
  const [inputValue, setInputValue] = useState('');
  const endOfTerminalRef = useRef<HTMLDivElement>(null);

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
    <div className="flex-1 flex p-6 gap-6 overflow-hidden">
      {/* Left: Terminal */}
      <div className="flex-1 border border-[#00FF9D]/10 bg-[#050505] rounded-2xl flex flex-col overflow-hidden shadow-2xl relative">
        <div className="h-10 border-b border-[#00FF9D]/10 bg-white/2 flex items-center px-4 justify-between">
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

        <div className="p-4 border-t border-[#00FF9D]/10 bg-white/1]">
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

      {/* Right: Context Panels */}
      <div className="w-80 flex flex-col space-y-6">
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
  );
}
