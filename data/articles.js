import fs from "fs";
import path from "path";
import matter from "gray-matter";

const articlesDirectory = path.join(process.cwd(), "public/articles");

export function getAllArticles() {
  const fileNames = fs.readdirSync(articlesDirectory);

  return fileNames.map((fileName, index) => {
    const slugFromFile = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articlesDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    const { data } = matter(fileContents);

    return {
      id: data.id ?? index.toString(),
      title: data.title,
      excerpt: data.excerpt,
      author: data.author,
      publishDate: data.publishDate,
      readTime: data.readTime,
      category: data.category,
      imageUrl: data.imageUrl,
      slug: data.slug ?? slugFromFile,
      blogurl: `/articles/${data.slug ?? slugFromFile}`,
    };
  });
}

export function getArticleBySlug(slug) {
  return getAllArticles().find(article => article.slug === slug);
}

export function getCategories() {
  return [
    "All",
    ...new Set(getAllArticles().map(article => article.category)),
  ];
}
