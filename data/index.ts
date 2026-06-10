import type {
  Project,
  Skill,
  Experience,
  Service,
  Certificate,
  Testimonial,
  NavItem,
  Stat,
} from "@/types";

export const NAV_ITEMS: NavItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export const STATS: Stat[] = [
  { label: "Projects Completed", value: 12, suffix: "+" },
  { label: "Years Learning", value: 3, suffix: "+" },
  { label: "Technologies", value: 25, suffix: "+" },
  { label: "Research Works", value: 4, suffix: "" },
];

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "Smart Network Monitoring Dashboard",
    description:
      "Real-time network topology visualization with anomaly detection, alerting, and automated incident response for enterprise infrastructure.",
    longDescription:
      "A full-stack network operations platform that provides real-time visibility into complex enterprise networks. Built with Django REST Framework and React, it features live topology maps, bandwidth analytics, and AI-powered anomaly detection that can identify threats before they escalate. Docker-based microservices ensure scalable deployment across environments.",
    image: "/images/project-network.jpg",
    technologies: ["Django", "React", "PostgreSQL", "Docker", "Redis", "WebSocket"],
    category: "fullstack",
    github: "https://github.com/abdurezak",
    demo: "#",
    featured: true,
    year: "2025",
  },
  {
    id: "2",
    title: "AI Healthcare Assistant",
    description:
      "Intelligent medical assistant leveraging NLP and deep learning for symptom analysis, diagnosis support, and personalized health recommendations.",
    longDescription:
      "A sophisticated AI-powered healthcare companion that uses transformer-based NLP models fine-tuned on medical literature. The system can analyze patient symptoms, suggest differential diagnoses, and recommend appropriate care pathways. Built with a safety-first architecture ensuring all AI suggestions are flagged for medical professional review.",
    image: "/images/project-ai.jpg",
    technologies: ["Python", "TensorFlow", "NLP", "FastAPI", "React", "PostgreSQL"],
    category: "ai",
    github: "https://github.com/abdurezak",
    demo: "#",
    featured: true,
    year: "2025",
  },
  {
    id: "3",
    title: "E-Commerce Platform",
    description:
      "High-performance multi-vendor marketplace with real-time inventory, advanced search, recommendation engine, and seamless payment integration.",
    longDescription:
      "A production-grade e-commerce ecosystem supporting multiple vendors, complex product hierarchies, and real-time inventory sync. The recommendation engine uses collaborative filtering to personalize the shopping experience. Stripe integration handles split payments across vendors with automated reconciliation.",
    image: "/images/project-ecom.jpg",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Redis", "Tailwind"],
    category: "fullstack",
    github: "https://github.com/abdurezak",
    demo: "#",
    featured: true,
    year: "2024",
  },
  {
    id: "4",
    title: "University Management System",
    description:
      "Comprehensive academic platform covering enrollment, grading, scheduling, fee management, and real-time communication for students and faculty.",
    longDescription:
      "An end-to-end university ERP system handling the complete student lifecycle from enrollment to graduation. Features include dynamic course scheduling with conflict detection, automated grade computation, financial management with payment plans, and a real-time notification system for important academic deadlines.",
    image: "/images/project-uni.jpg",
    technologies: ["React", "Django", "PostgreSQL", "Celery", "Redis", "Docker"],
    category: "fullstack",
    github: "https://github.com/abdurezak",
    demo: "#",
    featured: false,
    year: "2024",
  },
];

export const SKILLS: Skill[] = [
  // Frontend
  { name: "HTML5", level: 95, icon: "🌐", category: "frontend" },
  { name: "CSS3", level: 90, icon: "🎨", category: "frontend" },
  { name: "JavaScript", level: 88, icon: "⚡", category: "frontend" },
  { name: "TypeScript", level: 82, icon: "📘", category: "frontend" },
  { name: "React", level: 85, icon: "⚛️", category: "frontend" },
  { name: "Next.js", level: 80, icon: "▲", category: "frontend" },
  { name: "Tailwind CSS", level: 90, icon: "💨", category: "frontend" },
  // Backend
  { name: "Python", level: 88, icon: "🐍", category: "backend" },
  { name: "Django", level: 82, icon: "🎸", category: "backend" },
  { name: "FastAPI", level: 78, icon: "🚀", category: "backend" },
  { name: "Node.js", level: 75, icon: "🟢", category: "backend" },
  { name: "Express", level: 72, icon: "🛤️", category: "backend" },
  // Database
  { name: "PostgreSQL", level: 80, icon: "🐘", category: "database" },
  { name: "MySQL", level: 78, icon: "🗄️", category: "database" },
  { name: "MongoDB", level: 75, icon: "🍃", category: "database" },
  // AI/ML
  { name: "TensorFlow", level: 72, icon: "🧠", category: "ai" },
  { name: "PyTorch", level: 68, icon: "🔥", category: "ai" },
  { name: "CNN / ResNet", level: 70, icon: "👁️", category: "ai" },
  { name: "NLP", level: 65, icon: "💬", category: "ai" },
  { name: "LLM Fine-tuning", level: 60, icon: "🤖", category: "ai" },
  // Networking
  { name: "Cisco Networking", level: 78, icon: "🔌", category: "networking" },
  { name: "Linux Admin", level: 80, icon: "🐧", category: "networking" },
  { name: "Network Monitoring", level: 75, icon: "📡", category: "networking" },
  { name: "Cybersecurity", level: 65, icon: "🛡️", category: "networking" },
  // Tools
  { name: "Git & GitHub", level: 90, icon: "🐙", category: "tools" },
  { name: "Docker", level: 75, icon: "🐳", category: "tools" },
  { name: "Postman", level: 88, icon: "📮", category: "tools" },
  { name: "VS Code", level: 92, icon: "💻", category: "tools" },
  { name: "Figma", level: 70, icon: "🎭", category: "tools" },
];

export const EXPERIENCES: Experience[] = [
  {
    year: "2023",
    title: "Started Programming Journey",
    description:
      "Dove deep into Python and web fundamentals. Built my first full-stack CRUD applications and fell in love with the craft of software engineering.",
    icon: "🚀",
    color: "#6366F1",
  },
  {
    year: "2024",
    title: "Built Full Stack Applications",
    description:
      "Mastered React, Django, and PostgreSQL. Delivered a University Management System and an E-Commerce platform — learning system design and scalability patterns along the way.",
    icon: "⚡",
    color: "#8B5CF6",
  },
  {
    year: "2025",
    title: "AI Research & Advanced Projects",
    description:
      "Ventured into machine learning, building an AI Healthcare Assistant using TensorFlow and NLP. Developed a Smart Network Monitoring Dashboard for enterprise infrastructure.",
    icon: "🧠",
    color: "#06B6D4",
  },
  {
    year: "2026",
    title: "Building International Freelance Career",
    description:
      "Leveraging a diverse technical portfolio to attract global clients. Focused on high-impact AI-powered solutions, network engineering, and delivering world-class software products.",
    icon: "🌍",
    color: "#10B981",
  },
];

export const SERVICES: Service[] = [
  {
    id: "1",
    title: "Full Stack Web Development",
    description:
      "End-to-end web applications built with modern frameworks like Next.js, React, Django, and Node.js — optimized for performance and scalability.",
    icon: "🌐",
    gradient: "from-indigo-500 to-purple-600",
    features: ["React / Next.js", "Django / FastAPI", "REST & GraphQL APIs", "Cloud Deployment"],
  },
  {
    id: "2",
    title: "AI & Machine Learning Solutions",
    description:
      "Custom AI models, NLP pipelines, computer vision systems, and LLM-powered applications tailored to your business challenges.",
    icon: "🤖",
    gradient: "from-purple-500 to-cyan-500",
    features: ["Custom ML Models", "NLP & Text AI", "Computer Vision", "LLM Integration"],
  },
  {
    id: "3",
    title: "Mobile App Development",
    description:
      "Cross-platform mobile applications with native-like performance, beautiful UI, and seamless backend integration.",
    icon: "📱",
    gradient: "from-cyan-500 to-blue-500",
    features: ["React Native", "Cross-platform", "Offline Support", "Push Notifications"],
  },
  {
    id: "4",
    title: "UI/UX Design",
    description:
      "Pixel-perfect, user-centric design systems and prototypes that combine aesthetics with conversion-focused UX principles.",
    icon: "🎨",
    gradient: "from-pink-500 to-indigo-500",
    features: ["Figma Prototypes", "Design Systems", "Responsive Design", "Accessibility"],
  },
  {
    id: "5",
    title: "API Development",
    description:
      "Robust, well-documented RESTful and GraphQL APIs with authentication, rate limiting, and comprehensive OpenAPI documentation.",
    icon: "⚡",
    gradient: "from-yellow-500 to-orange-500",
    features: ["REST & GraphQL", "JWT Auth", "Rate Limiting", "OpenAPI Docs"],
  },
  {
    id: "6",
    title: "Network Administration",
    description:
      "Enterprise network design, configuration, monitoring, and security hardening using industry-leading Cisco and Linux tools.",
    icon: "🔌",
    gradient: "from-green-500 to-teal-500",
    features: ["Cisco Config", "Network Monitoring", "Security Hardening", "VPN Setup"],
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    id: "1",
    title: "Introduction to Cybersecurity",
    organization: "Cisco Networking Academy",
    date: "2024",
    image: "/images/cert-cisco.jpg",
    link: "#",
    badge: "🔒",
  },
  {
    id: "2",
    title: "Python for Everybody",
    organization: "Coursera / University of Michigan",
    date: "2023",
    image: "/images/cert-python.jpg",
    link: "#",
    badge: "🐍",
  },
  {
    id: "3",
    title: "Machine Learning Specialization",
    organization: "Coursera / DeepLearning.AI",
    date: "2025",
    image: "/images/cert-ml.jpg",
    link: "#",
    badge: "🧠",
  },
  {
    id: "4",
    title: "React Developer Certificate",
    organization: "Meta / Coursera",
    date: "2024",
    image: "/images/cert-react.jpg",
    link: "#",
    badge: "⚛️",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Johnson",
    position: "CTO",
    company: "TechVentures Inc.",
    avatar: "/images/avatar1.jpg",
    rating: 5,
    text: "Abdurezak delivered an exceptional network monitoring dashboard that transformed our operations. His technical depth is remarkable — he understood our infrastructure challenges better than vendors we'd worked with for years.",
  },
  {
    id: "2",
    name: "Michael Chen",
    position: "Product Manager",
    company: "HealthAI Labs",
    avatar: "/images/avatar2.jpg",
    rating: 5,
    text: "The AI healthcare assistant Abdurezak built for us exceeded every expectation. The NLP accuracy was outstanding, and he was proactive about edge cases and safety concerns. A true professional.",
  },
  {
    id: "3",
    name: "Fatima Al-Hassan",
    position: "Lead Developer",
    company: "CodeForward Agency",
    avatar: "/images/avatar3.jpg",
    rating: 5,
    text: "Working with Abdurezak was a fantastic experience. His clean code architecture, thoughtful API design, and attention to performance made our e-commerce project a huge success. Will definitely collaborate again.",
  },
];
