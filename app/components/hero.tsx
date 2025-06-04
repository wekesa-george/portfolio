"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-20">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
                <motion.div 
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
                >
                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-800 mb-6">
                        Hi, I'm <span className="text-blue-600">Wekesa George</span>
                    </h1>
                    <h2 className="text-2xl lg:text-3xl text-gray-600 mb-8">
                        Full Stack JavaScript Developer
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl">
                        Dynamic Software Engineer with 9+ years of experience crafting innovative web and mobile applications. 
                        Expertise in SvelteKit, JavaScript, and modern web technologies.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                        <button 
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                        >
                            Get In Touch
                        </button>
                        <button 
                            onClick={() => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' })}
                            className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors font-medium"
                        >
                            View My Work
                        </button>
                    </div>
                </motion.div>
                
                <motion.div 
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="lg:w-1/2 flex justify-center"
                >
                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur-lg"></div>
                        <img
                            src="/main-image-of-me.webp"
                            alt="Wekesa George"
                            className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero; 