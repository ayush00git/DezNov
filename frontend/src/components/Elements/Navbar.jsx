import React, { useState } from 'react';
import { Search, Bell, MessageCircle, User, Menu, X } from 'lucide-react';
import Categories from './Categories';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navigate = useNavigate();

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D0E11] backdrop-blur-md border-b border-white/20 shadow-sm">
        <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            {/* Company Name - Left */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => navigate('/')}>
                DezNov
              </h1>
            </div>

            {/* Search Bar - Center (Hidden on mobile) */}
            <div className="hidden md:flex flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400 z-10" />
                </div>
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="block w-full pl-10 pr-3 py-2 border border-gray-200/50 rounded-full 
                           bg-[#0D0E11] backdrop-blur-sm placeholder-gray-400 text-white 
                           focus:outline-none focus:ring-2 focus:ring-[#2A9F8D] focus:border-transparent
                           hover:bg-[#0D0E11] transition-all duration-200"
                  placeholder="Search for projects or designs..."
                />
              </div>
            </div>

            {/* Desktop Icons - Right */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-[#ff6b6bb5] rounded-full transition-all duration-200 relative cursor-pointer">
                <Bell className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-red-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:text-[#2A9F8D]   rounded-full transition-all duration-200 relative cursor-pointer">
                <MessageCircle className="h-6 w-6" />
                <span className="absolute top-1 right-1 h-2 w-2 bg-green-500 rounded-full"></span>
              </button>
              <button className="p-2 text-gray-600 hover:text-[#1E90FF]   rounded-full transition-all duration-200 cursor-pointer">
                <User className="h-6 w-6" />
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 text-gray-600 hover:text-blue-600 hover:bg-white/50 rounded-full transition-all duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden pb-4">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400 z-10" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="block w-full pl-10 pr-3 py-2 border border-gray-200/50 rounded-full 
                           bg-[#0D0E11] backdrop-blur-sm placeholder-gray-400 text-white 
                           focus:outline-none focus:ring-2 focus:ring-[#2A9F8D] focus:border-transparent
                           hover:bg-[#0D0E11] transition-all duration-200"
                placeholder="Search for projects or designs..."
              />
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden pb-4">
              <div className="flex justify-center space-x-6">
                <button className="flex flex-col items-center p-3 text-gray-600 hover:text-blue-600 hover:bg-white/50 rounded-lg transition-all duration-200 relative">
                  <Bell className="h-6 w-6 mb-1" />
                  <span className="text-xs">Updates</span>
                  <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full"></span>
                </button>
                <button className="flex flex-col items-center p-3 text-gray-600 hover:text-blue-600 hover:bg-white/50 rounded-lg transition-all duration-200 relative">
                  <MessageCircle className="h-6 w-6 mb-1" />
                  <span className="text-xs">Messages</span>
                  <span className="absolute top-2 right-2 h-2 w-2 bg-green-500 rounded-full"></span>
                </button>
                <button className="flex flex-col items-center p-3 text-gray-600 hover:text-blue-600 hover:bg-white/50 rounded-lg transition-all duration-200">
                  <User className="h-6 w-6 mb-1" />
                  <span className="text-xs">Profile</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
      </>
  );
};

export default Navbar;