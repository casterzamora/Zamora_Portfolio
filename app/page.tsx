'use client';

import { useState } from 'react';
import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/ProjectsSection';
import CurrentlyLearning from '@/components/CurrentlyLearning';
import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Home() {
  const [activeSection, setActiveSection] = useState<'home' | 'projects' | 'learning'>('home');

  return (
    <div className="min-h-screen bg-primary">
      {/* Navigation */}
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 md:py-20">
        {/* Hero Section */}
        {activeSection === 'home' && (
          <>
            <HeroSection />
            <ContactForm />
          </>
        )}

        {/* Projects Section */}
        {activeSection === 'projects' && <ProjectsSection />}

        {/* Currently Learning Section */}
        {activeSection === 'learning' && <CurrentlyLearning />}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
