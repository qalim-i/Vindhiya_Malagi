import React from 'react';
import { motion } from 'framer-motion';
import { Folder, BookOpen, Lightbulb, Award, FileText } from 'lucide-react';

const Projects = ({ projects, publications, patents, innovation }) => {
    return (
        <section id="projects" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-primary mb-4">Work, Research & Innovation</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        A comprehensive overview of funded projects, scholarly publications, patents, and institutional contributions.
                    </p>
                </div>

                {/* 1. Funded Projects */}
                <div className="mb-20">
                    <div className="flex items-center mb-8 border-b border-slate-200 pb-4">
                        <Folder className="text-secondary mr-3" size={24} />
                        <h3 className="text-2xl font-bold text-primary">Funded Projects</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="bg-slate-50 p-6 rounded-xl border border-slate-200 hover:border-secondary/50 transition-all hover:shadow-md"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${project.status === 'Ongoing' ? 'bg-green-100 text-green-700' : 'bg-slate-200 text-slate-600'}`}>
                                        {project.status}
                                    </span>
                                    <span className="text-slate-500 text-sm font-medium">{project.period_of_support}</span>
                                </div>
                                <h4 className="text-lg font-bold text-primary mb-2 line-clamp-2">{project.title_of_project}</h4>
                                <p className="text-slate-600 text-sm mb-4">{project.name_of_agency}</p>
                                <div className="text-secondary font-mono text-sm font-bold">
                                    Amount: ₹{project.total_amount}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 2. Patents */}
                <div className="mb-20">
                    <div className="flex items-center mb-8 border-b border-slate-200 pb-4">
                        <Lightbulb className="text-secondary mr-3" size={24} />
                        <h3 className="text-2xl font-bold text-primary">Patents</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {patents.map((patent, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                                    <Lightbulb size={80} />
                                </div>
                                <h4 className="text-base font-bold text-primary mb-3 pr-6">{patent.patent_name}</h4>
                                <div className="space-y-2 text-sm">
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Type</span>
                                        <span className="text-slate-900 font-medium">{patent.patent_type}</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span className="text-slate-500">Status</span>
                                        <span className="text-secondary font-medium">{patent.patent_status}</span>
                                    </div>
                                    <div className="pt-2 border-t border-slate-100 mt-2">
                                        <span className="text-slate-500 block text-xs uppercase mb-1">Application No.</span>
                                        <span className="text-slate-700 font-mono text-xs">{patent.application_date_and_no}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* 3. Publications */}
                <div className="mb-20">
                    <div className="flex items-center mb-8 border-b border-slate-200 pb-4">
                        <BookOpen className="text-secondary mr-3" size={24} />
                        <h3 className="text-2xl font-bold text-primary">Publications</h3>
                    </div>
                    <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
                        <div className="space-y-4">
                            {publications.map((pub, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="flex items-start gap-4 p-3 rounded-lg hover:bg-white transition-colors"
                                >
                                    <FileText className="flex-shrink-0 text-slate-400 mt-1" size={18} />
                                    <p className="text-slate-700 text-sm leading-relaxed font-medium">
                                        {pub.citation}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Innovation (IIC) */}
                <div>
                    <div className="flex items-center mb-8 border-b border-slate-200 pb-4">
                        <Award className="text-secondary mr-3" size={24} />
                        <h3 className="text-2xl font-bold text-primary">Institution's Innovation Council (IIC)</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {innovation.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                className="flex items-start bg-white p-4 rounded-lg border border-slate-200 shadow-sm"
                            >
                                <span className="text-secondary font-bold mr-3 text-lg">•</span>
                                <span className="text-slate-700 text-sm">{item}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Projects;
