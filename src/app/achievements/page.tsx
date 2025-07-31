// src/app/articles/page.tsx

import Achievements from "../../../components/Achievements";
import Navbar from "../../../components/Navbar";


export const metadata = {
    title: 'Achievements | Jaimin Raval',
    description: 'Learn more about Jaimin Raval, a passionate developer specializing in building modern web applications, sharing insights, and exploring new technologies.',
};

export default function ArticlesPage() {
    return (
        <>
        < Navbar />
        <Achievements />
        </>
    );
}