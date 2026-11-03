import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CursorProvider } from './context/CursorContext';
import { Layout } from './components/layout/Layout';
import { HomePage } from './pages/HomePage';
import { ROUTES } from './lib/routes';

// Route-based code splitting for Core Web Vitals performance
const ServicesPage = lazy(() => import('./pages/ServicesPage').then((m) => ({ default: m.ServicesPage })));
const WebsiteDevelopmentPage = lazy(() => import('./pages/services/WebsiteDevelopmentPage').then((m) => ({ default: m.WebsiteDevelopmentPage })));
const CustomSoftwarePage = lazy(() => import('./pages/services/CustomSoftwarePage').then((m) => ({ default: m.CustomSoftwarePage })));
const EcommerceDevelopmentPage = lazy(() => import('./pages/services/EcommerceDevelopmentPage').then((m) => ({ default: m.EcommerceDevelopmentPage })));
const AiSolutionsPage = lazy(() => import('./pages/services/AiSolutionsPage').then((m) => ({ default: m.AiSolutionsPage })));

const WorkPage = lazy(() => import('./pages/WorkPage').then((m) => ({ default: m.WorkPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then((m) => ({ default: m.ProjectDetailPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((m) => ({ default: m.AboutPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then((m) => ({ default: m.ContactPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then((m) => ({ default: m.NotFoundPage })));

export const App: React.FC = () => {
  return (
    <CursorProvider>
      <BrowserRouter>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path={ROUTES.SERVICES.slice(1)} element={<ServicesPage />} />
              <Route path={ROUTES.SERVICES_WEB.slice(1)} element={<WebsiteDevelopmentPage />} />
              <Route path={ROUTES.SERVICES_SOFTWARE.slice(1)} element={<CustomSoftwarePage />} />
              <Route path={ROUTES.SERVICES_ECOMMERCE.slice(1)} element={<EcommerceDevelopmentPage />} />
              <Route path={ROUTES.SERVICES_AI.slice(1)} element={<AiSolutionsPage />} />
              <Route path={ROUTES.WORK.slice(1)} element={<WorkPage />} />
              <Route path="work/:id" element={<ProjectDetailPage />} />
              <Route path={ROUTES.ABOUT.slice(1)} element={<AboutPage />} />
              <Route path={ROUTES.CONTACT.slice(1)} element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </CursorProvider>
  );
};

export default App;
