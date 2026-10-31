import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesInteractive } from '../components/sections/ServicesInteractive';
import { SelectedWork } from '../components/sections/SelectedWork';
import { Differentiators } from '../components/sections/Differentiators';
import { ProcessSection } from '../components/sections/ProcessSection';
import { ContactCTA } from '../components/sections/ContactCTA';
import { usePageSEO } from '../hooks/usePageSEO';

export const HomePage: React.FC = () => {
  usePageSEO({
    title: 'Vyrobytex — Digital Experiences. Built to Move Business Forward.',
    description:
      'We design and develop custom websites, software, and AI-powered solutions that help businesses build stronger digital experiences and connect with their customers.',
  });

  return (
    <>
      <HeroSection />
      <ServicesInteractive />
      <SelectedWork />
      <Differentiators />
      <ProcessSection />
      <ContactCTA />
    </>
  );
};
