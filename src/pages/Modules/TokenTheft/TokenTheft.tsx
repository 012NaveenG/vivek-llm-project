
const TokenTheft = () => {
    return (
        <div className="min-h-screen flex flex-col">
            {/* <!-- Navigation --> */}
            <nav className="bg-white shadow-sm py-4">
                <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-xl">P</div>
                        <span className="text-xl font-semibold text-gray-800">Portfolio</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <a href="#home" className="nav-link active text-gray-800 hover:text-indigo-600 transition">Home</a>
                        <a href="#projects" className="nav-link text-gray-800 hover:text-indigo-600 transition">Projects</a>
                        <a href="#about" className="nav-link text-gray-800 hover:text-indigo-600 transition">About</a>
                        <a href="#contact" className="nav-link text-gray-800 hover:text-indigo-600 transition">Contact</a>
                    </div>
                    <button className="md:hidden text-gray-800" id="mobile-menu-button">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>



            </nav>

            {/* <!-- Hero Section with Chatbot --> */}
            <section className="flex-grow bg-gradient-to-br  from-indigo-50 to-blue-50 py-12">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">

                        <div className="md:w-1/2 space-y-6">
                            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Hi, I'm <span className="text-indigo-600">Alex</span></h1>
                            <p className="text-xl text-gray-600">Full-stack developer specializing in creating interactive web experiences.</p>
                            <p className="text-gray-600">Chat with my bot assistant to learn more about my work and experience!</p>
                            <div className="flex space-x-4">
                                <a href="#projects" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full transition shadow-md hover:shadow-lg">View Projects</a>
                                <a href="#contact" className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-2 px-6 rounded-full border border-indigo-600 transition shadow-md hover:shadow-lg">Contact Me</a>
                            </div>
                        </div>


                        <ChatBot />

                    </div>
                </div>
            </section>


            {/* <!-- Projects Section --> */}
            <section id="projects" className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
                        <p className="text-gray-600 mt-2">Some of my recent work</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                        <div className="project-card bg-white rounded-xl overflow-hidden shadow-md">
                            <div className="h-48 bg-indigo-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">E-commerce Platform</h3>
                                <p className="text-gray-600 mt-2">A full-featured online store with product management, cart functionality, and payment processing.</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">React</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">Node.js</span>
                                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 text-xs font-medium rounded-full">MongoDB</span>
                                </div>
                                <a href="#" className="mt-4 inline-block text-indigo-600 hover:text-indigo-800 font-medium">View Project →</a>
                            </div>
                        </div>


                        <div className="project-card bg-white rounded-xl overflow-hidden shadow-md">
                            <div className="h-48 bg-blue-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">Learning Management System</h3>
                                <p className="text-gray-600 mt-2">An educational platform with course creation, student progress tracking, and interactive quizzes.</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Vue.js</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">Express</span>
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full">PostgreSQL</span>
                                </div>
                                <a href="#" className="mt-4 inline-block text-blue-600 hover:text-blue-800 font-medium">View Project →</a>
                            </div>
                        </div>


                        <div className="project-card bg-white rounded-xl overflow-hidden shadow-md">
                            <div className="h-48 bg-purple-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                </svg>
                            </div>
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800">AI Chatbot Platform</h3>
                                <p className="text-gray-600 mt-2">A customizable chatbot solution for businesses with natural language processing capabilities.</p>
                                <div className="flex flex-wrap gap-2 mt-4">
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Python</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">TensorFlow</span>
                                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">Flask</span>
                                </div>
                                <a href="#" className="mt-4 inline-block text-purple-600 hover:text-purple-800 font-medium">View Project →</a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-10">
                        <a href="#" className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-full transition shadow-md hover:shadow-lg">View All Projects</a>
                    </div>
                </div>
            </section>

            {/* <!-- About Section --> */}
            <section id="about" className="py-16 bg-gray-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/3">
                            <div className="rounded-full h-64 w-64 mx-auto overflow-hidden border-4 border-white shadow-lg bg-indigo-100 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>
                        <div className="md:w-2/3 space-y-6">
                            <h2 className="text-3xl font-bold text-gray-800">About Me</h2>
                            <p className="text-gray-600">I'm a passionate full-stack developer with over 5 years of experience building web applications and interactive experiences. I specialize in creating intuitive, user-friendly interfaces backed by robust, scalable backend systems.</p>
                            <p className="text-gray-600">My journey in tech began at the University of Technology where I earned my degree in Computer Science. Since then, I've worked with startups and established companies alike, helping them bring their digital visions to life.</p>
                            <div className="grid grid-cols-2 gap-4 pt-4">
                                <div>
                                    <h3 className="font-semibold text-gray-800">Skills</h3>
                                    <ul className="mt-2 space-y-1 text-gray-600">
                                        <li>• JavaScript/TypeScript</li>
                                        <li>• React & Vue.js</li>
                                        <li>• Node.js & Express</li>
                                        <li>• MongoDB & SQL</li>
                                        <li>• UI/UX Design</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-800">Education</h3>
                                    <ul className="mt-2 space-y-1 text-gray-600">
                                        <li>• BSc in Computer Science</li>
                                        <li>• Full-Stack Development Certification</li>
                                        <li>• UI/UX Design Specialization</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="flex space-x-4 pt-2">
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                                <a href="#" className="text-indigo-600 hover:text-indigo-800 transition">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Contact Section --> */}
            <section id="contact" className="py-16 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-800">Get In Touch</h2>
                        <p className="text-gray-600 mt-2">Have a project in mind? Let's talk about it.</p>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                                    <input type="text" id="name" className="w-full text-neutral-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                                    <input type="email" id="email" className="w-full text-neutral-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                                <input type="text" id="subject" className="w-full text-neutral-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea id="message" rows={5} className="w-full text-neutral-700 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"></textarea>
                            </div>
                            <div className="text-center">
                                <button type="button" id="send-message" className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-8 rounded-full transition shadow-md hover:shadow-lg">Send Message</button>
                            </div>
                        </form>
                        <div id="contact-success" className="hidden mt-6 p-4 bg-green-100 text-green-800 rounded-lg text-center">
                            Thank you for your message! I'll get back to you soon.
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- Footer --> */}
            <footer className="bg-gray-900 text-white py-8">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <div className="mb-4 md:mb-0">
                            <div className="flex items-center space-x-2">
                                <div className="h-8 w-8 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">P</div>
                                <span className="text-lg font-semibold">Portfolio</span>
                            </div>
                            <p className="text-gray-400 mt-2">Creating digital experiences that matter.</p>
                        </div>
                        <div className="flex space-x-6">
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="border-t border-gray-800 mt-8 pt-6 text-center text-gray-400 text-sm">
                        <p>&copy; 2023 Alex's Portfolio. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default TokenTheft



import { APIs } from '@/utils/BotApis';
import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { toast } from 'sonner';

interface Message {
    sender: 'user' | 'bot';
    text: string;
}

const ChatBot: React.FC = () => {
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState('');
    const chatRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Initial greeting
        const timer = setTimeout(() => {
            addBotMessage(
                "Hi there! I'm Alex's portfolio assistant. How can I help you today? You can ask me about Alex's skills, projects, or experience."
            );
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        chatRef.current?.scrollTo(0, chatRef.current.scrollHeight);
    }, [messages]);

    const addUserMessage = (text: string) => {
        setMessages(prev => [...prev, { sender: 'user', text }]);
    };

    const addBotMessage = (text: string) => {
        setMessages(prev => [...prev, { sender: 'bot', text }]);
    };

    const resetChat = () => {
        setMessages([]);
        setTimeout(() => {
            addBotMessage(
                "Hi there! I'm Alex's portfolio assistant. How can I help you today? You can ask me about Alex's skills, projects, or experience."
            );
        }, 300);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const message = input.trim();
        if (!message) return;
        try {
            addUserMessage(message);
            const response = await axios.post(APIs.TOKEN_THEFT, { prompt: input.trim() })
            console.log(response)
            setInput('');
            processUserMessage(message);
        } catch (error: any) {
            toast.error(error.message)
        }
    };

    const processUserMessage = (message: string) => {
        const lower = message.toLowerCase();
        let response = "I'm not sure I understand. Would you like to know about Alex's skills, projects, experience, or how to get in contact?";

        if (/hello|hi|hey/.test(lower)) {
            response = "Hello! How can I help you learn more about Alex today?";
        } else if (/skills|what can you do/.test(lower)) {
            response =
                'Alex specializes in full-stack development with expertise in JavaScript/TypeScript, React, Vue.js, Node.js, and database technologies like MongoDB and SQL. Alex also has strong UI/UX design skills.';
        } else if (/experience|background/.test(lower)) {
            response =
                'Alex has over 5 years of experience in web development, working with both startups and established companies. Alex graduated with a BSc in Computer Science and holds certifications in Full-Stack Development and UI/UX Design.';
        } else if (/project|work/.test(lower)) {
            response =
                'Alex has worked on various projects including an E-commerce Platform, Learning Management System, and an AI Chatbot Platform. You can see these projects in the Projects section. Would you like me to tell you more about any specific project?';
        } else if (/e-commerce|online store/.test(lower)) {
            response =
                'The E-commerce Platform is a full-featured online store built with React, Node.js, and MongoDB. It includes product management, shopping cart functionality, user authentication, and secure payment processing integration.';
        } else if (/learning|education|lms/.test(lower)) {
            response =
                'The Learning Management System was built with Vue.js, Express, and PostgreSQL. It allows instructors to create courses, track student progress, and includes interactive quizzes and assignments with automated grading.';
        } else if (/chatbot|ai/.test(lower)) {
            response =
                'The AI Chatbot Platform was developed using Python, TensorFlow, and Flask. It\'s a customizable solution for businesses that includes natural language processing capabilities, intent recognition, and can be integrated with various messaging platforms.';
        } else if (/contact|hire|work with/.test(lower)) {
            response =
                'You can contact Alex using the form in the Contact section. Just fill in your details and message, and Alex will get back to you as soon as possible. You can also connect on GitHub, LinkedIn, or Twitter using the links in the About section.';
        } else if (/thank/.test(lower)) {
            response = "You're welcome! Is there anything else you'd like to know about Alex or the portfolio?";
        }

        setTimeout(() => addBotMessage(response), 1000);
    };

    return (
        <div className="md:w-1/2 w-full">
            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-8 rounded-full bg-white flex items-center justify-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-indigo-600"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                        </div>
                        <span className="font-medium">Portfolio Assistant</span>
                    </div>
                    <button onClick={resetChat} className="text-white hover:text-indigo-200 transition">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                </div>

                <div ref={chatRef} className="chat-container p-4 bg-gray-50 h-96 overflow-y-auto scrollbar-hidden">
                    {messages.map((msg, i) => (
                        <div key={i} className={`flex ${msg.sender === 'user' ? 'justify-end' : ''} mb-4`}>
                            <div
                                className={`chat-bubble text-neutral-700 ${msg.sender === 'user' ? 'user-bubble bg-indigo-200' : 'bot-bubble bg-gray-300'
                                    } py-2 px-4 rounded-lg`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="p-4 border-t">
                    <form onSubmit={handleSubmit} className="flex space-x-2">
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            className="flex-grow text-neutral-700 px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                            placeholder="Ask me anything about Alex's work..."
                        />
                        <button
                            type="submit"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                                />
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

