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
  }
];
