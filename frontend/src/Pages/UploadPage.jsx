import React, { useState, useEffect } from 'react';
import { Upload, ChevronDown, Github, ExternalLink } from 'lucide-react';
import Navbar from '../components/Elements/Navbar'
export default function UploadPage() {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    tags: ['', ''],
    coverImage: null,
    githubLink: '',
    demoLink: ''
  });
  const [dragActive, setDragActive] = useState(false);

  const [currentStep, setCurrentStep] = useState(1);

  const categories = [
    'Web Dev',
    'Graphic Design',
    'UI/UX',
    'AI/ML',
    'Blockchain & Web3'
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleTagChange = (index, value) => {
    const newTags = [...formData.tags];
    newTags[index] = value;
    setFormData(prev => ({ ...prev, tags: newTags }));
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      if (file.type.startsWith('image/')) {
        setFormData(prev => ({ ...prev, coverImage: file }));
      }
    }
  };

  const handleFileSelect = (e) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.type.startsWith('image/')) {
        setFormData(prev => ({ ...prev, coverImage: file }));
      }
    }
  };

  const toggleLike = () => {
    // Removed like functionality
  };

  const steps = [1, 2, 3, 4, 5, 6, 7];

  useEffect(() => {
    let filledSteps = 0;
    if (formData.title) filledSteps++;
    if (formData.description) filledSteps++;
    if (formData.category) filledSteps++;
    if (formData.tags.some(tag => tag.trim() !== '')) filledSteps++;
    if (formData.coverImage) filledSteps++;
    if (formData.githubLink) filledSteps++;
    if (formData.demoLink) filledSteps++;
    setCurrentStep(filledSteps);
  }, [formData]);

  return (
    <div className="min-h-screen bg-[#0D0E11] text-white mt-32 pb-16">
        <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <p className="text-xl md:text-2xl text-gray-300 mb-12">
            Showcase your creativity to the community
          </p>
          <button className="bg-[#0D0E11] hover:bg-[#252830] 
                           border-2 border-gray-500 text-white px-8 py-4 rounded-full
                           font-semibold text-lg transition-all duration-300 cursor-pointer">
            Upload now
          </button>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Left Section - Form */}
          <div className="bg-[#0D0E11] backdrop-blur-xl border-gray-700 border-2 rounded-3xl p-8 ">
            {/* Progress Bar */}
            <div className="flex items-center justify-between mb-12">
              {steps.map((step, index) => (
                <React.Fragment key={step}>
                  <div className={`w-5 h-5 rounded-full transition-all duration-300 ${
                    index < currentStep ? 'bg-gray-400 shadow-lg shadow-gray-400/50' : 'bg-gray-700'
                  }`} />
                  {index < steps.length - 1 && (
                    <div className={`flex-1 h-0.5 mx-4 transition-all duration-300 ${
                      index < currentStep - 1 ? 'bg-gray-400' : 'bg-gray-700'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>

            <h2 className="text-3xl font-bold mb-8 text-white">Project Details</h2>

            {/* Title Input */}
            <div className="mb-8">
              <label className="block text-lg font-medium mb-3 text-gray-200">Title</label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="w-full bg-black/30 border border-gray-600 rounded-2xl px-4 py-3 text-white 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A9F8D] 
                            transition-all duration-300 backdrop-blur-sm"
                placeholder="Enter project title..."
              />
            </div>

            {/* Description Input */}
            <div className="mb-10">
              <label className="block text-lg font-medium mb-3 text-gray-200">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) => handleInputChange('description', e.target.value)}
                rows={4}
                className="w-full bg-black/30 border border-gray-600 rounded-2xl px-4 py-3 text-white 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A9F8D] 
                           focus:border-gray-500 transition-all duration-300 resize-none backdrop-blur-sm"
                placeholder="Describe your project..."
              />
            </div>

            {/* Category & Tags Section */}
            <h3 className="text-2xl font-bold mb-6 text-white">Category & Tags</h3>

            {/* Category Dropdown */}
            <div className="mb-8">
              <label className="block text-lg font-medium mb-3 text-gray-200">Category</label>
              <div className="relative">
                <select
                  value={formData.category}
                  onChange={(e) => handleInputChange('category', e.target.value)}
                  className="w-full bg-black/30 border border-gray-600 rounded-2xl px-4 py-3 text-white 
                             focus:outline-none focus:ring-2 focus:ring-[#2A9F8D] focus:border-gray-500 
                             transition-all duration-300 appearance-none cursor-pointer backdrop-blur-sm"
                >
                  <option value="" className="bg-gray-900 rounded-t-lg">Select a category...</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat} className="bg-gray-900 hover:bg-gray-800 rounded-2xl">
                      {cat}
                    </option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
              </div>
            </div>

            {/* Tags Input */}
            <div className="mb-10">
              <label className="block text-lg font-medium mb-3 text-gray-200">Tags</label>
              <div className="grid grid-cols-2 gap-4">
                {formData.tags.map((tag, index) => (
                  <input
                    key={index}
                    type="text"
                    value={tag}
                    onChange={(e) => handleTagChange(index, e.target.value)}
                    className="bg-black/30 border border-gray-600 rounded-2xl px-4 py-3 text-white 
                               placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A9F8D]
                               focus:border-gray-500 transition-all duration-300 backdrop-blur-sm"
                    placeholder={`Tag ${index + 1}`}
                  />
                ))}
              </div>
              {formData.tags.length < 5 && (
                <button
                  onClick={() => handleTagChange(formData.tags.length, '')}
                  className="mt-4 px-4 py-2 bg-[#2A9F8D] text-white font-medium rounded-lg shadow-md hover:bg-[#23876F] transition-all duration-300"
                >
                  Add a Tag
                </button>
              )}
            </div>

            {/* Project Links Section */}
            <h3 className="text-2xl font-bold mb-6 text-white">Project Links</h3>

            {/* GitHub Link Input */}
            <div className="mb-8">
              <label className="block text-lg font-medium mb-3 text-gray-200">GitHub Repository</label>
              <input
                type="url"
                value={formData.githubLink}
                onChange={(e) => handleInputChange('githubLink', e.target.value)}
                className="w-full bg-black/30 border border-gray-600 rounded-2xl px-4 py-3 text-white 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A9F8D]
                           focus:border-gray-500 transition-all duration-300 backdrop-blur-sm"
                placeholder="https://github.com/username/repository"
              />
            </div>

            {/* Live Demo Link Input */}
            <div className="mb-10">
              <label className="block text-lg font-medium mb-3 text-gray-200">Live Demo</label>
              <input
                type="url"
                value={formData.demoLink}
                onChange={(e) => handleInputChange('demoLink', e.target.value)}
                className="w-full bg-black/30 border border-gray-600 rounded-2xl px-4 py-3 text-white 
                           placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A9F8D] 
                           focus:border-gray-500 transition-all duration-300 backdrop-blur-sm"
                placeholder="https://your-project-demo.com"
              />
            </div>

            
          </div>

          {/* Right Section - Preview */}
          <div className="space-y-8">
            {/* Project Preview Card */}
            <div className="bg-[#0D0E11] backdrop-blur-xl border-gray-700 border-2 rounded-3xl p-8">
              <div className="flex justify-between items-start mb-6">
                <span className="bg-white/10 text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                  {formData.category || 'Category'}
                </span>
                
                {/* Project Links */}
                <div className="flex gap-3">
                  {formData.githubLink && (
                    <a
                      href={formData.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 
                                 border border-white/20 hover:border-white/30"
                    >
                      <Github className="w-4 h-4 text-gray-300 hover:text-white" />
                    </a>
                  )}
                  {formData.demoLink && (
                    <a
                      href={formData.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-all duration-300 
                                 border border-white/20 hover:border-white/30"
                    >
                      <ExternalLink className="w-4 h-4 text-gray-300 hover:text-white" />
                    </a>
                  )}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-white">
                {formData.title || 'Project Title'}
              </h3>
              
              <p className="text-gray-300 text-sm leading-relaxed">
                {formData.description
                  ? `${formData.description.split(' ').slice(0, 50).join(' ')}...`
                  : 'Your project description will appear here. Add a detailed description to showcase your work and explain the creative process behind this design project.'}
              </p>
            </div>

            {/* Image Upload Area */}
            <div
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
              className={`relative border-2 border-dashed rounded-3xl p-12 text-center transition-all duration-300 
                         ${dragActive 
                           ? 'border-gray-400 bg-[#252830]' 
                           : 'border-gray-600 bg-[#0D0E11] hover:border-gray-500 hover:bg-[#1a1c22]'
                         }`}
            >
              <input
                type="file"
                accept="image/*"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              
              {formData.coverImage ? (
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-green-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">{formData.coverImage.name}</p>
                    <p className="text-gray-400 text-sm">File uploaded successfully</p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="w-16 h-16 mx-auto bg-white/10 rounded-full flex items-center justify-center">
                    <Upload className="w-8 h-8 text-gray-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium mb-2">Drag and drop or</p>
                    <p className="text-gray-400">browse your image</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}