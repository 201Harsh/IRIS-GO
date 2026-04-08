import { motion } from 'framer-motion'
import {
  Terminal,
  Activity,
  Settings,
  Smartphone,
  Zap,
  CheckCircle,
  Search,
  ShieldAlert
} from 'lucide-react'
import { useState } from 'react'

const Dashboard = () => {
  const [activeAgent, setActiveAgent] = useState('planner')

  const AgentNode = ({
    id,
    label,
    icon: Icon,
    colorClass,
    isActive
  }: {
    id: string
    label: string
    icon: any
    colorClass: string
    isActive: boolean
  }) => (
    <motion.div
      className={`relative flex flex-col items-center justify-center p-4 rounded-xl border border-white/5 bg-surface backdrop-blur-md w-32 h-32 transition-all duration-300 ${isActive ? colorClass : 'opacity-50 grayscale'}`}
      animate={{
        scale: isActive ? [1, 1.05, 1] : 1
      }}
      transition={{
        duration: 2,
        repeat: isActive ? Infinity : 0,
        ease: 'easeInOut'
      }}
    >
      {isActive && (
        <div
          className={`absolute inset-0 rounded-xl blur-md opacity-30 ${colorClass.replace('border-', 'bg-').replace('text-', 'bg-')}`}
        />
      )}
      <Icon size={32} className="mb-2 z-10" />
      <span className="text-xs font-bold tracking-wider z-10">{label}</span>
      {isActive && (
        <span className="absolute -bottom-2 text-[10px] animate-pulse">EXECUTING...</span>
      )}
    </motion.div>
  )

  return (
    <div className="h-screen w-screen bg-background text-white flex overflow-hidden font-mono selection:bg-neon-green selection:text-black">
      <div className="w-16 border-r border-white/5 flex flex-col items-center py-6 space-y-8 bg-surface/50">
        <div className="text-neon-green font-black text-xl mb-4">IG</div>
        <button className="text-neon-green drop-shadow-[0_0_8px_rgba(0,255,157,0.8)]">
          <Activity size={24} />
        </button>
        <button className="text-white/40 hover:text-white transition-colors">
          <Terminal size={24} />
        </button>
        <button className="text-white/40 hover:text-white transition-colors">
          <Settings size={24} />
        </button>
        <div className="grow" />
        <button className="text-neon-blue drop-shadow-[0_0_8px_rgba(0,229,255,0.8)] relative">
          <Smartphone size={24} />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-neon-green"></span>
        </button>
      </div>

      <div className="flex-1 flex flex-col h-full relative">
        <div className="h-16 border-b border-white/5 flex items-center justify-between px-6 bg-surface/30">
          <div className="flex items-center space-x-4">
            <span className="text-xs text-neon-blue border border-neon-blue/30 px-2 py-1 rounded shadow-[0_0_10px_rgba(0,229,255,0.2)]">
              SECURE RELAY ACTIVE
            </span>
            <span className="text-sm opacity-50">Awaiting Payload...</span>
          </div>
          <div className="text-xs flex items-center space-x-2">
            <span className="opacity-50">CPU: 12%</span>
            <span className="opacity-50">RAM: 4.2GB</span>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-neon-green/5 via-background to-background">
          <div className="absolute top-10 left-1/2 -translate-x-1/2 w-2/3 max-w-lg">
            <div className="border border-neon-green/30 bg-neon-green/5 backdrop-blur-md p-4 rounded-lg text-center shadow-neon-green">
              <p className="text-xs text-neon-green/70 mb-1">LATEST MOBILE COMMAND</p>
              <p className="text-lg">"Open the auth project and run dev server"</p>
            </div>
          </div>

          <div className="relative w-full max-w-2xl h-96 flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
              <line
                x1="50%"
                y1="20%"
                x2="20%"
                y2="50%"
                stroke="#00E5FF"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <line
                x1="50%"
                y1="20%"
                x2="80%"
                y2="50%"
                stroke="#00E5FF"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              <line x1="20%" y1="50%" x2="50%" y2="80%" stroke="#00FF9D" strokeWidth="2" />
              <line x1="80%" y1="50%" x2="50%" y2="80%" stroke="#00FF9D" strokeWidth="2" />
            </svg>

            <div className="absolute top-0">
              <AgentNode
                id="planner"
                label="PLANNER"
                icon={Zap}
                colorClass="border-neon-blue text-neon-blue shadow-neon-blue"
                isActive={activeAgent === 'planner'}
              />
            </div>
            <div className="absolute left-10">
              <AgentNode
                id="researcher"
                label="RESEARCHER"
                icon={Search}
                colorClass="border-neon-blue text-neon-blue shadow-neon-blue"
                isActive={activeAgent === 'researcher'}
              />
            </div>
            <div className="absolute right-10">
              <AgentNode
                id="critic"
                label="CRITIC"
                icon={ShieldAlert}
                colorClass="border-neon-blue text-neon-blue shadow-neon-blue"
                isActive={activeAgent === 'critic'}
              />
            </div>
            <div className="absolute bottom-0">
              <AgentNode
                id="executor"
                label="EXECUTOR"
                icon={CheckCircle}
                colorClass="border-neon-green text-neon-green shadow-neon-green"
                isActive={activeAgent === 'executor'}
              />
            </div>
          </div>
        </div>

        <div className="h-64 border-t border-neon-blue/20 bg-black/80 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-neon-blue to-transparent opacity-50"></div>

          <div className="p-4 h-full overflow-hidden flex flex-col">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-bold text-neon-blue tracking-widest">
                LOCAL TERMINAL LOGS
              </span>
              <div className="flex space-x-1">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto text-sm opacity-80 space-y-1">
              <p>
                <span className="text-neon-blue">[SYSTEM]</span> Awaiting connection payload...
              </p>
              <p>
                <span className="text-neon-blue">[SYSTEM]</span> LangGraph core initialized.
              </p>
              <p>
                <span className="text-neon-green">[PLANNER]</span> Standby for user intent.
              </p>
              <p className="animate-pulse">_</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
