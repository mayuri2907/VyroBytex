import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { CustomCursor } from '../cursor/CustomCursor';
import { InteractiveBackground } from '../background/InteractiveBackground';
import { FloatingSocialContact } from './FloatingSocialContact';
import { CinematicIntro } from '../intro/CinematicIntro';

export const Layout: React.FC = () => {
  return (
    <div className="site-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <CinematicIntro />
      <ScrollToTop />
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <CustomCursor />
      <InteractiveBackground />
      <Navbar />
      <main id="main-content" style={{ flex: 1, position: 'relative', zIndex: 'var(--z-content)' }}>
        <Outlet />
      </main>
      <FloatingSocialContact />
      <Footer />
    </div>
  );
};
