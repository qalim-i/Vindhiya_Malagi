import React, { useState } from 'react';
import { Menu, X, Linkedin, Mail, GraduationCap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ contact }) => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const navLinks = [
        { name: 'Home', href: '/', type: 'route' },
        { name: 'About', href: '/#about', type: 'hash' },
        { name: 'Experience', href: '/#experience', type: 'hash' },
        { name: 'Work & Research', href: '/projects', type: 'route' },
        { name: 'Contact', href: '/#contact', type: 'hash' },
    ];

    const handleNavClick = (e, link) => {
        e.preventDefault();
        setIsOpen(false);

        if (link.type === 'route') {
            if (link.href === '/' && location.pathname === '/') {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
                navigate(link.href);
            }
            return;
        }

        if (link.type === 'hash') {
            const hash = link.href.split('#')[1];

            if (location.pathname !== '/') {
                navigate(link.href);
                // The scrolling will be handled by a useEffect in App or Home if easier, 
                // but simpler might be to use a timeout if navigating
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        const navHeight = 64;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                }, 500); // Wait for page load
            } else {
                // Already on home - add timeout to allow menu to close/UI to settle
                setTimeout(() => {
                    const element = document.getElementById(hash);
                    if (element) {
                        const navHeight = 64;
                        const elementPosition = element.getBoundingClientRect().top;
                        const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                    }
                }, 100);
            }
        }
    };

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/" className="text-xl font-bold text-primary tracking-tight hover:text-secondary transition-colors">
                            Dr. Vindhya Malagi
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-6">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="cursor-pointer text-slate-600 hover:text-secondary px-3 py-2 text-sm font-medium transition-colors relative group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Social Icons Desktop */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a href={contact.google_scholar} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#f4c430] transition-colors">
                            <GraduationCap size={20} />
                        </a>
                        <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-colors">
                            <Linkedin size={20} />
                        </a>
                        <a href={`mailto:${contact.email}`} className="text-slate-500 hover:text-red-500 transition-colors">
                            <Mail size={20} />
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-secondary hover:bg-slate-100 focus:outline-none"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-inner">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="cursor-pointer text-slate-600 hover:text-secondary hover:bg-slate-50 block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
