import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import ChatConsole from './components/ChatConsole';
import Gateways from './components/Gateways';
import SystemConfig from './components/SystemConfig';

export default function App() {
  const [activeTab, setActiveTab] = useState('console');

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <div className="flex h-[100dvh] w-screen bg-[#020202] text-white font-sans overflow-hidden selection:bg-[#00FF9D] selection:text-black relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FF9D]/[0.02] rounded-full blur-[100px] pointer-events-none" />

      <Sidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="flex-1 flex flex-col relative z-10 w-full">
        <Header onMenuClick={() => setIsMobileMenuOpen(true)} />

        <div className="flex-1 overflow-hidden relative">{renderContent()}</div>
      </div>
    </div>
  );
}
