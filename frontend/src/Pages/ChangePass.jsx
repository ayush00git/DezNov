import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import api from '../services/api';
import Toast from '../components/Elements/Toast';

export default function ChangePass() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("oldPassword");
  const [showPasswords, setShowPasswords] = useState({
    oldPassword: false,
    newPassword: false,
    confirmPassword: false
  });

  const [oldPasswordForm, setOldPasswordForm] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: ""
  });

  const [emailForm, setEmailForm] = useState({
    email: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [toast, setToast] = useState({ message: '', type: '' });

  const showToast = (message, type = 'info') => {
    setToast({ message, type });
  };

  const handleOldPasswordInputChange = (e) => {
    setOldPasswordForm({
      ...oldPasswordForm,
      [e.target.name]: e.target.value,
    });
  }

  const handleEmailInputChange = (e) => {
    setEmailForm({
      ...emailForm,
      [e.target.name]: e.target.value,
    });
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords({
      ...showPasswords,
      [field]: !showPasswords[field]
    });
  };

  const [passwordsMatch, setPasswordsMatch] = useState(true);

  // Import api service at the top (added in previous step or here if replacing top)

  const handleOldPasswordSubmit = async (e) => {
    e.preventDefault();

    if (!oldPasswordForm.email) {
      showToast("Email is required", "error");
      return;
    }
    if (oldPasswordForm.newPassword !== oldPasswordForm.confirmPassword) {
      setPasswordsMatch(false);
      showToast("Passwords do not match", "error");
      return;
    }
    if (oldPasswordForm.newPassword.length < 6) {
      showToast("Password must be at least 6 characters", "error");
      return;
    }

    setIsLoading(true);

    try {
      const response = await api.post("/auth/change-password/oldpass", {
        email: oldPasswordForm.email,
        oldPassword: oldPasswordForm.oldPassword,
        newPassword: oldPasswordForm.newPassword,
      });

      if (response.status === 200) {
        showToast("Password changed successfully! Redirecting...", "success");
        setTimeout(() => {
          navigate('/auth/login');
        }, 2000);
      }
    } catch (error) {
      const msg = error.response?.data?.message || "Failed to change password";
      showToast(msg, "error");
    } finally {
      setIsLoading(false);
    }
  };

  // Live check for password match
  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setOldPasswordForm((prev) => ({ ...prev, confirmPassword: value }));
    setPasswordsMatch(value === oldPasswordForm.newPassword);
  };

  const handleNewPasswordChange = (e) => {
    const value = e.target.value;
    setOldPasswordForm((prev) => ({ ...prev, newPassword: value }));
    setPasswordsMatch(oldPasswordForm.confirmPassword === value);
  };

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await api.post("/auth/change-password/email", {
        email: emailForm.email,
      });

      if (response.status === 200) {
        setEmailSent(true);
      }
    } catch (error) {
      console.error("Error during password reset:", error);
      const msg = error.response?.status === 404
        ? "Email reset service unavailable (Backend route missing)"
        : (error.response?.data?.message || "Failed to send reset email");
      showToast(msg, "error");
    } finally {
      setIsLoading(false);
    }
  };

  const PasswordIcon = ({ show }) => (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      {show ? (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
        />
      ) : (
        <>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </>
      )}
    </svg>
  );

  return (
    <div className="min-h-screen bg-[#0D0E11] relative overflow-hidden flex items-center justify-center">
      <Toast
        message={toast.message}
        type={toast.type}
        onClose={() => setToast({ ...toast, message: '' })}
      />
      <h1
        className="text-white text-3xl absolute top-4 left-4 font-extrabold cursor-pointer"
        onClick={() => navigate("/")}
      >
        DezNov
      </h1>

      {/* Main form container */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-opacity-90 backdrop-blur-sm rounded-2xl border-2 border-gray-700 p-8 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-light text-white mb-2">
              Change Your {" "}
              <span className="text-[#2A9F8D] font-medium">Password</span>
            </h1>
            <h5 className="text-md text-[rgba(255,255,255,0.5)]">Choose your preferred method</h5>
          </div>

          {/* Tab Navigation */}
          <div className="flex mb-6 bg-gray-800 rounded-lg p-1">
            <button
              onClick={() => setActiveTab("oldPassword")}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${activeTab === "oldPassword"
                ? "bg-[#2A9F8D] text-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              With Old Password
            </button>
            <button
              onClick={() => setActiveTab("email")}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-all ${activeTab === "email"
                ? "bg-[#2A9F8D] text-white"
                : "text-gray-400 hover:text-white"
                }`}
            >
              Via Email
            </button>
          </div>

          {/* Old Password Tab */}
          {activeTab === "oldPassword" && (
            <form onSubmit={handleOldPasswordSubmit} className="space-y-6">
              {successMsg && (
                <div className="w-full bg-green-600 text-white text-center py-2 rounded mb-2 animate-fade-in">
                  {successMsg}
                </div>
              )}
              {/* Email field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={oldPasswordForm.email}
                  onChange={handleOldPasswordInputChange}
                  placeholder="Enter your registered email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:border-transparent transition-all"
                />
              </div>

              {/* Old Password field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Current Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.oldPassword ? "text" : "password"}
                    name="oldPassword"
                    value={oldPasswordForm.oldPassword}
                    onChange={handleOldPasswordInputChange}
                    placeholder="Enter your current password"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:border-transparent transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("oldPassword")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <PasswordIcon show={showPasswords.oldPassword} />
                  </button>
                </div>
              </div>


              {/* New Password field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.newPassword ? "text" : "password"}
                    name="newPassword"
                    value={oldPasswordForm.newPassword}
                    onChange={handleNewPasswordChange}
                    placeholder="Enter your new password"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:border-transparent transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("newPassword")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <PasswordIcon show={showPasswords.newPassword} />
                  </button>
                </div>
              </div>

              {/* Confirm Password field */}
              <div>
                <label className="block text-white text-sm font-medium mb-2">
                  Confirm New Password
                </label>
                <div className="relative">
                  <input
                    type={showPasswords.confirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={oldPasswordForm.confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    placeholder="Confirm your new password"
                    required
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:border-transparent transition-all pr-12"
                  />
                  <button
                    type="button"
                    onClick={() => togglePasswordVisibility("confirmPassword")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    <PasswordIcon show={showPasswords.confirmPassword} />
                  </button>
                </div>
                {!passwordsMatch && (
                  <div className="text-red-500 text-xs mt-2">New passwords do not match</div>
                )}
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-[#2A9F8D] hover:bg-[#3DD3BC] cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                {isLoading ? "Changing Password..." : "Change Password"}
              </button>
            </form>
          )}

          {/* Email Tab */}
          {activeTab === "email" && (
            <div className="space-y-6">
              {!emailSent ? (
                <div onSubmit={handleEmailSubmit} className="space-y-6">
                  <div className="text-center text-gray-400 text-sm mb-4">
                    We'll send you a password reset link to your email address
                  </div>

                  {/* Email field */}
                  <div>
                    <label className="block text-white text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={emailForm.email}
                      onChange={handleEmailInputChange}
                      placeholder="Enter your registered email"
                      required
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:border-transparent transition-all"
                    />
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    onClick={handleEmailSubmit}
                    className="w-full bg-[#2A9F8D] hover:bg-[#3DD3BC] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:ring-offset-2 focus:ring-offset-gray-900"
                  >
                    {isLoading ? "Sending Email..." : "Send Reset Email"}
                  </button>
                </div>
              ) : (
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-[#2A9F8D] rounded-full flex items-center justify-center mx-auto">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-white text-lg font-medium">Email Sent!</h3>
                  <p className="text-gray-400 text-sm">
                    We've sent a password reset link to <span className="text-[#2A9F8D]">{emailForm.email}</span>
                  </p>

                </div>
              )}
            </div>
          )}

          {/* Back to login link */}
          <div className="text-center mt-6">
            <span className="text-gray-400 text-sm">
              Remember your password?{" "}
            </span>
            <button
              className="text-[#2A9F8D] hover:text-[#3DD3BC] text-sm font-medium transition-colors cursor-pointer"
              onClick={() => navigate("/auth/login")}
            >
              Back to Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}