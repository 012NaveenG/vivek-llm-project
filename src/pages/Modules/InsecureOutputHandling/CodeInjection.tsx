
const CodeInjection = () => {
    return (
        <div>
            {/* navigation */}
            <nav className="bg-white shadow-md sticky top-0 z-50">
                <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                    <div className="flex items-center">
                        <svg className="h-10 w-10 text-sky-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        <span className="ml-2 text-2xl font-semibold text-gray-800">MediCare</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="text-sky-600 font-medium hover:text-sky-800 transition">Home</a>
                        <a href="#services" className="text-gray-600 font-medium hover:text-sky-600 transition">Services</a>
                        <a href="#doctors" className="text-gray-600 font-medium hover:text-sky-600 transition">Our Doctors</a>
                        <a href="#testimonials" className="text-gray-600 font-medium hover:text-sky-600 transition">Testimonials</a>
                        <a href="#contact" className="text-gray-600 font-medium hover:text-sky-600 transition">Contact</a>
                    </div>
                    <div className="hidden md:block">
                        <button className="bg-sky-600 text-white px-6 py-2 rounded-full font-medium hover:bg-sky-700 transition">Book Appointment</button>
                    </div>
                    <div className="md:hidden">
                        <button id="mobile-menu-button" className="text-gray-500 hover:text-gray-800">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>

            </nav>

            {/* <!-- Hero Section --> */}
            <section id="home" className="hero-pattern py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-4">Your Health Is Our <span className="text-sky-600">Top Priority</span></h1>
                        <p className="text-lg text-gray-600 mb-8">Experience healthcare that puts you first. Our team of expert doctors and state-of-the-art facilities ensure you receive the best medical care possible.</p>
                        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                            <button className="bg-sky-600 text-white px-8 py-3 rounded-full font-medium hover:bg-sky-700 transition shadow-lg">Book an Appointment</button>
                            <button className="border border-sky-600 text-sky-600 px-8 py-3 rounded-full font-medium hover:bg-sky-50 transition">Learn More</button>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <svg className="w-full max-w-md" viewBox="0 0 500 400" xmlns="http://www.w3.org/2000/svg">
                            <rect x="100" y="50" width="300" height="300" rx="20" fill="#e6f7ff" />
                            <circle cx="250" cy="150" r="70" fill="#93c5fd" />
                            <path d="M180 250 Q250 180 320 250 Q350 280 320 310 Q280 350 220 310 Q190 280 180 250" fill="#0284c7" />
                            <rect x="200" y="120" width="100" height="10" rx="5" fill="white" />
                            <rect x="200" y="140" width="100" height="10" rx="5" fill="white" />
                            <rect x="230" y="90" width="40" height="40" rx="5" fill="#0284c7" />
                            <path d="M250 95 L250 125 M235 110 L265 110" stroke="white" stroke-width="4" />
                        </svg>
                    </div>
                </div>
            </section>

            {/* <!-- Stats Section --> */}
            <section className="bg-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-sky-600 mb-2">15+</div>
                            <div className="text-gray-600">Years of Experience</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-sky-600 mb-2">50+</div>
                            <div className="text-gray-600">Specialist Doctors</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-sky-600 mb-2">10k+</div>
                            <div className="text-gray-600">Happy Patients</div>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-sky-600 mb-2">24/7</div>
                            <div className="text-gray-600">Emergency Care</div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- Services Section --> */}
            <section id="services" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Medical Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">We provide a wide range of medical services to ensure all your healthcare needs are met with the highest standards of care.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                            <div className="p-6">
                                <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">General Checkup</h3>
                                <p className="text-gray-600 mb-4">Comprehensive health assessments to monitor your overall wellbeing and detect potential issues early.</p>
                                <a href="#" className="text-sky-600 font-medium hover:text-sky-800 inline-flex items-center">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                            <div className="p-6">
                                <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Cardiology</h3>
                                <p className="text-gray-600 mb-4">Expert care for heart conditions with advanced diagnostic and treatment options by specialist cardiologists.</p>
                                <a href="#" className="text-sky-600 font-medium hover:text-sky-800 inline-flex items-center">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>


                        <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                            <div className="p-6">
                                <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Immunization</h3>
                                <p className="text-gray-600 mb-4">Stay protected with our comprehensive vaccination services for all age groups following latest guidelines.</p>
                                <a href="#" className="text-sky-600 font-medium hover:text-sky-800 inline-flex items-center">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                            <div className="p-6">
                                <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Laboratory Services</h3>
                                <p className="text-gray-600 mb-4">State-of-the-art diagnostic testing with quick and accurate results for informed medical decisions.</p>
                                <a href="#" className="text-sky-600 font-medium hover:text-sky-800 inline-flex items-center">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                            <div className="p-6">
                                <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Appointment Scheduling</h3>
                                <p className="text-gray-600 mb-4">Easy and convenient appointment booking with flexible scheduling to fit your busy lifestyle.</p>
                                <a href="#" className="text-sky-600 font-medium hover:text-sky-800 inline-flex items-center">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div className="service-card bg-white rounded-xl shadow-md overflow-hidden transition duration-300">
                            <div className="p-6">
                                <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-8 h-8 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Telemedicine</h3>
                                <p className="text-gray-600 mb-4">Virtual consultations with our healthcare professionals from the comfort of your home.</p>
                                <a href="#" className="text-sky-600 font-medium hover:text-sky-800 inline-flex items-center">
                                    Learn more
                                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Doctors Section --> */}
            <section id="doctors" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Meet Our Specialists</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Our team of highly qualified doctors are here to provide you with the best medical care.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

                        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-sky-100 flex items-center justify-center">
                                <svg className="w-32 h-32 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Sarah Johnson</h3>
                                <p className="text-sky-600 mb-3">Cardiologist</p>
                                <p className="text-gray-600 text-sm mb-4">Specializing in heart diseases with over 15 years of experience in treating complex cardiac conditions.</p>
                                <button className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition">Book Appointment</button>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-sky-100 flex items-center justify-center">
                                <svg className="w-32 h-32 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Michael Chen</h3>
                                <p className="text-sky-600 mb-3">Neurologist</p>
                                <p className="text-gray-600 text-sm mb-4">Expert in neurological disorders with specialized training in stroke treatment and prevention.</p>
                                <button className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition">Book Appointment</button>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-sky-100 flex items-center justify-center">
                                <svg className="w-32 h-32 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. Emily Rodriguez</h3>
                                <p className="text-sky-600 mb-3">Pediatrician</p>
                                <p className="text-gray-600 text-sm mb-4">Dedicated to children's health with a gentle approach and expertise in developmental pediatrics.</p>
                                <button className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition">Book Appointment</button>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-300">
                            <div className="h-48 bg-sky-100 flex items-center justify-center">
                                <svg className="w-32 h-32 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">Dr. James Wilson</h3>
                                <p className="text-sky-600 mb-3">Orthopedic Surgeon</p>
                                <p className="text-gray-600 text-sm mb-4">Specializing in joint replacements and sports injuries with minimally invasive techniques.</p>
                                <button className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition">Book Appointment</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Patients Say</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Hear from our patients about their experiences with our medical services and care.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="testimonial-card bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Robert Thompson</h4>
                                    <div className="flex text-yellow-400">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">"The care I received at MediCare was exceptional. Dr. Johnson took the time to listen to my concerns and developed a treatment plan that worked perfectly for me. The staff was friendly and professional."</p>
                        </div>

                        <div className="testimonial-card bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">Maria Garcia</h4>
                                    <div className="flex text-yellow-400">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">"I was nervous about my procedure, but the team at MediCare made me feel comfortable and informed every step of the way. The follow-up care was thorough and I've had excellent results."</p>
                        </div>

                        <div className="testimonial-card bg-white p-6 rounded-xl shadow-md">
                            <div className="flex items-center mb-4">
                                <div className="h-12 w-12 rounded-full bg-sky-100 flex items-center justify-center mr-4">
                                    <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-800">David Kim</h4>
                                    <div className="flex text-yellow-400">
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600">"The online appointment system was so convenient, and I was able to see Dr. Wilson the same week. He explained my condition clearly and the treatment has been very effective. I highly recommend MediCare."</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* <!-- Contact Section --> */}
            <section id="contact" className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Have questions or need to schedule an appointment? Reach out to us using any of the methods below.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="bg-gray-50 p-8 rounded-xl shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Send Us a Message</h3>
                                <form className="space-y-4">
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="name">Full Name</label>
                                        <input type="text" id="name" className="w-full text-neutral-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your name" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="email">Email Address</label>
                                        <input type="email" id="email" className="w-full text-neutral-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your email" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="subject">Subject</label>
                                        <input type="text" id="subject" className="w-full text-neutral-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Subject" />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                                        <textarea id="message" rows={4} className="w-full text-neutral-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Your message"></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="w-full bg-sky-600 text-white py-3 rounded-lg font-medium hover:bg-sky-700 transition">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div>
                            <div className="bg-sky-50 p-8 rounded-xl shadow-md">
                                <h3 className="text-2xl font-semibold text-gray-800 mb-6">Contact Information</h3>
                                <div className="space-y-6">
                                    <div className="flex items-start">
                                        <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                                            <p className="text-gray-600">123 Medical Center Drive<br />Healthville, CA 90210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                                            <p className="text-gray-600">+1 (555) 123-4567</p>
                                            <p className="text-gray-600">Emergency: +1 (555) 911-0000</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                                            <p className="text-gray-600">info@medicare.com</p>
                                            <p className="text-gray-600">appointments@medicare.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start">
                                        <div className="h-12 w-12 bg-sky-100 rounded-full flex items-center justify-center mr-4">
                                            <svg className="w-6 h-6 text-sky-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-800 mb-1">Hours</h4>
                                            <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                                            <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                                            <p className="text-gray-600">Sunday: Emergency Only</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ChatBot />
            {/* <!-- Footer --> */}
            <footer className="bg-gray-800 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <svg className="h-8 w-8 text-sky-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                </svg>
                                <span className="ml-2 text-xl font-semibold">MediCare</span>
                            </div>
                            <p className="text-gray-400 mb-4">Providing quality healthcare services with compassion and expertise.</p>
                            <div className="flex space-x-4">
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"></path>
                                    </svg>
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                <li><a href="#home" className="text-gray-400 hover:text-white transition">Home</a></li>
                                <li><a href="#services" className="text-gray-400 hover:text-white transition">Services</a></li>
                                <li><a href="#doctors" className="text-gray-400 hover:text-white transition">Our Doctors</a></li>
                                <li><a href="#testimonials" className="text-gray-400 hover:text-white transition">Testimonials</a></li>
                                <li><a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Services</h4>
                            <ul className="space-y-2">
                                <li><a href="#" className="text-gray-400 hover:text-white transition">General Checkup</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Cardiology</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Dental Care</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Neurology</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition">Orthopedics</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
                            <p className="text-gray-400 mb-4">Subscribe to our newsletter for health tips and updates.</p>
                            <form className="flex">
                                <input type="email" placeholder="Your email" className="px-4 py-2 rounded-l-lg w-full focus:outline-none text-gray-800" />
                                <button type="submit" className="bg-sky-600 text-white px-4 py-2 rounded-r-lg hover:bg-sky-700 transition">Subscribe</button>
                            </form>
                        </div>
                    </div>
                    <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2023 MediCare. All rights reserved.</p>
                    </div>
                </div>
            </footer>


        </div>
    )
}

export default CodeInjection



import { APIs } from '@/utils/BotApis';
import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { toast } from 'sonner';

type Message = {
    text: string;
    sender: 'user' | 'bot';
};

const getBotResponse = (message: string): string => {
    const lower = message.toLowerCase();

    if (lower.includes('appointment') || lower.includes('book') || lower.includes('schedule')) {
        return "To book an appointment, you can use our online booking system or call us at +1 (555) 123-4567. Would you like me to help you with online booking?";
    } else if (lower.includes('hour') || lower.includes('open')) {
        return "Our hours are Monday to Friday: 8:00 AM - 8:00 PM, Saturday: 9:00 AM - 5:00 PM, and Sunday: Emergency services only.";
    } else if (lower.includes('doctor') || lower.includes('specialist')) {
        return "We have many specialists including cardiologists, neurologists, pediatricians, and orthopedic surgeons. Which specialty are you interested in?";
    } else if (lower.includes('insurance') || lower.includes('coverage')) {
        return "We accept most major insurance plans. For specific information about your coverage, please provide your insurance provider and we can verify for you.";
    } else if (lower.includes('location') || lower.includes('address') || lower.includes('where')) {
        return "We're located at 123 Medical Center Drive, Healthville, CA 90210. Would you like directions?";
    } else if (lower.includes('emergency')) {
        return "If you're experiencing a medical emergency, please call 911 immediately. Our emergency department is open 24/7.";
    } else if (lower.includes('covid') || lower.includes('vaccine') || lower.includes('vaccination')) {
        return "We offer COVID-19 testing and vaccinations. Would you like information about scheduling a test or vaccine appointment?";
    } else if (lower.includes('thank')) {
        return "You're welcome! Is there anything else I can help you with today?";
    } else if (lower.includes('hello') || lower.includes('hi') || lower.includes('hey')) {
        return "Hello! How can I assist you with your healthcare needs today?";
    } else {
        return "Thank you for your message. For specific medical advice, please book an appointment with one of our doctors. Is there something specific I can help you with regarding our services?";
    }
};

const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([
        { text: "Hello! I'm your MediCare virtual assistant. How can I help you today?", sender: 'bot' },
    ]);
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [isTyping, setIsTyping] = useState(false);
    const chatRef = useRef<HTMLDivElement | null>(null);

    const sendMessage = async () => {
        if (input.trim() === '') return;
        try {

            const userMessage: Message = { text: input, sender: 'user' };
            await axios.post(APIs.CODE_INJECTION, {
                prompt: input.trim()
            })
            setMessages(prev => [...prev, userMessage]);
            setInput('');
            setIsTyping(true);

            setTimeout(() => {
                const botResponse = getBotResponse(userMessage.text);
                setMessages(prev => [...prev, { text: botResponse, sender: 'bot' }]);
                setIsTyping(false);
            }, 1000);
        } catch (error: any) {
            toast.error(error.message)
        }
    };

    useEffect(() => {
        if (chatRef.current) {
            chatRef.current.scrollTop = chatRef.current.scrollHeight;
        }
    }, [messages, isTyping]);

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') sendMessage();
    };

    return (
        <div className="fixed bottom-6 right-6 z-50">
            {isOpen && (
                <div className="w-80 bg-white rounded-lg shadow-lg overflow-hidden">
                    {/* Header */}
                    <div className="bg-sky-600 text-white p-4 flex justify-between items-center">
                        <div className="flex items-center">
                            <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                            <span className="font-medium">MediCare Assistant</span>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="max-h-80 overflow-y-auto p-3 space-y-2 text-sm" ref={chatRef}>
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`p-2 rounded-lg max-w-xs text-neutral-700 ${msg.sender === 'user'
                                    ? 'bg-sky-100 self-end ml-auto text-right'
                                    : 'bg-gray-100 self-start mr-auto'
                                    }`}
                            >
                                {msg.text}
                            </div>
                        ))}
                        {isTyping && (
                            <div className="bg-gray-100 p-2 rounded-lg w-fit animate-pulse">
                                Typing...
                            </div>
                        )}
                    </div>

                    {/* Input */}
                    <div className="border-t border-gray-200 p-3">
                        <div className="flex">
                            <input
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                                onKeyPress={handleKeyPress}
                                placeholder="Type your message..."
                                className="flex-grow px-4 py-2 border text-neutral-700 border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
                            />
                            <button
                                onClick={sendMessage}
                                className="bg-sky-600 text-white px-4 py-2 rounded-r-lg hover:bg-sky-700 transition"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Chat Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="bg-sky-600 text-white p-4 rounded-full shadow-lg hover:bg-sky-700 transition flex items-center justify-center"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
            </button>
        </div>
    );
};
