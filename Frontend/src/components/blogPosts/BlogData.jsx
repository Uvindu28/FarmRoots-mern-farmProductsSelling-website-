import  { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
// import logo from "../assets/images/logo.png";
import { PiCalendarFill } from "react-icons/pi";
import { FaClock } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";

export default function BlogData() {
    useEffect(()=> {
        window.scrollTo(0, 0)
      })
  const location = useLocation();
  const { post } = location.state || {};

  if (!post) {
    return <p>No blog post data available!</p>;
  }

  return (
    <main className="bg-gray-300 min-h-screen py-12 font-poppins">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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

        <article className="bg-white shadow-lg relative top-20 rounded-2xl overflow-hidden mb-12">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-[500px] object-cover"
          />

          <div className="px-8 py-6">
            <div className="flex items-center space-x-4 text-gray-600 mb-6">
              <span className="font-medium text-blue-600"><FaUserAlt className='text-xl mb-2'/>{post.author}</span>
              <span className="text-sm text-gray-500"><PiCalendarFill className='text-xl mb-2' />{post.date}</span>
              <span className="text-sm text-gray-500"><FaClock className='text-xl mb-2'/>{post.readTime}</span>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 leading-tight mb-4">{post.title}</h1>

            <div className="text-lg text-gray-800 mb-6">
              <p>{post.content}</p>
            </div>

            <section className="mt-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Key Benefits</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                {post.keyBenefits.map((benefit, index) => (
                  <li key={index} className="text-lg">{benefit}</li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Implementation Considerations</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                {post.implementationConsiderations.map((item, index) => (
                  <li key={index} className="text-lg">{item}</li>
                ))}
              </ul>
            </section>

            <section className="mt-6">
              <h3 className="text-2xl font-semibold text-green-700 mb-4">Additional Information</h3>
              <p className="text-lg text-gray-700">{post.additionalInfo}</p>
            </section>
          </div>
        </article>
      </div>
    </main>
  );
}