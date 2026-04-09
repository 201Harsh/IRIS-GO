import { useState } from 'react'
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
  Save,
  Smartphone,
  Mail
} from 'lucide-react'
import { BsGithub } from 'react-icons/bs'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('agents')

  const [agents] = useState([
    { id: 1, name: 'Core Orchestrator', status: 'active', model: 'Gemini 1.5 Pro' },
    { id: 2, name: 'Local Executor', status: 'active', model: 'Groq Llama 3' },
    { id: 3, name: 'Git Manager', status: 'idle', model: 'Gemini 1.5 Flash' }
  ])
  const [selectedAgent, setSelectedAgent] = useState(agents[0])

  const renderAgentArchitect = () => (
    <div className="flex h-full">
      <div className="w-1/3 border-r border-white/5 flex flex-col bg-[#0A0A0A]">
        <div className="p-4 border-b border-white/5 flex justify-between items-center bg-background">
          <h2 className="text-xs font-bold text-white/50 tracking-widest">DEPLOYED AGENTS</h2>
          <button className="text-[#00FF9D] hover:bg-[#00FF9D]/10 p-1 rounded transition-colors">
            <Plus size={16} />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
          {agents.map((agent) => (
            <button
              key={agent.id}
              onClick={() => setSelectedAgent(agent)}
              className={`w-full text-left p-4 rounded border transition-all ${
                selectedAgent.id === agent.id
                  ? 'border-[#00FF9D]/30 bg-[#00FF9D]/5 shadow-[inset_2px_0_0_#00FF9D]'
                  : 'border-white/5 bg-transparent hover:border-white/20'
              }`}
            >
              <div className="flex justify-between items-center mb-1">
                <span
                  className={`text-sm font-bold ${selectedAgent.id === agent.id ? 'text-[#00FF9D]' : 'text-white'}`}
                >
                  {agent.name}
                </span>
                <span
                  className={`w-2 h-2 rounded-full ${agent.status === 'active' ? 'bg-[#00FF9D] shadow-[0_0_8px_#00FF9D]' : 'bg-white/20'}`}
                ></span>
              </div>
              <div className="text-[10px] text-white/40 tracking-widest uppercase">
                {agent.model}
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex flex-col bg-background">
        <div className="p-6 border-b border-white/5 flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">{selectedAgent.name} // Configuration</h2>
            <p className="text-xs text-white/40 mt-1 tracking-widest">
              Define system instructions and resource bounds.
            </p>
          </div>
          <button className="flex items-center space-x-2 bg-white/5 border border-white/10 hover:border-[#00FF9D]/50 hover:text-[#00FF9D] px-4 py-2 rounded text-xs tracking-widest transition-all">
            <Save size={14} /> <span>SAVE DEPLOYMENT</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-8">
          <div>
            <label className="block text-[10px] font-bold text-white/50 tracking-widest mb-3">
              SYSTEM INSTRUCTIONS (PROMPT)
            </label>
            <textarea
              className="w-full h-40 bg-[#0A0A0A] border border-white/10 rounded p-4 text-sm font-mono focus:border-[#00E5FF]/50 focus:outline-none transition-colors resize-none"
              defaultValue={`You are the Core Orchestrator. Your objective is to parse incoming mobile payloads, determine the necessary local actions, and delegate tasks to specialized sub-agents. You do not execute code directly. You strictly return JSON execution plans.`}
            />
          </div>

          <div>
            <label className="block text-[10px] font-bold text-white/50 tracking-widest mb-3">
              AUTHORIZED SYSTEM TOOLS
            </label>
            <div className="grid grid-cols-3 gap-4">
              {[
                { name: 'Local Terminal', icon: Terminal, active: true },
                { name: 'File System (R/W)', icon: FolderGit2, active: true },
                { name: 'Network Access', icon: Globe, active: false }
              ].map((tool, i) => (
                <div
                  key={i}
                  className={`p-4 rounded border flex items-center justify-between cursor-pointer transition-colors ${tool.active ? 'border-[#00E5FF]/30 bg-[#00E5FF]/5' : 'border-white/5 bg-[#0A0A0A] opacity-50 hover:opacity-100'}`}
                >
                  <div className="flex items-center space-x-3">
                    <tool.icon
                      size={18}
                      className={tool.active ? 'text-[#00E5FF]' : 'text-white/40'}
                    />
                    <span className="text-xs font-bold">{tool.name}</span>
                  </div>
                  <div
                    className={`w-8 h-4 rounded-full relative transition-colors ${tool.active ? 'bg-[#00E5FF]/30' : 'bg-white/10'}`}
                  >
                    <div
                      className={`absolute top-0.5 w-3 h-3 rounded-full transition-transform ${tool.active ? 'bg-[#00E5FF] translate-x-4' : 'bg-white/40 translate-x-0.5'}`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label className="text-[10px] font-bold text-[#FF3366] tracking-widest mb-3 flex items-center">
              <Shield size={12} className="mr-2" /> SECURITY & BOUNDS
            </label>
            <div className="p-5 border border-[#FF3366]/20 bg-[#FF3366]/5 rounded">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-bold text-white/80">Require Mobile Confirmation</span>
                <span className="text-xs text-[#FF3366] border border-[#FF3366]/30 px-2 py-0.5 rounded bg-[#FF3366]/10">
                  STRICT
                </span>
              </div>
              <p className="text-xs text-white/40">
                If the agent requests `sudo` access or attempts to delete directories, a
                confirmation payload will be sent to the linked mobile app before execution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const renderIntegrations = () => (
    <div className="p-8 h-full overflow-y-auto bg-background">
      <div className="max-w-4xl">
        <h2 className="text-xl font-bold mb-2">Platform Integrations</h2>
        <p className="text-xs text-white/40 mb-8 tracking-widest">
          Manage your mobile control gateways and local app access.
        </p>

        <h3 className="text-[10px] text-[#00FF9D] tracking-widest font-bold mb-4 border-b border-white/5 pb-2">
          MOBILE CONTROL RELAYS
        </h3>
        <div className="grid grid-cols-2 gap-4 mb-10">
          <div className="p-5 border border-[#00FF9D]/30 bg-[#00FF9D]/5 rounded-lg flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="p-3 bg-[#00FF9D]/10 text-[#00FF9D] rounded">
                <Smartphone size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold">IRIS Mobile App (iOS/Android)</h4>
                <p className="text-[10px] text-white/40 mt-1">Status: Listening on WSS://</p>
              </div>
            </div>
            <span className="text-[10px] font-bold text-[#00FF9D] px-2 py-1 border border-[#00FF9D]/30 rounded bg-[#00FF9D]/10">
              CONNECTED
            </span>
          </div>
        </div>

        <h3 className="text-[10px] text-[#00E5FF] tracking-widest font-bold mb-4 border-b border-white/5 pb-2">
          AUTHORIZED SYSTEM TOOLS
        </h3>
        <div className="grid grid-cols-2 gap-4">
          {[
            { name: 'GitHub Local', icon: BsGithub, status: 'linked' },
            { name: 'Google Workspace', icon: Mail, status: 'connect' }
          ].map((app, i) => (
            <div
              key={i}
              className="p-5 border border-white/10 bg-[#0A0A0A] rounded-lg flex justify-between items-center hover:border-white/30 transition-colors cursor-pointer"
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white/5 text-white/80 rounded">
                  <app.icon size={20} />
                </div>
                <h4 className="text-sm font-bold">{app.name}</h4>
              </div>
              {app.status === 'linked' ? (
                <span className="text-[10px] font-bold text-white/60 px-2 py-1 border border-white/10 rounded">
                  CONFIGURED
                </span>
              ) : (
                <span className="text-[10px] font-bold text-[#00E5FF] px-2 py-1 border border-[#00E5FF]/30 rounded hover:bg-[#00E5FF]/10 transition-colors">
                  CONNECT
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const renderTelemetry = () => (
    <div className="p-8 h-full flex flex-col bg-background">
      <h2 className="text-xl font-bold mb-2">Engine Telemetry</h2>
      <p className="text-xs text-white/40 mb-8 tracking-widest">
        Live monitoring of headless agent execution.
      </p>

      <div className="grid grid-cols-3 gap-6 mb-8">
        <div className="p-6 border border-white/5 bg-[#0A0A0A] rounded-lg">
          <div className="text-[10px] text-white/40 tracking-widest font-bold mb-2">UPTIME</div>
          <div className="text-2xl font-mono text-white">42:14:05</div>
        </div>
        <div className="p-6 border border-[#00FF9D]/20 bg-[#00FF9D]/5 rounded-lg">
          <div className="text-[10px] text-[#00FF9D] tracking-widest font-bold mb-2">
            ACTIVE TASKS
          </div>
          <div className="text-2xl font-mono text-[#00FF9D]">0</div>
        </div>
        <div className="p-6 border border-white/5 bg-[#0A0A0A] rounded-lg">
          <div className="text-[10px] text-white/40 tracking-widest font-bold mb-2">
            TOTAL ACTIONS EXECUTED
          </div>
          <div className="text-2xl font-mono text-white">1,204</div>
        </div>
      </div>

      <div className="flex-1 border border-white/10 bg-[#0A0A0A] rounded-lg flex flex-col overflow-hidden">
        <div className="p-3 border-b border-white/5 bg-background flex justify-between items-center">
          <span className="text-[10px] font-bold text-white/50 tracking-widest">
            SYSTEM EVENT LEDGER
          </span>
          <div className="flex space-x-2">
            <div className="w-2 h-2 rounded-full bg-white/20"></div>
            <div className="w-2 h-2 rounded-full bg-[#00FF9D] animate-pulse shadow-[0_0_5px_#00FF9D]"></div>
          </div>
        </div>
        <div className="flex-1 p-4 font-mono text-xs overflow-y-auto space-y-2 opacity-80">
          <div className="text-white/40">
            2026-04-09 11:42:10 <span className="text-[#00E5FF]">[SYSTEM]</span> Gateway connection
            established.
          </div>
          <div className="text-white/40">
            2026-04-09 11:45:00 <span className="text-[#00FF9D]">[MOBILE]</span> Payload received:
            "Sync git repo"
          </div>
          <div className="text-white/40">
            2026-04-09 11:45:02 <span className="text-white/80">[Git_Manager]</span> Action invoked:
            git status
          </div>
          <div className="text-white/40">
            2026-04-09 11:45:05 <span className="text-white/80">[Git_Manager]</span> Action invoked:
            git pull origin main
          </div>
          <div className="text-white/40">
            2026-04-09 11:45:06 <span className="text-[#00FF9D]">[SYSTEM]</span> Task completed
            successfully. Awaiting input.
          </div>
          <div className="animate-pulse text-[#00FF9D] pt-2">_</div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex h-screen w-screen bg-background text-white font-sans overflow-hidden selection:bg-[#00FF9D] selection:text-black">
      <div className="w-20 border-r border-white/5 flex flex-col items-center py-6 bg-[#030303] z-20">
        <div className="w-10 h-10 border border-[#00FF9D]/30 rounded flex items-center justify-center bg-[#00FF9D]/10 text-[#00FF9D] font-black tracking-tighter mb-8 shadow-[0_0_15px_rgba(0,255,157,0.1)]">
          IG
        </div>

        <div className="flex flex-col space-y-4 w-full px-4">
          <button
            onClick={() => setActiveTab('agents')}
            className={`p-3 rounded-lg flex items-center justify-center transition-all ${activeTab === 'agents' ? 'bg-[#00E5FF]/10 text-[#00E5FF] shadow-[inset_2px_0_0_#00E5FF]' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
          >
            <Bot size={22} />
          </button>
          <button
            onClick={() => setActiveTab('integrations')}
            className={`p-3 rounded-lg flex items-center justify-center transition-all ${activeTab === 'integrations' ? 'bg-[#00FF9D]/10 text-[#00FF9D] shadow-[inset_2px_0_0_#00FF9D]' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
          >
            <Plug size={22} />
          </button>
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`p-3 rounded-lg flex items-center justify-center transition-all ${activeTab === 'telemetry' ? 'bg-white/10 text-white shadow-[inset_2px_0_0_#FFF]' : 'text-white/30 hover:text-white hover:bg-white/5'}`}
          >
            <Activity size={22} />
          </button>
        </div>

        <div className="grow"></div>
        <button className="text-white/30 hover:text-white p-3 rounded-lg hover:bg-white/5 transition-all">
          <Settings size={22} />
        </button>
      </div>

      <div className="flex-1 flex flex-col relative z-10">
        {activeTab === 'agents' && renderAgentArchitect()}
        {activeTab === 'integrations' && renderIntegrations()}
        {activeTab === 'telemetry' && renderTelemetry()}
      </div>
    </div>
  )
}
