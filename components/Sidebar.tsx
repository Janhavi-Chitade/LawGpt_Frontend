import { Plus, Clock, FileText, Settings, Search, Menu } from "lucide-react";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen sidebar-gradient text-white flex flex-col border-r border-gray-800">
      <div className="p-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="pb-2 flex  text-white font-bold text-3xl ">
            ⚻
          </div>
          <span className="font-bold text-xl tracking-tighter text-white">
            LAW<span className="text-gray-400 font-medium">GPT</span>
          </span>
        </div>
        <Menu className="w-5 h-5 text-gray-400 cursor-pointer hover:text-white transition-colors" />
      </div>

      <div className="px-4 mb-8">
        <button className="w-full bg-white text-black py-2.5 rounded-md flex items-center justify-center gap-2 font-semibold hover:bg-gray-200 transition-colors">
          <Plus className="w-4 h-4" />
          <span>New Consultation</span>
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 space-y-6 text-sm">
        <div>
          <div className="text-gray-500 font-bold uppercase text-[10px] tracking-wider mb-2 px-2">
            Today
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-3 p-2 rounded-md bg-gray-900/50 text-white cursor-pointer group">
              <FileText className="w-4 h-4 text-gray-400 group-hover:text-white" />
              <span className="truncate">Force Majeure Clause Review</span>
            </div>
            <div className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-900/50 text-gray-400 hover:text-white cursor-pointer transition-colors group">
              <Plus className="w-4 h-4 text-gray-500 group-hover:text-white" />
              <span className="truncate">Employment Agreement Alpha</span>
            </div>
          </div>
        </div>

        <div>
          <div className="text-gray-500 font-bold uppercase text-[10px] tracking-wider mb-2 px-2">
            Previous 7 Days
          </div>
          <div className="space-y-1 text-gray-400">
            {[
              "NDAs - Q3 Compliance",
              "Property Dispute - Smith vs. J...",
              "Intellectual Property Audit",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-2 rounded-md hover:bg-gray-900/50 hover:text-white cursor-pointer transition-colors"
              >
                <Plus className="w-4 h-4 text-gray-500" />
                <span className="truncate">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-gray-800 mt-auto">
        <div className="flex items-center justify-between p-2 rounded-md hover:bg-gray-900 transition-colors cursor-pointer group">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-md bg-gray-700 flex items-center justify-center font-bold text-xs">
              JD
            </div>
            <div>
              <div className="text-sm font-semibold">Jane Doe</div>
              <div className="text-[10px] text-gray-500">Senior Associate</div>
            </div>
          </div>
          <Settings className="w-4 h-4 text-gray-500 group-hover:text-white" />
        </div>
      </div>
    </div>
  );
}
