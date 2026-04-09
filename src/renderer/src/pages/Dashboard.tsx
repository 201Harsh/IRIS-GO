import { useState, useRef } from 'react'
import { motion} from 'framer-motion'
import {
  Zap,
  CheckCircle,
  Paperclip,
  Send,
  MessageSquare,
  Settings,
  Activity,
  Shield,
  Mail,
  X,
  Server,
  Loader2
} from 'lucide-react'
import { BsGithub } from 'react-icons/bs'

export default function Dashboard() {
  // ==========================================
  // STATE: GATEWAY & SETUP
  // ==========================================
  const [isSetupComplete, setIsSetupComplete] = useState(false)
  const [activeModal, setActiveModal] = useState<any>(null)
  const [isConnecting, setIsConnecting] = useState(false)
  const [connectedApps, setConnectedApps] = useState({
    telegram: false,
    whatsapp: false,
    github: false,
    google: false
  })

  // ==========================================
  // STATE: MAIN DASHBOARD
  // ==========================================
  const [inputValue, setInputValue] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const endOfMessagesRef = useRef(null)

  const [messages, setMessages] = useState([
    {
      id: 1,
      role: 'user',
      text: 'Commit changes and push to origin main.',
      timestamp: '14:02:11'
    },
    {
      id: 2,
      role: 'planner',
      title: 'PLANNER // ORCHESTRATOR',
      icon: Zap,
      color: '#00E5FF',
      text: '[PLANNER] Orchestrating execution plan. Mapping dependencies and verifying branch integrity.',
      timestamp: '14:02:12'
    },
    {
      id: 3,
      role: 'executor',
      title: 'EXECUTOR // SWARM_04',
      icon: CheckCircle,
      color: '#00FF9D',
      text: '[EXECUTOR] Step 2 complete. Authentication successful. Synchronizing upstream.',
      terminal: [
        '$ git add .',
        '$ git commit -m "System optimization: Core UI update"',
        '[main 042a1bc] System optimization: Core UI update',
        '$ git push origin main ... SUCCESS'
      ],
      timestamp: '14:02:15'
    }
  ])

  // ==========================================
  // LOGIC: SETUP APP CONNECTIONS
  // ==========================================
  const handleConnectApp = (appId) => {
    setIsConnecting(true)
    // Simulate API connection delay
    setTimeout(() => {
      setConnectedApps((prev) => ({ ...prev, [appId]: true }))
      setIsConnecting(false)
      setActiveModal(null)
    }, 1500)
  }

  // Check if user is allowed to proceed (needs at least one relay connected)
  const canProceed = connectedApps.telegram || connectedApps.whatsapp

  // ==========================================
  // LOGIC: CHAT HANDLER
  // ==========================================
  const handleSend = (e) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const newMsg = {
      id: Date.now(),
      role: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })
    }

    setMessages((prev) => [...prev, newMsg])
    setInputValue('')
    setIsThinking(true)

    setTimeout(() => {
      setIsThinking(false)
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'planner',
          title: 'PLANNER // ORCHESTRATOR',
          icon: Zap,
          color: '#00E5FF',
          text: '[PLANNER] Analyzing command context. Preparing terminal hooks.',
          timestamp: new Date().toLocaleTimeString([], {
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
          })
        }
      ])
    }, 2000)
  }

  // ==========================================
  // VIEW: CONNECTION POPUP MODAL
  // ==========================================
  const renderModal = () => {
    if (!activeModal) return null
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-[#0D0D0D] border border-white/10 p-6 rounded-xl w-full max-w-sm shadow-[0_0_30px_rgba(0,0,0,0.8)] relative"
        >
          <button
            onClick={() => setActiveModal(null)}
            className="absolute top-4 right-4 text-white/30 hover:text-white"
          >
            <X size={18} />
          </button>
          <div className="flex flex-col items-center text-center mt-4">
            <div className={`p-4 rounded-full mb-4 ${activeModal.colorClass}`}>
              <activeModal.icon size={32} />
            </div>
            <h3 className="text-lg font-bold mb-2">Connect {activeModal.name}</h3>
            <p className="text-xs text-white/50 mb-6">{activeModal.desc}</p>

            <button
              onClick={() => handleConnectApp(activeModal.id)}
              disabled={isConnecting}
              className="w-full py-3 bg-white/5 border border-white/10 rounded font-bold tracking-widest text-xs hover:bg-white/10 transition flex justify-center items-center"
            >
              {isConnecting ? (
                <Loader2 size={16} className="animate-spin text-[#00FF9D]" />
              ) : (
                'AUTHORIZE CONNECTION'
              )}
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  // ==========================================
  // VIEW: SETUP GATEWAY (STAGE 1)
  // ==========================================
  if (!isSetupComplete) {
    return (
      <div className="min-h-screen w-screen bg-background text-white font-mono flex flex-col items-center justify-center relative overflow-hidden selection:bg-[#00FF9D] selection:text-black p-6">
        {/* Background Mesh */}
        <div
          className="absolute inset-0 z-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        {renderModal()}

        <div className="z-10 w-full max-w-3xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-2 border border-[#00FF9D]/30 px-3 py-1 rounded bg-[#00FF9D]/5 mb-6">
              <Shield size={14} className="text-[#00FF9D]" />
              <span className="text-[#00FF9D] text-[10px] tracking-widest font-bold">
                SYSTEM INITIALIZATION
              </span>
            </div>
            <h1 className="text-3xl font-black tracking-tighter mb-4 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
              ESTABLISH <span className="text-[#00FF9D]">REMOTE UPLINK</span>
            </h1>
            <p className="text-white/40 text-xs">
              Connect your mobile relay and grant access to cloud tools before entering the command
              center.
            </p>
          </div>

          {/* Relays */}
          <h2 className="text-[10px] text-[#00E5FF] tracking-widest font-bold mb-3 border-b border-white/10 pb-2">
            REQUIRED: MOBILE COMMAND RELAY
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-8">
            {[
              {
                id: 'telegram',
                name: 'Telegram Bot',
                icon: Send,
                colorClass: 'text-[#00E5FF] bg-[#00E5FF]/10',
                desc: 'Control via Telegram BotFather.'
              },
              {
                id: 'whatsapp',
                name: 'WhatsApp',
                icon: MessageSquare,
                colorClass: 'text-[#00FF9D] bg-[#00FF9D]/10',
                desc: 'Control via WhatsApp Business.'
              }
            ].map((app) => (
              <div
                key={app.id}
                className="bg-[#0D0D0D] border border-white/10 p-5 rounded-lg relative overflow-hidden"
              >
                {connectedApps[app.id] && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#00FF9D] shadow-[0_0_10px_#00FF9D]"></div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <app.icon size={24} className={app.colorClass.split(' ')[0]} />
                  {connectedApps[app.id] ? (
                    <span className="text-[9px] flex items-center text-[#00FF9D] border border-[#00FF9D]/30 px-2 py-1 rounded bg-[#00FF9D]/5">
                      <CheckCircle size={10} className="mr-1" /> LINKED
                    </span>
                  ) : (
                    <button
                      onClick={() => setActiveModal(app)}
                      className="text-[9px] tracking-widest border border-white/20 px-2 py-1 rounded hover:bg-white/5 transition text-white/50 hover:text-white"
                    >
                      CONNECT
                    </button>
                  )}
                </div>
                <h3 className="text-sm font-bold">{app.name}</h3>
              </div>
            ))}
          </div>

          {/* Tools */}
          <h2 className="text-[10px] text-white/40 tracking-widest font-bold mb-3 border-b border-white/10 pb-2">
            OPTIONAL: CLOUD INTEGRATIONS
          </h2>
          <div className="grid grid-cols-2 gap-4 mb-12">
            {[
              {
                id: 'github',
                name: 'GitHub',
                icon: BsGithub,
                colorClass: 'text-white bg-white/10',
                desc: 'Read/Write access to repos.'
              },
              {
                id: 'google',
                name: 'Google Workspace',
                icon: Mail,
                colorClass: 'text-red-400 bg-red-400/10',
                desc: 'Access Gmail & Docs API (Free-tier).'
              }
            ].map((app) => (
              <div
                key={app.id}
                className="bg-[#0D0D0D] border border-white/10 p-5 rounded-lg relative"
              >
                {connectedApps[app.id] && (
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#00FF9D]"></div>
                )}
                <div className="flex justify-between items-start mb-4">
                  <app.icon size={24} className={app.colorClass.split(' ')[0]} />
                  {connectedApps[app.id] ? (
                    <span className="text-[9px] flex items-center text-[#00FF9D] border border-[#00FF9D]/30 px-2 py-1 rounded bg-[#00FF9D]/5">
                      <CheckCircle size={10} className="mr-1" /> LINKED
                    </span>
                  ) : (
                    <button
                      onClick={() => setActiveModal(app)}
                      className="text-[9px] tracking-widest border border-white/20 px-2 py-1 rounded hover:bg-white/5 transition text-white/50 hover:text-white"
                    >
                      CONNECT
                    </button>
                  )}
                </div>
                <h3 className="text-sm font-bold">{app.name}</h3>
              </div>
            ))}
          </div>

          {/* Proceed Button */}
          <button
            onClick={() => setIsSetupComplete(true)}
            disabled={!canProceed}
            className={`w-full py-4 rounded font-bold tracking-widest text-xs transition-all flex justify-center items-center space-x-2 ${
              canProceed
                ? 'bg-[#00FF9D]/10 text-[#00FF9D] border border-[#00FF9D]/50 hover:bg-[#00FF9D]/20 shadow-[0_0_20px_rgba(0,255,157,0.2)]'
                : 'bg-white/5 text-white/20 border border-white/10 cursor-not-allowed'
            }`}
          >
            <Server size={16} />
            <span>INITIALIZE UPLINK</span>
          </button>
        </div>
      </div>
    )
  }

  // ==========================================
  // VIEW: DASHBOARD COMMAND CENTER (STAGE 2)
  // ==========================================
  return (
    <div className="flex h-screen w-screen bg-background text-white font-mono overflow-hidden selection:bg-[#00FF9D] selection:text-black">
      <div
        className="absolute inset-0 z-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}
      ></div>

      {/* SIDEBAR */}
      <div className="w-16 border-r border-white/10 flex flex-col items-center py-4 z-10 bg-background/80 backdrop-blur-sm">
        <div className="text-[#00FF9D] font-black text-xl mb-8 tracking-tighter">IG</div>
        <div className="flex flex-col space-y-6 w-full items-center">
          <button className="flex flex-col items-center text-[#00FF9D] relative group">
            <div className="absolute inset-0 bg-[#00FF9D]/10 blur-md rounded-full"></div>
            <MessageSquare size={20} className="relative z-10" />
            <span className="text-[8px] mt-1 tracking-widest">UPLINK</span>
            <div className="absolute left-0 w-1 h-full bg-[#00FF9D] rounded-r shadow-[0_0_10px_#00FF9D]"></div>
          </button>
          <button className="flex flex-col items-center text-white/30 hover:text-white transition-colors">
            <Activity size={20} />
            <span className="text-[8px] mt-1 tracking-widest">SWARM</span>
          </button>
          <button className="flex flex-col items-center text-white/30 hover:text-white transition-colors">
            <Settings size={20} />
            <span className="text-[8px] mt-1 tracking-widest">CONFIG</span>
          </button>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div className="flex-1 flex flex-col z-10 relative">
        <div className="h-12 border-b border-white/10 flex items-center justify-between px-6 bg-background/80 backdrop-blur-md">
          <div className="flex items-center space-x-6 text-[10px] tracking-widest font-bold">
            <span className="text-[#00FF9D] text-sm">IRIS GO</span>
            <div className="flex items-center space-x-2">
              <span className="text-white/50">CPU:</span>
              <span className="text-[#00FF9D]">12%</span>
              <div className="w-12 h-1 bg-white/10 rounded overflow-hidden">
                <div className="h-full w-[12%] bg-[#00FF9D]"></div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-white/50">RAM:</span>
              <span className="text-[#00E5FF]">4.2GB</span>
              <div className="w-12 h-1 bg-white/10 rounded overflow-hidden">
                <div className="h-full w-[45%] bg-[#00E5FF]"></div>
              </div>
            </div>
            <div className="flex items-center space-x-2 border border-[#00FF9D]/30 px-2 py-0.5 rounded bg-[#00FF9D]/5 shadow-[0_0_8px_rgba(0,255,157,0.2)]">
              <div className="w-1.5 h-1.5 bg-[#00FF9D] rounded-full animate-pulse"></div>
              <span className="text-[#00FF9D]">LINK: ACTIVE</span>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-[10px] text-[#00FF9D] tracking-widest border border-[#00FF9D]/20 px-3 py-1 rounded">
            <Shield size={12} />
            <span>SECURE CONNECTION</span>
          </div>
        </div>

        {/* CHAT LOGS */}
        <div className="flex-1 overflow-y-auto p-8 space-y-6 custom-scrollbar">
          {messages.map((msg: any) => (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              key={msg.id}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-3xl flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}
              >
                {msg.role !== 'user' && (
                  <div
                    className="flex items-center space-x-2 mb-2 text-[10px] tracking-widest font-bold opacity-80"
                    style={{ color: msg.color }}
                  >
                    <msg.icon size={12} />
                    <span>{msg.title}</span>
                  </div>
                )}

                <div
                  className={`relative p-4 rounded text-sm shadow-lg ${
                    msg.role === 'user'
                      ? 'bg-[#00E5FF]/10 border border-[#00E5FF]/30 text-[#00E5FF] shadow-[0_0_15px_rgba(0,229,255,0.1)] rounded-tr-none'
                      : 'bg-[#0D0D0D] border border-white/5 text-white/80 rounded-tl-none'
                  }`}
                >
                  {msg.role !== 'user' && (
                    <div
                      className="absolute left-0 top-0 w-0.5 h-full opacity-70"
                      style={{ backgroundColor: msg.color, boxShadow: `0 0 10px ${msg.color}` }}
                    ></div>
                  )}

                  <div className="pl-2 leading-relaxed whitespace-pre-wrap">{msg.text}</div>

                  {msg.terminal && (
                    <div className="mt-4 bg-background border border-white/5 rounded-md p-4 font-mono text-xs text-[#00FF9D] w-full max-w-2xl relative overflow-hidden group">
                      <div className="absolute top-0 left-0 w-full h-0.5 bg-linear-to-r from-transparent via-[#00FF9D]/30 to-transparent"></div>
                      {msg.terminal.map((line, idx) => (
                        <div
                          key={idx}
                          className={
                            line.includes('SUCCESS') ? 'text-[#00FF9D] font-bold' : 'opacity-80'
                          }
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="text-[9px] text-white/30 mt-2 tracking-widest">
                  {msg.role === 'user' ? 'USER' : 'SYSTEM'} • {msg.timestamp}
                </div>
              </div>
            </motion.div>
          ))}
          <div ref={endOfMessagesRef} />
        </div>

        {/* INPUT TRAY */}
        <div className="px-8 pb-8 pt-4">
          <div className="h-6 flex items-center text-[10px] tracking-widest text-white/40 font-bold mb-2">
            {isThinking && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex items-center space-x-2 text-[#00E5FF]"
              >
                <div className="flex space-x-1">
                  <div className="w-1.5 h-4 bg-[#00E5FF] animate-pulse"></div>
                  <div className="w-1.5 h-4 bg-[#00E5FF] animate-pulse delay-75"></div>
                  <div className="w-1.5 h-4 bg-[#00E5FF] animate-pulse delay-150"></div>
                </div>
                <span>PLANNER THINKING...</span>
              </motion.div>
            )}
          </div>

          <form
            onSubmit={handleSend}
            className="flex items-center bg-[#0D0D0D] border border-white/10 rounded focus-within:border-[#00FF9D]/50 focus-within:shadow-[0_0_20px_rgba(0,255,157,0.1)] transition-all"
          >
            <button
              type="button"
              className="p-4 text-white/30 hover:text-[#00FF9D] transition-colors"
            >
              <Paperclip size={18} />
            </button>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Command the swarm..."
              className="flex-1 bg-transparent text-white placeholder-white/30 outline-none py-4 text-sm"
            />
            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="p-4 text-[#00FF9D] disabled:text-white/20 hover:text-white transition-colors"
            >
              <Send size={18} />
            </button>
          </form>

          <div className="flex justify-end mt-2">
            <span className="text-[8px] tracking-widest text-white/20">ENCRYPTION: AES-256</span>
          </div>
        </div>
      </div>
    </div>
  )
}
