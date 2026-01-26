import React, { useEffect } from 'react';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';

const ProjectsPage = ({ profileData }) => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <Projects
                projects={profileData.funded_projects}
                publications={profileData.publications}
                patents={profileData.patents}
                research={profileData.research_experience}
                innovation={profileData.iic_contributions}
            />
            <Contact contact={profileData.personal_information} />
        </div>
    );
};

export default ProjectsPage;
