"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FloatingParticles } from "@/components/animations/floating-particles";
import { Button } from "@/components/ui/button";
import { Send, Sparkles, Mic } from "lucide-react";

interface Message {
  id: string;
  role: "user" | "ai";
  content: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    role: "ai",
    content: "Hey there 🌿 I'm here whenever you need me. How are you feeling right now?",
  },
];

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "ai",
        content: "I hear you. That sounds like a lot to carry. Would you like to explore that feeling together, or would a calming exercise help right now?",
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-surface-light">
      <FloatingParticles count={10} color="lavender" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 glass-strong px-6 py-4 flex items-center gap-3"
      >
        <div className="w-10 h-10 rounded-full gradient-calm flex items-center justify-center">
          <Sparkles size={18} className="text-white" />
        </div>
        <div>
          <p className="text-sm font-heading font-semibold text-ocean">Mindora AI</p>
          <div className="flex items-center gap-1.5">
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-mint"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-xs text-ocean/40">Always here for you</span>
          </div>
        </div>
      </motion.div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-4">
        <AnimatePresence>
          {messages.map((message) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-5 py-3.5 ${
                  message.role === "ai"
                    ? "glass rounded-2xl rounded-tl-sm"
                    : "bg-ocean text-white rounded-2xl rounded-tr-sm"
                }`}
              >
                <p className={`text-sm leading-relaxed ${
                  message.role === "ai" ? "text-ocean/80" : "text-white/90"
                }`}>
                  {message.content}
                </p>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* Typing indicator */}
        <AnimatePresence>
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex justify-start"
            >
              <div className="glass rounded-2xl rounded-tl-sm px-5 py-3.5">
                <div className="flex gap-1.5">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 rounded-full bg-mint/60"
                      animate={{ y: [0, -6, 0] }}
                      transition={{
                        duration: 0.8,
                        repeat: Infinity,
                        delay: i * 0.15,
                      }}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 px-4 pb-6 pt-2"
      >
        <div className="glass-strong rounded-2xl px-4 py-3 flex items-center gap-3 shadow-elevated">
          <button className="w-9 h-9 rounded-xl bg-lavender/10 flex items-center justify-center text-lavender hover:bg-lavender/20 transition-colors">
            <Mic size={16} />
          </button>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Share what's on your mind..."
            className="flex-1 bg-transparent text-sm text-ocean placeholder:text-ocean/30 outline-none"
          />
          <Button
            variant="mint"
            size="icon"
            onClick={handleSend}
            disabled={!input.trim()}
            className="w-9 h-9 rounded-xl"
          >
            <Send size={14} />
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
