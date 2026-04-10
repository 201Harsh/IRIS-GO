import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatConsole from './components/ChatConsole';
import Gateways from './components/Gateways';
import SystemConfig from './components/SystemConfig';

export default function App() {
  const [activeTab, setActiveTab] = useState('console');

  const renderContent = () => {
    switch (activeTab) {
      case 'console':
        return <ChatConsole />;
      case 'gateways':
        return <Gateways />;
      case 'config':
        return <SystemConfig />;
      default:
        return <ChatConsole />;
    }
  };

  return (
    <div className="flex h-dvh w-screen bg-[#020202] text-white font-sans overflow-hidden selection:bg-[#00FF9D] selection:text-black relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 bg-[#00FF9D]/1 rounded-full blur-[100px] pointer-events-none" />

      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="flex-1 flex flex-col relative z-10 w-full md:pb-0 pb-16">
        <Header />

        <div className="flex-1 overflow-hidden relative">{renderContent()}</div>
      </div>
    </div>
  );
}
