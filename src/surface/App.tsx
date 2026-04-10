import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import TerminalConsole from './components/ChatConsole';
import Gateways from './components/Gateways';
import SystemConfig from './components/SystemConfig';

export default function App() {
  const [activeTab, setActiveTab] = useState('console');

  const renderContent = () => {
    switch (activeTab) {
      case 'console':
        return <TerminalConsole />;
      case 'gateways':
        return <Gateways />;
      case 'config':
        return <SystemConfig />;
      default:
        return <TerminalConsole />;
    }
  };

  return (
    <div className="flex h-screen w-screen bg-[#020202] text-white font-mono overflow-hidden selection:bg-[#00FF9D] selection:text-black">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#00FF9D 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-[#00FF9D]/3 rounded-full blur-[120px] pointer-events-none" />

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col relative z-10">
        <Header />

        {renderContent()}
      </div>
    </div>
  );
}
