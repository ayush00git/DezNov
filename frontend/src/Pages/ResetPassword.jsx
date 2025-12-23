import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from 'react-router-dom';
import api from '../services/api';
import Toast from '../components/Elements/Toast';

export default function ResetPassword() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get('token');

    const [formData, setFormData] = useState({
        newPassword: "",
        confirmPassword: ""
    });

    const [showPasswords, setShowPasswords] = useState({
        newPassword: false,
        confirmPassword: false
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [isLoading, setIsLoading] = useState(false);
    const [toast, setToast] = useState({ message: '', type: '' });

    useEffect(() => {
        if (!token) {
            showToast("Invalid or missing token", "error");
            setTimeout(() => navigate('/auth/login'), 3000);
        }
    }, [token, navigate]);

    const showToast = (message, type = 'info') => {
        setToast({ message, type });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Live validation
        if (name === 'confirmPassword') {
            setPasswordsMatch(value === formData.newPassword);
        } else if (name === 'newPassword') {
            setPasswordsMatch(formData.confirmPassword === "" || value === formData.confirmPassword);
        }
    };

    const togglePasswordVisibility = (field) => {
        setShowPasswords({
            ...showPasswords,
            [field]: !showPasswords[field]
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            showToast("Missing token", "error");
            return;
        }
        if (formData.newPassword !== formData.confirmPassword) {
            setPasswordsMatch(false);
            showToast("Passwords do not match", "error");
            return;
        }
        if (formData.newPassword.length < 6) {
            showToast("Password must be at least 6 characters", "error");
            return;
        }

        setIsLoading(true);

        try {
            // API call to backend
            // Backend expects: POST /auth/change-password?token=...
            // Body: { newPassword }
            const response = await api.post(`/auth/change-password?token=${token}`, {
                newPassword: formData.newPassword
            });

            if (response.status === 200) {
                showToast("Password reset successfully! Redirecting...", "success");
                setTimeout(() => {
                    navigate('/auth/login');
                }, 2000);
            }
        } catch (error) {
            const msg = error.response?.data?.message || "Failed to reset password";
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

            <div className="relative z-10 w-full max-w-md mx-4">
                <div className="bg-opacity-90 backdrop-blur-sm rounded-2xl border-2 border-gray-700 p-8 shadow-2xl">
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-light text-white mb-2">
                            Reset Your <span className="text-[#2A9F8D] font-medium">Password</span>
                        </h1>
                        <h5 className="text-md text-[rgba(255,255,255,0.5)]">Enter your new password below</h5>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">

                        {/* New Password */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                New Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPasswords.newPassword ? "text" : "password"}
                                    name="newPassword"
                                    value={formData.newPassword}
                                    onChange={handleInputChange}
                                    placeholder="Enter new password"
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

                        {/* Confirm Password */}
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPasswords.confirmPassword ? "text" : "password"}
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm new password"
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
                                <div className="text-red-500 text-xs mt-2">Passwords do not match</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#2A9F8D] hover:bg-[#3DD3BC] cursor-pointer disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#2a9f8d] focus:ring-offset-2 focus:ring-offset-gray-900"
                        >
                            {isLoading ? "Resetting Password..." : "Reset Password"}
                        </button>
                    </form>

                    <div className="text-center mt-6">
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
