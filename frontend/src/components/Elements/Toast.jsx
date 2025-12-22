import React, { useEffect } from 'react';
import { X, CheckCircle, AlertCircle } from 'lucide-react';

export default function Toast({ message, type = 'info', onClose, duration = 5000 }) {
    useEffect(() => {
        if (duration) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [duration, onClose]);

    if (!message) return null;

    const styles = {
        success: 'bg-green-500/10 border-green-500/50 text-green-400',
        error: 'bg-red-500/10 border-red-500/50 text-red-400',
        info: 'bg-blue-500/10 border-blue-500/50 text-blue-400',
    };

    const icons = {
        success: <CheckCircle className="w-5 h-5 flex-shrink-0" />,
        error: <AlertCircle className="w-5 h-5 flex-shrink-0" />,
        info: <AlertCircle className="w-5 h-5 flex-shrink-0" />,
    };

    return (
        <div className={`fixed top-6 right-6 z-50 flex items-center gap-3 px-4 py-3 rounded-xl border backdrop-blur-md shadow-2xl animate-in slide-in-from-top-2 fade-in duration-300 ${styles[type] || styles.info}`}>
            {icons[type]}
            <p className="text-sm font-medium pr-2">{message}</p>
            <button
                onClick={onClose}
                className="p-1 hover:bg-white/10 rounded-full transition-colors"
            >
                <X className="w-4 h-4" />
            </button>
        </div>
    );
}
