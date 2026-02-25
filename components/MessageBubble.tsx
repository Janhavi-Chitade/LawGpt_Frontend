import {
  User,
  Gavel,

} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function MessageBubble({ message }: { message: Message }) {
  const isUser = message.role === "user";

  return (
    <div className={`flex gap-6 mb-12 ${isUser ? "flex-row-reverse" : ""}`}>
      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${isUser ? "bg-gray-100 text-gray-500" : "bg-black text-white"}`}
      >
        {isUser ? <User className="w-5 h-5" /> : <Gavel className="w-5 h-5" />}
      </div>

      <div className={`flex-1 space-y-4 ${isUser ? "text-right" : ""}`}>
        <div
          className={`flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-gray-400 ${isUser ? "justify-end" : ""}`}
        >
          {isUser ? "User" : "LawGPT Analysis"}
        </div>

        {isUser ? (
          <div className="inline-block text-lg font-medium leading-relaxed text-gray-900 bg-gray-50/80 px-8 py-4 rounded-xl rounded-tr-none border border-gray-100 shadow-sm backdrop-blur-sm max-w-[85%]">
            {message.content}
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-500">
         
            <div className="prose prose-sm max-w-none text-gray-800 leading-relaxed text-left">
              {message.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("Answer:")) {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl font-bold text-gray-900 mt-0 mb-4"
                    >
                      {paragraph.replace("Answer:", "").trim()}
                    </h2>
                  );
                }
                if (paragraph.startsWith("Executive Summary")) {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl font-bold text-gray-900 mt-0 mb-4"
                    >
                      {paragraph}
                    </h2>
                  );
                }
                return (
                  <p key={idx} className="mb-4 text-gray-700 leading-7">
                    {paragraph}
                  </p>
                );
              })}
            </div>

           
          </div>
        )}
      </div>
    </div>
  );
}
