
const Misinformation = () => {
    return (
        <div className="bg-gray-50 text-neutral-700">
            {/* <!-- Navigation --> */}
            <nav className="bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0 flex items-center">
                                <svg className="h-8 w-auto maple-leaf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12,2L9.1,7.4L3,8.5l4.5,4.4L6.5,19l5.5-2.9l5.5,2.9l-1-6.1L20,8.5l-6.1-1.1L12,2z" />
                                </svg>
                                <span className="ml-2 text-xl font-bold text-gray-800">Air Canada</span>
                            </div>
                            <div className="hidden md:ml-6 md:flex md:space-x-8">
                                <a href="#" className="border-b-2 border-red-600 text-gray-900 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    Book
                                </a>
                                <a href="#" className="border-transparent border-b-2 hover:border-gray-300 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    Check-in
                                </a>
                                <a href="#" className="border-transparent border-b-2 hover:border-gray-300 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    Flight Status
                                </a>
                                <a href="#" className="border-transparent border-b-2 hover:border-gray-300 text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 text-sm font-medium">
                                    Aeroplan
                                </a>
                            </div>
                        </div>
                        <div className="hidden md:flex items-center">
                            <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                Sign In
                            </button>
                            <div className="ml-4 flex items-center">
                                <span className="text-gray-500 text-sm mr-2">EN</span>
                                <span className="text-gray-300">|</span>
                                <span className="text-gray-500 text-sm ml-2">FR</span>
                            </div>
                        </div>
                        <div className="-mr-2 flex items-center md:hidden">
                            <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-red-500" id="mobile-menu-button">
                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>


            </nav>

            {/* <!-- Hero Section --> */}
            <div className="hero-gradient">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
                    <div className="text-center">
                        <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                            <span className="block">Fly with confidence</span>
                            <span className="block text-red-500">Explore the world</span>
                        </h1>
                        <p className="mt-3 max-w-md mx-auto text-base text-gray-300 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                            Discover new destinations with Air Canada's global network. Book your next adventure today.
                        </p>
                    </div>

                    <div className="mt-10 search-panel rounded-lg shadow-xl max-w-4xl mx-auto">
                        <div className="p-6">
                            <div className="flex flex-wrap mb-4">
                                <button className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-l-md">
                                    Round Trip
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200">
                                    One Way
                                </button>
                                <button className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-r-md">
                                    Multi-City
                                </button>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">From</label>
                                    <input type="text" placeholder="City or Airport" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">To</label>
                                    <input type="text" placeholder="City or Airport" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Departure</label>
                                    <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Return</label>
                                    <input type="date" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700">Passengers</label>
                                    <select className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-red-500 focus:border-red-500">
                                        <option>1 Adult</option>
                                        <option>2 Adults</option>
                                        <option>3 Adults</option>
                                        <option>4 Adults</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex justify-end">
                                <button className="px-6 py-3 text-base font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                                    Search Flights
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* <!-- Featured Destinations --> */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Featured Destinations
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            Explore our top destinations with special offers
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

                        <div className="rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center">
                                <svg className="h-24 w-24 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">Toronto</h3>
                                <p className="mt-2 text-gray-600">Experience the vibrant culture and iconic CN Tower</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-red-600 font-bold">From $199</span>
                                    <button className="px-4 py-2 text-sm text-red-600 font-medium border border-red-600 rounded-md hover:bg-red-50">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center">
                                <svg className="h-24 w-24 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">Vancouver</h3>
                                <p className="mt-2 text-gray-600">Discover mountains, oceans, and stunning landscapes</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-red-600 font-bold">From $249</span>
                                    <button className="px-4 py-2 text-sm text-red-600 font-medium border border-red-600 rounded-md hover:bg-red-50">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="rounded-lg shadow-lg overflow-hidden">
                            <div className="h-48 bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                                <svg className="h-24 w-24 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900">Montreal</h3>
                                <p className="mt-2 text-gray-600">Enjoy European charm and French-Canadian culture</p>
                                <div className="mt-4 flex justify-between items-center">
                                    <span className="text-red-600 font-bold">From $179</span>
                                    <button className="px-4 py-2 text-sm text-red-600 font-medium border border-red-600 rounded-md hover:bg-red-50">
                                        Book Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Travel Info --> */}
            <div className="py-12 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                            Travel Information
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                            Everything you need to know before you fly
                        </p>
                    </div>

                    <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg className="h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">Travel Requirements</h3>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <p>Check the latest travel requirements, documentation, and health measures for your destination.</p>
                                </div>
                                <div className="mt-6">
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Learn more →</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg className="h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">Flight Status</h3>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <p>Get real-time updates on your flight status, delays, gate changes, and more.</p>
                                </div>
                                <div className="mt-6">
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Check status →</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white overflow-hidden shadow rounded-lg">
                            <div className="p-6">
                                <div className="flex items-center">
                                    <svg className="h-8 w-8 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                    </svg>
                                    <h3 className="ml-3 text-lg font-medium text-gray-900">Manage Booking</h3>
                                </div>
                                <div className="mt-4 text-gray-600">
                                    <p>Change your flight, select seats, purchase upgrades, and manage your trip details.</p>
                                </div>
                                <div className="mt-6">
                                    <a href="#" className="text-red-600 hover:text-red-800 font-medium">Manage now →</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Chatbot />
            {/* <!-- Footer --> */}
            <footer className="bg-gray-800 text-white">
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">About</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">About Air Canada</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Careers</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Investor Relations</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Corporate Sustainability</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Travel Information</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Flight Status</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Travel Requirements</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Baggage</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Travel Insurance</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Aeroplan</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Join Aeroplan</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">My Aeroplan</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Credit Cards</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Partners</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                            <ul className="mt-4 space-y-2">
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Contact Us</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">FAQ</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Refunds</a></li>
                                <li><a href="#" className="text-base text-gray-400 hover:text-white">Accessibility</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <div className="flex items-center">
                            <svg className="h-8 w-auto maple-leaf" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12,2L9.1,7.4L3,8.5l4.5,4.4L6.5,19l5.5-2.9l5.5,2.9l-1-6.1L20,8.5l-6.1-1.1L12,2z" />
                            </svg>
                            <span className="ml-2 text-xl font-bold">Air Canada</span>
                        </div>
                        <div className="mt-4 md:mt-0 flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Facebook</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Instagram</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path fill-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <span className="sr-only">Twitter</span>
                                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="mt-8 text-center text-gray-400 text-sm">
                        <p>&copy; 2023 Air Canada. All rights reserved.</p>
                        <div className="mt-2 flex justify-center space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}

export default Misinformation



import { APIs } from '@/utils/BotApis';
import axios from 'axios';
import React, { useState, useRef, useEffect, type FormEvent } from 'react';
import { toast } from 'sonner';

type Sender = 'user' | 'bot';

interface Message {
    sender: Sender;
    content: string;
}

const Chatbot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { sender: 'bot', content: 'Hello! Welcome to Air Canada. How can I assist you today?' }
    ]);
    const [input, setInput] = useState('');
    const [isOpen, setIsOpen] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const trimmedMessage = input.trim();
        if (trimmedMessage === '') return;
        try {

            const newMessages: Message[] = [...messages, { sender: 'user', content: trimmedMessage }];
            const response = await axios.post(APIs.MISINFORMATION, { message: trimmedMessage })
            console.log(response)
            setMessages(newMessages);
            setInput('');

            setTimeout(() => {
                const botReply = getBotResponse(trimmedMessage);
                setMessages(prev => [...prev, { sender: 'bot', content: botReply }]);
            }, 600);
        } catch (error: any) {
            toast.error(error.message)
        }
    };

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const getBotResponse = (message: string): string => {
        const msg = message.toLowerCase();

        if (msg.includes('flight') && msg.includes('status')) {
            return 'You can check your flight status by entering your flight number or route on our Flight Status page. Would you like me to direct you there?';
        } else if (msg.includes('book') || msg.includes('reservation')) {
            return 'I can help you book a flight! You can use our booking tool above or I can guide you through the process. Where would you like to travel to?';
        } else if (msg.includes('baggage') || msg.includes('luggage')) {
            return 'Our baggage allowance depends on your fare type and destination. Economy fares typically include 1 carry-on and 1 personal item. Would you like more specific information?';
        } else if (msg.includes('cancel') || msg.includes('refund')) {
            return "You can cancel your booking through the 'Manage Booking' section. Refund eligibility depends on your fare type. Would you like me to explain the refund policy?";
        } else if (msg.includes('check-in')) {
            return 'Online check-in opens 24 hours before your flight and closes 1 hour before departure. You can check in on our website or through the Air Canada mobile app.';
        } else if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
            return 'Hello! Welcome to Air Canada. How can I assist you with your travel plans today?';
        } else if (msg.includes('thank')) {
            return "You're welcome! Is there anything else I can help you with today?";
        } else {
            return "I'm here to help with flight bookings, status updates, travel requirements, and more. Could you please provide more details about what you're looking for?";
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <div className="chatbot-container">
                {/* Chat Dialog Box */}
                {isOpen && (
                    <div className="bg-white rounded-lg shadow-xl w-80 md:w-96 overflow-hidden" id="chatbot-dialog">
                        {/* Header */}
                        <div className="bg-red-600 text-white px-4 py-3 flex justify-between items-center">
                            <div className="flex items-center">
                                <svg className="h-6 w-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                                <h3 className="font-medium">Air Canada Assistant</h3>
                            </div>
                            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200">
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="h-80 overflow-y-auto p-4 bg-gray-50" id="chat-messages">
                            {messages.map((msg, index) => (
                                <div
                                    key={index}
                                    className={`flex items-start mb-4 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
                                >
                                    <div className="flex-shrink-0">
                                        {msg.sender === 'user' ? (
                                            <div className="h-8 w-8 rounded-full bg-gray-300 flex items-center justify-center">
                                                <svg className="h-5 w-5 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                </svg>
                                            </div>
                                        ) : (
                                            <svg className="h-8 w-8 rounded-full bg-red-100 p-1 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                            </svg>
                                        )}
                                    </div>
                                    <div className={`rounded-lg py-2 px-3 shadow ${msg.sender === 'user' ? 'mr-3 bg-blue-100' : 'ml-3 bg-white'}`}>
                                        <p className="text-sm text-gray-800">{msg.content}</p>
                                    </div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="border-t border-gray-200 p-3">
                            <form onSubmit={handleSubmit} className="flex">
                                <input
                                    type="text"
                                    className="flex-1 text-neutral-700 border border-gray-300 rounded-l-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-red-500"
                                    placeholder="Type your message..."
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                />
                                <button
                                    type="submit"
                                    className="bg-red-600 text-white px-4 rounded-r-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                >
                                    <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                </button>
                            </form>
                        </div>
                    </div>
                )}

                {/* Chatbot Toggle Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="bg-red-600 text-white rounded-full p-4 shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 flex items-center justify-center"
                >
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};
