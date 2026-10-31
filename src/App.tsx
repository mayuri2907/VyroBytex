import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CursorProvider } from './context/CursorContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { WorkPage } from './pages/WorkPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { ROUTES } from './lib/routes';

export const App: React.FC = () => {
  return (
    <CursorProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTES.SERVICES.slice(1)} element={<ServicesPage />} />
            <Route path={ROUTES.WORK.slice(1)} element={<WorkPage />} />
            <Route path="work/:id" element={<ProjectDetailPage />} />
            <Route path={ROUTES.ABOUT.slice(1)} element={<AboutPage />} />
            <Route path={ROUTES.CONTACT.slice(1)} element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CursorProvider>
  );
};

export default App;
