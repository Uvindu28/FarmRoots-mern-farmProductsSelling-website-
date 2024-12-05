import React from 'react';
import BlogCard from '../Component/BlogCard';
import FeaturedPost from '../Data/FeaturedPost';
import { blogPosts } from '../Data/blogPosts';

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      {/* Featured Post */}
      <FeaturedPost post={blogPosts[0]} />

      {/* Blog Grid */}
      <section>
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Latest Articles</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="mt-16 bg-green-700 rounded-xl p-8 text-white">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Farming Insights</h2>
          <p className="mb-6 text-green-100">Subscribe to our newsletter for the latest farming tips and technology updates.</p>
          <div className="flex max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 rounded-l-lg focus:outline-none text-gray-900"
            />
            <button className="px-6 py-2 bg-green-900 rounded-r-lg hover:bg-green-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}