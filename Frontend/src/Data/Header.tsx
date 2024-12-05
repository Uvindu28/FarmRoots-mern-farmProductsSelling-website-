import React from 'react';
import { Sprout, Search } from 'lucide-react';

export default function Header() {
  return (
    <header className="bg-green-700 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Sprout className="h-8 w-8" />
            <h1 className="text-2xl font-bold">FarmTech Blog</h1>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                className="pl-10 pr-4 py-2 rounded-full bg-green-600 text-white placeholder-green-200 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-green-200" />
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-green-200">Home</a>
              <a href="#" className="hover:text-green-200">Categories</a>
              <a href="#" className="hover:text-green-200">About</a>
              <a href="#" className="hover:text-green-200">Contact</a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}