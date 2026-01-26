import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import Footer from './components/Footer';
import profileData from '../profile.json';

function App() {
  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 font-sans selection:bg-secondary selection:text-white overflow-x-hidden">
      <Navbar contact={profileData.personal_information} />
      <main>
        <Routes>
          <Route path="/" element={<Home profileData={profileData} />} />
          <Route path="/projects" element={<ProjectsPage profileData={profileData} />} />
        </Routes>
      </main>
      <Footer name={profileData.personal_information.name} />
    </div>
  );
}

export default App;
