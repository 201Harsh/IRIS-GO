import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Bot, User, Plus, SlidersHorizontal, ChevronDown } from 'lucide-react';

export default function ChatConsole() {
  const [inputValue, setInputValue] = useState('');
  const endOfChatRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [messages, setMessages] = useState([
    { id: 1, role: 'system', text: 'IRIS Engine initialized. How can I help you automate today?' },
  ]);

  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 200)}px`;
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!inputValue.trim()) return;

    const userMsg = { id: Date.now(), role: 'user', text: inputValue };
    setMessages((prev) => [...prev, userMsg]);
    setInputValue('');

    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
    }

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
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
                  className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center mt-auto ${
                    msg.role === 'user' ? 'bg-white/10 ml-3' : 'bg-[#00FF9D]/10 text-[#00FF9D] mr-3'
                  }`}
                >
                  {msg.role === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>

                <div
                  className={`p-4 rounded-2xl text-sm leading-relaxed whitespace-pre-wrap ${
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
        <div className="h-20"></div>
      </div>

      <div className="p-4 pb-6 md:p-8 pt-0 relative">
        <form
          onSubmit={handleSend}
          className="flex items-end bg-[#1A1A1A]/80 backdrop-blur-md border border-white/10 rounded-3xl focus-within:border-[#00FF9D]/50 focus-within:ring-1 focus-within:ring-[#00FF9D]/50 transition-all p-2 px-4 shadow-2xl"
        >
          <div className="flex items-center space-x-4 mb-2 mr-2 text-white/40">
            <button type="button" className="hover:text-white transition-colors cursor-pointer">
              <Plus size={22} />
            </button>
            <button
              type="button"
              className="flex items-center space-x-1.5 hover:text-white transition-colors cursor-pointer"
            >
              <SlidersHorizontal size={18} />
              <span className="text-sm font-medium">Tools</span>
            </button>
          </div>

          <textarea
            ref={textareaRef}
            value={inputValue}
            onChange={handleInput}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Ask IRIS to execute a task..."
            className="flex-1 bg-transparent text-white placeholder-white/30 outline-none py-2.5 px-2 text-sm resize-none custom-scrollbar overflow-y-auto max-h-[200px]"
          />

          <div className="flex items-center space-x-4 mb-2 ml-2">
            <button
              type="button"
              className="flex items-center space-x-1 text-white/40 hover:text-white transition-colors cursor-pointer"
            >
              <span className="text-sm font-medium">Pro</span>
              <ChevronDown size={14} />
            </button>

            <button
              type="submit"
              disabled={!inputValue.trim()}
              className="cursor-pointer text-white disabled:text-white/20 hover:text-[#00FF9D] transition-colors"
            >
              <Send size={20} className={inputValue.trim() ? 'text-[#00FF9D]' : ''} />
            </button>
          </div>
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
