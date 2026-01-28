import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import heroBg from '../assets/image.png';

const Hero = ({ data }) => {
    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center items-center relative pt-16"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 p-4 max-w-4xl flex flex-col items-center"
            >
                <div className="mb-8 relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-accent rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <img
                        src="https://media.licdn.com/dms/image/v2/C4D03AQFuewkkmIBj5w/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1653135257551?e=1770854400&v=beta&t=wLGko6qZvt7o5hYjZmF9QP91FySYzOW1318OSdz6Z2Y"
                        alt="Dr. Vindhya Malagi"
                        className="relative w-40 h-40 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-xl"
                    />
                </div>

                <h2 className="text-secondary font-semibold tracking-wide mb-4 uppercase text-sm md:text-base">
                    Academic Leader & Innovator
                </h2>
                <h1 className="text-5xl sm:text-7xl font-extrabold text-primary mb-6 tracking-tight">
                    {data.name}
                </h1>
                <p className="text-xl sm:text-2xl text-slate-600 mb-2 font-light">{data.degree}</p>
                <p className="max-w-2xl mx-auto text-slate-500 text-lg leading-relaxed mt-6">
                    Advancing Artificial Intelligence through skepticism, structure, and purpose.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="#contact"
                        className="px-8 py-3 rounded-full bg-primary hover:bg-slate-800 text-white font-semibold transition-all shadow-lg shadow-slate-900/10"
                    >
                        Get in Touch
                    </a>
                    <Link
                        to="/projects"
                        className="px-8 py-3 rounded-full border border-slate-300 hover:border-secondary hover:text-secondary text-slate-600 font-semibold transition-all bg-white"
                    >
                        View Work
                    </Link>
                </div>
            </motion.div>

            {/* Subtle Background Elements - Improved for Mobile */}
            <div className="absolute top-0 right-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-sky-200/40 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-indigo-100/40 rounded-full blur-[80px] md:blur-[100px] -z-10 pointer-events-none -translate-x-1/3 translate-y-1/4" />

            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <ArrowDown className="text-slate-400" size={24} />
            </motion.div>
        </section>
    );
};

export default Hero;
