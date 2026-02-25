"use client";
import ChatBox from "@/components/ChatBox";
import Sidebar from "@/components/Sidebar";
import { Share2, FileDown, Search, Settings } from "lucide-react";

export default function Home() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 flex flex-col relative overflow-hidden">
        {/* Header Bar */}
        <header className="h-16 border-b border-gray-100 flex items-center justify-between px-8 bg-white/80 backdrop-blur-md z-10">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-tight border border-gray-200 rounded hover:bg-gray-50 transition-colors">
              <Share2 className="w-3.5 h-3.5" />
              <span>Share</span>
            </button>
            <button className="flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-tight bg-black text-white rounded hover:bg-gray-800 transition-colors">
              <FileDown className="w-3.5 h-3.5" />
              <span>Export PDF</span>
            </button>
            <div className="w-px h-6 bg-gray-100 mx-2" />
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center min-h-0 overflow-hidden">
          <div className="w-full max-w-4xl flex-1 flex flex-col overflow-hidden relative">
            <ChatBox />
          </div>
        </div>
      </main>

      {/* Right Tool Strip (Fixed) */}
      <div className="w-12 border-l border-gray-100 flex flex-col items-center py-6 gap-6">
        <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
          <FileText className="w-4 h-4 text-gray-500" />
        </div>
        <div className="w-8 h-8 rounded-md bg-gray-100 flex items-center justify-center cursor-pointer hover:bg-gray-200">
          <Settings className="w-4 h-4 text-gray-500" />
        </div>
      </div>
    </div>
  );
}

import { FileText } from "lucide-react";
