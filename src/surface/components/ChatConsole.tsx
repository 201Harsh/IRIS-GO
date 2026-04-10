import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User } from 'lucide-react';

export default function ChatConsole() {
  const [inputValue, setInputValue] = useState('');
  const endOfChatRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState([
    { id: 1, role: 'system', text: 'IRIS Engine initialized. How can I help you automate today?' },
  ]);

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: 'system',
          text: 'Executing that workflow now. I have synced the repository and updated the local files.',
        },
      ]);
    }, 1000);
  };

  return (
    <div className="flex-1 flex flex-col h-full bg-transparent max-w-4xl mx-auto w-full">
      <div className="flex-1 p-4 md:p-8 overflow-y-auto custom-scrollbar space-y-6">
        <AnimatePresence>
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`flex max-w-[85%] md:max-w-[75%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}
              >
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-auto ${
                    msg.role === 'user' ? 'bg-white/10 ml-3' : 'bg-[#00FF9D]/10 text-[#00FF9D] mr-3'
                  }`}
                >
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>

                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-white/10 text-white rounded-br-sm'
                      : 'bg-[#00FF9D]/5 border border-[#00FF9D]/20 text-white/90 rounded-bl-sm shadow-[0_4px_20px_rgba(0,255,157,0.05)]'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
        <div ref={endOfChatRef} className="h-4" />
      </div>

      <div className="p-4 md:p-8 pt-0">
        <form
          onSubmit={handleSend}
          className="flex items-center bg-[#050505] border border-white/10 rounded-2xl focus-within:border-[#00FF9D]/50 focus-within:ring-1 focus-within:ring-[#00FF9D]/50 transition-all p-1 shadow-lg"
        >
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Ask IRIS to execute a task..."
            className="flex-1 bg-transparent text-white placeholder-white/30 outline-none py-3 px-4 text-sm"
          />
          <button
            type="submit"
            disabled={!inputValue.trim()}
            className="p-3 bg-[#00FF9D]/10 text-[#00FF9D] disabled:opacity-30 disabled:text-white/50 hover:bg-[#00FF9D]/20 rounded-xl transition-colors m-1"
          >
            <Send size={18} className="ml-1" />
          </button>
        </form>
        <div className="text-center mt-3">
          <span className="text-[10px] text-white/30 tracking-wider">
            IRIS GO Engine has root access to authorized tools.
          </span>
        </div>
      </div>
    </div>
  );
}
