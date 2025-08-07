import { APIs } from "@/utils/BotApis";
import axios from "axios";
import React, { useRef, useState } from "react";
import { toast } from "sonner";

type UploadedFile = {
  name: string;
  size: number;
};

const Encoded: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<UploadedFile | null>(null);
  const [chatInput, setChatInput] = useState<string>("");
  const [chatMessages, setChatMessages] = useState<{ sender: "user" | "bot"; message: string }[]>([
    {
      sender: "bot",
      message:
        "Hello! I'm your Resume AI Assistant. Upload your resume and I'll help you analyze it, suggest improvements, or answer questions about your experience.",
    },
  ]);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile({ name: file.name, size: file.size });
    }
  };

  const handleRemoveFile = () => {
    setUploadedFile(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSend = async () => {
    if (!chatInput.trim()) return;
    try {
      await axios.post(APIs.ENCODE, "")

      setChatMessages((prev) => [...prev, { sender: "user", message: chatInput }]);
      setChatInput("");

      // Simulate bot response for now
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            sender: "bot",
            message: "Thanks for your question! I'll analyze your resume and get back to you shortly.",
          },
        ]);
      }, 600);
    } catch (error: any) {
      toast.error(error.message)
    }
  };

  const handleSampleClick = (question: string) => {
    setChatInput(question);
  };

  const formatSize = (size: number) => {
    const kb = size / 1024;
    return kb < 1024 ? `${kb.toFixed(1)} KB` : `${(kb / 1024).toFixed(1)} MB`;
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-blue-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">📄 Resume Reader AI</h1>
          <p className="text-gray-600">Upload your resume and chat with AI about your experience</p>
        </div>

        {/* Upload Box */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div
            className="upload-area rounded-lg p-8 text-center cursor-pointer border border-dashed border-gray-300 hover:bg-purple-50"
            onClick={() => fileInputRef.current?.click()}
          >
            <div>
              <div className="text-6xl mb-4">📁</div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Upload Your Resume</h3>
              <p className="text-gray-500 mb-4">Drag and drop your resume file here or click to browse</p>
              <p className="text-sm text-gray-400">Supports PDF, DOC, DOCX files</p>
            </div>
            <input
              type="file"
              ref={fileInputRef}
              className="hidden"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
            />
          </div>

          {uploadedFile && (
            <div className="mt-4 p-4 bg-green-50 rounded-lg border border-green-200">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">✅</span>
                  <div>
                    <p className="font-semibold text-green-800">{uploadedFile.name}</p>
                    <p className="text-sm text-green-600">{formatSize(uploadedFile.size)}</p>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 font-semibold"
                  onClick={handleRemoveFile}
                >
                  Remove
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Chat Area */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-3">
                <span className="text-xl">🤖</span>
              </div>
              <div>
                <h3 className="font-semibold">Resume AI Assistant</h3>
                <p className="text-sm opacity-90">
                  {uploadedFile
                    ? "You can now ask questions about your resume"
                    : "Upload a resume to start chatting"}
                </p>
              </div>
            </div>
          </div>

          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-gray-50">
            {chatMessages.map((msg, index) => (
              <div key={index} className={`flex ${msg.sender === "bot" ? "items-start" : "justify-end"}`}>
                {msg.sender === "bot" && (
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm mr-2">
                    🤖
                  </div>
                )}
                <div
                  className={`${msg.sender === "bot"
                    ? "bg-purple-600 text-white rounded-lg p-3 max-w-xs"
                    : "bg-blue-100 text-gray-800 rounded-lg p-3 max-w-xs"
                    }`}
                >
                  <p className="text-sm">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="border-t p-4">
            <div className="flex space-x-3">
              <input
                type="text"
                placeholder="Ask me about your resume..."
                className="flex-1 border text-neutral-700 border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                disabled={!uploadedFile}
              />
              <button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleSend}
                disabled={!uploadedFile || !chatInput.trim()}
              >
                Send
              </button>
            </div>
          </div>
        </div>

        {/* Sample Questions */}
        {uploadedFile && (
          <div className="mt-6 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">💡 Try asking:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-neutral-700">
              {[
                "What are my key strengths based on my resume?",
                "How can I improve my resume?",
                "What skills should I highlight more?",
                "Is my experience relevant for [job title]?",
              ].map((q, i) => (
                <button
                  key={i}
                  className="text-left p-3 bg-purple-200 hover:bg-purple-300 rounded-lg transition-colors duration-200"
                  onClick={() => handleSampleClick(q)}
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Encoded;
