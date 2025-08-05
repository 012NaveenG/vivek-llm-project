
const Ssrf = () => {
    return (
        <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen">
            {/* <!-- Header --> */}
            <header className="bg-white/10 backdrop-blur-md border-b border-white/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-lg">SB</span>
                            </div>
                            <h1 className="text-2xl font-bold text-white">SecureBank</h1>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="text-white/80 hover:text-white transition-colors">Dashboard</a>
                            <a href="#" className="text-white/80 hover:text-white transition-colors">Transfers</a>
                            <a href="#" className="text-white/80 hover:text-white transition-colors">Cards</a>
                            <a href="#" className="text-white/80 hover:text-white transition-colors">Support</a>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                                <span className="text-white text-sm font-semibold">JD</span>
                            </div>
                            <span className="text-white hidden sm:block">John Doe</span>
                        </div>
                    </div>
                </div>
            </header>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

                    <div className="lg:col-span-1 space-y-6">
                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <h3 className="text-white font-semibold mb-4">Account Balance</h3>
                            <p className="text-3xl font-bold text-white">$12,847.32</p>
                            <p className="text-green-400 text-sm mt-2">+2.4% this month</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <h3 className="text-white font-semibold mb-4">Recent Activity</h3>
                            <div className="space-y-3">
                                <div className="flex justify-between items-center">
                                    <span className="text-white/80 text-sm">Coffee Shop</span>
                                    <span className="text-red-400 text-sm">-$4.50</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white/80 text-sm">Salary Deposit</span>
                                    <span className="text-green-400 text-sm">+$3,200</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-white/80 text-sm">Grocery Store</span>
                                    <span className="text-red-400 text-sm">-$67.89</span>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                            <h3 className="text-white font-semibold mb-4">Quick Actions</h3>
                            <div className="space-y-3">
                                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm">
                                    Transfer Money
                                </button>
                                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors text-sm">
                                    Pay Bills
                                </button>
                                <button className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg transition-colors text-sm">
                                    View Statements
                                </button>
                            </div>
                        </div>
                    </div>

                    <BankingAssistantBot />
                </div>
            </div>
        </div>
    )
}

export default Ssrf


import React, { useEffect, useRef, useState } from 'react';

const botResponses: Record<string, string> = {
    'check my balance':
        'Your current account balance is $12,847.32. You have $2,500 in your savings account and $847.32 available credit on your card. 💰',
    'recent transactions':
        'Here are your recent transactions:\n• Coffee Shop - $4.50 (Today)\n• Salary Deposit + $3,200 (Yesterday)\n• Grocery Store - $67.89 (2 days ago)\n• Gas Station - $45.20 (3 days ago) 📊',
    'transfer money':
        'I can help you transfer money! You can transfer to:\n• Your own accounts\n• Other SecureBank customers\n• External bank accounts\n\nWould you like to start a transfer? 💸',
    'pay bills':
        'I can help you pay bills! Your upcoming bills:\n• Electric Bill - $89.50 (Due in 3 days)\n• Internet - $65.00 (Due in 5 days)\n• Credit Card - $234.67 (Due in 8 days)\n\nWhich would you like to pay? 💳',
    help:
        'I can assist you with:\n• Account balance and transactions\n• Money transfers\n• Bill payments\n• Card management\n• Account statements\n• Security settings\n\nWhat would you like help with? 🤝',
    default:
        'I understand you need help with banking. I can assist with account inquiries, transfers, payments, and more. Could you please be more specific about what you need? 😊',
};

type Message = {
    text: string;
    isUser: boolean;
};

const BankingAssistantBot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([{
        text: "Hello John! 👋 I'm your SecureBank assistant. I can help you with account inquiries, transfers, bill payments, and more. What would you like to do today?",
        isUser: false
    }]);
    const [input, setInput] = useState('');
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages]);

    const addMessage = (text: string, isUser: boolean) => {
        setMessages((prev) => [...prev, { text, isUser }]);
    };

    const getBotResponse = (msg: string) => {
        const key = Object.keys(botResponses).find((k) => msg.toLowerCase().includes(k));
        return botResponses[key || 'default'];
    };

    const handleSend = () => {
        if (!input.trim()) return;
        const userMsg = input.trim();
        addMessage(userMsg, true);
        setInput('');

        setTimeout(() => {
            const botMsg = getBotResponse(userMsg);
            addMessage(botMsg, false);
        }, 1500);
    };

    const handleQuickMessage = (text: string) => {
        addMessage(text, true);
        setTimeout(() => {
            const botMsg = getBotResponse(text);
            addMessage(botMsg, false);
        }, 1500);
    };

    return (
        <div className="lg:col-span-3">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 h-[700px] flex flex-col">
                {/* Chat Header */}
                <div className="p-6 border-b border-white/20">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                />
                            </svg>
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-white">Banking Assistant</h2>
                            <p className="text-white/60 text-sm">Online • Ready to help with your banking needs</p>
                        </div>
                    </div>
                </div>

                {/* Chat Messages */}
                <div ref={chatRef} className="flex-1 p-6 overflow-y-auto space-y-4">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-start space-x-3 slide-up ${msg.isUser ? 'justify-end flex-row-reverse' : ''}`}>
                            <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 bg-gradient-to-r from-pink-500 to-violet-500 text-white text-sm font-semibold">
                                {msg.isUser ? 'JD' : (
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                                        />
                                    </svg>
                                )}
                            </div>
                            <div
                                className={`text-white p-4 rounded-2xl max-w-md ${msg.isUser ? 'bg-green-500 rounded-tr-md ' : 'bg-white/20 rounded-tl-md'
                                    }`}
                            >
                                <p className="whitespace-pre-line">{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Quick Suggestions */}
                <div className="px-6 py-4 border-t border-white/20">
                    <p className="text-white/60 text-sm mb-3">Quick suggestions:</p>
                    <div className="flex flex-wrap gap-2">
                        {['Check my balance', 'Recent transactions', 'Transfer money', 'Pay bills'].map((text) => (
                            <button
                                key={text}
                                onClick={() => handleQuickMessage(text)}
                                className="bg-white/20 hover:bg-white/30 text-white text-sm px-4 py-2 rounded-full transition-colors"
                            >
                                {text}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Input */}
                <div className="p-6 border-t border-white/20">
                    <div className="flex space-x-4">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                            placeholder="Type your message here..."
                            className="flex-1 bg-white/20 border border-white/30 rounded-xl px-4 py-3 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                        <button
                            onClick={handleSend}
                            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl transition-all duration-200 flex items-center space-x-2"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                            <span>Send</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
