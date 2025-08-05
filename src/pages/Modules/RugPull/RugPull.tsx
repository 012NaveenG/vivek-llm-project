
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
                        <button  className="text-sm text-red-400 hover:underline">End Session</button>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default RugPull
