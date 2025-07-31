// src/app/articles/page.tsx

import About from "../../../components/About";
import Navbar from "../../../components/Navbar";


export const metadata = {
    title: 'About | Jaimin Raval',
    description: 'Learn more about Jaimin Raval, a passionate developer specializing in building modern web applications, sharing insights, and exploring new technologies.',
};

export default function ArticlesPage() {
    return (
        <>
        < Navbar />
        <About />
        </>
    );
}