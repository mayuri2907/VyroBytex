export const ROUTES = {
  HOME: '/',
  SERVICES: '/services',
  SERVICES_WEB: '/services/website-development',
  SERVICES_SOFTWARE: '/services/custom-software',
  SERVICES_ECOMMERCE: '/services/ecommerce-development',
  SERVICES_AI: '/services/ai-solutions',
  WORK: '/work',
  WORK_DETAIL: '/work/:id',
  ABOUT: '/about',
  CONTACT: '/contact',
} as const;

export type RouteKey = keyof typeof ROUTES;
export type RoutePath = (typeof ROUTES)[RouteKey];

export const getProjectDetailRoute = (id: string): string => `/work/${id}`;

export interface NavItem {
  label: string;
  path: RoutePath;
  description?: string;
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Work', path: ROUTES.WORK, description: 'Selected work & design explorations' },
  { label: 'Services', path: ROUTES.SERVICES, description: 'Digital solutions & capabilities' },
  { label: 'About', path: ROUTES.ABOUT, description: 'Company & founder philosophy' },
  { label: 'Contact', path: ROUTES.CONTACT, description: 'Start a conversation' },
];
