import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, Github, ExternalLink } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ProjectCard = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  const handleShare = (e) => {
    e.stopPropagation();
    if (navigator.share) {
      navigator.share({
        title: data.title,
        text: `Check out this awesome project: ${data.title}`,
        url: window.location.href + '/project/id'
      }).catch(err => console.log('Error sharing:', err));
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href + '/project/id')
        .then(() => alert('Link copied to clipboard!'))
        .catch(() => alert('Failed to copy link'));
    }
  };

  const handleLinkClick = (e, url) => {
    e.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex items-center justify-center p-4"
      onClick={() => navigate('/project/id')}>
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

          {/* GitHub and Live Demo Links */}
          <div className="absolute top-4 left-4 flex flex-col space-y-2">
            {data.githubUrl && (
              <button
                onClick={(e) => handleLinkClick(e, data.githubUrl)}
                className="bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 backdrop-blur-sm transition-all duration-200 hover:scale-105"
                title="View on GitHub"
              >
                <Github size={16} />
              </button>
            )}
            {data.liveUrl && (
              <button
                onClick={(e) => handleLinkClick(e, data.liveUrl)}
                className="bg-black/50 text-white p-2 rounded-full cursor-pointer hover:bg-black/70 backdrop-blur-sm transition-all duration-200 hover:scale-105"
                title="View Live Demo"
              >
                <ExternalLink size={16} />
              </button>
            )}
          </div>
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsLiked(!isLiked);
                  }}
                  className={`p-2 rounded-full transition-all ${isLiked ? 'text-red-500' : 'text-gray-400 hover:text-white'
                    } hover:bg-white/5`}
                >
                  <Heart size={18} className={isLiked ? 'fill-current' : ''} />
                  {data.likes}
                </button>
              </div>
            </div>

            {/* User Profile */}
            <div className="flex items-center space-x-2 pt-1">
              <img
                src={data.user?.avatar || data.user.avatar}
                alt={data.user?.name || data.user.name}
                className="w-6 h-6 rounded-full object-cover"
              />
              <span className="text-gray-300 text-sm font-medium">
                {data.user?.name || 'Anonymous User'}
              </span>
            </div>

            {/* Tags */}
            {data.tags && data.tags.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-3">
                {data.tags.filter(tag => tag && tag.trim() !== '').slice(0, 5).map((tag, index) => (
                  <span
                    key={index}
                    onClick={(e) => e.stopPropagation()}
                    className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300 border border-white/20 cursor-pointer hover:bg-white/15 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Share Button */}
        <div
          className={`absolute top-4 right-4 transition-all duration-300 ease-out ${isHovered
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-2 pointer-events-none'
            }`}
        >
          <button
            onClick={handleShare}
            className="bg-white/10 text-white cursor-pointer p-2 rounded-full hover:bg-white/20 backdrop-blur-sm transition"
            title="Share Project"
          >
            <Share2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;