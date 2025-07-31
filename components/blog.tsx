// "use client";
// import React, { useState } from 'react';
// import { Save, Plus, Eye, FileText, ImageIcon, ArrowLeft } from 'lucide-react';
// import { addArticle } from '../data/articles'; // Import the addArticle function

// const AddBlog: React.FC = () => {
//   const [formData, setFormData] = useState({
//     title: '',
//     excerpt: '',
//     author: '',
//     publishDate: new Date().toISOString().split('T')[0],
//     readTime: '',
//     category: 'React',
//     imageUrl: '',
//     slug: '',
//     content: ''
//   });

//   const [isPreview, setIsPreview] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   React.useEffect(() => {
//     setIsVisible(true);
//   }, []);

//   const categories = [
//     'React', 'JavaScript', 'TypeScript', 'CSS', 'Backend', 
//     'Performance', 'DevOps', 'Accessibility'
//   ];

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: value
//     }));

//     // Auto-generate slug from title
//     if (name === 'title') {
//       const slug = value
//         .toLowerCase()
//         .replace(/[^a-zA-Z0-9\s]/g, '')
//         .replace(/\s+/g, '-')
//         .replace(/^-+|-+$/g, '');
//       setFormData(prev => ({
//         ...prev,
//         slug
//       }));
//     }
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // Format the publish date
//       const formattedDate = new Date(formData.publishDate).toLocaleDateString('en-US', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric'
//       });

//       const newArticle = {
//         ...formData,
//         publishDate: formattedDate
//       };

//       // Add the article to the data store
//       const addedArticle = addArticle(newArticle);
      
//       console.log('Blog post created successfully:', addedArticle);
      
//       // Show success message
//       alert('Blog post created successfully!');
      
//       // Navigate back to articles page
//       // For Next.js router: router.push('/articles');
//       // For React Router: navigate('/articles');
//       // For now, using window.location:
//       window.location.href = '/articles';
      
//     } catch (error) {
//       console.error('Error creating blog post:', error);
//       alert('Error creating blog post. Please try again.');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const handleBackToArticles = () => {
//     // Navigate back to articles page
//     // For Next.js router: router.push('/articles');
//     // For React Router: navigate('/articles');
//     // For now, using window.location:
//     window.location.href = '/articles';
//   };

//   const formatContent = (content: string) => {
//     // Simple markdown-like formatting for preview
//     return content
//       .split('\n')
//       .map((line, index) => {
//         // Headers
//         if (line.startsWith('### ')) {
//           return <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3">{line.slice(4)}</h3>;
//         }
//         if (line.startsWith('## ')) {
//           return <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4">{line.slice(3)}</h2>;
//         }
//         if (line.startsWith('# ')) {
//           return <h1 key={index} className="text-3xl font-bold text-white mt-6 mb-4">{line.slice(2)}</h1>;
//         }
        
//         // Bold text
//         if (line.includes('**')) {
//           const parts = line.split('**');
//           return (
//             <p key={index} className="text-gray-300 leading-relaxed mb-4">
//               {parts.map((part, i) => 
//                 i % 2 === 1 ? <strong key={i} className="text-white font-semibold">{part}</strong> : part
//               )}
//             </p>
//           );
//         }
        
//         // Inline code
//         if (line.includes('`') && !line.startsWith('```')) {
//           const parts = line.split('`');
//           return (
//             <p key={index} className="text-gray-300 leading-relaxed mb-4">
//               {parts.map((part, i) => 
//                 i % 2 === 1 ? <code key={i} className="bg-gray-800 px-2 py-1 rounded text-blue-400 font-mono text-sm">{part}</code> : part
//               )}
//             </p>
//           );
//         }
        
//         // Regular paragraphs
//         if (line.trim() && !line.startsWith('```')) {
//           return <p key={index} className="text-gray-300 leading-relaxed mb-4">{line}</p>;
//         }
        
//         return <div key={index} className="mb-2" />;
//       });
//   };

//   const renderPreview = () => (
//     <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8">
//       <div className="relative overflow-hidden rounded-lg mb-6">
//         {formData.imageUrl ? (
//           <img
//             src={formData.imageUrl}
//             alt={formData.title || 'Blog preview'}
//             className="w-full h-64 object-cover"
//             onError={(e) => {
//               (e.target as HTMLImageElement).style.display = 'none';
//             }}
//           />
//         ) : (
//           <div className="w-full h-64 bg-gray-700 flex items-center justify-center">
//             <ImageIcon size={48} className="text-gray-500" />
//           </div>
//         )}
//         <div className="absolute top-4 left-4">
//           <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
//             {formData.category}
//           </span>
//         </div>
//       </div>
      
//       <h1 className="text-3xl font-bold text-white mb-4">
//         {formData.title || 'Blog Title'}
//       </h1>
      
//       <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
//         <div className="flex items-center">
//           <span>{formData.author || 'Author Name'}</span>
//         </div>
//         <div className="flex items-center">
//           <span>{formData.publishDate || 'Date'}</span>
//         </div>
//         <div className="flex items-center">
//           <span>{formData.readTime || 'Read time'}</span>
//         </div>
//       </div>
      
//       <p className="text-gray-300 text-lg leading-relaxed mb-6">
//         {formData.excerpt || 'Blog excerpt will appear here...'}
//       </p>
      
//       <div className="prose prose-invert max-w-none">
//         <div className="space-y-4">
//           {formData.content ? formatContent(formData.content) : (
//             <p className="text-gray-500 italic">Blog content will appear here...</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 opacity-20">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),transparent_50%)]" />
//         <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=&quot;http://www.w3.org/2000/svg&quot; viewBox=&quot;0 0 100 100&quot;%3E%3Cg fill-rule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.03&quot;%3E%3Cpolygon points=&quot;50 0 60 40 100 50 60 60 50 100 40 60 0 50 40 40&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] bg-[length:60px_60px]" />
//       </div>

//       <main className="relative z-10">
//         {/* Navigation */}
//         <div className="px-6 py-6">
//           <button 
//             onClick={handleBackToArticles}
//             className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
//           >
//             <ArrowLeft size={20} />
//             Back to Articles
//           </button>
//         </div>

//         {/* Header */}
//         <section className="py-16 px-6">
//           <div className="max-w-6xl mx-auto">
//             <div className={`transition-all duration-1000 transform ${
//               isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}>
//               <div className="flex items-center justify-center mb-6">
//                 <Plus size={48} className="mr-3 text-blue-400" />
//                 <h1 className="text-4xl md:text-6xl font-bold">
//                   <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
//                     Create Blog
//                   </span>
//                 </h1>
//               </div>
//               <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-8 text-center">
//                 Share your knowledge and insights with the developer community. Create engaging content that inspires and educates.
//               </p>

//               {/* Toggle Preview/Edit */}
//               <div className="flex justify-center mb-8">
//                 <div className="flex bg-gray-800/50 rounded-lg p-1 border border-gray-700">
//                   <button
//                     onClick={() => setIsPreview(false)}
//                     className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
//                       !isPreview 
//                         ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
//                         : 'text-gray-400 hover:text-white'
//                     }`}
//                   >
//                     <FileText size={16} />
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => setIsPreview(true)}
//                     className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
//                       isPreview 
//                         ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg' 
//                         : 'text-gray-400 hover:text-white'
//                     }`}
//                   >
//                     <Eye size={16} />
//                     Preview
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Content */}
//         <section className="px-6 pb-16">
//             <div className="max-w-6xl mx-auto">
//                 {isPreview ? (
//                 renderPreview()
//                     ) : (
//                     <form onSubmit={handleSubmit} className="space-y-8">
//                         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
//                         {/* Left Column */}
//                         <div className="space-y-6">
//                         {/* Title */}
//                         <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         Title *
//                       </label>
//                       <input
//                         type="text"
//                         name="title"
//                         value={formData.title}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                         placeholder="Enter blog title..."
//                       />
//                         </div>

//                         {/* Author */}
//                         <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         Author *
//                       </label>
//                       <input
//                         type="text"
//                         name="author"
//                         value={formData.author}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                         placeholder="Author name..."
//                       />
//                         </div>

//                         {/* Category */}
//                         <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         Category *
//                       </label>
//                       <select
//                         name="category"
//                         value={formData.category}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                       >
//                         {categories.map(category => (
//                           <option key={category} value={category} className="bg-gray-800">
//                             {category}
//                           </option>
//                         ))}
//                       </select>
//                         </div>

//                         {/* Publish Date */}
//                         <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         Publish Date *
//                       </label>
//                       <input
//                         type="date"
//                         name="publishDate"
//                         value={formData.publishDate}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                       />
//                         </div>

//                         {/* Read Time */}
//                         <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         Read Time *
//                       </label>
//                       <input
//                         type="text"
//                         name="readTime"
//                         value={formData.readTime}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                         placeholder="e.g., 8 min read"
//                       />
//                         </div>
//                         </div>

//                         {/* Right Column */}
//                         <div className="space-y-6">
//                         {/* Image URL */}
//                         <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         Image URL *
//                       </label>
//                       <input
//                         type="url"
//                         name="imageUrl"
//                         value={formData.imageUrl}
//                         onChange={handleInputChange}
//                         required
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                         placeholder="https://..."
//                       />
//                         </div>

//                         {/* Slug */}
//                         <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         URL Slug
//                       </label>
//                       <input
//                         type="text"
//                         name="slug"
//                         value={formData.slug}
//                         onChange={handleInputChange}
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300"
//                         placeholder="auto-generated from title"
//                       />
//                       <p className="text-xs text-gray-500 mt-1">Auto-generated from title</p>
//                         </div>

//                         {/* Excerpt */}
//                         <div>
//                       <label className="block text-sm font-medium text-gray-300 mb-2">
//                         Excerpt *
//                       </label>
//                       <textarea
//                         name="excerpt"
//                         value={formData.excerpt}
//                         onChange={handleInputChange}
//                         required
//                         rows={4}
//                         className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none"
//                         placeholder="Brief description of the blog post..."
//                       />
//                         </div>
//                         </div>
//                     </div>

//                          {/* Blog Content */}
//                          <div>
//                          <label className="block text-sm font-medium text-gray-300 mb-2">
//                            Blog Content * (Markdown supported)
//                          </label>
//                         <textarea
//                      name="content"
//                         value={formData.content}
//                      onChange={handleInputChange}
//                       required
//                     rows={20}
//                       className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 transition-colors duration-300 resize-none font-mono"
//                       placeholder="# Your Blog Content Here

// Write your blog content using Markdown syntax...

// ## Section 1
// Your content here...

// ## Section 2
// More content...

// ```javascript
// // Code examples
// const example = 'Hello World';
// ```"
//                   />
//                         </div>

//                 {/* Submit Button */}
//                 <div className="flex justify-center pt-8">
//                   <button
//                     onClick={handleSubmit}
//                     disabled={isSubmitting}
//                     className={`group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105 ${
//                       isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
//                     }`}
//                   >
//                     <span className="flex items-center gap-2">
//                       <Save size={20} />
//                       {isSubmitting ? 'Publishing...' : 'Publish Blog Post'}
//                     </span>
//                   </button>
//                  </div>
//               </form>
//             )}
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default AddBlog;