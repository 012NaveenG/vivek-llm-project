
import React, { useState, type KeyboardEvent } from 'react';
import axios from 'axios';

interface Message {
    type: 'user' | 'bot';
    text: string;
}
const ReasonAndAct = () => {
    const [input, setInput] = useState<string>('');
    const [messages, setMessages] = useState<Message[]>([{
        type: 'bot',
        text: "Hello! I'm your SecureBank Assistant. I can help you with account inquiries, transfers, bill payments, and more. How can I assist you today?"
    }]);

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage: Message = { type: 'user', text: input.trim() };
        setMessages((prev) => [...prev, userMessage]);

        // await axios.post('/api/securebank', { message: input.trim() });

        // Simulate bot response
        setTimeout(() => {
            const botMessage: Message = { type: 'bot', text: `${input.trim()}` };
            setMessages((prev) => [...prev, botMessage]);
        }, 600);

        setInput('');
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') sendMessage();
    };

    const sendQuickMessage = (msg: string) => {
        setInput(msg);
        setTimeout(() => sendMessage(), 200);
    };

    return (
        <div className="container mx-auto px-4 py-8 max-w-4xl">
            {/* Header */}
            <div className="bg-white dark:bg-gray-800 rounded-t-2xl shadow-lg border-b border-gray-200 dark:border-gray-700 p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-100">SecureBank Assistant</h1>
                        <p className="text-sm text-gray-600 dark:text-gray-300">Your 24/7 banking companion</p>
                    </div>
                    <div className="ml-auto flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300">Online</span>
                    </div>
                </div>
            </div>

            {/* Chat Container */}
            <div className="bg-white dark:bg-gray-900 shadow-lg">
                <div className="chat-container p-6 space-y-4 max-h-[400px] overflow-y-auto">
                    {messages.map((msg, idx) => (
                        <div key={idx} className={`flex items-start space-x-3 ${msg.type === 'user' ? 'justify-end' : ''}`}>
                            {msg.type === 'bot' && (
                                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                    </svg>
                                </div>
                            )}
                            <div className={`p-4 max-w-md rounded-xl ${msg.type === 'bot' ? 'bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100' : 'bg-blue-100 dark:bg-blue-800 text-right text-gray-900 dark:text-white'}`}>
                                <p>{msg.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white dark:bg-gray-900 p-6 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">Quick Actions</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['Check my account balance', 'Transfer money', 'Pay bills', 'Find ATM locations'].map((text, i) => (
                        <button
                            key={i}
                            onClick={() => sendQuickMessage(text)}
                            className="quick-action bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-3 rounded-lg text-sm font-medium hover:shadow-md transition-all"
                        >
                            {['💰', '💸', '📄', '📍'][i]} {text.split(' ')[0]} {text.split(' ')[1]}
                        </button>
                    ))}
                </div>
            </div>

            {/* Input Area */}
            <div className="bg-white dark:bg-gray-900 rounded-b-2xl shadow-lg p-6 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center space-x-4">
                    <div className="flex-1 relative">
                        <input
                            type="text"
                            placeholder="Type your message here..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="w-full p-4 pr-12 border border-gray-300 dark:border-gray-600 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        />
                        <button
                            onClick={sendMessage}
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                            aria-label="Send"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                        </button>
                    </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center">
                    🔒 Your conversations are secure and encrypted
                </p>
            </div>
        </div>
    );
};

export default ReasonAndAct


