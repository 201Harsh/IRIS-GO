import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Plug,
  Settings,
  Shield,
  Smartphone,
  Mail,
  Cpu,
  Send,
  MessageSquare,
  Code2,
  CalendarClock,
  Zap,
  CheckCircle2,
  Lock
} from 'lucide-react'
import { BsGithub } from 'react-icons/bs'

type ViewState = 'apps' | 'behavior' | 'cron' | 'settings'

export default function Dashboard() {
  const [activeView, setActiveView] = useState<ViewState>('apps')

  const [connections, setConnections] = useState({
    telegram: true,
    whatsapp: false,
    github: false,
    google: false,
    vscode: false
  })

  const toggleConnection = (key: keyof typeof connections) => {
    setConnections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const renderAppsView = () => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col w-full max-w-5xl mx-auto pt-12 pb-40"
    >
      <div className="mb-10">
        <h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">System Gateways</h2>
        <p className="text-sm text-white/40">
          Activate your mobile command relays and authorize local application access.
        </p>
      </div>

      <div className="mb-12">
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-[10px] uppercase tracking-widest text-[#00E5FF] font-semibold">
            1. Primary Command Relays
          </span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          <div className="relative p-6 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl hover:bg-white/4 transition-all flex flex-col justify-between h-48 group">
            {connections.telegram && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#00E5FF] shadow-[0_0_15px_#00E5FF] rounded-b-full" />
            )}
            <div className="flex justify-between items-start">
              <div className="p-3 bg-[#00E5FF]/10 text-[#00E5FF] rounded-2xl">
                <Send size={24} />
              </div>
              <button
                onClick={() => toggleConnection('telegram')}
                className={`text-[10px] font-bold px-3 py-1.5 rounded-xl border transition-all ${connections.telegram ? 'border-[#00E5FF]/30 text-[#00E5FF] bg-[#00E5FF]/10' : 'border-white/10 text-white/50 hover:text-white'}`}
              >
                {connections.telegram ? 'ACTIVE' : 'CONNECT'}
              </button>
            </div>
            <div>
              <h3 className="text-base font-medium text-white">Telegram Bot</h3>
              <p className="text-xs text-white/40 mt-1">Secure webhook via BotFather.</p>
            </div>
          </div>

          <div className="relative p-6 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl hover:bg-white/4 transition-all flex flex-col justify-between h-48 group">
            {connections.whatsapp && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-[#00FF9D] shadow-[0_0_15px_#00FF9D] rounded-b-full" />
            )}
            <div className="flex justify-between items-start">
              <div className="p-3 bg-[#00FF9D]/10 text-[#00FF9D] rounded-2xl">
                <MessageSquare size={24} />
              </div>
              <button
                onClick={() => toggleConnection('whatsapp')}
                className={`text-[10px] font-bold px-3 py-1.5 rounded-xl border transition-all ${connections.whatsapp ? 'border-[#00FF9D]/30 text-[#00FF9D] bg-[#00FF9D]/10' : 'border-white/10 text-white/50 hover:text-white'}`}
              >
                {connections.whatsapp ? 'ACTIVE' : 'CONNECT'}
              </button>
            </div>
            <div>
              <h3 className="text-base font-medium text-white">WhatsApp</h3>
              <p className="text-xs text-white/40 mt-1">Direct integration via Meta Graph API.</p>
            </div>
          </div>

          <div className="relative p-6 rounded-3xl border border-white/5 bg-black/40 backdrop-blur-xl flex flex-col justify-between h-48 overflow-hidden">
            <div className="absolute inset-0 bg-linear-to-br from-white/2 to-transparent pointer-events-none" />
            <div className="flex justify-between items-start opacity-50">
              <div className="p-3 bg-white/5 text-white rounded-2xl">
                <Smartphone size={24} />
              </div>
              <span className="text-[9px] font-bold px-3 py-1.5 rounded-xl border border-white/20 text-white/50 flex items-center">
                <Lock size={10} className="mr-1" /> SOON
              </span>
            </div>
            <div className="opacity-50">
              <h3 className="text-base font-medium text-white">IRIS Native App</h3>
              <p className="text-xs text-white/40 mt-1">Dedicated iOS/Android control client.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-3 mb-6">
          <div className="h-px bg-white/10 flex-1" />
          <span className="text-[10px] uppercase tracking-widest text-[#00FF9D] font-semibold">
            2. System Authorizations
          </span>
          <div className="h-px bg-white/10 flex-1" />
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="p-6 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl hover:bg-white/4 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-white/5 text-white rounded-2xl border border-white/10">
                  <BsGithub size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">GitHub Local</h3>
                  <p className="text-xs text-white/40">Read/Write repository access.</p>
                </div>
              </div>
              <button
                onClick={() => toggleConnection('github')}
                className={`text-[10px] font-bold px-4 py-2 rounded-xl border transition-all ${connections.github ? 'border-[#00FF9D]/30 text-[#00FF9D] bg-[#00FF9D]/10' : 'border-white/10 text-white hover:bg-white/10'}`}
              >
                {connections.github ? 'AUTHORIZED' : 'AUTHORIZE'}
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-[11px] text-white/50">
                <CheckCircle2 size={12} className="mr-2 text-[#00FF9D]" /> Clone, pull, and commit
                via terminal.
              </div>
              <div className="flex items-center text-[11px] text-white/50">
                <CheckCircle2 size={12} className="mr-2 text-[#00FF9D]" /> Read local directory
                structures.
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl hover:bg-white/4 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-white/5 text-white rounded-2xl border border-white/10">
                  <Mail size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">Google Workspace</h3>
                  <p className="text-xs text-white/40">Gmail & Calendar API integration.</p>
                </div>
              </div>
              <button
                onClick={() => toggleConnection('google')}
                className={`text-[10px] font-bold px-4 py-2 rounded-xl border transition-all ${connections.google ? 'border-[#00FF9D]/30 text-[#00FF9D] bg-[#00FF9D]/10' : 'border-white/10 text-white hover:bg-white/10'}`}
              >
                {connections.google ? 'AUTHORIZED' : 'AUTHORIZE'}
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-[11px] text-white/50">
                <CheckCircle2 size={12} className="mr-2 text-[#00FF9D]" /> Draft and read emails
                natively.
              </div>
              <div className="flex items-center text-[11px] text-white/50">
                <CheckCircle2 size={12} className="mr-2 text-[#00FF9D]" /> Schedule and modify
                Calendar events.
              </div>
            </div>
          </div>

          <div className="p-6 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl hover:bg-white/4 transition-all">
            <div className="flex justify-between items-start mb-6">
              <div className="flex items-center space-x-4">
                <div className="p-4 bg-[#00E5FF]/10 text-[#00E5FF] rounded-2xl border border-[#00E5FF]/20">
                  <Code2 size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-medium text-white">VS Code Engine</h3>
                  <p className="text-xs text-white/40">Direct IDE manipulation.</p>
                </div>
              </div>
              <button
                onClick={() => toggleConnection('vscode')}
                className={`text-[10px] font-bold px-4 py-2 rounded-xl border transition-all ${connections.vscode ? 'border-[#00FF9D]/30 text-[#00FF9D] bg-[#00FF9D]/10' : 'border-white/10 text-white hover:bg-white/10'}`}
              >
                {connections.vscode ? 'AUTHORIZED' : 'AUTHORIZE'}
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center text-[11px] text-white/50">
                <CheckCircle2 size={12} className="mr-2 text-[#00FF9D]" /> Open specific files and
                inject code.
              </div>
              <div className="flex items-center text-[11px] text-white/50">
                <CheckCircle2 size={12} className="mr-2 text-[#00FF9D]" /> Manage local dev servers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderBehaviorView = () => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col w-full max-w-4xl mx-auto pt-12 pb-40"
    >
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">
          Core Neural Engine
        </h2>
        <p className="text-sm text-white/40">
          Configure the central AI instructions and security bounds for your system.
        </p>
      </div>

      <div className="space-y-8">
        <div className="p-8 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl">
          <div className="flex justify-between items-center mb-6">
            <label className="text-xs font-semibold text-white/60 uppercase tracking-widest flex items-center">
              <Cpu size={16} className="mr-2 text-[#00FF9D]" /> Master Instructions
            </label>
            <span className="text-[10px] text-[#00FF9D] border border-[#00FF9D]/30 px-2 py-1 rounded bg-[#00FF9D]/10">
              MODEL: GEMINI 1.5 PRO
            </span>
          </div>
          <textarea
            className="w-full h-48 bg-[#020202] border border-white/10 rounded-2xl p-6 text-sm font-mono text-white/80 focus:border-[#00FF9D]/50 focus:ring-1 focus:ring-[#00FF9D]/50 transition-all outline-none resize-none leading-relaxed"
            defaultValue="You are the IRIS System Core. Your objective is to parse incoming mobile payloads, determine necessary local actions, and utilize authorized tool integrations to execute workflows. You are running with root privileges on this machine. Never bypass the security bounds."
          />
        </div>

        <div className="p-8 rounded-3xl border border-red-500/10 bg-red-500/5 backdrop-blur-xl flex justify-between items-center">
          <div>
            <h3 className="text-base font-medium text-white flex items-center">
              <Shield size={18} className="mr-2 text-red-400" /> Strict Mobile Confirmation
            </h3>
            <p className="text-xs text-white/50 mt-1 max-w-md">
              Commands requiring `sudo` or mass file deletion will halt execution and ping the
              mobile uplink for manual authorization.
            </p>
          </div>
          <div className="w-12 h-6 rounded-full bg-red-500/20 relative cursor-pointer border border-red-500/30">
            <div className="absolute top-0.5 left-6 w-5 h-5 rounded-full bg-red-500 shadow-[0_0_10px_rgba(239,68,68,0.5)] transition-transform" />
          </div>
        </div>
      </div>
    </motion.div>
  )

  const renderCronView = () => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col w-full max-w-4xl mx-auto pt-12 pb-40"
    >
      <div className="flex justify-between items-end mb-10">
        <div>
          <h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">Cron Workflows</h2>
          <p className="text-sm text-white/40">
            Schedule headless AI tasks to run automatically on this machine.
          </p>
        </div>
        <button className="bg-white/10 hover:bg-white/15 text-white px-5 py-2.5 rounded-xl text-xs font-semibold tracking-widest transition-all border border-white/10 flex items-center">
          <Zap size={14} className="mr-2 text-[#00E5FF]" /> NEW JOB
        </button>
      </div>

      <div className="space-y-4">
        {[
          {
            name: 'Daily Git Sync',
            schedule: 'Every day at 00:00',
            prompt: 'Pull origin main across all active workspaces in /dev.',
            status: 'Active'
          },
          {
            name: 'Log Analyzer',
            schedule: 'Every Friday at 18:00',
            prompt: 'Scan PM2 logs for errors and email summary.',
            status: 'Paused'
          }
        ].map((job, i) => (
          <div
            key={i}
            className="p-6 rounded-3xl border border-white/10 bg-white/2 backdrop-blur-xl flex justify-between items-center hover:bg-white/4 transition-colors cursor-pointer group"
          >
            <div className="flex items-start space-x-4">
              <div
                className={`p-3 rounded-2xl ${job.status === 'Active' ? 'bg-[#00E5FF]/10 text-[#00E5FF]' : 'bg-white/5 text-white/30'}`}
              >
                <CalendarClock size={24} />
              </div>
              <div>
                <div className="flex items-center space-x-3 mb-1">
                  <h3 className="text-base font-medium text-white">{job.name}</h3>
                  <span className="text-[10px] text-white/40 tracking-widest uppercase">
                    {job.schedule}
                  </span>
                </div>
                <p className="text-xs text-white/50 font-mono truncate max-w-lg">{job.prompt}</p>
              </div>
            </div>
            <div
              className={`w-10 h-5 rounded-full relative transition-colors ${job.status === 'Active' ? 'bg-[#00E5FF]/30' : 'bg-white/10'}`}
            >
              <div
                className={`absolute top-0.5 w-4 h-4 rounded-full transition-transform ${job.status === 'Active' ? 'bg-[#00E5FF] translate-x-5 shadow-[0_0_8px_#00E5FF]' : 'bg-white/40 translate-x-0.5'}`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  )

  const renderSettingsView = () => (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      className="flex flex-col w-full max-w-4xl mx-auto pt-12 pb-40"
    >
      <h2 className="text-3xl font-semibold text-white mb-2 tracking-tight">System Settings</h2>
      <p className="text-sm text-white/40">Platform configuration and API keys.</p>
      <div className="mt-10 p-8 rounded-3xl border border-white/10 bg-white/2 flex items-center justify-center h-64 text-white/30 text-sm font-mono tracking-widest">
        [ SETTINGS MODULE UNAVAILABLE IN SECURE BOOT ]
      </div>
    </motion.div>
  )

  return (
    <div className="relative h-screen w-screen bg-[#020202] text-white font-sans overflow-hidden selection:bg-[#00FF9D] selection:text-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-250 h-125 bg-[#00E5FF]/2 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-200 h-200 bg-[#00FF9D]/1.5 rounded-full blur-[150px] pointer-events-none" />

      <div className="h-full w-full overflow-y-auto px-6">
        <AnimatePresence mode="wait">
          {activeView === 'apps' && renderAppsView()}
          {activeView === 'behavior' && renderBehaviorView()}
          {activeView === 'cron' && renderCronView()}
          {activeView === 'settings' && renderSettingsView()}
        </AnimatePresence>
      </div>

      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center space-x-3 p-3 rounded-3xl bg-white/3 text-white/3 border border-white/10 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          {[
            { id: 'apps', icon: Plug, label: 'Gateways' },
            { id: 'behavior', icon: Cpu, label: 'Behavior' },
            { id: 'cron', icon: CalendarClock, label: 'Cron Jobs' },
            { id: 'settings', icon: Settings, label: 'Settings' }
          ].map((item) => {
            const isActive = activeView === item.id
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id as ViewState)}
                className={`cursor-pointer relative group flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? 'bg-green-500/30 text-white shadow-inner'
                    : 'text-white/40 hover:text-white hover:bg-white/15'
                }`}
              >
                <item.icon
                  size={22}
                  className={`relative z-10 transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:scale-110'}`}
                />

                {isActive && (
                  <motion.div
                    layoutId="activeDot"
                    className="absolute bottom-1 w-5.5 h-0.5 rounded-full bg-[#00FF9D] shadow-[0_0_10px_#00FF9D]"
                  />
                )}

                <div className="absolute -top-12 scale-0 group-hover:scale-100 transition-transform origin-bottom bg-[#111] border border-white/10 px-3 py-1.5 rounded-xl text-[10px] font-bold tracking-widest text-white/80 pointer-events-none shadow-xl">
                  {item.label}
                </div>
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
