import React, { useState } from 'react';
import { MapPin, Mail, Phone, Globe, Github, Linkedin, Twitter, Calendar, Award, Briefcase, GraduationCap, Star } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ModernProfilePage() {
  const [activeTab, setActiveTab] = useState('about');

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="relative group">
              <div className="w-48 h-48 rounded-full bg-gradient-to-r from-white to-gray-300 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center text-4xl font-bold text-gray-700">
                  AJ
                </div>
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-white/20 to-gray-300/20 blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Profile Info */}
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Alex Johnson
              </h1>
              <p className="text-xl text-gray-300 mb-6">Senior Full Stack Developer & UI/UX Designer</p>
              <p className="text-gray-400 text-lg mb-8 max-w-2xl">
                Passionate about creating beautiful, functional digital experiences that solve real-world problems. 
                5+ years crafting scalable applications and intuitive user interfaces.
              </p>
              
              {/* Contact Info */}
              <div className="flex flex-col sm:flex-row gap-6 text-gray-300">
                
                <div className="flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  <span>alex@example.com</span>
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
            {['about', 'skills', 'projects'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 px-2 border-b-2 font-medium text-sm uppercase tracking-wide transition-colors duration-200 ${
                  activeTab === tab
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
                  <p>
                    I'm a passionate full-stack developer with a keen eye for design and a love for creating 
                    seamless user experiences. My journey in tech began 5 years ago, and I've since worked 
                    with startups and established companies to bring innovative digital solutions to life.
                  </p>
                  <p>
                    When I'm not coding, you can find me exploring new design trends, contributing to open-source 
                    projects, or hiking through the beautiful trails of Northern California. I believe in the 
                    power of technology to make the world a better place, one application at a time.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Achievements</h3>
                <div className="space-y-3">
                  {[
                    'Led development of award-winning mobile app with 100k+ downloads',
                    'Reduced application load time by 60% through optimization',
                    'Mentored 15+ junior developers in modern web technologies',
                    'Speaker at 3 major tech conferences in 2024'
                  ].map((achievement, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Connect</h3>
                <div className="space-y-3">
                  {[
                    { icon: Github, label: 'GitHub', url: 'github.com/alexjohnson' },
                    { icon: Linkedin, label: 'LinkedIn', url: 'linkedin.com/in/alexjohnson' },
                    { icon: Twitter, label: 'Twitter', url: '@alexjohnson_dev' },
                    { icon: Globe, label: 'Portfolio', url: 'alexjohnson.dev' }
                  ].map((social, i) => (
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

              <div>
                <h3 className="text-2xl font-bold mb-4">Quick Stats</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Projects', value: '50+' },
                    
                    { label: 'Clients', value: '25+' },
                    { label: 'Coffee Cups', value: '∞' }
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-4 rounded-lg bg-gray-800/30">
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        

        {activeTab === 'skills' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Skills & Technologies</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  category: 'Frontend',
                  skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js']
                },
                {
                  category: 'Backend',
                  skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL']
                },
                {
                  category: 'DevOps',
                  skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform']
                },
                {
                  category: 'Design',
                  skills: ['Figma', 'Adobe XD', 'Photoshop', 'UI/UX', 'Prototyping']
                },
                {
                  category: 'Mobile',
                  skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Expo']
                },
                {
                  category: 'Tools',
                  skills: ['Git', 'Webpack', 'Jest', 'Cypress', 'Jira']
                }
              ].map((skillGroup, i) => (
                <div key={i} className="p-6 rounded-xl bg-gray-800/20">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5" />
                    {skillGroup.category}
                  </h3>
                  <div className="space-y-2">
                    {skillGroup.skills.map((skill, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-white" />
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'projects' && (
          <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: 'E-Commerce Platform',
                  description: 'Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.',
                  tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
                  status: 'Live'
                },
                {
                  title: 'Task Management App',
                  description: 'Collaborative project management tool with real-time updates, file sharing, and team communication.',
                  tech: ['Next.js', 'Socket.io', 'MongoDB', 'AWS'],
                  status: 'In Development'
                },
                {
                  title: 'Healthcare Dashboard',
                  description: 'Analytics dashboard for healthcare providers with patient data visualization and reporting tools.',
                  tech: ['Vue.js', 'Python', 'D3.js', 'Docker'],
                  status: 'Completed'
                },
                {
                  title: 'Mobile Fitness App',
                  description: 'Cross-platform mobile app for fitness tracking with social features and AI-powered recommendations.',
                  tech: ['React Native', 'Firebase', 'TensorFlow', 'Redux'],
                  status: 'Live'
                }
              ].map((project, i) => (
                <div key={i} className="p-6 rounded-xl bg-gray-800/20 hover:bg-gray-800/30 transition-colors duration-200 group">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-gray-200">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Live' ? 'bg-green-900/30 text-green-300' :
                      project.status === 'In Development' ? 'bg-yellow-900/30 text-yellow-300' :
                      'bg-blue-900/30 text-blue-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span key={j} className="px-3 py-1 rounded-full bg-gray-700/50 text-gray-300 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}