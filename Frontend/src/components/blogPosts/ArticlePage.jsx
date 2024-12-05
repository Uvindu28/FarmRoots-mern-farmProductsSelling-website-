import  { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { PiCalendarFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

const blogPosts = [
  {
    id: '1',
    title: 'Modern Irrigation Techniques for Sustainable Farming',
    excerpt: 'Discover how smart irrigation systems are revolutionizing water conservation in agriculture',
    content: `Smart irrigation systems are transforming the way we manage water resources in agriculture. These innovative solutions combine sensors, weather data, and automation to optimize water usage and improve crop yields.`,
    keyBenefits: [
      'Up to 50% reduction in water consumption',
      'Improved crop health through precise water delivery',
      'Real-time monitoring and adjustment capabilities',
      'Integration with mobile devices for remote management'
    ],
    implementationConsiderations: [
      'Initial system setup and calibration',
      'Sensor placement and maintenance',
      'Staff training and adaptation',
      'Integration with existing farm management systems'
    ],
    additionalInfo: `The technology works by constantly monitoring soil moisture levels, weather conditions, and plant water requirements. This data is then used to automatically adjust irrigation schedules and water distribution, ensuring that crops receive exactly what they need, when they need it. The return on investment for smart irrigation systems typically occurs within 2-3 growing seasons.`,
    image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80',
    category: 'Technology',
    author: 'Sarah Johnson',
    date: 'March 15, 2024',
    readTime: '5 min read'
  },
  {
    id: '2',
    title: 'Organic Farming: A Guide to Natural Pest Control',
    excerpt: 'Learn effective organic methods to protect your crops from pests',
    content: `Natural pest control methods can be just as effective as chemical alternatives, while maintaining the ecological balance of your farm. These methods rely on natural predators, crop rotation, and eco-friendly practices to deter pests.`,
    keyBenefits: [
      'Companion planting to repel harmful insects',
      'Use of beneficial insects like ladybugs and lacewings',
      'Application of organic sprays such as neem oil',
      'Encouraging biodiversity in and around the farm'
    ],
    implementationConsiderations: [
      'Identify common pests in your region',
      'Select suitable companion plants',
      'Regularly monitor pest activity',
      'Adjust methods as necessary to improve effectiveness'
    ],
    additionalInfo: `These strategies not only help to reduce chemical residues in your crops but also improve soil health and foster a more sustainable farming ecosystem. By integrating natural pest control into your farming routine, you can create a more resilient agricultural environment.`,
    image: 'https://images.unsplash.com/photo-1483871788521-4f224a86e166?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Organic Farming',
    author: 'Michael Chen',
    date: 'March 14, 2024',
    readTime: '4 min read'
  },
  {
    id: '3',
    title: 'The Future of Vertical Farming',
    excerpt: 'Exploring how vertical farming is changing urban agriculture',
    content: `Vertical farming is revolutionizing how we grow food in urban environments. By utilizing stacked layers and advanced technologies, this method maximizes space and reduces resource consumption compared to traditional farming.`,
    keyBenefits: [
      'Up to 90% reduction in water usage',
      'Year-round crop production regardless of climate',
      'Minimized need for pesticides and herbicides',
      'Reduction in transportation costs due to proximity to urban areas'
    ],
    implementationConsiderations: [
      'High initial investment costs',
      'Energy consumption for artificial lighting',
      'Technical expertise for system maintenance',
      'Scaling up production to meet demand'
    ],
    additionalInfo: `Vertical farming relies heavily on LED lighting, hydroponic or aeroponic systems, and automation to achieve optimal results. It's particularly valuable in addressing food security challenges in densely populated cities and regions with limited arable land.`,
    image: 'https://images.unsplash.com/photo-1483871788521-4f224a86e166?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Innovation',
    author: 'Emily Roberts',
    date: 'March 13, 2024',
    readTime: '6 min read'
  }
];

export default function ArticlePage() {
  const [likes, setLikes] = useState(blogPosts.map(() => 0));
  const [dislikes, setDislikes] = useState(blogPosts.map(() => 0));
  const navigate = useNavigate();

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  const handleDislike = (index) => {
    const updatedDislikes = [...dislikes];
    updatedDislikes[index] += 1;
    setDislikes(updatedDislikes);
  };

  const handlePostClick = (post) => {
    navigate('/blog-data', { state: { post } });
  };

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-gradient-to-r from-green-500 to-green-700 text-white p-4 z-50 font-poppins">
  <div className="container mx-auto flex justify-between items-center">
    <div className='flex items-center space-x-3'>
    {/* <img src={logo} alt="" className="w-12 h-12 rounded-full" /> */}
    <h1 className="text-3xl font-bold font-poppins">Farmroot</h1>
    </div>
    <div className="space-x-6 text-lg">
      <Link to="/" className="hover:text-gray-300">Home</Link>
      <Link to="/blog" className="hover:text-gray-300">Marketplace</Link>
      <Link to="/about" className="hover:text-gray-300">About Us</Link>
    </div>
  </div>
</nav>

      {/* Main Content */}
      <main className="bg-gray-100 min-h-screen py-16 px-4 font-poppins">
        <div className="container mx-auto lg:px-12 xl:px-16">
          

          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="max-w-6xl mx-auto mb-12 top-10 relative bg-white shadow-lg rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all"
              onClick={() => handlePostClick(post)}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[360px] object-cover rounded-t-lg"
              />
              <div className="p-8">
                <span className="inline-block px-3 py-1 bg-teal-200 text-teal-700 rounded-full text-sm font-medium mb-4">
                  {post.category}
                </span>
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">{post.title}</h1>

                <div className="flex items-center space-x-6 text-gray-500 mb-8">
                  <div className="flex items-center space-x-2">
                    <FaUserAlt className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-800">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <PiCalendarFill className="h-5 w-5 text-teal-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <FaClock className="h-5 w-5 text-purple-600" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-6">{post.excerpt}</p>

                <div className="mt-6 flex space-x-4">
                  <button
                    onClick={(e) => { e.stopPropagation(); handleLike(index); }}
                    className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
                  >
                    Like ({likes[index]})
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); handleDislike(index); }}
                    className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none"
                  >
                    Dislike ({dislikes[index]})
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}