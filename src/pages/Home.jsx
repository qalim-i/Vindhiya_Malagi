import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Experience from '../sections/Experience';
import Contact from '../sections/Contact';

const Home = ({ profileData }) => {
    const location = useLocation();

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash);
            if (element) {
                setTimeout(() => {
                    const navHeight = 64;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - navHeight;
                    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    return (
        <>
            <Hero data={profileData.personal_information} />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <About summary={profileData.professional_summary} competencies={profileData.core_competencies} organizations={profileData.organizations} />
                <Experience experience={profileData.professional_experience} />
                <Contact contact={profileData.personal_information} />
            </div>
        </>
    );
};

export default Home;
