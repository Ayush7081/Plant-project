import React from 'react';
import Navbar from '../Components/Navbar';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'SEO Best Practices in 2024',
      category: 'SEO',
      description: 'Learn the top SEO strategies to help your website rank higher in search results.',
      image: 'https://via.placeholder.com/400x200',
      
    },
    {
      id: 2,
      title: 'The Future of Digital Marketing',
      category: 'Digital Marketing',
      description: 'Explore how digital marketing is evolving with AI and automation.',
      image: 'https://via.placeholder.com/400x200',
     
    },
    {
      id: 3,
      title: 'Building a Personal Brand in 2024',
      category: 'Branding',
      description: 'Discover how to establish a strong personal brand online.',
      image: 'https://via.placeholder.com/400x200',
    
    },
    {
      id: 4,
      title: 'Top Web Development Trends',
      category: 'Web Development',
      description: 'Learn about the latest trends in web development for 2024.',
      image: 'https://via.placeholder.com/400x200',
     
    },
  ];

  const categories = ['SEO', 'Digital Marketing', 'Branding', 'Web Development'];

  return (
    <>
    <Navbar/>
    <div className="max-w-screen-lg mx-auto px-4 py-8">
      {/* Header */}
      <header className="text-center mb-10"> 
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Our Blog</h1>
        <p className="text-lg text-gray-500">Stay up to date with the latest trends in SEO, digital marketing, branding, and web development.</p>
      </header>

      {/* Categories */}
      <nav className="flex justify-center space-x-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            className="bg-gray-200 hover:bg-blue-500 hover:text-white text-gray-700 px-4 py-2 rounded-full text-sm"
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Blog Articles */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600 mb-4">{article.description}</p>
             
              <button className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded">
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 text-center">
        <p className="text-gray-500">© 2024 My Blog. All rights reserved.</p>
      </footer>
    </div></>
  );
};

export default Blog;
