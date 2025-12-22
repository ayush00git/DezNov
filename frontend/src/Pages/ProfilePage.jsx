import React, { useState, useEffect } from 'react';
import api from '../services/api';
import { MapPin, Mail, Phone, Globe, Github, Linkedin, Pencil, Calendar, Award, Briefcase, GraduationCap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Elements/Navbar';

export default function ModernProfilePage() {
  const [activeTab, setActiveTab] = useState('about');

  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await api.get('/myProfile');
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile", error);
        if (error.response?.status === 401) {
          navigate('/auth/login');
        }
      } finally {
        setIsLoading(false);
      }
    };
    fetchProfile();
  }, [navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-[#0D0E11] text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-400"></div>
      </div>
    );
  }

  const user = profileData?.user;
  const profile = profileData?.profile;

  return (
    <div className="min-h-screen bg-[#0D0E11] text-white mt-20 lg:mt-6">
      <Navbar />
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0D0E11]"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-48 h-48 rounded-full p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-4xl font-bold text-gray-700">
                  {user?.fullName ? user.fullName.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2) : 'U'}
                </div>
              </div>
              <div className="absolute -inset-1 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mt-4">
                <h1 className="text-5xl lg:text-6xl font-bold mb-4 text-white bg-clip-text">
                  {user?.fullName || user?.userName}
                </h1>
                <button
                  className="ml-4 flex items-center px-4 py-2 bg-[#2A9F8D] text-sm text-nowrap text-white font-medium rounded-lg shadow-md hover:bg-[#23876F] transition-all duration-300 cursor-pointer"
                >
                  <Pencil className="w-4 h-4 mr-1" />
                  Edit Profile
                </button>
              </div>

              <p className="text-xl text-gray-300 mb-6">{profile?.title || 'DezNov Member'}</p>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                {profile?.aboutText ? profile.aboutText.slice(0, 150) + (profile.aboutText.length > 150 ? '...' : '') : 'Welcome to my profile!'}
              </p>

              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 text-gray-300">

                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>{user?.email}</span>
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
            {['about', 'projects'].map((tab) => (
              <button
                key={tab}
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
                  <p className="whitespace-pre-wrap">
                    {profile?.aboutText || "No information provided yet."}
                  </p>
                </div>
              </div>


            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Connect</h3>
                <div className="space-y-3">
                  {[
                    { icon: Github, label: 'GitHub', url: profile?.github },
                    { icon: Linkedin, label: 'LinkedIn', url: profile?.linkedin },
                    { icon: Globe, label: 'Portfolio', url: profile?.portfolio }
                  ].filter(s => s.url).map((social, i) => (
                    <a
                      key={i}
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors duration-200 group"
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                      <div>
                        <div className="font-medium">{social.label}</div>
                        <div className="text-sm text-gray-400">{social.url}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>


            </div>
          </div>
        )}


      </div>

    </div>
  );
}