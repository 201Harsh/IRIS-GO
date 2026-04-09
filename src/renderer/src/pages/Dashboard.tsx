import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bot,
  Plug,
  Activity,
  Settings,
  Terminal,
  FolderGit2,
  Globe,
  Shield,
  Plus,
  Smartphone,
  Github,
  Mail,
  Cpu
} from 'lucide-react'

// --- TYPES ---
type ViewState = 'agents' | 'integrations' | 'telemetry'

interface Agent {
  id: string
  name: string
  status: 'active' | 'idle'
  model: string
  prompt: string
}

export default function Dashboard() {
  const [activeView, setActiveView] = useState<ViewState>('agents')

  const [agents, setAgents] = useState<Agent[]>([
    {
      id: '1',
      name: 'Core Orchestrator',
      status: 'active',
      model: 'Gemini 1.5 Pro',
      prompt:
        'Parse incoming mobile payloads, determine local actions, delegate to sub-agents. Return JSON execution plans.'
    },
    {
      id: '2',
      name: 'Local Executor',
      status: 'idle',
      model: 'Groq Llama 3',
      prompt: 'Execute delegated shell commands and report standard output/errors.'
    }
  ])
  const [selectedAgent, setSelectedAgent] = useState<Agent>(agents[0])

  // --- VIEWS ---

  const renderAgentsView = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex h-full w-full max-w-6xl mx-auto gap-8 pt-10 pb-32"
    >
      {/* Left Column: Agent Selection Grid */}
      <div className="w-1/3 flex flex-col space-y-4">
        <div className="flex justify-between items-center px-2">
          <h2 className="text-sm font-semibold text-white/60">Deployed Agents</h2>
          <button className="text-white/40 hover:text-[#00FF9D] transition-colors">
            <Plus size={18} />
          </button>
        </div>

        {agents.map((agent) => (
          <div
            key={agent.id}
            onClick={() => setSelectedAgent(agent)}
            className={`cursor-pointer p-5 rounded-2xl border transition-all duration-300 ${
              selectedAgent.id === agent.id
                ? 'bg-white/5 border-[#00FF9D]/30 shadow-[0_8px_30px_rgba(0,255,157,0.05)]'
                : 'bg-transparent border-white/5 hover:border-white/15'
            }`}
          >
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div
                  className={`p-2 rounded-lg ${selectedAgent.id === agent.id ? 'bg-[#00FF9D]/10 text-[#00FF9D]' : 'bg-white/5 text-white/50'}`}
                >
                  <Bot size={18} />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">{agent.name}</h3>
                  <p className="text-[11px] text-white/40 uppercase tracking-wider mt-0.5">
                    {agent.model}
                  </p>
                </div>
              </div>
              <div
                className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]' : 'bg-white/20'}`}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Right Column: Configuration Editor */}
      <div className="flex-1 bg-[#0A0A0A] border border-white/5 rounded-3xl p-8 flex flex-col relative overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#00FF9D]/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mb-8 z-10">
          <h2 className="text-2xl font-semibold text-white mb-1">{selectedAgent.name}</h2>
          <p className="text-sm text-white/40">
            Configure system limits, context, and capabilities.
          </p>
        </div>

        <div className="space-y-8 z-10 flex-1 overflow-y-auto pr-2 custom-scrollbar">
          {/* Instructions */}
          <div>
            <label className="text-[11px] font-medium text-white/50 uppercase tracking-widest mb-3 block">
              System Context
            </label>
            <textarea
              className="w-full h-32 bg-[#050505] border border-white/10 rounded-xl p-4 text-sm font-mono text-white/80 focus:border-[#00E5FF]/50 focus:ring-1 focus:ring-[#00E5FF]/50 transition-all outline-none resize-none"
              value={selectedAgent.prompt}
              onChange={(e) => setSelectedAgent({ ...selectedAgent, prompt: e.target.value })}
            />
          </div>

          {/* Capabilities */}
          <div>
            <label className="text-[11px] font-medium text-white/50 uppercase tracking-widest mb-3 block">
              Authorized Tooling
            </label>
            <div className="grid grid-cols-2 gap-3">
              {[
                { id: 'term', name: 'Terminal Access', icon: Terminal, active: true },
                { id: 'fs', name: 'File System (R/W)', icon: FolderGit2, active: true },
                { id: 'net', name: 'Network Requests', icon: Globe, active: false }
              ].map((tool) => (
                <div
                  key={tool.id}
                  className={`flex items-center justify-between p-4 rounded-xl border transition-all ${tool.active ? 'border-[#00E5FF]/30 bg-[#00E5FF]/5' : 'border-white/5 bg-[#050505] opacity-60 hover:opacity-100 cursor-pointer'}`}
                >
                  <div className="flex items-center space-x-3">
                    <tool.icon
                      size={16}
                      className={tool.active ? 'text-[#00E5FF]' : 'text-white/40'}
                    />
                    <span className="text-xs font-medium">{tool.name}</span>
                  </div>
                  <div
                    className={`w-8 h-4 rounded-full relative transition-colors ${tool.active ? 'bg-[#00E5FF]/30' : 'bg-white/10'}`}
                  >
                    <div
                      className={`absolute top-0.5 w-3 h-3 rounded-full transition-transform ${tool.active ? 'bg-[#00E5FF] translate-x-4.5' : 'bg-white/40 translate-x-0.5'}`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security */}
          <div className="p-5 border border-red-500/10 bg-red-500/5 rounded-xl">
            <div className="flex justify-between items-center mb-2">
              <div className="flex items-center space-x-2 text-red-400">
                <Shield size={14} />
                <span className="text-xs font-semibold">Strict Mobile Confirmation</span>
              </div>
              <div className="w-8 h-4 rounded-full bg-red-500/30 relative">
                <div className="absolute top-0.5 w-3 h-3 rounded-full bg-red-500 translate-x-4.5" />
              </div>
            </div>
            <p className="text-[11px] text-white/40 leading-relaxed">
              Commands requiring `sudo` or file deletion will halt execution and ping the mobile
              uplink for authorization.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderIntegrationsView = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col items-center justify-center h-full w-full max-w-4xl mx-auto pt-10 pb-32"
    >
      <div className="w-full mb-8 text-center">
        <h2 className="text-2xl font-semibold text-white mb-2">Access & Gateways</h2>
        <p className="text-sm text-white/40">
          Manage remote control surfaces and local authorizations.
        </p>
      </div>

      <div className="w-full grid grid-cols-2 gap-6">
        {/* Mobile App Link */}
        <div className="col-span-2 p-6 rounded-2xl border border-[#00FF9D]/20 bg-[#00FF9D]/5 flex justify-between items-center">
          <div className="flex items-center space-x-5">
            <div className="p-4 bg-[#00FF9D]/10 text-[#00FF9D] rounded-xl">
              <Smartphone size={24} />
            </div>
            <div>
              <h3 className="text-base font-medium text-white mb-1">IRIS Mobile Uplink</h3>
              <p className="text-xs text-white/50">WSS Tunnel Active • Device: iPhone 15 Pro</p>
            </div>
          </div>
          <span className="text-[10px] font-bold text-[#00FF9D] px-3 py-1.5 border border-[#00FF9D]/30 rounded-lg bg-[#00FF9D]/10">
            CONNECTED
          </span>
        </div>

        {/* Local Integrations */}
        {[
          { name: 'GitHub Local', icon: Github, desc: 'Repository access', status: 'Active' },
          { name: 'Google Workspace', icon: Mail, desc: 'OAuth token required', status: 'Connect' }
        ].map((app, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] hover:border-white/10 transition-colors flex flex-col justify-between h-40"
          >
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-white/5 text-white/70 rounded-xl">
                <app.icon size={20} />
              </div>
              <h3 className="text-sm font-medium">{app.name}</h3>
            </div>
            <div className="flex justify-between items-end">
              <p className="text-xs text-white/40">{app.desc}</p>
              <button
                className={`text-[10px] font-bold px-3 py-1.5 rounded-lg border transition-all ${
                  app.status === 'Active'
                    ? 'border-white/10 text-white/50 bg-white/5'
                    : 'border-[#00E5FF]/30 text-[#00E5FF] hover:bg-[#00E5FF]/10'
                }`}
              >
                {app.status}
              </button>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )

  const renderTelemetryView = () => (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className="flex flex-col h-full w-full max-w-5xl mx-auto pt-10 pb-32"
    >
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[
          { label: 'Uptime', value: '42:14:05', color: 'text-white' },
          { label: 'Active Tasks', value: '0', color: 'text-[#00FF9D]' },
          { label: 'Total Actions', value: '1,204', color: 'text-white' }
        ].map((stat, i) => (
          <div
            key={i}
            className="p-6 rounded-2xl border border-white/5 bg-[#0A0A0A] flex flex-col items-center justify-center"
          >
            <span className="text-[10px] uppercase tracking-widest text-white/40 font-medium mb-2">
              {stat.label}
            </span>
            <span className={`text-3xl font-light font-mono ${stat.color}`}>{stat.value}</span>
          </div>
        ))}
      </div>

      <div className="flex-1 rounded-2xl border border-white/5 bg-[#0A0A0A] flex flex-col overflow-hidden relative">
        <div className="px-6 py-4 border-b border-white/5 flex justify-between items-center bg-[#050505]">
          <span className="text-xs font-medium text-white/50 flex items-center">
            <Activity size={14} className="mr-2" /> Headless Execution Log
          </span>
          <div className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse" />
        </div>
        <div className="flex-1 p-6 font-mono text-sm overflow-y-auto space-y-3 opacity-80 text-white/60">
          <div>
            <span className="text-white/30">12:45:00</span>{' '}
            <span className="text-[#00E5FF]">[SYSTEM]</span> WSS tunnel established.
          </div>
          <div>
            <span className="text-white/30">12:45:02</span>{' '}
            <span className="text-[#00FF9D]">[MOBILE]</span> Payload: "Sync git repo"
          </div>
          <div>
            <span className="text-white/30">12:45:03</span>{' '}
            <span className="text-white">[GitManager]</span> Executing: git status
          </div>
          <div>
            <span className="text-white/30">12:45:05</span>{' '}
            <span className="text-white">[GitManager]</span> Executing: git pull origin main
          </div>
          <div>
            <span className="text-white/30">12:45:06</span>{' '}
            <span className="text-[#00FF9D]">[SYSTEM]</span> Task complete. Standing by.
          </div>
          <div className="animate-pulse text-[#00FF9D] pt-2">_</div>
        </div>
      </div>
    </motion.div>
  )

  return (
    <div className="relative h-screen w-screen bg-[#020202] text-white font-sans overflow-hidden selection:bg-[#00FF9D] selection:text-black">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00E5FF]/[0.02] rounded-full blur-[120px] pointer-events-none" />

      {/* Main Content Render */}
      <div className="h-full w-full px-8 overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeView === 'agents' && renderAgentsView()}
          {activeView === 'integrations' && renderIntegrationsView()}
          {activeView === 'telemetry' && renderTelemetryView()}
        </AnimatePresence>
      </div>

      {/* FLOATING MAC-STYLE DOCK */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center space-x-2 p-2 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
          <div className="px-3 flex items-center justify-center border-r border-white/10 mr-1">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#00FF9D]/20 to-[#00E5FF]/20 flex items-center justify-center border border-white/10 shadow-[0_0_15px_rgba(0,255,157,0.1)]">
              <Cpu size={16} className="text-[#00FF9D]" />
            </div>
          </div>

          {[
            { id: 'agents', icon: Bot, label: 'Agents' },
            { id: 'integrations', icon: Plug, label: 'Gateways' },
            { id: 'telemetry', icon: Activity, label: 'Telemetry' }
          ].map((item) => {
            const isActive = activeView === item.id
            return (
              <motion.button
                key={item.id}
                onClick={() => setActiveView(item.id as ViewState)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group flex flex-col items-center justify-center w-14 h-14 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-white/10 text-white'
                    : 'text-white/40 hover:text-white hover:bg-white/5'
                }`}
              >
                <item.icon size={22} className="relative z-10" />
                {/* Active Indicator Dot */}
                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute bottom-1 w-1 h-1 rounded-full bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]"
                  />
                )}
                {/* Tooltip */}
                <div className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-[#111] border border-white/10 px-3 py-1 rounded-lg text-[10px] font-medium tracking-widest pointer-events-none">
                  {item.label}
                </div>
              </motion.button>
            )
          })}

          <div className="w-px h-8 bg-white/10 mx-2" />

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            className="w-14 h-14 flex items-center justify-center rounded-xl text-white/40 hover:text-white hover:bg-white/5 transition-colors"
          >
            <Settings size={22} />
          </motion.button>
        </div>
      </div>
    </div>
  )
}
