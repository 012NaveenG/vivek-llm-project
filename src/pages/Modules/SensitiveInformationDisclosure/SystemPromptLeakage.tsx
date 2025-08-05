
const SystemPromptLeakage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="bg-indigo-600 text-white p-4">
                    <h1 className="text-xl font-semibold">ChatBot</h1>
                    <p className="text-sm opacity-80">Ask me anything!</p>
                </div>

                <div id="chat-container" className="chat-container p-4 space-y-4">
                    <div className="bot-message p-3 max-w-[80%] inline-block">
                        <p>Hi there! I'm your friendly chatbot. How can I help you today?</p>
                    </div>
                </div>

                <div className="border-t p-4">
                    <form id="chat-form" className="flex gap-2">
                        <input type="text" id="user-input"
                            className="flex-1 text-neutral-700 border rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="Type your message..." autoComplete="off"/>
                            <button type="submit"
                                className="bg-indigo-600 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center hover:bg-indigo-700 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                    stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                            </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SystemPromptLeakage
