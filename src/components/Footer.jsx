import React from 'react';

const Footer = ({ name }) => {
    return (
        <footer className="bg-slate-50 border-t border-slate-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
                <p className="text-slate-500 text-sm">
                    &copy; {new Date().getFullYear()} {name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
