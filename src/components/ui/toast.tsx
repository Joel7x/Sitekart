import React, { useEffect } from 'react';

export type ToastType = 'success' | 'error' | 'info';

export interface ToastProps {
  message: string;
  type?: ToastType;
  onClose?: () => void;
  duration?: number;
}

export const Toast: React.FC<ToastProps> = ({ message, type = 'info', onClose, duration = 4000 }) => {
  useEffect(() => {
    if (!onClose) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  let bg = 'backdrop-blur-md bg-white/70 border border-green-200 shadow-2xl';
  let iconColor = 'text-green-600';
  let textColor = 'text-green-800';
  if (type === 'success') {
    bg = 'backdrop-blur-md bg-gradient-to-r from-green-200 via-green-100 to-white/80 border border-green-300 shadow-2xl';
    iconColor = 'text-green-600';
    textColor = 'text-green-800 font-semibold';
  }
  if (type === 'error') {
    bg = 'backdrop-blur-md bg-gradient-to-r from-red-200 via-red-100 to-white/80 border border-red-300 shadow-2xl';
    iconColor = 'text-red-500';
    textColor = 'text-red-700 font-semibold';
  }
  if (type === 'info') {
    bg = 'backdrop-blur-md bg-gradient-to-r from-blue-200 via-blue-100 to-white/80 border border-blue-300 shadow-2xl';
    iconColor = 'text-blue-500';
    textColor = 'text-blue-700 font-semibold';
  }

  return (
    <div
      className={`fixed top-8 right-8 z-[100] px-7 py-4 rounded-2xl text-base font-medium flex items-center gap-4 animate-fade-in-up ${bg}`}
      style={{backdropFilter: 'blur(12px)'}}
      role="alert"
    >
      {type === 'success' && (
        <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="white"/><path strokeLinecap="round" strokeLinejoin="round" d="M7 13l3 3 7-7" stroke="currentColor" strokeWidth="2.5"/></svg>
      )}
      {type === 'error' && (
        <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="white"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 9l-6 6M9 9l6 6" stroke="currentColor" strokeWidth="2.5"/></svg>
      )}
      {type === 'info' && (
        <svg className={`w-6 h-6 ${iconColor}`} fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2.5" fill="white"/><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01" stroke="currentColor" strokeWidth="2.5"/></svg>
      )}
      <span className={textColor}>{message}</span>
    </div>
  );
};

// Tailwind animation (add to global CSS if not present):
// @keyframes fade-in-up { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
// .animate-fade-in-up { animation: fade-in-up 0.4s ease; } 