
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


                </div>
            </div>
        </div>
    )
}

export default Ssrf
