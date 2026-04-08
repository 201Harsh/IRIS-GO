import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Terminal,
  Activity,
  Smartphone,
  Zap,
  CheckCircle,
  Search,
  ShieldAlert,
  Plug,
  Mail,
  MessageSquare,
  Sliders,
  Server,
  Power
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('swarm')
  const [activeAgent, setActiveAgent] = useState('planner')

  const AgentNode = ({ label, icon: Icon, colorClass, isActive }) => (
    <motion.div
      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-surface backdrop-blur-md w-32 h-32 transition-all duration-300 ${isActive ? colorClass : 'opacity-40 grayscale'}`}
      animate={{ scale: isActive ? [1, 1.05, 1] : 1 }}
      transition={{ duration: 2, repeat: isActive ? Infinity : 0, ease: 'easeInOut' }}
    >
      {isActive && (
        <div
          className={`absolute inset-0 rounded-xl blur-md opacity-20 ${colorClass.replace('border-', 'bg-').replace('text-', 'bg-')}`}
        />
      )}
      <Icon size={32} className="mb-2 z-10" />
      <span className="text-xs font-bold tracking-wider z-10">{label}</span>
      {isActive && (
        <span className="absolute -bottom-2 text-[10px] animate-pulse">EXECUTING...</span>
      )}
    </motion.div>
  )

  const ConnectionCard = ({ title, icon: Icon, status, desc, color }) => (
    <div className="p-5 border border-white/5 bg-surface/50 rounded-xl hover:bg-white/5 transition-colors group cursor-pointer relative overflow-hidden">
      <div
        className={`absolute top-0 left-0 w-1 h-full ${status === 'connected' ? color : 'bg-white/10'}`}
      ></div>
      <div className="flex justify-between items-start mb-2 pl-2">
        <Icon
          size={24}
          className={status === 'connected' ? color.replace('bg-', 'text-') : 'text-white/40'}
        />
        <span
          className={`text-[10px] uppercase font-bold px-2 py-1 rounded border ${status === 'connected' ? `border-${color.split('-')[1]}/30 text-${color.split('-')[1]}` : 'border-white/10 text-white/40'}`}
        >
          {status}
        </span>
      </div>
      <h3 className="text-sm font-bold mt-4 pl-2">{title}</h3>
      <p className="text-xs text-white/50 mt-1 pl-2">{desc}</p>
    </div>
  )

  const renderSwarmView = () => (
    <div className="flex-1 flex flex-col h-full relative">
      <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
        <div className="border border-neon-green/30 bg-neon-green/5 backdrop-blur-md px-6 py-3 rounded-lg text-center shadow-neon-green">
          <p className="text-[10px] text-neon-green/70 mb-1 tracking-widest uppercase">
            Latest Remote Payload
          </p>
          <p className="text-sm font-bold">"Commit changes and push to origin main"</p>
        </div>
      </div>
      <div className="flex-1 relative flex items-center justify-center bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-neon-green/5 via-background to-background">
        <div className="relative w-full max-w-2xl h-96 flex items-center justify-center">
          <div className="absolute top-0">
            <AgentNode
              label="PLANNER"
              icon={Zap}
              colorClass="border-neon-blue text-neon-blue shadow-neon-blue"
              isActive={activeAgent === 'planner'}
            />
          </div>
          <div className="absolute left-10">
            <AgentNode
              label="RESEARCHER"
              icon={Search}
              colorClass="border-neon-blue text-neon-blue shadow-neon-blue"
              isActive={activeAgent === 'researcher'}
            />
          </div>
          <div className="absolute right-10">
            <AgentNode
              label="CRITIC"
              icon={ShieldAlert}
              colorClass="border-neon-blue text-neon-blue shadow-neon-blue"
              isActive={activeAgent === 'critic'}
            />
          </div>
          <div className="absolute bottom-0">
            <AgentNode
              label="EXECUTOR"
              icon={CheckCircle}
              colorClass="border-neon-green text-neon-green shadow-neon-green"
              isActive={activeAgent === 'executor'}
            />
          </div>
        </div>
      </div>
      <div className="h-64 border-t border-white/5 bg-[#030303] p-4 flex flex-col">
        <span className="text-[10px] font-bold text-white/40 tracking-widest mb-2">
          SYSTEM STDOUT
        </span>
        <div className="flex-1 overflow-y-auto text-xs opacity-80 space-y-1 font-mono">
          <p>
            <span className="text-neon-blue">[WEBHOOK]</span> Telegram payload received.
          </p>
          <p>
            <span className="text-neon-green">[PLANNER]</span> Git status checked. 3 modified files.
          </p>
          <p className="animate-pulse">_</p>
        </div>
      </div>
    </div>
  )

  const renderIntegrationsView = () => (
    <div className="flex-1 p-8 overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <Plug className="mr-3 text-neon-blue" /> Remote Relays & Integrations
      </h2>

      <h3 className="text-xs font-bold text-white/40 tracking-widest mb-4">
        MOBILE COMMAND RELAYS
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-8">
        <ConnectionCard
          title="Telegram Bot"
          icon={MessageSquare}
          status="connected"
          color="bg-neon-blue"
          desc="Listening on webhook endpoint /api/tg-relay"
        />
        <ConnectionCard
          title="WhatsApp Business"
          icon={Smartphone}
          status="offline"
          color="bg-neon-green"
          desc="Awaiting QR Authentication"
        />
      </div>

      <h3 className="text-xs font-bold text-white/40 tracking-widest mb-4">SYSTEM ACCESS TOKENS</h3>
      <div className="grid grid-cols-3 gap-4">
        <ConnectionCard
          title="GitHub"
          icon={FaGithub}
          status="connected"
          color="bg-neon-green"
          desc="Read/Write access to local repositories"
        />
        <ConnectionCard
          title="Gmail"
          icon={Mail}
          status="connected"
          color="bg-neon-blue"
          desc="Access to draft and read emails"
        />
        <ConnectionCard
          title="Local Terminal"
          icon={Terminal}
          status="connected"
          color="bg-white"
          desc="Root Execution Privileges Enabled"
        />
      </div>
    </div>
  )

  const renderAgentSettingsView = () => (
    <div className="flex-1 p-8 overflow-y-auto">
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <Sliders className="mr-3 text-neon-green" /> Swarm Behavior Control
      </h2>

      <div className="space-y-4 max-w-3xl">
        {['Planner (Gemini 1.5 Pro)', 'Executor (Groq / Llama 3)', 'Critic (Gemini 1.5 Pro)'].map(
          (agent, i) => (
            <div
              key={i}
              className="p-5 border border-white/5 bg-surface/30 rounded-xl flex items-center justify-between"
            >
              <div>
                <h3 className="text-sm font-bold text-neon-green">{agent}</h3>
                <p className="text-xs text-white/50 mt-1">
                  Configure autonomy bounds and system prompts.
                </p>
              </div>
              <button className="px-4 py-2 text-xs border border-white/10 rounded hover:bg-white/5 transition-colors">
                Configure
              </button>
            </div>
          )
        )}

        <div className="p-5 mt-8 border border-red-500/20 bg-red-500/5 rounded-xl">
          <h3 className="text-sm font-bold text-red-500 flex items-center">
            <Power size={16} className="mr-2" /> Infinite Loop Breaker
          </h3>
          <p className="text-xs text-white/60 mt-1 mb-4">
            Require human WhatsApp confirmation if Critic Agent fails task validation 3 times
            consecutively.
          </p>
          <button className="px-4 py-2 text-xs bg-red-500/20 text-red-400 rounded hover:bg-red-500/30 transition-colors">
            Enabled (Recommended)
          </button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="h-screen w-screen bg-background text-white flex overflow-hidden font-mono selection:bg-neon-green selection:text-black">
      <div className="w-20 border-r border-white/5 flex flex-col items-center py-6 space-y-8 bg-surface/50 z-20 shadow-[4px_0_24px_rgba(0,0,0,0.5)]">
        <div className="text-neon-green font-black text-xl mb-4 border border-neon-green/30 p-2 rounded shadow-neon-green">
          IG
        </div>

        <button
          onClick={() => setActiveTab('swarm')}
          className={`p-3 rounded-lg transition-all ${activeTab === 'swarm' ? 'bg-neon-green/10 text-neon-green shadow-[inset_2px_0_0_#00FF9D]' : 'text-white/40 hover:text-white'}`}
        >
          <Activity size={24} />
        </button>
        <button
          onClick={() => setActiveTab('integrations')}
          className={`p-3 rounded-lg transition-all ${activeTab === 'integrations' ? 'bg-neon-blue/10 text-neon-blue shadow-[inset_2px_0_0_#00E5FF]' : 'text-white/40 hover:text-white'}`}
        >
          <Plug size={24} />
        </button>
        <button
          onClick={() => setActiveTab('agents')}
          className={`p-3 rounded-lg transition-all ${activeTab === 'agents' ? 'bg-white/10 text-white shadow-[inset_2px_0_0_#FFF]' : 'text-white/40 hover:text-white'}`}
        >
          <Sliders size={24} />
        </button>

        <div className="grow" />
        <div className="w-10 h-10 rounded-full border border-neon-green/30 flex items-center justify-center relative">
          <Server size={18} className="text-neon-green" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-neon-green rounded-full animate-pulse shadow-neon-green"></span>
        </div>
      </div>

      <div className="flex-1 flex flex-col h-full">
        <div className="h-12 border-b border-white/5 flex items-center justify-between px-6 bg-surface/30 z-10">
          <div className="flex items-center space-x-4">
            <span className="text-[10px] text-neon-blue border border-neon-blue/30 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(0,229,255,0.2)]">
              CORE ONLINE
            </span>
          </div>
          <div className="text-[10px] flex items-center space-x-4 text-white/50 tracking-wider">
            <span>CPU: 12%</span>
            <span>RAM: 4.2GB</span>
            <span>PING: 14ms</span>
          </div>
        </div>

        {activeTab === 'swarm' && renderSwarmView()}
        {activeTab === 'integrations' && renderIntegrationsView()}
        {activeTab === 'agents' && renderAgentSettingsView()}
      </div>
    </div>
  )
}

export default Dashboard
