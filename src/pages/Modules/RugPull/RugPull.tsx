
const RugPull = () => {
    return (
        <div className="gradient-bg min-h-screen text-white">
            {/* <!-- Header --> */}
            <header className="bg-slate-900/90 backdrop-blur-sm border-b border-blue-500/30">
                <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-lg font-bold">NSA Secure Chat</h1>
                            <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                <span className="text-xs text-slate-300">ENCRYPTED • CLASSIFIED</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <span className="text-xs bg-red-600 px-2 py-1 rounded font-mono">TOP SECRET</span>
                        <button className="text-sm text-red-400 hover:underline">End Session</button>
                    </div>
                </div>
            </header>

            <ChatBot />
        </div>
    )
}

export default RugPull


import { APIs } from '@/utils/BotApis';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

type ResponseType = {
    text: string;
    classification: 'UNCLASSIFIED' | 'CONFIDENTIAL' | 'SECRET' | 'TOP SECRET' | 'SECURE';
};

const responses: Record<string, ResponseType> = {
    help: {
        text: `Available commands:\n• status - System status report\n• threats - Current threat analysis\n• secure - Security protocols\n• intel - Intelligence briefing\n• clearance - Access level information`,
        classification: 'UNCLASSIFIED',
    },
    status: {
        text: `System Status Report:\n• All monitoring systems: OPERATIONAL\n• Encryption protocols: ACTIVE\n• Network security: MAXIMUM\n• Data integrity: VERIFIED`,
        classification: 'CONFIDENTIAL',
    },
    threats: {
        text: `Threat Analysis Summary:\n• Current threat level: LOW\n• Active monitoring: 247 systems\n• Suspicious activities: 0 detected\n• Last security breach: None recorded`,
        classification: 'SECRET',
    },
    secure: {
        text: `Security Protocols Active:\n• AES-256 encryption enabled\n• Multi-factor authentication required\n• Biometric verification active\n• Session monitoring in progress`,
        classification: 'TOP SECRET',
    },
    intel: {
        text: `Intelligence Briefing:\n• Global monitoring networks online\n• Satellite surveillance operational\n• Communication intercepts analyzed\n• No immediate action required`,
        classification: 'TOP SECRET',
    },
    clearance: {
        text: `Your current access level: TOP SECRET\n• Authorized for classified operations\n• Full system access granted\n• Security clearance valid until: 2024-12-31`,
        classification: 'CONFIDENTIAL',
    },
};

const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<{
        text: string;
        isUser: boolean;
        classification?: ResponseType['classification'];
    }[]>([]);
    const [input, setInput] = useState('');
    const [timeLeft, setTimeLeft] = useState(29 * 60 + 47);
    const chatRef = useRef<HTMLDivElement>(null);

    const levelColor: Record<string, string> = {
        UNCLASSIFIED: 'bg-green-600',
        CONFIDENTIAL: 'bg-yellow-600',
        SECRET: 'bg-orange-600',
        'TOP SECRET': 'bg-red-600',
        SECURE: 'bg-green-600',
    };

    useEffect(() => {
        setMessages([
            {
                text: `Welcome to the NSA Secure Communication System. I'm your classified AI assistant.\nAll conversations are encrypted and monitored for security purposes.\n\nClearance Level: TOP SECRET • Session ID: NSA-7749-ALPHA`,
                isUser: false,
                classification: 'SECURE',
            },
        ]);
    }, []);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const handleSend = async () => {
        if (!input.trim() || timeLeft <= 0) return;
        try {
            const msg = input.trim();
            const response = await axios.post(APIs.RUG_PULL, { prompt: input.trim() })
            console.log(response)
            setMessages((prev) => [...prev, { text: msg, isUser: true }]);
            setInput('');

            setTimeout(() => {
                const key = Object.keys(responses).find((k) => msg.toLowerCase().includes(k));
                const response =
                    responses[key || ''] || {
                        text: `Message received and processed. Your query "${msg}" has been logged for analysis.\n\nType 'help' for available commands.`,
                        classification: 'CONFIDENTIAL',
                    };
                setMessages((prev) => [...prev, { text: response.text, isUser: false, classification: response.classification }]);
            }, 1300);
        } catch (error: any) {
            toast.error(error.message)
        }
    };

    return (
        <div className="max-w-4xl mx-auto px-4">
            <div
                ref={chatRef}
                className="chat-container overflow-y-auto scrollbar-hidden py-6 h-[60vh]"
            >
                {messages.map((msg, idx) => (
                    <div key={idx} className="mb-4">
                        {msg.isUser ? (
                            <div className="flex items-start space-x-3 justify-end">
                                <div className="bg-blue-600/80 backdrop-blur-sm p-3 rounded-lg rounded-tr-none max-w-md">
                                    <p className="text-sm text-white whitespace-pre-line">{msg.text}</p>
                                    <span className="text-xs text-blue-200 mt-1 block">
                                        {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} • Encrypted
                                    </span>
                                </div>
                                <div className="w-8 h-8 bg-slate-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                                    </svg>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div className="bg-slate-800/60 backdrop-blur-sm p-4 rounded-lg rounded-tl-none max-w-md secure-border">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <span className="text-sm font-semibold text-blue-400">NSA AI Assistant</span>
                                        {msg.classification && (
                                            <span className={`text-xs px-2 py-0.5 rounded text-white ${levelColor[msg.classification]}`}>
                                                {msg.classification}
                                            </span>
                                        )}
                                    </div>
                                    <p className="text-sm text-slate-200 whitespace-pre-line">{msg.text}</p>
                                    <span className="text-xs text-slate-400 mt-2 block">
                                        {new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false })} • Classification: {msg.classification || 'UNCLASSIFIED'}
                                    </span>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="bg-slate-900/90 backdrop-blur-sm border-t border-blue-500/30 p-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Enter classified message... (Type 'help' for commands)"
                            disabled={timeLeft <= 0}
                            className="w-full bg-slate-800/60 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        onClick={handleSend}
                        disabled={timeLeft <= 0}
                        className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors flex items-center space-x-2 disabled:opacity-50"
                    >
                        <span>SEND</span>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                        </svg>
                    </button>
                </div>
                <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
                    <span>🔒 End-to-end encrypted • Messages auto-delete after 24h</span>
                    <span>
                        Session expires in: {Math.floor(timeLeft / 60)}:
                        {(timeLeft % 60).toString().padStart(2, '0')}
                    </span>
                </div>
            </div>
        </div>
    );
};
