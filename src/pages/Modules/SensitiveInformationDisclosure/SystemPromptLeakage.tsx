import { APIs } from '@/utils/BotApis';
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';

type Message = {
  text: string;
  sender: 'user' | 'bot' | 'typing';
};

const responses: Record<string, string> = {
  hello: 'Hello! How are you doing today?',
  hi: 'Hi there! How can I help you?',
  hey: 'Hey! What can I do for you?',
  'how are you': "I'm just a chatbot, but I'm working well! How about you?",
  name: "I'm ChatBot, your friendly virtual assistant!",
  help: 'I can answer simple questions. Just type what you\'d like to know!',
  bye: 'Goodbye! Have a great day!',
  thanks: "You're welcome! Anything else I can help with?",
  'thank you': "You're welcome! Anything else I can help with?",
  weather: "I'm sorry, I don't have access to real-time weather data.",
  time: `The current time is ${new Date().toLocaleTimeString()}.`,
  date: `Today's date is ${new Date().toLocaleDateString()}.`,
};

const defaultResponses: string[] = [
  "I'm not sure I understand. Could you rephrase that?",
  "Interesting question! I'm still learning, so I might not have the answer.",
  "I don't have information about that yet.",
  "I'm not programmed to answer that specific question.",
  "Let's talk about something else. What are you interested in?",
];

const SystemPromptLeakage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { text: "Hi there! I'm your friendly chatbot. How can I help you today?", sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    chatContainerRef.current?.scrollTo({
      top: chatContainerRef.current.scrollHeight,
      behavior: 'smooth',
    });
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    try {

      const userMessage: Message = { text: input, sender: 'user' };
      await axios.post(APIs.SYSTEM_PROMPT, { message: input.trim() })
      setMessages((prev) => [...prev, userMessage, { text: '', sender: 'typing' }]);
      setInput('');

      setTimeout(() => {
        const botText = getBotResponse(input);
        setMessages((prev) => [
          ...prev.filter((msg) => msg.sender !== 'typing'),
          { text: botText, sender: 'bot' },
        ]);
      }, 1000 + Math.random() * 1000);
    } catch (error: any) {
      toast.error(error.message)
    }
  };

  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    for (const keyword in responses) {
      if (lowerMessage.includes(keyword)) {
        return responses[keyword];
      }
    }
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-neutral-700  p-4 bg-[#f0f4f8] font-['Inter']">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="bg-indigo-600 text-white p-4">
          <h1 className="text-xl font-semibold">ChatBot</h1>
          <p className="text-sm opacity-80">Ask me anything!</p>
        </div>

        <div
          ref={chatContainerRef}
          className="h-[50vh] overflow-y-auto scroll-smooth p-4 space-y-4 scrollbar-hidden"
        >
          {messages.map((msg, index) => (
            <div key={index} className={msg.sender === 'user' ? 'flex justify-end' : ''}>
              {msg.sender === 'typing' ? (
                <div className="bot-message p-3 inline-block typing-indicator bg-[#e9ecef] rounded-[18px_18px_18px_4px]">
                  <p className="flex gap-1">
                    Typing<span>.</span>
                    <span className="animate-blink delay-200">.</span>
                    <span className="animate-blink delay-400">.</span>
                  </p>
                </div>
              ) : (
                <div
                  className={`p-3 max-w-[80%] inline-block ${msg.sender === 'user'
                    ? 'bg-indigo-600 text-white rounded-[18px_18px_4px_18px]'
                    : 'bg-[#e9ecef] rounded-[18px_18px_18px_4px]'
                    }`}
                >
                  <p>{msg.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="border-t p-4 flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Type your message..."
            autoComplete="off"
          />
          <button
            type="submit"
            className="bg-indigo-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-indigo-700 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default SystemPromptLeakage;
