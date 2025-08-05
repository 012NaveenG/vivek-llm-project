
const SQLInjection = () => {
  return (
    <div className="bg-neutral-800 font-sans">
      {/* <!-- Header --> */}
      <header className="relative z-10 bg-opacity-80 bg-gradient-to-r from-indigo-900/80 to-blue-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <svg className="w-10 h-10 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              <h1 className="text-2xl font-bold text-white">Pakistan Space Agency</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="nav-link text-white hover:text-indigo-300 transition">Home</a>
              <a href="#" className="nav-link text-white hover:text-indigo-300 transition">Missions</a>
              <a href="#" className="nav-link text-white hover:text-indigo-300 transition">Research</a>
              <a href="#" className="nav-link text-white hover:text-indigo-300 transition">Gallery</a>
              <a href="#" className="nav-link text-white hover:text-indigo-300 transition">About Us</a>
              <a href="#" className="nav-link text-white hover:text-indigo-300 transition">Contact</a>
            </nav>
            <button className="md:hidden text-white" id="mobile-menu-button">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div className="md:hidden hidden" id="mobile-menu">
            <div className="flex flex-col space-y-4 mt-4 pb-4">
              <a href="#" className="text-white hover:text-indigo-300 transition">Home</a>
              <a href="#" className="text-white hover:text-indigo-300 transition">Missions</a>
              <a href="#" className="text-white hover:text-indigo-300 transition">Research</a>
              <a href="#" className="text-white hover:text-indigo-300 transition">Gallery</a>
              <a href="#" className="text-white hover:text-indigo-300 transition">About Us</a>
              <a href="#" className="text-white hover:text-indigo-300 transition">Contact</a>
            </div>
          </div>
        </div>
      </header>


      {/* <!-- Hero Section --> */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 hero-text">Exploring the Cosmos from Pakistan</h2>
              <p className="text-lg text-gray-300 mb-8">Pioneering space research, satellite technology, and astronomical discoveries to advance Pakistan's presence in space exploration.</p>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition transform hover:scale-105">Discover Our Missions</a>
                <a href="#" className="px-6 py-3 border border-indigo-400 text-indigo-400 hover:bg-indigo-400 hover:text-white font-medium rounded-lg transition transform hover:scale-105">Join Our Team</a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
                <div className="absolute inset-0 rounded-full border-4 border-indigo-500/30 border-dashed animate-spin" style={{ animationDuration: "60s" }}></div>

                {/* <!-- Earth --> */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 md:w-48 md:h-48 rounded-full bg-blue-500 overflow-hidden shadow-lg"
                  style={{ backgroundImage: "linear-gradient(135deg, #1e40af, #3b82f6, #60a5fa)" }}
                >
                  <div className="absolute inset-0 opacity-30">
                    <div className="absolute w-full h-20 bg-green-700 top-10 left-5 rotate-12 rounded-full"></div>
                    <div className="absolute w-16 h-16 bg-green-700 top-32 left-24 rounded-full"></div>
                    <div className="absolute w-24 h-10 bg-green-700 bottom-10 right-5 rounded-full"></div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent to-blue-900/50"></div>
                </div>

                {/* <!-- Satellite --> */}
                <div className="satellite absolute top-1/2 left-1/2">
                  <div className="w-12 h-6 bg-gray-300 rounded-lg shadow-lg flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-8 h-2 bg-blue-500"></div>
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-6 h-10">
                    <div className="w-6 h-3 bg-gray-400"></div>
                    <div className="w-1 h-7 bg-gray-600 mx-auto"></div>
                  </div>
                  <div className="absolute w-16 h-1 bg-gray-400 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* <!-- Mission Section --> */}
      <section className="py-16 bg-gradient-to-b from-indigo-900/20 to-blue-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Space Missions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* <!-- Mission 1 --> */}
            <div className="mission-card bg-gradient-to-br from-indigo-900/80 to-blue-900/80 rounded-xl overflow-hidden shadow-lg p-6 border border-indigo-500/30">
              <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Satellite Communications</h3>
              <p className="text-gray-300 mb-4">Developing advanced satellite communication systems to enhance connectivity across Pakistan.</p>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* <!-- Mission 2 --> */}
            <div className="mission-card bg-gradient-to-br from-indigo-900/80 to-blue-900/80 rounded-xl overflow-hidden shadow-lg p-6 border border-indigo-500/30">
              <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Earth Observation</h3>
              <p className="text-gray-300 mb-4">Monitoring climate change, agriculture, and natural resources through advanced imaging satellites.</p>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* <!-- Mission 3 --> */}
            <div className="mission-card bg-gradient-to-br from-indigo-900/80 to-blue-900/80 rounded-xl overflow-hidden shadow-lg p-6 border border-indigo-500/30">
              <div className="h-12 w-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Space Research</h3>
              <p className="text-gray-300 mb-4">Conducting cutting-edge research in astrophysics, planetary science, and space technology.</p>
              <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Latest News Section --> */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Updates</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-xl overflow-hidden shadow-lg border border-indigo-500/30">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-indigo-600 text-xs text-white px-3 py-1 rounded-full">News</span>
                  <span className="text-gray-400 text-sm">June 15, 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Pakistan's New Earth Observation Satellite Successfully Launched</h3>
                <p className="text-gray-300 mb-4">The latest addition to Pakistan's satellite fleet was successfully launched into orbit, enhancing our Earth observation capabilities.</p>
                <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                  Read full story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-900/50 to-blue-900/50 rounded-xl overflow-hidden shadow-lg border border-indigo-500/30">
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="bg-indigo-600 text-xs text-white px-3 py-1 rounded-full">Event</span>
                  <span className="text-gray-400 text-sm">July 2, 2023</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">International Space Conference to be Hosted in Islamabad</h3>
                <p className="text-gray-300 mb-4">Pakistan Space Agency will host scientists and researchers from around the world for a major conference on space exploration.</p>
                <a href="#" className="text-indigo-400 hover:text-indigo-300 font-medium flex items-center">
                  Read full story
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Chatbot />
      {/* <!-- Footer --> */}
      <footer className="bg-gradient-to-b from-transparent to-indigo-900/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="currentColor" />
                  <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
                <h3 className="text-xl font-bold text-white">Pakistan Space Agency</h3>
              </div>
              <p className="text-gray-300 mb-4">Exploring the cosmos, advancing science, and inspiring the next generation of space explorers.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-indigo-400 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
                <a href="#" className="text-indigo-400 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-indigo-400 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                  </svg>
                </a>
                <a href="#" className="text-indigo-400 hover:text-white transition">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">Missions</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">Research</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">Gallery</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">Publications</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">Educational Resources</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">Press Releases</a></li>
                <li><a href="#" className="text-gray-300 hover:text-indigo-400 transition">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300">123 Space Avenue, Islamabad, Pakistan</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-300">info@pakistanspaceagency.gov.pk</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-400 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-300">+92 51 1234 5678</span>
                </li>
              </ul>
              <form className="mt-4">
                <label className="block text-gray-300 mb-2">Subscribe to our newsletter</label>
                <div className="flex">
                  <input type="email" className="flex-1 bg-indigo-800/30 text-white placeholder-indigo-300 border border-indigo-500/30 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Your email" />
                  <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-r-lg px-4 py-2 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="border-t border-indigo-500/30 mt-8 pt-8 text-center">
            <p className="text-gray-400">&copy; 2023 Pakistan Space Agency. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default SQLInjection

type Message = {
  sender: 'user' | 'bot';
  text: string;
};

// botResponses.ts
export const getBotResponse = (message: string): string => {
  const lower = message.toLowerCase();

  if (lower.includes('mission') || lower.includes('satellite')) {
    return "Our current missions include Earth observation satellites, communication satellites, and research initiatives. Would you like to know more about a specific mission?";
  } else if (lower.includes('contact') || lower.includes('reach')) {
    return "You can contact us at info@pakistanspaceagency.gov.pk or call +92 51 1234 5678. Our headquarters are located in Islamabad.";
  } else if (lower.includes('job') || lower.includes('career') || lower.includes('work')) {
    return "We regularly post job openings on our Careers page. We hire across various disciplines including engineering, physics, computer science, and administration.";
  } else if (lower.includes('hello') || lower.includes('hi')) {
    return "Hello! How can I assist you with information about Pakistan Space Agency today?";
  } else {
    return "Thank you for your message. Our team is working to provide you with the most accurate information. For specific inquiries, please visit our detailed sections on the website or contact our support team directly.";
  }
};


// Chatbot.tsx
import React, { useState, useRef, useEffect } from 'react';

const Chatbot: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: 'Hello! Welcome to Pakistan Space Agency. How can I assist you today?',
    },
  ]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    setTimeout(() => {
      const botMessage: Message = {
        sender: 'bot',
        text: getBotResponse(input),
      };
      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {/* Chatbot Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setOpen(!open)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform transition hover:scale-105"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      </div>

      {/* Chatbot Container */}
      {open && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-gradient-to-br from-indigo-900/95 to-blue-900/95 backdrop-blur-sm rounded-xl shadow-2xl border border-indigo-500/50 z-50 flex flex-col max-h-[32rem]">
          {/* Header */}
          <div className="p-4 border-b border-indigo-500/30 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center">
                <svg
                  className="h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              </div>
              <h3 className="font-semibold text-white">Space Assistant</h3>
            </div>
            <button onClick={() => setOpen(false)} className="text-gray-400 hover:text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="p-4 h-80 overflow-y-auto space-y-4">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex items-start ${msg.sender === 'user' ? 'justify-end' : ''}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-8 h-8 bg-indigo-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                      />
                    </svg>
                  </div>
                )}
                <div
                  className={`${msg.sender === 'user' ? 'mr-3 bg-indigo-600/70' : 'ml-3 bg-indigo-800/50'
                    } rounded-lg p-3 max-w-[80%] text-white`}
                >
                  <p>{msg.text}</p>
                </div>
                {msg.sender === 'user' && (
                  <div className="w-8 h-8 bg-indigo-400/30 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t border-indigo-500/30 flex space-x-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 bg-indigo-800/30 text-white placeholder-indigo-300 border border-indigo-500/30 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Type your message..."
            />
            <button type="submit" className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 transition">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
};
