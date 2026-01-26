import React from 'react';
import { Mail, Phone, Linkedin, GraduationCap } from 'lucide-react';

const Contact = ({ contact }) => {
    return (
        <section id="contact" className="py-20 bg-slate-50 relative">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold text-primary mb-8">Get In Touch</h2>
                <p className="text-slate-600 mb-12 text-lg">
                    Open to collaborations, research opportunities, and academic consulting.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <a href={`mailto:${contact.email}`} className="flex flex-col items-center bg-white p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-200 shadow-sm hover:shadow-lg hover:border-secondary/30 group">
                        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-slate-600">
                            <Mail size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-2">Email</h3>
                        <p className="text-slate-500 text-sm">{contact.email}</p>
                    </a>

                    <a href={`tel:${contact.phone}`} className="flex flex-col items-center bg-white p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-200 shadow-sm hover:shadow-lg hover:border-secondary/30 group">
                        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-slate-600">
                            <Phone size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-2">Phone</h3>
                        <p className="text-slate-500 text-sm">{contact.phone}</p>
                    </a>

                    <a href={`https://${contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-white p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-200 shadow-sm hover:shadow-lg hover:border-secondary/30 group">
                        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-slate-600">
                            <Linkedin size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-2">LinkedIn</h3>
                        <p className="text-slate-500 text-sm">Connect on LinkedIn</p>
                    </a>

                    <a href={contact.google_scholar} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center bg-white p-8 rounded-2xl hover:-translate-y-2 transition-transform duration-300 border border-slate-200 shadow-sm hover:shadow-lg hover:border-secondary/30 group">
                        <div className="w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary group-hover:text-white transition-colors text-slate-600">
                            <GraduationCap size={28} />
                        </div>
                        <h3 className="text-lg font-bold text-primary mb-2">Google Scholar</h3>
                        <p className="text-slate-500 text-sm">View Publications</p>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Contact;
