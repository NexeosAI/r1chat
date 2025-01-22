import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Tag } from 'lucide-react';
import { BlogPost } from '../types/blog';
import { AdSpace } from '../components/AdSpace';

interface BlogListProps {
  posts: BlogPost[];
}

export const BlogList: React.FC<BlogListProps> = ({ posts }) => {
  const featuredPost = posts.find(post => post.featured);
  const regularPosts = posts.filter(post => !post.featured);

  return (
    <div className="container mx-auto px-4 py-12">
      {featuredPost && (
        <div className="mb-12">
          <AdSpace position="header" size="728x90" />
          <article className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src={featuredPost.imageUrl}
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                  Featured Post
                </span>
                <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
                  <Link to={`/blog/${featuredPost.id}`}>{featuredPost.title}</Link>
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-300">
                  {featuredPost.excerpt}
                </p>
                <div className="mt-6 flex items-center">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {featuredPost.author.name}
                    </p>
                    <div className="flex space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {featuredPost.date}
                      </span>
                      <span className="flex items-center">
                        <Tag className="w-4 h-4 mr-1" />
                        {featuredPost.categories[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {regularPosts.map((post) => (
          <article key={post.id} className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow">
            <img
              src={post.imageUrl}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                <Link to={`/blog/${post.id}`}>{post.title}</Link>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {post.excerpt}
              </p>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{post.date}</span>
                <Tag className="w-4 h-4 ml-4 mr-1" />
                <span>{post.categories[0]}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
      
      <AdSpace position="footer" size="970x250" />
    </div>
  );
};