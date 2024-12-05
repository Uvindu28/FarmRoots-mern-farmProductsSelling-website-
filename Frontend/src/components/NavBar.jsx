import React, { useState, useEffect } from 'react';
import logo from '../assets/images/logo.png';
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

// Import the logout action from your Redux slice
import { logout } from '../redux/userSlice'; 

function NavBar({ language, onToggleLanguage }) {
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [showPopup, setShowPopup] = useState(false);
  const currentUser = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  // Toggles the Resources dropdown
  const toggleResources = () => setResourcesOpen(!resourcesOpen);

  // Toggles the profile pop-up menu
  const togglePopup = () => setShowPopup((prev) => !prev);

  // Handles user logout
  const logoutHandler = () => {
    dispatch(logout());
    localStorage.removeItem('user');
  };

  // Scroll event to hide/show the NavBar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrollingUp = prevScrollPos > currentScrollPos;
      setIsVisible(isScrollingUp);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <nav className={`bg-white p-4 h-[71px] right-0 font-poppins -mt-1 font-medium shadow-md fixed w-full z-20 transition-transform duration-300 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo or Branding */}
        <div className="flex items-center space-x-2">
          <img src={logo} alt="FarmRoots Logo" className="w-[35px] h-[35px]" />
          <div className="text-2xl font-bold text-gray-800">Farmroot</div>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center relative left-24 space-x-8">
          <button className="text-gray-700 hover:text-primary transition duration-300 ease-in-out">
            Market Place
          </button>
          <div className="relative">
            <button
              className="text-gray-700 flex items-center hover:text-primary transition duration-300 ease-in-out"
              onClick={toggleResources}
            >
              Resources
              <FaChevronDown
                className={`ml-2 transition-transform transform ${resourcesOpen ? 'rotate-180' : ''}`}
              />
            </button>
            {resourcesOpen && (
              <div className="absolute left-0 mt-2 w-56 bg-white text-gray-700 rounded-lg shadow-lg z-30">
                <ul className="divide-y divide-gray-200">
                <Link to="/article">  <li className="p-3 hover:bg-gray-200 transition ease-in-out">
                    Farmer Wiki
                  </li></Link>
                </ul>
              </div>
            )}
          </div>
          <Link to="about">
          <button className="text-gray-700 hover:text-primary transition duration-300 ease-in-out">
            About Us
          </button>
          </Link>
          <a href="#FAQ">
            <button className="text-gray-700 hover:text-primary transition duration-300 ease-in-out">
              FAQ
            </button>
          </a>
        </div>

        {/* Language Toggle */}
        <div className="relative inline-block w-16 h-8 cursor-pointer left-48" onClick={onToggleLanguage}>
          <div className={`absolute top-[5px] left-0 w-[60px] border-2 border-black h-6 rounded-full transition-colors duration-300 ${language === 'eng' ? 'bg-white' : 'bg-white'}`}></div>
          <div className={`absolute top-[7.1px] w-5 h-5 bg-green-700 rounded-full transition-transform duration-300 transform ${language === 'eng' ? 'translate-x-1' : 'translate-x-9'}`}></div>
          <span className={`absolute right-[69px] top-2 text-[14px] font-medium text-black ${language === 'eng' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            ENG
          </span>
          <span className={`absolute left-[69px] top-2 text-[14px] font-bold text-black ${language === 'sin' ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}>
            සිං
          </span>
        </div>

        {/* Profile or Sign-In */}
        {currentUser ? (
          <div className="relative ml-2">
            <img
              src="https://via.placeholder.com/40"
              alt="Profile"
              className="w-10 h-10 rounded-full cursor-pointer"
              onClick={togglePopup}
            />
            {showPopup && (
              <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg py-2 text-black">
                <button
                  onClick={logoutHandler}
                  className="block w-full text-left px-4 py-2 hover:bg-gray-200"
                >
                  Logout
                </button>
                <h1 className="px-4 py-2 text-sm font-medium text-gray-600">
                  Account
                </h1>
              </div>
            )}
          </div>
        ) : (
          <Link to="/login" state={{ fromNavbar: true }}>
            <button className="bg-green-600 text-white relative left-9 px-4 py-2 rounded-full hover:bg-green-700 transition duration-300 ease-in-out">
              Sign In
            </button>
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
