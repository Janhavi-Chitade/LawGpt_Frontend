"use client";

import { useState, useRef, useEffect } from "react";
import { sendMessage } from "@/services/api";
import MessageBubble from "./MessageBubble";
import InputBox from "./InputBox";
import { Message } from "../types/chat";
import { Scale } from "lucide-react";

export default function ChatBox() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (text: string) => {
    setIsLoading(true);
    const newMessage: Message = { role: "user", content: text };
    setMessages((prev) => [...prev, newMessage]);

    try {
      const response = await sendMessage(text);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: response || "No response." },
      ]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Server error occurred." },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full w-full bg-white relative overflow-hidden">
      {/* Messages Area - Strictly Scrollable */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto pt-8 pb-[280px] px-4 space-y-10 scroll-smooth scrollbar-hide"
      >
        {messages.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-center max-w-lg mx-auto space-y-6 py-20 animate-in fade-in zoom-in-95 duration-700">
            <div className="w-20 h-20 bg-gray-50 rounded-[2rem] flex items-center justify-center mb-4">
              <Scale size={36} className="text-gray-300" />
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              Legal Intelligence & Research
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed font-medium">
              Start a new analysis or ask questions regarding indexed
              jurisdictional case law. Our private local models ensure client
              confidentiality is maintained.
            </p>
          </div>
        ) : (
          <div className="space-y-10">
            {messages.map((msg, index) => (
              <MessageBubble key={index} message={msg} />
            ))}
          </div>
        )}
        {isLoading && (
          <div className="flex gap-6 mb-12 animate-pulse pr-10">
            <div className="w-10 h-10 rounded-full bg-black flex-shrink-0" />
            <div className="flex-1 space-y-2 py-1">
              <div className="h-2 bg-gray-100 rounded w-1/4" />
              <div className="h-4 bg-gray-50 rounded" />
              <div className="h-4 bg-gray-50 rounded w-5/6" />
            </div>
          </div>
        )}
      </div>

      {/* Fixed Input Area - Absolute position to ensure it NEVER moves */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white to-white/0 pt-10 pb-8 px-4 z-20">
        <InputBox onSend={handleSend} isLoading={isLoading} />
      </div>
    </div>
  );
}
