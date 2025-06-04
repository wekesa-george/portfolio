"use client"
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">About Me</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Passionate about leveraging skills to contribute to impactful projects in a forward-thinking environment.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">My Journey</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            With over 9 years of experience in software development, I've evolved from an intern to a 
                            founding partner, building scalable solutions that serve hundreds of thousands of users. 
                            My expertise spans the full stack, with particular strength in modern JavaScript frameworks 
                            and user-centric design.
                        </p>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            I'm committed to best practices in software development and continuous learning, ensuring 
                            the delivery of high-quality solutions that meet user needs and business objectives. 
                            My recent work includes AI-driven capabilities and modern authentication systems.
                        </p>
                        
                        <div className="space-y-4">
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                                <span className="text-gray-700">9+ Years of Development Experience</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                                <span className="text-gray-700">Served 100,000+ Users</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                                <span className="text-gray-700">Full Stack Expertise</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-4 h-4 bg-blue-600 rounded-full mr-4"></div>
                                <span className="text-gray-700">AI Integration Experience</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 p-8 rounded-2xl"
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Personal Details</h3>
                        <div className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-gray-600">Name:</span>
                                <span className="text-gray-800 font-medium">Wekesa George</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Location:</span>
                                <span className="text-gray-800 font-medium">Kampala, Uganda</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Email:</span>
                                <span className="text-gray-800 font-medium">wekesa@truden.tech</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Phone:</span>
                                <span className="text-gray-800 font-medium">+256776731675</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">Education:</span>
                                <span className="text-gray-800 font-medium">BSc Computer Science</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-gray-600">University:</span>
                                <span className="text-gray-800 font-medium">Makerere University</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About; 