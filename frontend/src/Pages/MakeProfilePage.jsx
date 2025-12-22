import React, { useState } from 'react';
import api from '../services/api';
import { MapPin, Mail, Phone, Globe, Github, Linkedin, Upload, User, Briefcase, FileText } from 'lucide-react';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    userName: '',
    fullName: '',
    title: '',
    email: '',
    aboutText: '',
    github: '',
    linkedin: '',
    portfolio: '',
    profilePicURL: null
  });

  const [profilePicPreview, setProfilePicPreview] = useState(null);
  const [activeTab, setActiveTab] = useState('about');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        profilePicURL: file
      }));
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfilePicPreview(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const getInitials = (fullName) => {
    return fullName.split(' ').map(word => word.charAt(0)).join('').toUpperCase().slice(0, 2);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await api.post('/profile/profileSetup', {
        title: formData.title,
        aboutText: formData.aboutText,
        github: formData.github,
        linkedin: formData.linkedin,
        portfolio: formData.portfolio,
        // Send a default avatar if no image (mocking upload)
        profilePicURL: `https://ui-avatars.com/api/?name=${formData.fullName}&background=random`
      });
      console.log(response.data);
      alert('Profile created successfully!');
      // Navigate to myProfile or home?
      // navigate('/myProfile'); // user needs to import useNavigate
    } catch (error) {
      console.error(error);
      const errorMsg = error.response?.data?.message || 'Error creating profile';
      alert(errorMsg);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0D0E11] text-white">
      {/* Add custom styles for autofill */}
      <style jsx>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        textarea:-webkit-autofill,
        textarea:-webkit-autofill:hover,
        textarea:-webkit-autofill:focus,
        textarea:-webkit-autofill:active {
          box-shadow: 0 0 0 1000px #0D0E11 inset !important;
          -webkit-text-fill-color: #ffffff !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        
        input[type="email"]:-webkit-autofill,
        input[type="email"]:-webkit-autofill:hover,
        input[type="email"]:-webkit-autofill:focus {
          box-shadow: 0 0 0 1000px #0D0E11 inset !important;
          -webkit-text-fill-color: #d1d5db !important;
        }
        
        input[type="url"]:-webkit-autofill,
        input[type="url"]:-webkit-autofill:hover,
        input[type="url"]:-webkit-autofill:focus {
          box-shadow: 0 0 0 1000px rgba(31, 41, 55, 0.5) inset !important;
          -webkit-text-fill-color: #9ca3af !important;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0E11]"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image Upload */}
            <div className="relative group">
              <div
                className="w-48 h-48 rounded-full p-1 shadow-2xl cursor-pointer"
                onClick={() => document.getElementById('profilePic').click()}
              >
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-4xl font-bold text-gray-700 overflow-hidden relative">
                  {profilePicPreview ? (
                    <img
                      src={profilePicPreview}
                      alt="Profile preview"
                      className="w-full h-full object-cover"
                    />
                  ) : formData.fullName ? (
                    getInitials(formData.fullName)
                  ) : (
                    <div className="text-center">
                      <Upload className="w-8 h-8 mx-auto mb-2 text-gray-600" />
                      <span className="text-xs text-gray-600">Upload</span>
                    </div>
                  )}
                </div>
                <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Upload className="w-6 h-6 text-white" />
                </div>
              </div>
              <input
                type="file"
                id="profilePic"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />
            </div>

            {/* Profile Info Form */}
            <div className="flex-1 text-center lg:text-left w-full">
              <div className="flex items-center justify-center lg:justify-start mt-4">
                <div className="w-full">
                  <input
                    type="text"
                    name="userName"
                    value={formData.userName}
                    onChange={handleInputChange}
                    placeholder="@username"
                    className="text-2xl font-medium text-[#2A9F8D] bg-transparent border-none outline-none placeholder-gray-500 text-center lg:text-left w-full mb-2"
                    required
                  />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="text-5xl lg:text-6xl font-bold mb-4 text-white bg-transparent border-none outline-none placeholder-gray-500 text-center lg:text-left w-full"
                    required
                  />
                </div>
              </div>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Your Title/Role"
                className="text-xl text-gray-300 mb-6 bg-transparent border-none outline-none placeholder-gray-500 text-center lg:text-left w-full"
                required
              />
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    className="bg-transparent border-none outline-none placeholder-gray-500"
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-6">
          <nav className="flex space-x-8">
            {['about'].map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm uppercase tracking-wide transition-colors duration-200 ${activeTab === tab
                  ? 'border-white text-white'
                  : 'border-transparent text-gray-400 hover:text-gray-200 hover:border-gray-600'
                  }`}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {activeTab === 'about' && (
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">About Me</h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <textarea
                    name="aboutText"
                    value={formData.aboutText}
                    onChange={handleInputChange}
                    placeholder="Write about your background and experience..."
                    rows={8}
                    className="w-full bg-[#0D0E11] border border-gray-700 rounded-lg px-4 py-3 text-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#2A9F8D] focus:border-[#2A9F8D] transition-all duration-300 resize-none"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Connect</h3>
                <div className="space-y-3">
                  {[
                    { icon: Github, label: 'GitHub', field: 'github', placeholder: 'github.com/yourusername' },
                    { icon: Linkedin, label: 'LinkedIn', field: 'linkedin', placeholder: 'linkedin.com/in/yourusername' },
                    { icon: Globe, label: 'Portfolio', field: 'portfolio', placeholder: 'yourportfolio.dev' }
                  ].map((social, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200 group"
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <div className="flex-1">
                        <div className="font-medium mb-1">{social.label}</div>
                        <input
                          type="url"
                          name={social.field}
                          value={formData[social.field]}
                          onChange={handleInputChange}
                          placeholder={social.placeholder}
                          className="w-full text-sm text-gray-400 bg-transparent border-none outline-none placeholder-gray-600"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Submit Button */}
      <div className="max-w-6xl mx-auto px-6 pb-12">
        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="px-12 py-4 cursor-pointer bg-[#2A9F8D]  text-white font-semibold rounded-full transition-all duration-300 hover:bg-[rgb(35,129,101)] disabled:bg-gray-600 disabled:cursor-not-allowed min-w-48 flex items-center justify-center"
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center gap-2">
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Creating Profile...
              </div>
            ) : (
              'Create Profile'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}