"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            title: "Full Stack Software Engineer",
            company: "HCH Financial Services",
            location: "Kampala",
            period: "Aug 2024 — Present",
            description: "Currently developing robust financial systems with modern technologies and AI integration.",
            achievements: [
                "Developed a robust RESTful API powering the Loan Management System",
                "Implemented secure authentication using OpenID Connect over OAuth2",
                "Designed CI/CD pipeline with Coolify, reducing deployment time from 2 days to 5 minutes",
                "Built real-time performance monitoring system with alerting features",
                "Created modern, responsive UI using SvelteKit and Tailwind CSS",
                "Integrated AI-driven capabilities using OpenAI Assistants API with RAG"
            ],
            technologies: ["SvelteKit", "TypeScript", "OAuth2", "OpenAI API", "CI/CD", "Tailwind CSS"]
        },
        {
            title: "FullStack Software Engineer (Founding Partner)",
            company: "Truden Tech",
            location: "Kampala",
            period: "Jul 2022 — May 2024",
            description: "Co-founded and led development of scalable applications as a founding partner.",
            achievements: [
                "Developed and deployed scalable applications using SvelteKit and TypeScript",
                "Implemented CI/CD pipelines to streamline deployment processes",
                "Collaborated with cross-functional teams to enhance application performance",
                "Designed and maintained robust REST APIs utilizing LoopBack 4 and PostgreSQL",
                "Engaged in code reviews and mentorship to promote best practices"
            ],
            technologies: ["SvelteKit", "TypeScript", "LoopBack 4", "PostgreSQL", "CI/CD"]
        },
        {
            title: "Frontend Web Developer",
            company: "Zeenode Limited",
            location: "Kampala",
            period: "Feb 2018 — Jul 2022",
            description: "Developed multiple modules for Academic Information Management System serving 100,000+ users.",
            achievements: [
                "Developed multiple modules for Zeevarsity serving 100,000+ users",
                "Engineered full-stack solutions with Node.js, Express, and SvelteKit",
                "Integrated robust reporting tools with Apache Superset",
                "Upgraded mobile applications improving performance and load speeds",
                "Collaborated on user access management and security protocols"
            ],
            technologies: ["SvelteKit", "Node.js", "Express", "Apache Superset", "JavaScript"]
        },
        {
            title: "Graduate Trainee as Frontend Developer",
            company: "Zeenode Limited",
            location: "Kampala",
            period: "Mar 2017 — Feb 2018",
            description: "Developed cross-platform mobile applications as part of graduate training program.",
            achievements: [
                "Developed cross-platform mobile app utilizing Ext JS Modern and Apache Cordova",
                "Enhanced Academic Information Management system serving 10,000+ students",
                "Achieved over 15,000 downloads across Apple Store and Play Store",
                "Collaborated with cross-functional teams to integrate user feedback",
                "Improved application performance through optimization techniques"
            ],
            technologies: ["Ext JS", "Apache Cordova", "JavaScript", "Mobile Development"]
        },
        {
            title: "Internship",
            company: "Zeenode Limited",
            location: "Kampala",
            period: "Jul 2016 — Mar 2017",
            description: "Started career as an intern developing cross-platform mobile applications.",
            achievements: [
                "Developed cross-platform mobile application using Apache Cordova and Sencha Touch",
                "Created alternative to Ext JS-based web SPA for mobile users",
                "Provided seamless experience across iOS and Android devices"
            ],
            technologies: ["Apache Cordova", "Sencha Touch", "Mobile Development"]
        }
    ];

    return (
        <section id="experience" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Work Experience</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        A journey of continuous learning and growth, building impactful solutions across various domains.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Timeline line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 h-full hidden lg:block"></div>

                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative mb-12 lg:mb-16 ${
                                index % 2 === 0 ? 'lg:pr-1/2 lg:text-right' : 'lg:pl-1/2 lg:ml-auto lg:text-left'
                            }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg hidden lg:block"></div>

                            <div className={`bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600 ${
                                index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                            }`}>
                                <div className="mb-4">
                                    <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
                                    <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-2">
                                        <span className="font-semibold text-blue-600">{exp.company}</span>
                                        <span>•</span>
                                        <span>{exp.location}</span>
                                        <span>•</span>
                                        <span>{exp.period}</span>
                                    </div>
                                    <p className="text-gray-600 italic">{exp.description}</p>
                                </div>

                                <div className="mb-4">
                                    <h4 className="font-semibold text-gray-800 mb-3">Key Achievements:</h4>
                                    <ul className="space-y-2">
                                        {exp.achievements.map((achievement, achievementIndex) => (
                                            <li key={achievementIndex} className="flex items-start">
                                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                                                <span className="text-gray-600 text-sm">{achievement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold text-gray-800 mb-3">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <span
                                                key={techIndex}
                                                className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
                >
                    <h3 className="text-2xl font-bold mb-4">Education</h3>
                    <div className="max-w-2xl mx-auto">
                        <h4 className="text-xl font-semibold mb-2">Bachelor of Science in Computer Science</h4>
                        <p className="text-blue-100 mb-2">Makerere University, Kampala</p>
                        <p className="text-blue-100">Aug 2014 — Jan 2023</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience; 