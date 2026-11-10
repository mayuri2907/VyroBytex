import type {
  ServiceItem,
  ProjectItem,
  ProcessStep,
  Differentiator,
  WorkingPrinciple,
  TeamMember,
} from '../types';

export const BRAND = {
  name: 'Vyrobytex',
  founder: 'Navin Chaudhary',
  founderRole: 'Founder & Creative Engineer',
  tagline: 'More Than a Website. A Better Way to Connect With Your Customers.',
  headline: 'Digital Experiences.\nBuilt to Move Business Forward.',
  subheadline:
    'We create custom websites, software, and AI-powered solutions that help businesses build a stronger digital presence.',
  finalCtaHeadline: "Have an Idea? Let's Build It.",
  finalCtaSubtext:
    "Tell us what you're building, what your business needs, or which problem you'd like to solve. We review every enquiry personally.",
  
  // Official Contact Details
  phoneRaw: '8155952384',
  phoneDisplay: '+91 81559 52384',
  whatsappMessage:
    'Hi Vyrobytex! I visited your website and would like to discuss a project. Could you share more details about your services?',
  whatsappUrl:
    'https://wa.me/918155952384?text=Hi%20Vyrobytex!%20I%20visited%20your%20website%20and%20would%20like%20to%20discuss%20a%20project.%20Could%20you%20share%20more%20details%20about%20your%20services%3F',
  callUrl: 'tel:+918155952384',
  email: 'chaudharynax27@gmail.com',
  emailUrl: 'mailto:chaudharynax27@gmail.com',
  instagramUrl: 'https://www.instagram.com/vyrobytex?dlrf=eTNwY3ozamx0cmZl',
  availability: 'Accepting Selected Client Inquiries',
  location: 'Gujarat, India & Remote Global',
} as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'Website Development',
    shortDescription:
      'Custom websites designed to present your business professionally and help customers find the information they need.',
    fullDescription:
      'We craft tailored digital web experiences from the ground up. Combining contemporary art direction, lightning-fast performance, and accessible code, every build is tailored to your business model and target audience.',
    offerings: [
      'Business & Corporate Websites',
      'Creative Agency & Studio Websites',
      'Professional Portfolio Websites',
      'High-converting Landing Pages',
      'Custom Responsive Interfaces',
      'Comprehensive Website Redesigns',
    ],
    problemsSolved: [
      'Outdated or slow digital presence that harms first impressions',
      'Broken or frustrating mobile and tablet experiences',
      'Inflexible website builders that limit brand expression',
      'Poor search engine visibility and sub-optimal core web vitals',
    ],
    whoBenefits: [
      'Established companies looking to elevate digital credibility',
      'Professional service firms requiring polished client portals',
      'Founders launching new ventures needing an authentic flagship site',
    ],
    capabilities: [
      'Custom Responsive Codebases (React / TypeScript / HTML5 / CSS3)',
      'Modern Editorial Typography & Motion Systems',
      'SEO Architecture & Core Web Vitals Optimization',
      'CMS Integration (Headless, Strapi, Sanity, or Custom)',
      'Cross-device & Cross-browser Accessibility Auditing',
    ],
    deliverables: [
      'Bespoke production-ready codebase',
      'Design tokens & component architecture',
      'Structured meta tags & SEO setup',
      'Deployment configuration & staff handover',
    ],
    tag: 'Digital Presence',
    previewImage: '/images/projects/aura-studio.jpg',
  },
  {
    id: 'ecommerce',
    number: '02',
    title: 'E-commerce Solutions',
    shortDescription:
      'Online storefronts and product experiences tailored to your business requirements.',
    fullDescription:
      'From custom digital storefronts to headless architectures, we build store experiences that turn casual browsers into loyal customers. Engineered for speed, intuitive navigation, and reliable checkouts.',
    offerings: [
      'Custom Online Storefronts',
      'Structured Product Catalogues',
      'Interactive Product Detail Pages',
      'Frictionless Shopping & Enquiry Flows',
      'Business-Specific Platform Integrations',
    ],
    problemsSolved: [
      'High checkout abandonment caused by cumbersome purchasing flows',
      'Cluttered, generic store templates that dilute product value',
      'Difficult inventory navigation with complex product variants',
      'Slow mobile page loading during peak customer browsing hours',
    ],
    whoBenefits: [
      'Direct-to-consumer brands looking for a memorable brand identity',
      'Specialty retailers expanding from physical stores to digital commerce',
      'B2B catalogues looking to streamline client ordering and quotes',
    ],
    capabilities: [
      'Tailored Storefront Frontends & Micro-interactions',
      'Product Filtering, Search & Variant Pickers',
      'Payment Gateway & Currency Architecture',
      'Customer Cart & Enquiry Systems',
      'Inventory & Order Workflow Integration',
    ],
    deliverables: [
      'Custom commerce storefront interface',
      'Payment & checkout flow setup',
      'Product management structure',
      'Analytics & conversion tracking hooks',
    ],
    tag: 'Commerce & Retail',
    previewImage: '/images/projects/aura-studio.jpg',
  },
  {
    id: 'software-dev',
    number: '03',
    title: 'Software Development',
    shortDescription:
      'Custom applications and business tools designed around specific workflows and operational needs.',
    fullDescription:
      'When off-the-shelf tools fall short, we build custom software that solves your exact workflow challenges. Scalable APIs, intuitive user interfaces, and secure data handling engineered for longevity.',
    offerings: [
      'Custom Business Web Applications',
      'Internal Management & Operations Systems',
      'Team Workflow & Task Automation Tools',
      'Data-Driven Dashboards & Reporting Portals',
      'Suitable Third-Party API Integrations',
    ],
    problemsSolved: [
      'Clunky spreadsheet bottlenecks slowing down business operations',
      'Disconnected software tools causing manual data re-entry',
      'Off-the-shelf SaaS that is expensive, bloated, and ill-fitted',
      'Lack of unified real-time visibility into operational metrics',
    ],
    whoBenefits: [
      'Growing businesses needing custom internal tools to scale team output',
      'Service companies providing dedicated client portals and tracking',
      'Organizations seeking purpose-built software with no per-seat licensing bloat',
    ],
    capabilities: [
      'Full-Stack Web App Engineering (TypeScript, Node, React)',
      'Role-Based Access Control (RBAC) & Secure Data Handling',
      'REST & GraphQL API Connector Architecture',
      'Relational & Document Database Schema Design',
      'Responsive Operational Dashboards & Data Visualization',
    ],
    deliverables: [
      'Tested full-stack application codebase',
      'Secure authentication & role logic',
      'API integration documentation',
      'Cloud hosting & staging environments',
    ],
    tag: 'Custom Applications',
    previewImage: '/images/projects/nexus-core.jpg',
  },
  {
    id: 'ai-solutions',
    number: '04',
    title: 'AI Solutions',
    shortDescription:
      'Practical AI-powered features and integrations designed to support useful business workflows.',
    fullDescription:
      'We help businesses leverage artificial intelligence practically and responsibly. From intelligent assistants grounded in your private business documents to automated workflow pipelines and smart application features.',
    offerings: [
      'Practical Business AI Integrations',
      'Intelligent Business Support Assistants',
      'Automated Workflow & Data Parsing Tools',
      'AI-Powered Application Features',
      'Appropriate Automation Pipelines',
    ],
    problemsSolved: [
      'Repetitive customer inquiries burdening team members during peak hours',
      'Time-consuming manual data entry and document information extraction',
      'Slow response times to prospective client project inquiries',
      'Difficulty extracting structured insights from company knowledge archives',
    ],
    whoBenefits: [
      'Customer support teams seeking 24/7 intelligent first-touch response',
      'Knowledge-heavy businesses requiring rapid document search and synthesis',
      'Product teams looking to embed practical AI capabilities into existing apps',
    ],
    capabilities: [
      'Private Knowledge-Grounded Conversational Tools (RAG)',
      'Document Parsing, Summary & Extraction Pipelines',
      'Model API Orchestration (OpenAI, Anthropic, Gemini)',
      'Prompt Engineering & Output Validation Guardrails',
      'Human-in-the-Loop Review Interfaces',
    ],
    deliverables: [
      'Trained/connected AI assistant integration',
      'System prompt architecture & safety boundaries',
      'Webhook & API pipeline configurations',
      'Administrative testing playground',
    ],
    tag: 'Intelligent Systems',
    previewImage: '/images/projects/kroma-ai.jpg',
  },
  {
    id: 'cloud-solutions',
    number: '05',
    title: 'Cloud Technology Solutions',
    shortDescription:
      'Scalable cloud infrastructure, automated deployment pipelines, API integrations, and secure cloud environments built for business reliability.',
    fullDescription:
      'We architect and deploy secure, cost-effective cloud infrastructures tailored to growing businesses. From modern edge deployments and database clusters to continuous CI/CD pipelines and cloud migration stewardship, we ensure high uptime and effortless scaling.',
    offerings: [
      'Cloud Architecture & Migration',
      'Serverless Deployments & Edge Hosting',
      'Automated CI/CD Delivery Pipelines',
      'Secure Database Architecture & Backups',
      'Performance & Infrastructure Stewardship',
    ],
    problemsSolved: [
      'Unreliable servers causing unexpected site outages during traffic spikes',
      'High cloud bills from inefficiently configured cloud resources',
      'Complex manual deployments prone to human configuration error',
      'Lack of automated disaster recovery and backup strategies',
    ],
    whoBenefits: [
      'Growing startups transitioning from prototype to scalable production',
      'E-commerce stores preparing for seasonal or high-volume traffic surges',
      'Companies modernizing legacy internal systems to cloud-native platforms',
    ],
    capabilities: [
      'Vercel, AWS & Modern Edge Deployments',
      'Dockerized Environments & Microservices',
      'PostgreSQL, Redis & Cloud Database Optimization',
      'SSL, CDN & Global Edge Caching Configuration',
      'Continuous Monitoring, Alerting & Health Checks',
    ],
    deliverables: [
      'Production-ready cloud deployment',
      'Environment security configuration & access keys',
      'Automated deployment pipelines (CI/CD)',
      'Backup schedules & disaster recovery procedures',
    ],
    tag: 'Cloud & Infrastructure',
    previewImage: '/images/projects/nexus-core.jpg',
  },
  {
    id: 'maintenance-support',
    number: '06',
    title: 'Maintenance & Support',
    shortDescription:
      'Optional ongoing technical stewardship, continuous security updates, performance monitoring, and iterative feature development for your peace of mind.',
    fullDescription:
      'Digital products perform best with ongoing care. Our optional maintenance partnerships ensure your site remains secure, ultra-fast, and responsive to your evolving business requirements.',
    offerings: [
      'Proactive Uptime & Health Monitoring',
      'Security & Dependency Patches',
      'Continuous Speed & Core Web Vitals Audits',
      'On-Demand Feature Iterations',
      'Technical Stewardship & Backups',
    ],
    problemsSolved: [
      'Vulnerable websites broken by neglected plugin or package updates',
      'Gradual performance degradation impacting Google search rankings',
      'Lack of a trusted engineer on call when technical changes are needed',
      'Broken integrations after third-party API changes',
    ],
    whoBenefits: [
      'Busy founders and executives who want technical peace of mind',
      'Businesses requiring regular feature updates without hiring in-house',
      'Mission-critical platforms where downtime translates directly to lost revenue',
    ],
    capabilities: [
      'Automated Off-Site Backups & Disaster Recovery',
      'Security Patching & Dependency Management',
      'Core Web Vitals & PageSpeed Monitoring',
      'Staging Environment Testing Prior to Live Deploy',
      'Priority Turnaround for Urgent Technical Requests',
    ],
    deliverables: [
      'Scheduled maintenance logs & check-ins',
      'Dedicated developer response hours',
      'Security audit confirmations',
      'Backup snapshot archives',
    ],
    tag: 'Technical Care',
    previewImage: '/images/projects/nexus-core.jpg',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'aura-studio',
    title: 'Aura Studio',
    category: 'E-commerce',
    isConcept: true,
    conceptLabel: 'Concept Showcase',
    clientOrContext: 'Independent Digital Retail Architecture',
    summary:
      'A luxury editorial commerce experience built with dark minimalist aesthetics, smooth micro-interactions, and an instant checkout flow.',
    description:
      'Designed as a demonstration of high-fashion digital retail, Aura Studio blends magazine-style layout curation with seamless transactional performance. Features fluid product filtering, micro-transitions, and responsive touch-first interactions.',
    challenge:
      'Traditional e-commerce templates often feel rigid, cluttering high-ticket products with aggressive popups and sluggish page reloads that undermine brand prestige and reduce conversion.',
    solution:
      'Engineered an editorial magazine-inspired shopping experience with instantaneous client transitions, contextual product previews, and a clean, distraction-free purchasing journey.',
    architectureHighlights: [
      'Zero layout shifts (CLS < 0.02) across all responsive breakpoints',
      'Contextual floating previews tied to row hover with boundary safety',
      'Modular product collection filters with URL state synchronization',
      'Lightweight drawer cart with instant line-item updates',
    ],
    keyInteractions: [
      'Hover-driven floating product previews',
      'Fluid image zoom transitions on product detail',
      'Micro-animated badge indicators',
      'Instant touch-friendly drawer cart',
    ],
    techStack: ['React', 'TypeScript', 'CSS Modules / Tokens', 'Vite', 'Lucide Icons'],
    tags: ['Custom E-Commerce', 'Dark Minimalist Design', 'Micro-Interactions', 'Speed Optimization'],
    image: '/images/projects/aura-studio.jpg',
    year: '2025',
  },
  {
    id: 'nexus-core',
    title: 'Nexus Core Analytics',
    category: 'Software Development',
    isConcept: true,
    conceptLabel: 'Concept Showcase',
    clientOrContext: 'Independent Enterprise Software Interface',
    summary:
      'An enterprise operations dashboard with real-time metric streams, modular widget layouts, and responsive dark-mode visualization.',
    description:
      'Nexus Core illustrates a sophisticated data visualization dashboard tailored for multi-department organizations. Emphasizes visual clarity, custom graph interactions, role-based view toggles, and dense information architecture without clutter.',
    challenge:
      'Enterprise software dashboards frequently overwhelm users with dense tables and uncoordinated charts, creating cognitive fatigue and slowing down decision-making.',
    solution:
      'Designed a modular, low-latency analytics interface with customizable widget positions, clear visual hierarchy, and instant data filtering across cross-functional metrics.',
    architectureHighlights: [
      'Component-driven layout engine optimized for high-density information',
      'High-contrast accessible dark palette complying with WCAG AAA standards',
      'Responsive multi-breakpoint grid adapting from ultra-wide to tablet',
      'Zero bloated charting dependencies using clean SVG and Canvas primitives',
    ],
    keyInteractions: [
      'Interactive metric scrubbers with precise cursor readouts',
      'Contextual tooltip indicators with zero layout jitter',
      'Smooth view toggling between summary and departmental breakdowns',
      'Keyboard-accessible filter tabs and navigation shortcuts',
    ],
    techStack: ['React', 'TypeScript', 'Canvas / SVG Visualizations', 'CSS Grid Architecture'],
    tags: ['Enterprise Software', 'Data Visualization', 'Interactive Analytics', 'Modular Architecture'],
    image: '/images/projects/nexus-core.jpg',
    year: '2025',
  },
  {
    id: 'kroma-ai',
    title: 'Kroma AI Suite',
    category: 'AI Solutions',
    isConcept: true,
    conceptLabel: 'Concept Showcase',
    clientOrContext: 'Independent AI Workflow & Tooling Interface',
    summary:
      'A human-in-the-loop AI prompt and neural workflow canvas that simplifies complex automation pipelines for non-technical teams.',
    description:
      'Kroma AI showcases a bespoke interface for enterprise AI integration. Instead of rigid forms, users map prompt flows, connect private documents, and test outputs with real-time confidence scores and vector branch visualization.',
    challenge:
      'Most AI integration tools require complex Python scripting or expose raw terminal outputs, making workflow automation inaccessible to business and operations teams.',
    solution:
      'Created a visual node-based workflow builder where users connect document sources, customize prompt parameters, and test outputs with real-time confidence scoring.',
    architectureHighlights: [
      'Visual node graph state manager with instant execution feedback',
      'Typed schema validation for prompt inputs and external API hooks',
      'Token consumption monitoring and cost estimation displays',
      'Strict privacy boundaries ensuring sensitive documents remain isolated',
    ],
    keyInteractions: [
      'Smooth visual node navigation and draggable connections',
      'Real-time prompt confidence meters with glowing visual accents',
      'Interactive testing drawer with side-by-side prompt comparisons',
      'Direct copy and export of tested automation pipelines',
    ],
    techStack: ['React', 'TypeScript', 'SVG Canvas', 'REST Orchestration Primitives'],
    tags: ['AI Integration', 'Visual Workflow Canvas', 'Prompt Engineering', 'Custom LLM UI'],
    image: '/images/projects/kroma-ai.jpg',
    year: '2025',
  },
];

export const DIFFERENTIATORS: Differentiator[] = [
  {
    icon: 'Layers',
    title: 'Business-Specific Solutions',
    description:
      'We do not build from cookie-cutter templates. Every website and software build is architected to address your specific business objectives, audience expectations, and operational realities.',
    highlight: 'Tailored To Your Model',
  },
  {
    icon: 'Sparkles',
    title: 'Thoughtful Design & Development',
    description:
      'Crafting every layout, micro-interaction, and line of code for real user engagement and conversion. We balance artistic creative direction with uncompromising engineering quality.',
    highlight: 'Crafted With Care',
  },
  {
    icon: 'FileCheck',
    title: 'Clear Project Scope & Pricing',
    description:
      'Clear, itemized deliverables from day one. You will always know what is being built, when each milestone will be delivered, and exactly what the financial investment entails.',
    highlight: 'No Hidden Surprises',
  },
  {
    icon: 'Eye',
    title: 'Initial Design Previews',
    description:
      'Where appropriate for qualified projects, we provide initial interactive design previews before deep code execution so you can experience the creative direction firsthand.',
    highlight: 'Experience Before Commit',
  },
  {
    icon: 'ShieldCheck',
    title: 'Optional Post-Launch Support',
    description:
      'Our relationship does not end on launch day. We offer structured, optional maintenance agreements to keep your digital platform fast, secure, and continuously updated.',
    highlight: 'Long-Term Reliability',
  },
];

export const WORKING_PRINCIPLES: WorkingPrinciple[] = [
  {
    number: '01',
    title: 'Understand the problem before building',
    description:
      'We invest the necessary time up front to understand your commercial objectives, audience behavior, and operational constraints before recommending any technology stack.',
  },
  {
    number: '02',
    title: 'Design around actual user needs',
    description:
      'Interface decisions are driven by ergonomics, clarity, and conversion — not fleeting trends or superficial aesthetic gimmicks that confuse visitors.',
  },
  {
    number: '03',
    title: 'Keep communication clear',
    description:
      'Direct dialogue in plain business terms. You always speak directly with founder Navin Chaudhary and senior technical leadership without bureaucratic layers.',
  },
  {
    number: '04',
    title: 'Build for maintainability',
    description:
      'We write clean, typed, modular code structured for sub-second speeds, accessibility, and effortless long-term maintenance rather than throwaway code.',
  },
  {
    number: '05',
    title: 'Deliver solutions appropriate to the project',
    description:
      'We recommend technologies that fit your budget, timeline, and operational scale without introducing unnecessary dependencies or framework bloat.',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Discover',
    subtitle: 'Understand the business and its requirements',
    description:
      'We dive deep into your business objectives, target audience, brand positioning, and technical requirements. We define concrete success criteria and scope boundaries.',
    keyActivities: [
      'Business Model & Goal Review',
      'Target Audience & Journey Mapping',
      'Technical Scope & Deliverables Document',
      'Milestone Timeline & Cost Alignment',
    ],
  },
  {
    step: '02',
    title: 'Design',
    subtitle: 'Define the experience, layout, and visual direction',
    description:
      'We create high-fidelity design systems, typographic hierarchies, and interactive layouts. We refine the visual identity and user journeys until every touchpoint feels right.',
    keyActivities: [
      'Information Architecture & Wireframes',
      'Design Tokens, Colors & Typography Pairing',
      'Interactive Layout Previews & Micro-motion',
      'Client Review & Design Sign-off',
    ],
  },
  {
    step: '03',
    title: 'Develop',
    subtitle: 'Build and test the required digital solution',
    description:
      'We engineer your solution using modern, reliable technologies. Every line of code is structured for speed, responsiveness, security, and effortless future maintainability.',
    keyActivities: [
      'Semantic Component Architecture (TypeScript/React)',
      'API & Backend Integration Wiring',
      'Cross-Device & Viewport Responsiveness',
      'Rigorous QA, Performance & Accessibility Testing',
    ],
  },
  {
    step: '04',
    title: 'Launch',
    subtitle: 'Deploy and hand over the completed project according to the agreed scope',
    description:
      'We orchestrate a seamless deployment with comprehensive SEO checks, performance audits, and staff training. We then transition smoothly to optional ongoing maintenance.',
    keyActivities: [
      'Domain, DNS & SSL Configuration',
      'Final Core Web Vitals & Search Engine Audit',
      'Project Handover & Documentation Walkthrough',
      'Transition to Optional Ongoing Stewardship',
    ],
  },
];

export const TEAM_SECTION_CONTENT = {
  heading: 'Meet the People Behind Vyrobytex.',
  supportingText:
    'Different strengths. One shared goal. Building digital experiences that move businesses forward.',
} as const;

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: 'navin-chaudhary',
    number: '01',
    name: 'NAVIN CHAUDHARY',
    role: 'Full Stack Developer',
    image: '/images/team/navin-chaudhary.jpg',
    alt: 'Portrait of Navin Chaudhary — Full Stack Developer at Vyrobytex',
    portfolioUrl: 'https://mnax-ochre.vercel.app/',
    instagramUrl: 'https://www.instagram.com/astralxxixnax?vrfl=cXplb2RjcXN3NGVr',
  },
  {
    id: 'mayuri-kumari',
    number: '02',
    name: 'MS. MAYURI KUMARI',
    role: 'UI/UX Designer',
    image: '/images/team/mayuri-placeholder.svg',
    alt: 'Portrait placeholder for Ms. Mayuri Kumari — UI/UX Designer at Vyrobytex',
  },
  {
    id: 'brijesh-chaudhary',
    number: '03',
    name: 'BRIJESH CHAUDHARY',
    role: 'Team Member',
    image: '/images/team/brijesh-placeholder.svg',
    alt: 'Temporary portrait placeholder for Brijesh Chaudhary',
  },
  {
    id: 'man-chaudhari',
    number: '04',
    name: 'MAN CHAUDHARI',
    role: 'Frontend Development & Marketing',
    image: '/images/team/man-chaudhary.jpg',
    alt: 'Portrait of Man Chaudhari — Frontend Development & Marketing at Vyrobytex',
    portfolioUrl: 'https://man-chaudhari-portfolio.vercel.app',
  },
  {
    id: 'dixit-patel',
    number: '05',
    name: 'DIXIT PATEL',
    role: 'Sales & Customer Management',
    image: '/images/team/dixit-placeholder.svg',
    alt: 'Temporary portrait placeholder for Dixit Patel',
  },
];

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  context?: string;
}

export const FAQS: FAQItem[] = [
  {
    id: 'services-overview',
    question: 'What services does Vyrobytex provide?',
    answer:
      'Vyrobytex provides custom website development, e-commerce solutions, custom software engineering, practical AI-powered integrations, and cloud technology solutions for businesses.',
    context:
      'We focus on clean code, modern light aesthetics, high-speed performance, and accessible digital systems tailored to your business model and target audience.',
  },
  {
    id: 'small-business',
    question: 'Does Vyrobytex build websites for small businesses?',
    answer:
      'Yes. Vyrobytex builds professional, high-performance websites specifically tailored for small and medium-sized businesses, startups, and local business owners.',
    context:
      'We ensure that small businesses receive enterprise-grade design and fast loading speeds without the bloat, slow templates, or ongoing licensing fees associated with generic site builders.',
  },
  {
    id: 'ecommerce-solutions',
    question: 'Can Vyrobytex build an e-commerce website?',
    answer:
      'Yes. We engineer custom digital storefronts and e-commerce platforms designed for frictionless checkout and conversion.',
    context:
      'Whether you need a streamlined direct-to-consumer store, a specialized product catalog, or custom payment gateway integration, our e-commerce solutions emphasize instant page loading, mobile responsiveness, and intuitive navigation.',
  },
  {
    id: 'custom-software',
    question: 'What is custom software development?',
    answer:
      'Custom software development is the process of designing and building bespoke applications, internal tools, or client portals tailored to your company’s exact operational requirements.',
    context:
      'Unlike generic off-the-shelf software, custom applications eliminate unnecessary subscription bloat, integrate directly with your existing tools, and scale smoothly as your team grows.',
  },
  {
    id: 'ai-integrations',
    question: 'Can Vyrobytex build AI-powered business solutions?',
    answer:
      'Yes. Vyrobytex designs and integrates practical AI features into business applications and websites.',
    context:
      'Our capabilities include private document-grounded search (RAG), conversational support assistants, intelligent data extraction, and automated workflow pipelines that assist your team with repetitive tasks.',
  },
  {
    id: 'project-kickoff',
    question: 'What information is needed to start a website project?',
    answer:
      'To begin, we typically need an overview of your business goals, your target audience, any reference websites or design preferences you admire, the key pages or features required, and your preferred timeline.',
    context:
      'If you have existing branding assets, logos, or copy, we incorporate them. If not, we can guide you through structuring your content and visual direction from the ground up.',
  },
  {
    id: 'pricing-factors',
    question: 'What affects the cost of developing a business website?',
    answer:
      'Website development costs depend on project scope, custom design requirements, total page count, interactive features, third-party integrations, and whether you require e-commerce or custom software capabilities.',
    context:
      'Because every business has different operational requirements, we review each project enquiry individually and provide a transparent, scoped proposal rather than applying rigid one-size-fits-all fees.',
  },
  {
    id: 'request-proposal',
    question: 'How can a business request a project proposal?',
    answer:
      'You can request a project proposal by using the contact form on our website, submitting the quick enquiry modal, messaging founder Navin Chaudhary on WhatsApp (+91 81559 52384), or sending an email to chaudharynax27@gmail.com.',
    context:
      'We review every incoming inquiry personally and typically respond within one business day with clarifying questions or next steps.',
  },
  {
    id: 'ongoing-maintenance',
    question: 'Does a website require ongoing maintenance?',
    answer:
      'Yes, digital platforms benefit significantly from regular maintenance to maintain high security, uptime, browser compatibility, and peak search engine performance.',
    context:
      'Vyrobytex offers optional ongoing technical stewardship, including proactive dependency updates, security patches, Core Web Vitals monitoring, automated backups, and iterative feature enhancements.',
  },
];


