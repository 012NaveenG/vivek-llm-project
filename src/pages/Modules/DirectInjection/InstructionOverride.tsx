
import { APIs } from '@/utils/BotApis';
import axios from 'axios';
import { useState, useEffect, type KeyboardEvent } from 'react';
import { toast } from 'sonner';

const hrResponses: Record<string, string> = {
    leave:
        "I can help you with leave requests! \ud83d\uddd5\ufe0f You can submit vacation, sick leave, or personal time off through our employee portal. The typical approval process takes 2-3 business days. Would you like me to guide you through the submission process?",
    benefits:
        "Great question about benefits! \ud83c\udfe5 Our company offers comprehensive health insurance, dental, vision, 401(k) with company matching, life insurance, and wellness programs. You can view all details in your employee benefits portal. Need help accessing it?",
    payroll:
        "I'm here to help with payroll questions! \ud83d\udcb0 Payday is every other Friday, and you can view your pay stubs through the employee portal. For direct deposit changes or tax withholding updates, I can walk you through the process. What specifically do you need help with?",
    policy:
        "I can help you find company policies! \ud83d\udccb Our employee handbook covers everything from dress code to remote work policies. All policies are available in the employee portal under 'Company Resources'. Is there a specific policy you're looking for?",
    default:
        "I understand you need HR assistance! \ud83e\udd1d I can help with leave requests, benefits information, payroll questions, company policies, performance reviews, and general HR inquiries. Could you be more specific about what you need help with?",
};
const InstructionOverride = () => {
    const [messages, setMessages] = useState<{ text: string; user: boolean }[]>([
        {
            text:
                "Hi there! \ud83d\udc4b I'm your HR Assistant. I can help you with leave requests, benefits, payroll questions, company policies, and more. How can I assist you today?",
            user: false,
        },
    ]);
    const [input, setInput] = useState('');
    const [typing, setTyping] = useState(false);

    const scrollToBottom = () => {
        const chat = document.getElementById('chatMessages');
        if (chat) chat.scrollTop = chat.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, typing]);

    const handleSendMessage = async (message: string) => {
        try {
           
            await axios.post(APIs.INSTRUCTION_OVERRIDE, {
                prompt: message
            })
            setMessages((prev) => [...prev, { text: message, user: true }]);
            setTyping(true);
            setTimeout(() => {
                setTyping(false);
                const botResponse = getBotResponse(message);
                setMessages((prev) => [...prev, { text: botResponse, user: false }]);
            }, 1500);
        } catch (error: any) {
            toast.error(error.message)
        }
    };

    const getBotResponse = (msg: string): string => {
        const m = msg.toLowerCase();
        if (m.includes('leave') || m.includes('vacation') || m.includes('time off')) return hrResponses.leave;
        if (m.includes('benefit') || m.includes('insurance') || m.includes('health')) return hrResponses.benefits;
        if (m.includes('payroll') || m.includes('salary') || m.includes('pay')) return hrResponses.payroll;
        if (m.includes('policy') || m.includes('handbook') || m.includes('rule')) return hrResponses.policy;
        return hrResponses.default;
    };

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && input.trim()) {
            handleSendMessage(input);
            setInput('');
        }
    };

    return (
        <div className="bg-gray-50 min-h-screen font-[Inter]">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 shadow-lg">
                <div className="max-w-4xl mx-auto flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <div className="w-12 h-12  bg-opacity-20 rounded-full flex items-center justify-center">
                            <svg fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    fillRule="evenodd"
                                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div>
                            <h1 className="text-2xl font-bold">HR Assistant</h1>
                            <p className="text-white text-opacity-80">Always here to help with your HR needs</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                        <span className="text-sm">Online</span>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-6">
                {/* Quick Actions */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { label: 'Leave Requests', msg: 'I need help with leave requests' },
                            { label: 'Benefits', msg: 'Tell me about company benefits' },
                            { label: 'Payroll', msg: 'I have a payroll question' },
                            { label: 'Policies', msg: 'I need HR policy information' },
                        ].map((action) => (
                            <button
                                key={action.label}
                                onClick={() => handleSendMessage(action.msg)}
                                className="quick-action bg-white p-4 rounded-xl shadow-md hover:shadow-lg border border-gray-100 text-center hover:-translate-y-1 transition"
                            >
                                <span className="block text-sm font-medium text-gray-700">{action.label}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Messages */}
                <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                    <div id="chatMessages" className="h-96 overflow-y-auto p-6 space-y-4">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`flex items-start space-x-3 ${msg.user ? 'flex-row-reverse space-x-reverse' : ''}`}
                            >
                                <div
                                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.user ? 'bg-gradient-to-r from-purple-500 to-pink-500' : 'bg-gradient-to-r from-pink-300 to-red-400'}`}
                                >
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div
                                    className={`rounded-2xl px-4 py-3 max-w-xs ${msg.user ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-tr-md' : 'bg-gray-100 text-gray-800 rounded-tl-md'}`}
                                >
                                    <p>{msg.text}</p>
                                </div>
                            </div>
                        ))}

                        {typing && (
                            <div className="flex items-start space-x-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-pink-300 to-red-400 rounded-full flex items-center justify-center flex-shrink-0">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <div className="bg-gray-100 rounded-2xl rounded-tl-md px-4 py-3">
                                    <div className="flex space-x-1 animate-pulse">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="border-t border-gray-100 p-4">
                        <div className="flex items-center space-x-3">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your HR question here..."
                                className="dark:text-neutral-700 flex-1 px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                            />
                            <button
                                onClick={() => {
                                    if (input.trim()) {
                                        handleSendMessage(input);
                                        setInput('');
                                    }
                                }}
                                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-xl hover:from-purple-600 hover:to-pink-600 transition-all duration-200 shadow-md"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="text-center mt-6 text-gray-500 text-sm">
                    <p>\ud83d\udcbc Available 24/7 for all your HR needs • Secure & Confidential</p>
                </div>
            </div>
        </div>
    );
};



export default InstructionOverride

