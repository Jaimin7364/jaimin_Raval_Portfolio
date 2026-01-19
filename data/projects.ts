export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  year: string;
  gradient: string;
  githubUrl: string;
  liveUrl?: string;
  downloadable?: boolean;
  featured?: boolean;
  status?: 'Live' | 'Development' | 'Archived';
  stats?: {
    stars?: number;
    forks?: number;
    views?: string;
    downloads?: string;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Online Gambling App",
    category: "Mobile App",
    description: "A feature-rich gambling platform built with secure backend architecture. Picks7 includes real-time game logic, user wallet management, betting history, and an admin dashboard for game control.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Stripe", "Express", "Digital Ocean"],
    year: "2025",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    githubUrl: "https://github.com/jinshah0322/MyCasino-Frontend-S3",
    liveUrl: "https://picks7.com/",
    featured: true,
    status: "Live"
  },
  {
    id: 2,
    title: "Nect JS Web",
    category: "Web Development",
    description: "A growing IT venture offering full-cycle software solutions and digital services. At Yoranza Technologies, we deliver custom web, mobile, and cloud-based products for startups and enterprises.",
    technologies: ["Next Js", "Node.js", "TypeScript", "Express", "AWS"],
    year: "2025",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    githubUrl: "https://github.com/Jaimin7364/yoranza-technologies",
    liveUrl: "https://yoranza.tech/",
    featured: true,
    status: "Live"
  },
  {
    id: 3,
    title: "LexMark Farma Attendance System",
    category: "Mobile App",
    description: "An attendance management app built for Lexmark with role-based login, live attendance tracking, and integrated live location system for real-time workforce monitoring and admin control.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Stripe", "Express", "Digital Ocean"],
    year: "2025",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    githubUrl: "https://github.com/Jaimin7364/Lex-Mark",
    liveUrl: "/app-release.apk",
    downloadable: true,
    featured: true,
    status: "Live"
  },
  {
    id: 4,
    title: "WallXpert - HD Wallpaper Hub",
    category: "Mobile App",
    description: "A cross-platform HD wallpaper application built with Flutter and Node.js. Features a dynamic grid layout, powerful search and category filters, and a seamless admin upload panel. The backend leverages Azure Blob Storage for scalable image hosting and MongoDB for fast data retrieval.",
    technologies: ["Flutter", "Node.js", "MongoDB", "Express", "Azure Blob Storage","Azure VM"],
    year: "2025",
    gradient: "linear-gradient(135deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    githubUrl: "https://github.com/Jaimin7364/wallxpert-backend",
    liveUrl: "/wallxpert.apk",
    downloadable: true,
    featured: true,
    status: "Live"
  },
  {
  id: 5,
  title: "Trexo - Property & Vehicle Marketplace",
  category: "Mobile App",
  description: "Trexo is a cross-platform marketplace application built with Flutter and Node.js. It allows users to browse, list, and manage both real estate properties and vehicles with ease. The app features advanced search, smart filters, detailed listings with images, secure authentication, and smooth user experience. The backend is hosted on DigitalOcean, using AWS S3 for scalable image storage and MongoDB for fast, reliable data management.",
  technologies: ["Flutter", "Node.js", "Express", "MongoDB", "DigitalOcean", "AWS S3", "Azure DevOps"],
  year: "2025",
  gradient: "linear-gradient(135deg, #0f2027 0%, #2c5364 50%, #203a43 100%)",
  githubUrl: "https://github.com/Jaimin7364/trexo-backend",
  liveUrl: "/trexo.apk",
  downloadable: true,
  featured: true,
  status: "Live"
 },
 {
  id: 6,
  title: "SMEGo - Smart Business Management Platform",
  category: "Full Stack",
  description: "SMEGo is a powerful web-based platform designed for small and medium enterprises (SMEs). It provides tools for sales tracking, customer management, and inventory control, enabling businesses to streamline operations and grow efficiently. The frontend is built with Next.js and TypeScript for a fast, scalable user experience, while the backend uses Node.js, Express, and MongoDB for secure and reliable data management.",
  technologies: ["Next.js", "TypeScript", "Node.js", "Express.js", "MongoDB"],
  year: "2025",
  gradient: "linear-gradient(135deg, #283c86 0%, #45a247 100%)",
  githubUrl: "https://github.com/Jaimin7364/SMEGo_backend",
  liveUrl: "https://github.com/Jaimin7364/SMEGo_frontend",
  downloadable: false,
  featured: true,
  status: "Development"
 }, 
 {
  id: 7,
  title: "LLM Integration with Groq & AWS Bedrock",
  category: "AI/ML",
  description: "An advanced project showcasing integration of Large Language Models (LLMs) using Groq and AWS Bedrock. The system demonstrates prompt engineering, model fine-tuning, and real-time inference for various NLP tasks. It highlights scalable deployment with Bedrock, high-speed inference with Groq, and practical use cases like text generation, summarization, and conversational AI.",
  technologies: ["Groq", "AWS Bedrock", "Python", "API Integration"],
  year: "2025",
  gradient: "linear-gradient(135deg, #141e30 0%, #243b55 100%)",
  githubUrl: "https://github.com/Jaimin7364/check-C-test",
  liveUrl: "",
  downloadable: false,
  featured: true,
  status: "Live"
 },
 {
  id: 8,
  title: "Invoiz - Smart Invoice Management System",
  category: "Full Stack",
  description: "Invoiz is an intelligent invoicing and billing management system designed for freelancers, startups, and small businesses. It simplifies invoice creation, payment tracking, and client management with an intuitive user interface. The frontend is developed using React.js and Tailwind CSS for a modern and responsive design, while the backend is powered by Node.js, Express, and MongoDB, ensuring seamless data handling and performance.",
  technologies: ["Flutter", "Azure", "Node.js", "Express.js", "MongoDB"],
  year: "2025",
  gradient: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
  githubUrl: "/",
  liveUrl: "/Invoiz_Final.apk",
  downloadable: true,
  featured: true,
  status: "Live"
 },
 {
  id: 9,
  title: "FileSetu - Smart Document Manager for Insurance Agents",
  category: "Mobile App",
  description: "FileSetu revolutionizes document management for insurance agents with secure cloud storage, Firebase OTP authentication, and instant sharing capabilities. Built with Flutter and powered by MongoDB Atlas & AWS S3, it offers seamless client document organization with enterprise-grade security. Features include real-time search, gallery integration, pinch-to-zoom image viewer, and WhatsApp sharing - all at just ₹100/month.",
  technologies: ["Flutter", "Firebase", "MongoDB", "AWS S3"],
  year: "2026",
  gradient: "linear-gradient(135deg, #1976D2 0%, #42A5F5 100%)",
  githubUrl: "/",
  liveUrl: "/FileSetu.apk",
  downloadable: true,
  featured: true,
  status: "Live"
}
];
