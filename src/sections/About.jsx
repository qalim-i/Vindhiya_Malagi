import React from 'react';
import { motion } from 'framer-motion';

const About = ({ summary, competencies, organizations }) => {
    return (
        <section id="about" className="py-20 relative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center mb-6">
                        <span className="w-1 h-8 bg-secondary mr-4"></span>
                        <h2 className="text-3xl font-bold text-primary">Professional Summary</h2>
                    </div>
                    <p className="text-slate-600 text-lg leading-loose text-justify">
                        {summary}
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="flex items-center mb-6">
                        <span className="w-1 h-8 bg-accent mr-4"></span>
                        <h3 className="text-2xl font-bold text-primary">Core Competencies</h3>
                    </div>

                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {competencies.map((item, index) => (
                            <motion.li
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.05 * index }}
                                className="bg-slate-50 border border-slate-200 text-slate-700 px-4 py-3 rounded-md text-sm font-medium transition-all hover:border-secondary hover:text-secondary hover:bg-white shadow-sm flex items-center justify-center text-center h-full"
                            >
                                {item}
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="col-span-1 md:col-span-2 mt-8"
                >
                    <div className="flex items-center mb-6">
                        <span className="w-1 h-8 bg-slate-800 mr-4"></span>
                        <h3 className="text-2xl font-bold text-primary">Organizations</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {organizations?.map((org, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 * index }}
                                className="bg-slate-50 p-6 rounded-lg border border-slate-200 hover:shadow-md transition-shadow"
                            >
                                <h4 className="font-bold text-lg text-slate-800 mb-2">{org.name}</h4>
                                <div className="flex flex-col sm:flex-row sm:justify-between text-sm text-slate-600 mb-2">
                                    <span className="font-semibold text-secondary">{org.role}</span>
                                    <span>{org.period}</span>
                                </div>
                                <p className="text-sm text-slate-500 italic">{org.associated_with}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
