import React from 'react'
//Importing components
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';
import ProjectSection from '../components/ProjectSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactBanner from '../components/ContactBanner';
import Footer from '../components/Footer';

function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
            <ProjectSection />
            <TestimonialsSection />
            <ContactBanner />
            <Footer />
        </div>
    )
}

export default Home;
