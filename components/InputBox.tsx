"use client";

import { Paperclip, Mic, Send, Zap } from "lucide-react";
import { useState } from "react";

interface InputBoxProps {
  onSend: (text: string) => void;
  isLoading?: boolean;
}

export default function InputBox({ onSend, isLoading }: InputBoxProps) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isLoading) {
      onSend(text);
      setText("");
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="bg-white border border-gray-200 rounded-xl shadow-sm focus-within:border-gray-900 focus-within:ring-1 focus-within:ring-gray-900 transition-all overflow-hidden"
      >
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter follow-up query or paste contract language for analysis..."
          className="w-full p-6 pb-20 text-base bg-transparent border-none focus:ring-0 resize-none min-h-[140px] placeholder:text-gray-300 transition-all font-medium"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              handleSubmit(e);
            }
          }}
        />

        <div className="absolute right-6 top-6">
          <div className="flex items-center gap-1.5 px-2 py-1 bg-gray-50 border border-gray-100 rounded-full text-[9px] font-bold text-gray-500 uppercase tracking-widest">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            Legal Mode: Strict
          </div>
        </div>

        <div className="absolute mb-6 bottom-6 left-6 right-6 flex items-center justify-between">
          <div className="flex items-center gap-4 text-gray-400">
            <button
              type="button"
              className="hover:text-black transition-colors"
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="hover:text-black transition-colors"
            >
              <Mic className="w-5 h-5" />
            </button>
          </div>

          <button
            type="submit"
            disabled={!text.trim() || isLoading}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-md font-bold text-xs uppercase tracking-wider transition-all shadow-lg ${
              text.trim() && !isLoading
                ? "bg-black text-white hover:bg-gray-800 translate-y-0 shadow-gray-200"
                : "bg-gray-50 text-gray-300 translate-y-0.5 shadow-none cursor-not-allowed"
            }`}
          >
            {isLoading ? (
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Send className="w-3.5 h-3.5 fill-current" />
            )}
            <span>Send</span>
          </button>
        </div>
      </form>

      <div className="mt-4 flex justify-between items-center text-[10px] font-bold uppercase tracking-widest text-gray-300">
        <div>Jurisdiction: India</div>
        <div>Model: LAW-V3.2-OLLAMA</div>
        <div className="text-gray-400 font-medium">
          Confidential Client Workspace
        </div>
      </div>
    </div>
  );
}
