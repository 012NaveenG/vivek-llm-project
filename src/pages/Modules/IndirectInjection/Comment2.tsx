import React, { useState, useEffect, useRef } from "react";



const chatbotResponses = {
    default:
        "I'm not sure how to help with that. Can you try asking about our products, shipping, or return policies?",
    greeting: ["Hello!", "Hi there!", "Welcome to ShopEase! How can I help you today?"],
    farewell: ["Goodbye!", "Have a great day!", "Thanks for chatting with us!"],
    products:
        "We offer a variety of electronics including wireless headphones, smart watches, portable speakers, and wireless chargers. Is there a specific product you're interested in?",
};

const Comment2 = () => {



    return (
        <div>
            <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                            </svg>
                            <h1 className="text-2xl font-bold">ShopEase</h1>
                        </div>
                        <nav className="hidden md:flex space-x-8">
                            <a href="#" className="hover:text-purple-200 font-medium">Home</a>
                            <a href="#" className="hover:text-purple-200 font-medium">Shop</a>
                            <a href="#" className="hover:text-purple-200 font-medium">Categories</a>
                            <a href="#" className="hover:text-purple-200 font-medium">Deals</a>
                            <a href="#" className="hover:text-purple-200 font-medium">Contact</a>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button className="hover:text-purple-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                            </button>
                            <button className="hover:text-purple-200 relative">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs text-gray-900 font-bold rounded-full h-5 w-5 flex items-center justify-center">3</span>
                            </button>
                            <button className="hover:text-purple-200">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>
                            <button className="md:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="bg-gradient-to-b from-indigo-100 to-white py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row items-center">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Discover Amazing Products</h2>
                            <p className="text-lg text-gray-600 mb-6">Shop the latest trends with confidence. Quality products, competitive prices, and exceptional service.</p>
                            <div className="flex space-x-4">
                                <button className="bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md">
                                    Shop Now
                                </button>
                                <button className="border border-purple-600 text-purple-600 hover:bg-purple-50 font-medium py-3 px-6 rounded-lg transition duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="relative">
                                <div className="absolute -top-4 -left-4 bg-yellow-400 rounded-full h-20 w-20 flex items-center justify-center text-gray-800 font-bold text-xl z-10 shadow-lg">
                                    30% OFF
                                </div>
                                <svg className="w-full h-auto" viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="50" y="50" width="300" height="200" rx="20" fill="#6366f1" />
                                    <circle cx="200" cy="150" r="80" fill="#818cf8" />
                                    <path d="M160 120 Q200 80 240 120 Q280 160 240 180 Q200 220 160 180 Q120 140 160 120" fill="#c7d2fe" />
                                    <circle cx="180" cy="130" r="10" fill="white" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Section */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="product-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300" data-product-id="1">
                            <div className="relative">
                                <div className="bg-indigo-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg absolute top-0 left-0">
                                    NEW
                                </div>
                                <svg className="w-full h-64 product-image" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="200" height="200" fill="#ddd6fe" />
                                    <rect x="40" y="40" width="120" height="120" rx="10" fill="#8b5cf6" />
                                    <circle cx="100" cy="100" r="40" fill="#ede9fe" />
                                    <path d="M80 90 L120 90 L120 110 L80 110 Z" fill="#7c3aed" />
                                </svg>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">Wireless Headphones</h3>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm text-gray-600 ml-1">4.8</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">Premium sound quality with noise cancellation</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-lg font-bold text-purple-700">$129.99</span>
                                        <span className="text-sm text-gray-500 line-through ml-2">$159.99</span>
                                    </div>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-2 view-product-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="product-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300" data-product-id="2">
                            <div className="relative">
                                <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg absolute top-0 left-0">
                                    SALE
                                </div>
                                <svg className="w-full h-64 product-image" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="200" height="200" fill="#d1fae5" />
                                    <rect x="50" y="50" width="100" height="100" rx="10" fill="#10b981" />
                                    <circle cx="100" cy="100" r="30" fill="#ecfdf5" />
                                    <rect x="85" y="85" width="30" height="30" fill="#059669" />
                                </svg>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">Smart Watch</h3>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm text-gray-600 ml-1">4.6</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">Fitness tracking, notifications, and more</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-lg font-bold text-purple-700">$89.99</span>
                                        <span className="text-sm text-gray-500 line-through ml-2">$119.99</span>
                                    </div>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-2 view-product-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300" data-product-id="3">
                            <div className="relative">
                                <svg className="w-full h-64 product-image" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="200" height="200" fill="#fef3c7" />
                                    <rect x="40" y="60" width="120" height="80" rx="5" fill="#f59e0b" />
                                    <circle cx="70" cy="90" r="15" fill="#fef3c7" />
                                    <rect x="100" y="75" width="40" height="50" rx="3" fill="#fbbf24" />
                                </svg>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">Portable Speaker</h3>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm text-gray-600 ml-1">4.7</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">Waterproof with 20-hour battery life</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-lg font-bold text-purple-700">$79.99</span>
                                    </div>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-2 view-product-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="product-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300" data-product-id="4">
                            <div className="relative">
                                <div className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-br-lg absolute top-0 left-0">
                                    POPULAR
                                </div>
                                <svg className="w-full h-64 product-image" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="200" height="200" fill="#dbeafe" />
                                    <rect x="50" y="50" width="100" height="100" rx="50" fill="#3b82f6" />
                                    <rect x="75" y="75" width="50" height="50" rx="25" fill="#bfdbfe" />
                                    <circle cx="100" cy="100" r="15" fill="#1d4ed8" />
                                </svg>
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="text-lg font-semibold">Wireless Charger</h3>
                                    <div className="flex">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                        <span className="text-sm text-gray-600 ml-1">4.9</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 text-sm mb-4">Fast charging for all Qi-enabled devices</p>
                                <div className="flex justify-between items-center">
                                    <div>
                                        <span className="text-lg font-bold text-purple-700">$49.99</span>
                                        <span className="text-sm text-gray-500 line-through ml-2">$59.99</span>
                                    </div>
                                    <button className="bg-purple-600 hover:bg-purple-700 text-white rounded-lg p-2 view-product-btn">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Chat Bot */}

            <Chatbot />

            {/* Footer */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">ShopEase</h3>
                            <p className="text-gray-400 mb-4">Your one-stop shop for quality electronics and accessories.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Shop</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">FAQs</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white">My Account</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Order Tracking</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Wishlist</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Returns & Exchanges</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white">Shipping Policy</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
                            <p className="text-gray-400 mb-4">Subscribe to receive updates, access to exclusive deals, and more.</p>
                            <form className="flex">
                                <input type="email" placeholder="Enter your email" className="px-4 py-2 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500 text-gray-900" />
                                <button type="submit" className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-r-md transition duration-300">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400 text-sm">&copy; 2023 ShopEase. All rights reserved.</p>
                        <div className="flex space-x-4 mt-4 md:mt-0">
                            <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
                            <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>



        </div>
    )
}

export default Comment2




type Message = {
    type: "user" | "bot";
    text: string;
};

const Chatbot: React.FC = () => {
    const [chatbotOpen, setChatbotOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        { type: "bot", text: "Hello! Welcome to ShopEase. How can I help you today?" },
    ]);
    const [input, setInput] = useState("");
    const chatEndRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);


    const getBotResponse = (message: string): string => {
        const lowerMsg = message.toLowerCase();

        if (["hi", "hello", "hey"].some(greet => lowerMsg.includes(greet))) {
            return chatbotResponses.greeting[Math.floor(Math.random() * chatbotResponses.greeting.length)];
        }

        if (["bye", "goodbye", "see you"].some(bye => lowerMsg.includes(bye))) {
            return chatbotResponses.farewell[Math.floor(Math.random() * chatbotResponses.farewell.length)];
        }

        if (["product", "products", "items", "catalog", "electronics"].some(term => lowerMsg.includes(term))) {
            return chatbotResponses.products;
        }

        return chatbotResponses.default;
    };
    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage: Message = { type: "user", text: input };
        const botMessage: Message = { type: "bot", text: getBotResponse(input) };

        setMessages((prev) => [...prev, userMessage, botMessage]);
        setInput("");
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {!chatbotOpen ? (
                <button
                    onClick={() => setChatbotOpen(true)}
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center text-white flex-shrink-0 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-1/2   w-1/2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                </button>
            ) : (
                <div className="bg-white rounded-xl shadow-xl w-80 overflow-hidden flex flex-col">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white p-4 flex justify-between items-center">
                        <h3 className="font-semibold">ShopEase Assistant</h3>
                        <button
                            onClick={() => setChatbotOpen(false)}
                            className="text-white hover:text-gray-200"
                        >
                            ✕
                        </button>
                    </div>

                    <div className="p-4 h-80 overflow-y-auto bg-gray-50">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`mb-3 flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`px-3 py-2 rounded-lg max-w-[75%] ${msg.type === "user"
                                        ? "bg-purple-100 text-gray-900"
                                        : "bg-white text-gray-700 border border-gray-200"
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                        <div ref={chatEndRef} />
                    </div>

                    <div className="flex border-t p-2">
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                            placeholder="Type a message..."
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 rounded-r-md"
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

