// src/app/articles/page.tsx

import Articles from "../../../components/Articles";
import Navbar from "../../../components/Navbar";


export const metadata = {
  title: 'Articles | Jaimin Raval',
  description: 'Explore our collection of in-depth articles covering the latest in web development, programming best practices, and emerging technologies.',
   alternates: {
    canonical: 'https://www.jaiminraval.dev/articles', // replace with your actual URL
  },
};

export default function ArticlesPage() {
    return (
        <>
        < Navbar />
        <Articles />
        </>
    );
}