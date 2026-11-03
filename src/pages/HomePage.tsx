import React from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { ServicesInteractive } from '../components/sections/ServicesInteractive';
import { SelectedWork } from '../components/sections/SelectedWork';
import { Differentiators } from '../components/sections/Differentiators';
import { ProcessSection } from '../components/sections/ProcessSection';
import { TeamSection } from '../components/sections/TeamSection';
import { ContactCTA } from '../components/sections/ContactCTA';
import { usePageSEO } from '../hooks/usePageSEO';
import { buildOrganizationSchema, buildWebSiteSchema } from '../lib/seo';

export const HomePage: React.FC = () => {
  usePageSEO({
    title: 'Vyrobytex | Website Development, Software & AI Solutions',
    description:
      'Vyrobytex builds modern business websites, e-commerce platforms, custom software, and AI-powered digital solutions to help businesses grow.',
    canonicalPath: '/',
    structuredData: {
      '@context': 'https://schema.org',
      '@graph': [buildOrganizationSchema(), buildWebSiteSchema()],
    },
  });

  return (
    <>
      <HeroSection />
      <ServicesInteractive />
      <SelectedWork />
      <Differentiators />
      <ProcessSection />
      <TeamSection variant="compact" />
      <ContactCTA />
    </>
  );
};

export default HomePage;
