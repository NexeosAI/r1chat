import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BlogList } from './components/BlogList';

// Mock data for demonstration
const mockPosts = [
  {
    id: '1',
    title: 'The Future of AI Chat Technology',
    excerpt: 'Discover how AI is revolutionizing the way we communicate...',
    content: 'Full content here...',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995',
    author: {
      name: 'John Doe',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    },
    date: '2024-03-15',
    categories: ['Technology'],
    tags: ['AI', 'Chat', 'Innovation'],
    featured: true,
  },
  // Add more mock posts as needed
];

function App() {
  return (
    <HelmetProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header />
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/blog" element={<BlogList posts={mockPosts} />} />
          </Routes>
        </div>
      </Router>
    </HelmetProvider>
  );
}

export default App;