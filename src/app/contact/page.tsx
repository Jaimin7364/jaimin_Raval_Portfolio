// src/app/articles/page.tsx

import ContactPage from "../../../components/contact";
import Navbar from "../../../components/Navbar";


export const metadata = {
    title: 'Contact to Jaimin Raval',
    description: 'Learn more about Jaimin Raval, a passionate developer specializing in building modern web applications, sharing insights, and exploring new technologies.',
    alternates: {
        canonical: 'https://www.jaiminraval.dev/contact', // replace with your actual URL
    },
};

export default function ArticlesPage() {
    return (
        <>
        < Navbar />
        <ContactPage />
        </>
    );
}