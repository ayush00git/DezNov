import React, { useState } from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const ProjectCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="flex items-center justify-center p-4">
      <div
        className={`w-100 rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300
        bg-[#121212] border border-[#2A2A2A] hover:border-[#3a3a3a]
        ${isHovered ? 'ring-1 ring-[#333] shadow-md' : 'shadow-sm'}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image Section */}
        <div className="h-44 relative">
          <img
            src={data.image}
            alt={data.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-4 text-white">
          <div className="flex flex-col space-y-2">
            {/* Category */}
            <h4 className="text-gray-400 text-sm font-medium opacity-60">
              {data.category}
            </h4>

            <div className="flex items-center justify-between">
              {/* Title */}
              <h3 className="text-white text-lg font-medium truncate flex-1 pr-4">
                {data.title}
              </h3>

              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className={`p-2 rounded-full transition-all ${
                    isLiked ? 'text-red-500' : 'text-gray-400 hover:text-white'
                  } hover:bg-white/5`}
                >
                  <Heart size={18} className={isLiked ? 'fill-current' : ''} />{data.likes}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Share Button */}
        <div
          className={`absolute top-4 right-4 transition-all duration-300 ease-out ${
            isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
          }`}
        >
          <button className="bg-white/10 text-white p-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition">
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
