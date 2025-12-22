import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import api from '../services/api';
import Toast from '../components/Elements/Toast';
import { CheckCircle, AlertCircle } from 'lucide-react';

export default function VerifyEmail() {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const token = searchParams.get('token');
    const [status, setStatus] = useState('verifying'); // verifying, success, error
    const [message, setMessage] = useState('Verifying your email...');
    const [toast, setToast] = useState({ message: '', type: '' });
    const verifyCalled = React.useRef(false);

    useEffect(() => {
        if (!token) {
            setStatus('error');
            setMessage('Invalid verification link.');
            return;
        }

        if (verifyCalled.current) return;
        verifyCalled.current = true;

        const verifyToken = async () => {
            try {
                const response = await api.get(`/auth/verify-email?token=${token}`);
                setStatus('success');
                setMessage(response.data.message || 'Email verified successfully!');
                setToast({ message: 'Email Verified! Redirecting...', type: 'success' });
                setTimeout(() => navigate('/auth/login'), 3000);
            } catch (error) {
                console.error(error);
                setStatus('error');
                setMessage(error.response?.data?.message || 'Verification failed or expired.');
            }
        };

        verifyToken();
    }, [token, navigate]);

    return (
        <div className="min-h-screen bg-[#0D0E11] flex items-center justify-center relative overflow-hidden text-white">
            <Toast
                message={toast.message}
                type={toast.type}
                onClose={() => setToast({ ...toast, message: '' })}
            />

            <div className="z-10 text-center max-w-md w-full p-8 bg-[#1A1D23]/50 backdrop-blur-xl border border-gray-700 rounded-3xl shadow-2xl">
                <div className="flex justify-center mb-6">
                    {status === 'verifying' && (
                        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#2A9F8D]"></div>
                    )}
                    {status === 'success' && (
                        <div className="bg-green-500/20 p-4 rounded-full">
                            <CheckCircle className="w-16 h-16 text-green-500" />
                        </div>
                    )}
                    {status === 'error' && (
                        <div className="bg-red-500/20 p-4 rounded-full">
                            <AlertCircle className="w-16 h-16 text-red-500" />
                        </div>
                    )}
                </div>

                <h2 className="text-2xl font-bold mb-2">
                    {status === 'verifying' && 'Verifying Email...'}
                    {status === 'success' && 'Email Verified!'}
                    {status === 'error' && 'Verification Failed'}
                </h2>

                <p className="text-gray-400 mb-8">{message}</p>

                {status === 'error' && (
                    <button
                        onClick={() => navigate('/auth/signup')}
                        className="px-6 py-2 bg-[#2A9F8D] hover:bg-[#23876F] rounded-full transition text-white font-medium"
                    >
                        Back to Signup
                    </button>
                )}

                {status === 'success' && (
                    <button
                        onClick={() => navigate('/auth/login')}
                        className="px-6 py-2 bg-[#2A9F8D] hover:bg-[#23876F] rounded-full transition text-white font-medium"
                    >
                        Go to Login
                    </button>
                )}
            </div>
        </div>
    );
}
