import React from 'react';
import { CheckCircle2, Info, X } from 'lucide-react';
import { useToast } from '../context/ToastContext';

export const ToastContainer = () => {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed z-50 pointer-events-none top-20 left-4 right-4 sm:top-auto sm:bottom-5 sm:left-5 sm:right-auto sm:max-w-md space-y-3">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className="pointer-events-auto flex items-center justify-between p-4 rounded-2xl bg-[#1c192c] text-white border border-[#845ec2]/50 shadow-2xl backdrop-blur-lg animate-fade-in"
        >
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-[#25D366]/20 flex items-center justify-center text-[#25D366] shrink-0">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <p className="font-['Plus_Jakarta_Sans'] text-xs sm:text-sm font-medium text-[#e6dffa]">
              {toast.message}
            </p>
          </div>

          <button
            onClick={() => removeToast(toast.id)}
            className="p-1 text-[#cbc4d3] hover:text-white transition-colors ml-3"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};
