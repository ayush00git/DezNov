import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';


export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate()

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Username validation
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = 'College email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else if (!formData.email.includes('nith.ac.in')) {
      newErrors.email = 'Please use your college email address';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsLoading(false);
    
    alert('Account created successfully!');
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality would redirect to password reset page');
  };

  const handleLogin = () => {
    alert('Login functionality would redirect to login page');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4" style={{backgroundColor: '#0D0E11'}}>
      <nav className='text-white absolute left-4 top-4 font-bold text-3xl cursor-pointer'
       onClick={() => navigate('/')}
      >
        DezNov
      </nav>
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Welcome Back!</h1>
        </div>

        {/* Form */}
        <div className="border-2 border-gray-800 rounded-2xl shadow-xl p-8">
          <div className="space-y-6">
            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Username
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all duration-200 bg-gray-800 text-white placeholder-gray-500 ${
                    errors.username ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-indigo-500 hover:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                  placeholder="Enter unique username"
                />
              </div>
              {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username}</p>}
            </div>

            {/* College Email Field */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                College Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all duration-200 bg-gray-800 text-white placeholder-gray-500 ${
                    errors.email ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-indigo-500 hover:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                  placeholder="your.email@college.edu"
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-12 py-3 rounded-lg border-2 transition-all duration-200 bg-gray-800 text-white placeholder-gray-500 ${
                    errors.password ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-indigo-500 hover:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                  placeholder="Create a strong password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {showPassword ? <EyeOff className="w-5 h-5 cursor-pointer" /> : <Eye className="w-5 h-5 cursor-pointer" />}
                </button>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 cursor-pointer"
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Logging in to your account
                </div>
              ) : (
                'Log In'
              )}
            </button>
          </div>

          {/* Footer Links */}
          <div className="mt-6 space-y-4">
            <div className="text-center">
              <button
                onClick={handleForgotPassword}
                className="text-indigo-400 hover:text-indigo-300 cursor-pointer font-medium transition-colors duration-200"
              >
                Forgot Password?
              </button>
            </div>
            
            <div className="text-center">
              <span className="text-gray-400">Don't have an account? </span>
              <button
                onClick={() => navigate('/signup')}
                className="text-indigo-400 hover:text-indigo-300 cursor-pointer font-medium transition-colors duration-200"
              >
                Singup
              </button>
            </div>
          </div>
        </div>

        {/* Terms */}
        <div className="text-center mt-6">
          <p className="text-sm text-gray-400">
            By creating an account, you agree to our{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300">Terms of Service</a>{' '}
            and{' '}
            <a href="#" className="text-indigo-400 hover:text-indigo-300">Privacy Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
}