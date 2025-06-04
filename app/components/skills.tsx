"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    const skills = [
        { name: 'JavaScript', level: 95, category: 'Frontend' },
        { name: 'TypeScript', level: 90, category: 'Frontend' },
        { name: 'React', level: 85, category: 'Frontend' },
        { name: 'Svelte/SvelteKit', level: 95, category: 'Frontend' },
        { name: 'Tailwind CSS', level: 90, category: 'Frontend' },
        { name: 'HTML & CSS', level: 95, category: 'Frontend' },
        { name: 'Node.js', level: 90, category: 'Backend' },
        { name: 'Express.js', level: 85, category: 'Backend' },
        { name: 'PostgreSQL', level: 80, category: 'Database' },
        { name: 'Git', level: 90, category: 'Tools' },
        { name: 'CI/CD', level: 85, category: 'DevOps' },
        { name: 'API Development', level: 90, category: 'Backend' }
    ];

    const categories = ['Frontend', 'Backend', 'Database', 'Tools', 'DevOps'];

    const getSkillsByCategory = (category: string) => {
        return skills.filter(skill => skill.category === category);
    };

    return (
        <section id="skills" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Skills & Expertise</h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Proficient in modern web technologies with a focus on JavaScript ecosystem and scalable solutions.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, categoryIndex) => (
                        <motion.div
                            key={category}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">{category}</h3>
                            <div className="space-y-4">
                                {getSkillsByCategory(category).map((skill, skillIndex) => (
                                    <div key={skill.name}>
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-gray-700 font-medium">{skill.name}</span>
                                            <span className="text-sm text-gray-500">{skill.level}%</span>
                                        </div>
                                        <div className="w-full bg-gray-200 rounded-full h-2">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                                                viewport={{ once: true }}
                                                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                                            ></motion.div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
                >
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Additional Expertise</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <div className="text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">Mobile Development</h4>
                            <p className="text-sm text-gray-600">Apache Cordova, Cross-platform apps</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">API Development</h4>
                            <p className="text-sm text-gray-600">RESTful APIs, Authentication</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">AI Integration</h4>
                            <p className="text-sm text-gray-600">OpenAI APIs, RAG systems</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                            </div>
                            <h4 className="font-semibold text-gray-800 mb-2">DevOps</h4>
                            <p className="text-sm text-gray-600">CI/CD, Deployment automation</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills; 