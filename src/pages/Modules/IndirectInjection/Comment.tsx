import React, { useState, useEffect, useRef } from "react";

type Comment = {
    name: string;
    text: string;
    rating: number;
    date: string;
};

type Product = {
    title: string;
    description: string;
    price: string;
    oldPrice: string;
    image: string;
    comments: Comment[];
};

type Products = Record<string, Product>;

const products: Products = {
    1: {
        title: "Wireless Headphones",
        description:
            "Experience premium sound quality with our noise-cancelling wireless headphones. Features include 30-hour battery life, comfortable over-ear design, and built-in microphone for calls. Compatible with all Bluetooth devices.",
        price: "$129.99",
        oldPrice: "$159.99",
        image: `<svg class="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="#ddd6fe"/><rect x="40" y="40" width="120" height="120" rx="10" fill="#8b5cf6"/><circle cx="100" cy="100" r="40" fill="#ede9fe"/><path d="M80 90 L120 90 L120 110 L80 110 Z" fill="#7c3aed"/></svg>`,
        comments: [],
    },
    // ... Add other products here if needed (similarly to your data).
};

const chatbotResponses = {
    default:
        "I'm not sure how to help with that. Can you try asking about our products, shipping, or return policies?",
    greeting: ["Hello!", "Hi there!", "Welcome to ShopEase! How can I help you today?"],
    farewell: ["Goodbye!", "Have a great day!", "Thanks for chatting with us!"],
    products:
        "We offer a variety of electronics including wireless headphones, smart watches, portable speakers, and wireless chargers. Is there a specific product you're interested in?",
};

const Comment: React.FC = () => {
    const [currentProductId, setCurrentProductId] = useState<string | null>(null);
    const [selectedRating, setSelectedRating] = useState<number>(0);
    const [comments, setComments] = useState<Comment[]>([]);
    const [commentName, setCommentName] = useState("");
    const [commentText, setCommentText] = useState("");
    const [chatbotOpen, setChatbotOpen] = useState(false);
    const [chatInput, setChatInput] = useState<string>("")
    const [chatMessages, setChatMessages] = useState<{ sender: "bot" | "user"; text: string }[]>([]);
    const chatEndRef = useRef<HTMLDivElement>(null);

    const currentProduct = currentProductId ? products[currentProductId] : null;

    useEffect(() => {
        if (currentProductId && products[currentProductId]) {
            setComments(products[currentProductId].comments || []);
        }
    }, [currentProductId]);

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chatMessages]);

    const handleRatingClick = (rating: number) => setSelectedRating(rating);

    const handleSubmitComment = () => {
        if (commentName && commentText && selectedRating > 0 && currentProductId) {
            const newComment: Comment = {
                name: commentName,
                text: commentText,
                rating: selectedRating,
                date: new Date().toISOString().split("T")[0],
            };

            const updatedComments = [...comments, newComment];
            setComments(updatedComments);
            products[currentProductId].comments = updatedComments; // In-memory update only.

            setCommentName("");
            setCommentText("");
            setSelectedRating(0);
        } else {
            alert("Please fill in all fields and select a rating.");
        }
    };

    const handleSendMessage = () => {
        setChatMessages((prev) => [...prev, { sender: "user", text: chatInput }]);
        setTimeout(() => {
            setChatMessages((prev) => [
                ...prev,
                { sender: "bot", text: getBotResponse(chatInput) },
            ]);
        }, 500);

        setChatInput("")
    };

    const getBotResponse = (message: string): string => {
        const msg = message.toLowerCase();
        if (msg.includes("hello") || msg.includes("hi")) {
            return chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)];
        }
        if (msg.includes("bye")) {
            return chatbotResponses.farewell[Math.floor(Math.random() * chatbotResponses.farewell.length)];
        }
        if (msg.includes("product")) return chatbotResponses.products;
        return chatbotResponses.default;
    };

    return (
        <>
        
            <div className="p-4 max-w-4xl mx-auto">
                {/* Product List */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {Object.keys(products).map((id) => (
                        <div
                            key={id}
                            className="border rounded p-4 shadow hover:shadow-lg transition cursor-pointer"
                            onClick={() => setCurrentProductId(id)}
                        >
                            <div
                                className="w-full h-40 flex items-center justify-center bg-gray-100"
                                dangerouslySetInnerHTML={{ __html: products[id].image }}
                            />
                            <h3 className="text-lg font-semibold mt-2">{products[id].title}</h3>
                            <p className="text-purple-600 font-bold">{products[id].price}</p>
                        </div>
                    ))}
                </div>

                {/* Product Modal */}
                {currentProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur">
                        <div className="bg-white rounded-lg w-full max-w-2xl p-6 relative">
                            <button
                                className="absolute top-3 right-3 text-gray-500 hover:text-black"
                                onClick={() => setCurrentProductId(null)}
                            >
                                &times;
                            </button>

                            <div className="flex flex-col md:flex-row gap-4">
                                <div
                                    className="flex-1 w-full h-64 bg-gray-100 flex items-center justify-center"
                                    dangerouslySetInnerHTML={{ __html: currentProduct.image }}
                                />
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold">{currentProduct.title}</h2>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-purple-600 text-xl font-semibold">{currentProduct.price}</span>
                                        {currentProduct.oldPrice && (
                                            <span className="text-gray-400 line-through">{currentProduct.oldPrice}</span>
                                        )}
                                    </div>
                                    <p className="mt-2 text-gray-700">{currentProduct.description}</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="font-semibold mb-2">Comments</h3>
                                <div className="max-h-60 overflow-y-auto space-y-4">
                                    {comments.length ? (
                                        comments.map((comment, idx) => (
                                            <div key={idx} className="border-b last:border-none pb-2">
                                                <div className="flex justify-between items-center">
                                                    <div className="font-medium">{comment.name}</div>
                                                    <div className="text-xs text-gray-500">{comment.date}</div>
                                                </div>
                                                <div className="flex mt-1 text-yellow-400">
                                                    {[...Array(5)].map((_, i) => (
                                                        <svg
                                                            key={i}
                                                            className={`h-4 w-4 ${i < comment.rating ? "fill-current" : "text-gray-300"
                                                                }`}
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                        </svg>
                                                    ))}
                                                </div>
                                                <p className="text-gray-600">{comment.text}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-gray-500">No comments yet. Be the first!</p>
                                    )}
                                </div>

                                <div className="mt-4">
                                    <input
                                        className="w-full border p-2 rounded mb-2 dark:border-purple-600 text-neutral-700"
                                        placeholder="Your Name"
                                        value={commentName}
                                        onChange={(e) => setCommentName(e.target.value)}
                                    />
                                    <textarea
                                        className="w-full border p-2 rounded mb-2 dark:border-purple-600 text-neutral-700"
                                        placeholder="Your Comment"
                                        rows={3}
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                    />
                                    <div className="flex items-center mb-2">
                                        {[...Array(5)].map((_, i) => (
                                            <svg
                                                key={i}
                                                className={`h-6 w-6 cursor-pointer ${i < selectedRating ? "text-yellow-400" : "text-gray-300"
                                                    }`}
                                                onClick={() => handleRatingClick(i + 1)}
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                        ))}
                                    </div>
                                    <button
                                        className="bg-purple-600 text-white px-4 py-2 rounded w-full"
                                        onClick={handleSubmitComment}
                                    >
                                        Submit Comment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* Chatbot */}
                <button
                    className="fixed bottom-6 right-6 bg-purple-600 text-white rounded-full w-16 h-16 shadow-lg flex items-center justify-center"
                    onClick={() => setChatbotOpen(!chatbotOpen)}
                >
                    💬
                </button>

                {chatbotOpen && (
                    <div className="fixed bottom-24 right-6 bg-white w-80 max-h-[400px] rounded-lg shadow-lg flex flex-col overflow-hidden">
                        <div className="bg-purple-600 text-white px-4 py-2 flex justify-between items-center">
                            <h3 className="font-bold">ShopEase Chatbot</h3>
                            <button onClick={() => setChatbotOpen(false)}>&times;</button>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto space-y-2">
                            {chatMessages.map((msg, idx) => (
                                <div key={idx} className={`flex ${msg.sender === "user" ? "justify-end" : ""}`}>
                                    <div
                                        className={`p-2 rounded-lg max-w-[70%] ${msg.sender === "user" ? "bg-purple-600 text-white" : "dark:bg-neutral-700"
                                            }`}
                                    >
                                        {msg.text}
                                    </div>
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>
                        <div className="p-2 border-t flex">
                            <input
                                value={chatInput}
                                type="text"
                                className="flex-1 border p-2 rounded-l dark:border-purple-600 text-neutral-700"
                                placeholder="Type a message..."
                                onChange={(e) => setChatInput(e.target.value)}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") handleSendMessage();
                                }}
                            />
                            <button
                                className="bg-purple-600 text-white px-4 rounded-r"
                                onClick={handleSendMessage}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};


export default Comment