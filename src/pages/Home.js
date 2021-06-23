import React from 'react'
//Importing components
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ServiceSection from '../components/ServiceSection';

function Home() {
    return (
        <div>
            <HeroSection />
            <AboutSection />
            <ServiceSection />
        </div>
    )
}

export default Home;
