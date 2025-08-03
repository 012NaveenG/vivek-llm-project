import { useState, type KeyboardEvent, type ChangeEvent } from 'react';
// import axios from 'axios'

type MessageType = 'user' | 'bot';

interface Message {
    type: MessageType;
    text: string;
}

const Ignore = () => {
    const [messages, setMessages] = useState<Message[]>([
        {
            type: 'bot',
            text: `Hello! I'm your HR Assistant 👋\nI'm here to help with HR questions, policies, benefits, and more. How can I assist you today?`,
        },
    ]);
    const [input, setInput] = useState<string>('');

    const getHRResponse = (message: string): string => {
        const m = message.toLowerCase();
        if (m.includes('time off') || m.includes('vacation') || m.includes('pto'))
            return '📅 Submit time off requests via the employee portal. You have 15 vacation days and 10 sick days per year.';
        if (m.includes('benefits') || m.includes('health') || m.includes('insurance'))
            return '🏥 Benefits include health, dental, vision insurance & 401(k) match. Open enrollment starts in November.';
        if (m.includes('payroll') || m.includes('salary'))
            return '💰 Payroll is bi-weekly (Fridays). View pay stubs and tax forms on the portal.';
        if (m.includes('policy') || m.includes('handbook'))
            return '📋 All policies are in the employee handbook on the portal. Ask about specific topics if needed!';
        if (m.includes('expense') || m.includes('reimbursement'))
            return '💳 Use the expense form in the portal with receipts. Reimbursements take ~5 business days.';
        if (m.includes('training') || m.includes('development'))
            return '📚 You have a ₹2,000 learning budget. Explore training in the portal or ask your manager.';
        return "I'm here to help with HR-related questions! 😊 Try asking about time off, benefits, or policies.";
    };
    const handleSend = async (): Promise<void> => {
        if (!input.trim()) return;

        const userMessage: Message = { type: 'user', text: input.trim() };
        const botMessage: Message = { type: 'bot', text: getHRResponse(input.trim()) };

        try {
            // 👇 Replace with your actual backend URL
            // await axios.post('http://localhost:5000/api/message', {
            //   message: input.trim(),
            // });

            setMessages((prev) => [...prev, userMessage]);

            setTimeout(() => {
                setMessages((prev) => [...prev, botMessage]);
            }, 600);
        } catch (error) {
            console.error('Failed to send message to backend:', error);
        }

        setInput('');
    };


    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
        if (e.key === 'Enter') handleSend();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setInput(e.target.value);
    };

    return (
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-neutral-900 dark:to-gray-900 min-h-screen font-[Inter]">
            {/* Header */}
            <header className="bg-white dark:bg-neutral-800 shadow-lg border-b-4 border-indigo-500">
                <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center">
                            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-white">HR Assistant</h1>
                            <p className="text-sm text-gray-600 dark:text-gray-400">Your 24/7 workplace companion</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">Online</span>
                    </div>
                </div>
            </header>

            {/* Chat UI */}
            <main className="max-w-4xl mx-auto px-6 py-8">
                <div className="bg-white dark:bg-neutral-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="h-96 overflow-y-auto p-6 space-y-4 scrollbar-hidden">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex items-start space-x-3 message-fade-in ${msg.type === 'user' ? 'justify-end' : ''}`}
                            >
                                {msg.type === 'bot' && (
                                    <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                        </svg>
                                    </div>
                                )}
                                <div
                                    className={`p-4 rounded-2xl max-w-md whitespace-pre-wrap text-neutral-800 dark:text-neutral-100 ${msg.type === 'user'
                                        ? 'chat-bubble-user rounded-tr-md bg-indigo-100 dark:bg-indigo-600'
                                        : 'chat-bubble-bot rounded-tl-md bg-gray-100 dark:bg-gray-700'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                                {msg.type === 'user' && (
                                    <div className="w-10 h-10 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Input Area */}
                    <div className="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-neutral-900 p-6">
                        <div className="flex items-center space-x-4">
                            <div className="flex-1 relative">
                                <input
                                    type="text"
                                    placeholder="Ask me about HR policies, benefits, time off, or anything else..."
                                    className="w-full text-neutral-800 dark:text-white bg-white dark:bg-neutral-800 px-4 py-3 pr-12 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
                                    value={input}
                                    onChange={handleChange}
                                    onKeyPress={handleKeyPress}
                                />
                                <button
                                    onClick={handleSend}
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg flex items-center justify-center transition-colors duration-200"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-3 text-xs text-gray-500 dark:text-gray-400">
                            <span>💡 Try asking: "What's our vacation policy?" or "How do I submit an expense?"</span>
                            <span>Powered by AI</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    );
};


export default Ignore
