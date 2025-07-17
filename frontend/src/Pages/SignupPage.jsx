import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function SignupPage() {
  const [formData, setFormData] = useState({
    username: '',
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

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
    } else if (formData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }

    // Full name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
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
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: formData.username,
          fullName: formData.fullName,
          email: formData.email,
          password: formData.password,
        }),
      });
      const data = await response.json();
      setIsLoading(false);
      if (response.ok) {
        alert('Account created successfully!');
        // Optionally redirect to login or home
        // navigate('/login');
      } else {
        alert(data.error || 'Signup failed');
      }
    } catch (err) {
      setIsLoading(false);
      alert('Network error, please try again later.');
    }
  };

  const handleForgotPassword = () => {
    alert('Forgot password functionality would redirect to password reset page');
  };

  const handleLogin = () => {
    alert('Login functionality would redirect to login page');
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center p-4" style={{backgroundColor: '#0D0E11'}}>
      <nav className='text-white absolute left-4 top-4 font-bold text-3xl cursor-pointer'
       onClick={() => navigate('/')}
      >
        DezNov
      </nav>
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">Join DezNov Now!</h1>
          <p className="text-gray-400">Create your student account</p>
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

            {/* Full Name Field */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-4 py-3 rounded-lg border-2 transition-all duration-200 bg-gray-800 text-white placeholder-gray-500 ${
                    errors.fullName ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-indigo-500 hover:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                  placeholder="Enter your full name"
                />
              </div>
              {errors.fullName && <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>}
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

            {/* Confirm Password Field */}
            <div>
              <label className="block text-sm font-medium text-white mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className={`w-full pl-12 pr-12 py-3 rounded-lg border-2 transition-all duration-200 bg-gray-800 text-white placeholder-gray-500 ${
                    errors.confirmPassword ? 'border-red-500 focus:border-red-400' : 'border-gray-700 focus:border-indigo-500 hover:border-gray-600'
                  } focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50`}
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-white transition-colors duration-200"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5 cursor-pointer" /> : <Eye className="w-5 h-5 cursor-pointer" />}
                </button>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>}
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
                  Creating Account...
                </div>
              ) : (
                'Create Account'
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
              <span className="text-gray-400">Already have an account? </span>
              <button
                onClick={() => navigate('/login')}
                className="text-indigo-400 hover:text-indigo-300 cursor-pointer font-medium transition-colors duration-200"
              >
                Login
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