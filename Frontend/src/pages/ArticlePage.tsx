import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { blogPosts } from '../Data/blogPosts';

export default function ArticlePage() {
  const { id } = useParams();
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Article not found</h1>
        <Link to="/" className="text-green-600 hover:text-green-700">
          Return to home
        </Link>
      </div>
    );
  }

  return (
    <main className="container mx-auto px-4 py-8">
      <Link 
        to="/" 
        className="inline-flex items-center text-green-600 hover:text-green-700 mb-8"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Home
      </Link>

      <article className="max-w-4xl mx-auto">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-[400px] object-cover rounded-xl mb-8"
        />

        <div className="prose prose-lg max-w-none">
          <span className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium mb-4">
            {post.category}
          </span>

          <h1 className="text-4xl font-bold mb-4 text-gray-900">{post.title}</h1>

          <div className="flex items-center space-x-6 text-gray-500 mb-8">
            <div className="flex items-center space-x-2">
              <User className="h-5 w-5" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          <div className="text-gray-700 leading-relaxed whitespace-pre-line">
            {post.content}
          </div>
        </div>
      </article>
    </main>
  );
}