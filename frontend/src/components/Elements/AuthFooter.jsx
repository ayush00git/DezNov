import React from "react";
import { Instagram, Linkedin, Github } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="text-white border-t border-gray-800 mt-32">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Brand and Developer Info */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold text-white mb-2">DezNov</h3>
            <p className="text-gray-400 text-sm">
              Developed by{" "}
              <span className="text-white font-medium">Ayush Kumar</span>
            </p>
          </div>

          {/* Join Community Button and Social Media Icons */}
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Join Community Button */}
            <button className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group cursor-pointer"
            onClick={() => navigate('/signup')}>
              <span className="relative z-10">Join the Community</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
            </button>

            {/* Social Media Icons */}
            <div className="flex space-x-6">
              <a
                href="https://www.instagram.com/ayyush_z/"
                target="_blank"
                className="text-gray-400 hover:text-pink-500 transition-colors duration-300 transform hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/ayush-kumar-368446246/?originalSubdomain=in"
                target="_blank"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/ayush00git"
                target="_blank"
                className="text-gray-400 hover:text-white transition-colors duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-800">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} DezNov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
