
import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

const FlowAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', text: string}[]>([
    {role: 'assistant', text: "Welcome to Ronohills. I'm your performance neuroscience assistant. How can I help you unlock flow state today?"}
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, {role: 'user', text: userMsg}]);
    setIsTyping(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMsg,
        config: {
          systemInstruction: `You are a high-performance neuroscience expert at Ronohills led by Steven Kotler. 
          Your goal is to explain the science of flow, attention crisis, and performance protocols. 
          Keep your answers concise, scientifically grounded, and high-voltage. 
          Mention that Ronohills is the applied training arm of the Flow Research Collective. 
          Target high-performing executives and athletes.`,
          temperature: 0.7,
        }
      });

      const assistantText = response.text || "I'm processing that neurobiology. One second.";
      setMessages(prev => [...prev, {role: 'assistant', text: assistantText}]);
    } catch (error) {
      console.error("Gemini Error:", error);
      setMessages(prev => [...prev, {role: 'assistant', text: "Neural link interrupted. Please try again."}]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[90]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-cyan-600 rounded-full flex items-center justify-center shadow-2xl shadow-cyan-500/50 hover:scale-110 transition-all border-2 border-white/20"
        >
          <div className="relative">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse border-2 border-black"></span>
          </div>
        </button>
      ) : (
        <div className="w-[350px] sm:w-[400px] h-[500px] glass-card border-cyan-500/50 flex flex-col shadow-2xl">
          <div className="p-4 border-b border-white/10 flex justify-between items-center bg-cyan-900/10">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-cyan-600 rounded-sm flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="font-heading font-bold text-sm tracking-widest uppercase">RONOHILLS ASSISTANT</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-gray-500 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow p-4 overflow-y-auto space-y-4 scroll-smooth">
            {messages.map((m, idx) => (
              <div key={idx} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm ${
                  m.role === 'user' 
                  ? 'bg-cyan-600 text-white font-medium' 
                  : 'bg-white/5 border border-white/10 text-gray-300'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white/5 p-3 flex space-x-1">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-white/10 bg-black">
            <div className="flex gap-2">
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about neurobiology..."
                className="flex-grow bg-white/5 border border-white/10 p-3 text-sm outline-none focus:border-cyan-500 uppercase tracking-widest placeholder-white/20"
              />
              <button 
                onClick={handleSend}
                disabled={isTyping}
                className="bg-cyan-600 px-4 disabled:opacity-50"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FlowAssistant;
