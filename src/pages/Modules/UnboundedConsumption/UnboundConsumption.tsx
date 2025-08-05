
const UnboundConsumption = () => {
    return (
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 min-h-screen">
            <div className="container mx-auto px-4 py-8 max-w-4xl">
                {/* <!-- Header --> */}
                <div className="text-center mb-8">
                    <div className="summer-gradient rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center shadow-lg">
                        <span className="text-4xl">☀️</span>
                    </div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">Summer Assistant</h1>
                    <p className="text-gray-600 text-lg">Your friendly AI companion for all things summer! 🌴</p>
                </div>

                <SummerAssistantBot />



                <div className="text-center mt-8 text-gray-500 text-sm">
                    <p>Powered by Summer Assistant AI • Making your summer unforgettable! 🌺</p>
                </div>
            </div>
        </div>
    )
}

export default UnboundConsumption


import React, { useEffect, useRef, useState } from 'react';

type BotResponse = {
    response: string;
    emoji: string;
};

const summerResponses: Record<string, BotResponse> = {
    'plan a beach day': {
        response:
            "Perfect! Here's your ultimate beach day plan: \ud83c\udfd6\ufe0f\n\n• Morning: Arrive early (8-9 AM) for the best spots\n• Pack: Sunscreen, water, snacks, beach umbrella\n• Activities: Swimming, beach volleyball, sandcastle building\n• Lunch: Fresh fruit, sandwiches, and cold drinks\n• Afternoon: Beach games, reading, or napping in the shade\n• Sunset: Perfect time for photos and relaxation!\n\nDon't forget to stay hydrated and reapply sunscreen every 2 hours! \ud83c\udf1e",
        emoji: '🏖️',
    },
    'summer recipe ideas': {
        response:
            "Yummy! Here are some refreshing summer recipes: \ud83c\udf79\n\n• Watermelon Mint Agua Fresca\n• Grilled Peach & Burrata Salad\n• Frozen Yogurt Berry Pops\n• Gazpacho (cold tomato soup)\n• Coconut Lime Popsicles\n• Caprese Skewers\n• Iced Green Tea Lemonade\n\nAll perfect for hot summer days! Would you like the recipe for any of these? \ud83d\ude0b",
        emoji: '🍹',
    },
    'outdoor activities': {
        response:
            "So many fun outdoor activities await! \ud83c\udf33\n\n• Hiking & Nature Walks\n• Outdoor Movie Nights\n• Camping & Stargazing\n• Water Sports (kayaking, paddleboarding)\n• Outdoor Yoga or Fitness\n• Gardening & Plant Care\n• Picnics in the Park\n• Bike Rides & Scooter Adventures\n\nWhich activity sounds most exciting to you? \ud83d\udeb4‍♀️",
        emoji: '🌳',
    },
    'travel destinations': {
        response:
            "Amazing summer destinations to consider: ✈️\n\n• Tropical: Bali, Maldives, Hawaii\n• European: Santorini, Amalfi Coast, Barcelona\n• Adventure: Costa Rica, New Zealand, Iceland\n• Cultural: Japan, Morocco, Peru\n• Beach: Turks & Caicos, Seychelles, Fiji\n\nTips: Book early, pack light, stay hydrated, and don't forget travel insurance! Where are you dreaming of going? \ud83d\uddfa️",
        emoji: '✈️',
    },
};

const generalResponses: BotResponse[] = [
    {
        response:
            "That sounds like a great summer idea! 🌞 I'd love to help you explore that further. Could you tell me more about what specifically interests you?",
        emoji: '🌞',
    },
    {
        response:
            "Summer is the perfect time for new adventures! 🌺 Whether it's trying new foods, visiting new places, or picking up a new hobby, I'm here to help you make the most of it!",
        emoji: '🌺',
    },
    {
        response:
            "I love helping with summer planning! 🏄‍♀️ From outdoor activities to refreshing treats, there's so much we can explore together. What aspect of summer are you most excited about?",
        emoji: '🏄‍♀️',
    },
];

const SummerAssistantBot: React.FC = () => {
    const [messages, setMessages] = useState<{ text: string; isUser: boolean; emoji?: string }[]>([
        {
            text:
                "Hey there! 👋 I'm your Summer Assistant! I can help you plan amazing summer activities, suggest refreshing recipes, recommend travel destinations, and much more. What would you like to explore today?",
            isUser: false,
            emoji: '🤖',
        },
    ]);
    const [input, setInput] = useState('');
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        chatRef.current?.scrollTo({ top: chatRef.current.scrollHeight, behavior: 'smooth' });
    }, [messages]);

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { text: input.trim(), isUser: true };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');

        setTimeout(() => {
            const lowerInput = userMessage.text.toLowerCase();
            const matched = Object.entries(summerResponses).find(([key]) => lowerInput.includes(key));
            const bot = matched ? matched[1] : generalResponses[Math.floor(Math.random() * generalResponses.length)];
            setMessages((prev) => [...prev, { text: bot.response, isUser: false, emoji: bot.emoji }]);
        }, 1500);
    };

    const handleQuickMessage = (msg: string) => {
        setInput(msg);
        setTimeout(() => handleSend(), 100);
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="gradient-bg text-white p-6">
                <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg">Summer Assistant</h3>
                        <p className="text-blue-100 text-sm">Online • Ready to help!</p>
                    </div>
                </div>
            </div>

            {/* Quick Actions */}
            <div className="p-4 bg-gradient-to-r from-orange-50 to-pink-50 border-b">
                <p className="text-sm text-gray-600 mb-3 font-medium">Quick Actions:</p>
                <div className="flex flex-wrap gap-2">
                    {Object.keys(summerResponses).map((key) => (
                        <button
                            key={key}
                            onClick={() => handleQuickMessage(key)}
                            className="quick-action bg-white px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md hover:shadow-lg border"
                        >
                            {summerResponses[key].emoji} {key.charAt(0).toUpperCase() + key.slice(1)}
                        </button>
                    ))}
                </div>
            </div>

            {/* Chat */}
            <div ref={chatRef} className="chat-container p-6 space-y-4 h-96 overflow-y-auto">
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        className={`flex items-start space-x-3 ${msg.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}
                    >
                        <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.isUser ? 'bg-blue-500 text-white' : 'bg-gradient-to-r from-orange-400 to-pink-400 text-white'
                                }`}
                        >
                            <span className="text-sm">{msg.isUser ? '👤' : msg.emoji || '🤖'}</span>
                        </div>
                        <div
                            className={`p-4 rounded-2xl shadow-md text-sm whitespace-pre-line max-w-xs ${msg.isUser
                                ? 'bg-blue-500 text-white rounded-tr-md'
                                : 'bg-white text-gray-800 rounded-tl-md'
                                }`}
                        >
                            {msg.text}
                        </div>
                    </div>
                ))}
            </div>

            {/* Input */}
            <div className="p-6 bg-gray-50 border-t">
                <div className="flex items-center space-x-4">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        placeholder="Ask me anything about summer fun! 🌞"
                        className="flex-1 px-6 py-4 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700 shadow-sm"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
