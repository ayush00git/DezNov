import React, { useState } from "react";
import {
  Github,
  ExternalLink,
  Heart,
  User,
  GraduationCap,
  Calendar,
  Hash,
  Share2,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Elements/Navbar";
import CommentSection from "../components/Elements/CommentSection";

const ProjectDetailPage = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [showFullDescription, setShowFullDescription] = useState(false);
  const navigate = useNavigate();
  // Sample project data
  const project = {
    title: "Typography Mastery",
    category: "UI/UX Design",
    description:
      "A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation. It showcases how typography can enhance user experience and brand identity across various platforms.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation. It showcases how typography can enhance user experience and brand identity across various platforms.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementationA comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation. It showcases how typography can enhance user experience and brand identity across various platforms.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementationA comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation. It showcases how typography can enhance user experience and brand identity across various platforms.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementationA comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation. It showcases how typography can enhance user experience and brand identity across various platforms.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementationA comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation. It showcases how typography can enhance user experience and brand identity across various platforms.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementationA comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation. It showcases how typography can enhance user experience and brand identity across various platforms.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementationA comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation. It showcases how typography can enhance user experience and brand identity across various platforms.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementationA comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation. It showcases how typography can enhance user experience and brand identity across various platforms.A comprehensive exploration of modern typography principles, focusing on readability, hierarchy, and aesthetic balance. This project demonstrates advanced typographic techniques used in contemporary digital design, including font pairing strategies and responsive typography implementation",
    creator: {
      name: "Sarah Johnson",
      college: "MIT",
      userName: "@SarahJohn_12t",
      uploadDate: "January 15, 2025",
    },
    images: [
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500&h=350&fit=crop&q=80",
      "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=350&fit=crop&q=80",
      "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=500&h=350&fit=crop&q=80",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=350&fit=crop&q=80",
    ],
    githubLink: "https://github.com/sarah/typography-mastery",
    demoLink: "https://typography-demo.com",
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handleConnect = () => {
    // alert(`Connecting with ${project.creator.name}...`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link copied to clipboard!");
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0E11] text-white">
      <Navbar />
      {/* Header with Share Button */}
      <div className="flex justify-end p-6 mt-28 lg:mt-16">
        <button
          onClick={handleShare}
          className="p-3 hover:bg-white/10 rounded-full transition-all duration-300 
                     hover:scale-110 active:scale-95 group"
        >
          <Share2 className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" />
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto pb-12">
        {/* Project Title and Category */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-3xl md:text-5xl font-bold text-white hover:underline cursor-pointer">
              {project.title}
            </h1>
          </div>
        </div>
        <div className="flex justify-center">
          <span
            className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium cursor-pointer 
                            border border-white/20 backdrop-blur-sm duration-200 hover:bg-white/15"
          >
            {project.category}
          </span>
        </div>
        {/* Project Description */}
        <div className="mb-10">
          <div className="text-white md:text-2xl/[1.5] tracking-widest p-6 rounded-2xl">
            <p className="text-xl leading-relaxed">
              {showFullDescription
                ? project.description
                : `${project.description.split(" ").slice(0, 50).join(" ")}...`}
            </p>
            {project.description.split(" ").length > 50 && (
              <button
                onClick={() => setShowFullDescription(!showFullDescription)}
                className="mt-4 text-[#2A9F8D] hover:underline"
              >
                {showFullDescription ? "Show Less" : "Read More..."}
              </button>
            )}
          </div>
        </div>

        {/* Creator Card */}
        <div className="bg-[#0D0E11] backdrop-blur-sm rounded-2xl p-6 mb-10 border-2 border-gray-700/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-white">Created by</h3>
            <div className="flex items-center gap-3">
              <button
                onClick={handleLike}
                className={`p-3 rounded-full cursor-pointer transition-all duration-300 ${
                  isLiked
                    ? "bg-red-500/20 text-red-500"
                    : "bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white"
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? "fill-current" : ""}`} />
              </button>
              <button
                onClick={handleConnect}
                className="bg-white text-black px-6 py-3 rounded-full font-semibold
                           transition-all duration-300 cursor-pointer
                           hover:bg-gray-300"
              >
                Follow
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-gray-400" />
              <span className="text-lg">{project.creator.name}</span>
            </div>
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-gray-400" />
              <span className="text-lg">{project.creator.college}</span>
            </div>
            <div className="flex items-center gap-3">
              <Hash className="w-5 h-5 text-gray-400" />
              <span className="text-lg">{project.creator.userName}</span>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-gray-400" />
              <span className="text-lg">{project.creator.uploadDate}</span>
            </div>
          </div>
        </div>

        {/* Project Images - Horizontal Scroll */}
        <div className="mb-12">
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-80 h-56 rounded-2xl overflow-hidden cursor-pointer"
              >
                <img
                  src={image}
                  alt={`Project image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gray-800/80 hover:bg-gray-700/80 border border-gray-600 
                       text-white py-6 rounded-2xl font-semibold text-lg
                       transition-all duration-300 hover:scale-105 active:scale-95
                       hover:shadow-xl hover:shadow-gray-500/20 backdrop-blur-sm
                       flex items-center justify-center gap-3"
          >
            <Github className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            View Code
          </a>

          <a
            href={project.demoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-white text-black py-6 rounded-2xl font-semibold text-lg
                       transition-all duration-300 hover:scale-105 active:scale-95
                       hover:bg-gray-100 hover:shadow-xl hover:shadow-white/20
                       flex items-center justify-center gap-3"
          >
            <ExternalLink className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
            Live Demo
          </a>
        </div>
      </div>

      {/* Custom scrollbar styles */}
      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <CommentSection />
    </div>
  );
};

export default ProjectDetailPage;
