// src/app/articles/page.tsx

import Navbar from "../../../components/Navbar";
import ProjectsPage from "../../../components/project";


export const metadata = {
  title: 'Projects | Jaimin Raval',
  description: 'Explore Jaimin Raval\'s portfolio projects, showcasing expertise in modern web development, innovative solutions, and technology exploration.',
  alternates: {
    canonical: 'https://www.jaiminraval.dev/projects', // replace with your actual URL
  },
};

export default function ArticlesPage() {
    return (
        <>
        < Navbar />
        <ProjectsPage />
        </>
    );
}