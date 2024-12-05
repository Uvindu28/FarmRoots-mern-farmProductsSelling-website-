import React from 'react';
import { Clock, User } from 'lucide-react';
import { blogPosts } from '../Data/blogPosts';
import { Link } from 'react-router-dom';
import { BlogPost } from './blog';

interface FeaturedPostProps {
  post: BlogPost;
}

export default function FeaturedPost({ post }: FeaturedPostProps) {
  return (
    <Link to={`/article/${post.id}`}>
      <div className="relative h-[500px] rounded-xl overflow-hidden mb-12">
        <img
          src={post.image}
          alt={post.title}
          className="absolute w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent">
          <div className="absolute bottom-0 p-8 text-white">
            <span className="inline-block px-4 py-1 bg-green-600 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p className="text-lg mb-4 text-gray-200">{post.excerpt}</p>
            <div className="flex items-center space-x-6 text-gray-300">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-5 w-5" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}