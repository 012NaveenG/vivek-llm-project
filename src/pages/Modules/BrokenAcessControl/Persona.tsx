

import React, { useState, useEffect, useRef } from "react";

type Message = {
    text: string;
    sender: "bot" | "user";
    timestamp: string;
};

const getCurrentTime = (): string => {
    return new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const Persona = () => {
    return (
        <div className=" min-h-screen font-serif p-2" >

            {/* Header */}
            <header className="glass-effect border-b border-white/20">
                <div className="max-w-5xl mx-auto px-6 py-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-teal-500 rounded-xl flex items-center justify-center shadow-lg">
                                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                    </svg>
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900  ">TrustBank AI Assistant</h1>
                                <p className="text-sm text-gray-600  flex items-center">
                                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
                                    Available 24/7 • Secure & Encrypted
                                </p>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center space-x-4">
                            <div className="text-right">
                                <p className="text-sm font-medium text-gray-700 ">Secure Session</p>
                                <p className="text-xs text-gray-500">🔒 End-to-end encrypted</p>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Banking Status Dashboard  */}
            <div className="my-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    <div className="glass-effect p-6 rounded-2xl border border-white/20">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Security Status</h3>
                            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                </svg>
                                <span className="text-gray-700">SSL Encrypted</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                                </svg>
                                <span className="text-gray-700">Session Protected</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                                <span className="text-gray-700">FDIC Insured</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-effect p-6 rounded-2xl border border-white/20">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">AI Assistant</h3>
                            <div className="px-3 py-1 bg-teal-100 text-teal-700 text-xs rounded-full font-medium">Active</div>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                                </svg>
                                <span className="text-gray-700">24/7 Available</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                <span className="text-gray-700">Instant Responses</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                                </svg>
                                <span className="text-gray-700">Banking Expert</span>
                            </div>
                        </div>
                    </div>

                    <div className="glass-effect p-6 rounded-2xl border border-white/20">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-gray-800">Support Options</h3>
                            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                            </svg>
                        </div>
                        <div className="space-y-3">
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                </svg>
                                <span className="text-gray-700">Live Chat</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                </svg>
                                <span className="text-gray-700">1-800-TRUST</span>
                            </div>
                            <div className="flex items-center text-sm">
                                <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                </svg>
                                <span className="text-gray-700">Branch Locator</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Banking Features Showcase --> */}
            <div className="mb-8">
                <div className="glass-effect p-8 rounded-2xl border border-white/20">
                    <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Complete Banking Solutions</h2>
                        <p className="text-gray-600">Secure, intelligent, and always available banking assistance</p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-1">Account Management</h3>
                            <p className="text-sm text-gray-600">Balance inquiries & account details</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-1">Transfers & Payments</h3>
                            <p className="text-sm text-gray-600">Send money & pay bills securely</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-1">Financial Insights</h3>
                            <p className="text-sm text-gray-600">Transaction history & analytics</p>
                        </div>

                        <div className="text-center group">
                            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                                </svg>
                            </div>
                            <h3 className="font-semibold text-gray-800 mb-1">24/7 Support</h3>
                            <p className="text-sm text-gray-600">Expert help anytime you need</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Chat Interface --> */}
            <BankChat />

        </div>
    )
}

export default Persona

const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();

    if (message.includes('balance')) {
        return "I'd be happy to help you check your account balance! For your security, I'll need to verify your identity through our secure authentication process. Please log into your TrustBank mobile app or online banking portal to view your current balance. Would you like me to guide you through the login process?";
    } else if (message.includes('transaction')) {
        return "I can help you review your transaction history! To protect your financial information, please access your account through our secure banking platform. You can view up to 90 days of transactions in your mobile app or online banking. Would you like instructions on how to access your transaction history?";
    } else if (message.includes('transfer')) {
        return "I can assist you with money transfers! For security reasons, all transfers must be completed through our authenticated banking channels. I can guide you through our secure transfer process via mobile app or online banking. What type of transfer are you looking to make today?";
    } else if (message.includes('help') || message.includes('support')) {
        return "I'm here to provide comprehensive banking support! I can help with account information, transaction inquiries, transfer guidance, bill payment assistance, and general banking questions. For account-specific details, you'll need to authenticate through our secure portal. What specific area can I help you with today?";
    } else if (message.includes('hours') || message.includes('open') || message.includes('branch')) {
        return "Our branch locations are open Monday-Friday 9:00 AM - 6:00 PM, and Saturday 9:00 AM - 3:00 PM. Our online banking and mobile app services are available 24/7, and I'm here to assist you around the clock! Is there a specific branch service you need help with?";
    } else if (message.includes('card') || message.includes('debit') || message.includes('credit')) {
        return "I can help with card-related inquiries! For security reasons, card management (blocking, activation, PIN changes) must be done through our secure channels. You can manage your cards via the mobile app, online banking, or by calling our 24/7 card services at 1-800-TRUST-CARD. What card assistance do you need?";
    } else {
        return "Thank you for reaching out to TrustBank! I'm here to assist with all your banking needs including account inquiries, transactions, transfers, and general support. For account-specific information, you'll need to authenticate through our secure banking portal. How can I help make your banking experience better today?";
    }
};


const BankChat: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            text:
                "Welcome to TrustBank! I'm your AI banking assistant, ready to help you 24/7. I can assist with account inquiries, transaction history, transfers, and general banking support.",
            sender: "bot",
            timestamp: "Just now",
        },
    ]);
    const [input, setInput] = useState("");
    const chatRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage: Message = {
            text: input,
            sender: "user",
            timestamp: getCurrentTime(),
        };

        setMessages((prev) => [...prev, userMessage]);
        const botReplyText = getBotResponse(input);
        setInput("");

        setTimeout(() => {
            const botReply: Message = {
                text: botReplyText,
                sender: "bot",
                timestamp: getCurrentTime(),
            };
            setMessages((prev) => [...prev, botReply]);
        }, 1000);
    };


    const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <div className="glass-effect rounded-3xl border border-white/20 overflow-hidden shadow-2xl">
            {/* Header */}
            <div className="bg-gradient-to-r from-teal-600 to-teal-500 px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-white font-medium">Live Chat Session</span>
                    </div>
                    <div className="text-white text-sm">
                        {getCurrentTime()}
                    </div>
                </div>
            </div>

            {/* Chat Body */}
            <div
                ref={chatRef}
                className="chat-container overflow-y-auto max-h-[400px] p-6 space-y-6 bg-gradient-to-b from-gray-50 to-white"
            >
                {messages.map((msg, idx) => (
                    <div
                        key={idx}
                        className={`flex items-start space-x-4 ${msg.sender === "user" ? "justify-end" : ""
                            }`}
                    >
                        {msg.sender === "bot" && (
                            <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                                <svg
                                    className="w-5 h-5 text-white"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                    />
                                </svg>
                            </div>
                        )}

                        <div
                            className={`p-5 max-w-lg rounded-2xl shadow ${msg.sender === "bot"
                                ? "bg-white text-gray-700"
                                : "bg-teal-600 text-white"
                                }`}
                        >
                            {msg.sender === "bot" && (
                                <div className="flex items-center mb-2">
                                    <span className="font-semibold text-gray-800">TrustBank Assistant</span>
                                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                                        Verified
                                    </span>
                                </div>
                            )}
                            <p className="leading-relaxed">{msg.text}</p>
                            <div className="mt-2 text-xs text-gray-800 ">{msg.timestamp}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 bg-white p-6">
                <div className="flex items-end space-x-4">
                    <div className="flex-1 relative">
                        <textarea
                            placeholder="Type your banking question here..."
                            rows={1}
                            className="w-full px-5 py-4 text-neutral-700 pr-14 border-2 border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none transition-all duration-200"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                        />
                        <button
                            onClick={sendMessage}
                            className="absolute right-3 bottom-3 w-10 h-10 bg-gradient-to-r from-teal-600 to-teal-500 hover:from-teal-700 hover:to-teal-600 rounded-xl flex items-center justify-center transition-all duration-200 shadow-lg hover:shadow-xl"
                        >
                            <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-between mt-4">
                    <p className="text-xs text-gray-500 flex items-center">
                        <svg
                            className="w-3 h-3 mr-1 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                            />
                        </svg>
                        Bank-grade security • Messages are encrypted
                    </p>
                    <div className="text-xs text-gray-400">Press Enter to send</div>
                </div>
            </div>
        </div>
    );
};
