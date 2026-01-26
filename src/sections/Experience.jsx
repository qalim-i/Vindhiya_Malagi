import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';

const Experience = ({ experience }) => {
    return (
        <section id="experience" className="py-20 bg-slate-50">
            <div className="flex items-center justify-center mb-16">
                <Briefcase className="text-secondary mr-3" size={28} />
                <h2 className="text-3xl font-bold text-primary">Professional Experience</h2>
            </div>

            <div className="max-w-4xl mx-auto relative pl-8 md:pl-0">
                {/* Continuous Timeline Line - Static and always visible */}
                <div className="absolute left-[15px] md:left-[calc(50%-1px)] top-0 bottom-0 w-0.5 bg-slate-300" />

                {experience.map((job, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="mb-12 relative"
                    >
                        <div className={`flex flex-col md:flex-row items-center justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                            {/* Content Box */}
                            <div className="w-full md:w-[45%] bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative">
                                {/* Arrow */}
                                <div className={`hidden md:block absolute top-6 w-4 h-4 bg-white border-t border-r border-slate-200 rotate-45 ${index % 2 === 0 ? '-left-2 border-t-0 border-r-0 border-b border-l' : '-right-2'}`} />

                                <h3 className="text-lg font-bold text-primary mb-1">
                                    {job.position}
                                </h3>
                                <div className="text-secondary font-medium text-sm mb-4">
                                    {job.institution}
                                </div>
                                <div className="flex items-center text-slate-500 text-sm bg-slate-50 px-3 py-1 rounded w-fit">
                                    <Calendar size={14} className="mr-2" />
                                    {job.period}
                                </div>
                            </div>

                            {/* Timeline Dot */}
                            <div className="absolute left-[-24.5px] md:left-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-slate-50 md:-translate-x-1/2 shadow-sm z-10" />

                            {/* Spacer for other side */}
                            <div className="w-full md:w-[45%] hidden md:block" />

                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
