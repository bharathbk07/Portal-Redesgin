'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Icons - replace with a proper icon library in a real app
const CheckCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
  </svg>
);
const ExclamationCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => ( // Used for error/warning
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path>
  </svg>
);
const InformationCircleIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path>
  </svg>
);

const XMarkIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);


export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export interface ToastProps {
  id: string; // Required by a toast manager
  variant?: ToastVariant;
  title?: string;
  message: string;
  duration?: number; // Duration in ms, 0 for persistent
  onDismiss?: (id: string) => void;
  isVisible?: boolean; // Controlled by the Toast Manager
}

const Toast: React.FC<ToastProps> = ({
  id,
  variant = 'info',
  title,
  message,
  duration = 5000,
  onDismiss,
  isVisible = true, // Default to true for standalone use, but manager controls this
}) => {
  useEffect(() => {
    if (duration && duration > 0 && onDismiss) {
      const timer = setTimeout(() => {
        onDismiss(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onDismiss]);

  const variantStyles = {
    info: {
      base: "bg-primary-DEFAULT/10 dark:bg-primary-dark/20 border-primary-DEFAULT/50 dark:border-primary-dark/50",
      iconColor: "text-primary-DEFAULT dark:text-primary-dark",
      icon: <InformationCircleIcon />,
    },
    success: {
      base: "bg-success-DEFAULT/10 dark:bg-success-dark/20 border-success-DEFAULT/50 dark:border-success-dark/50",
      iconColor: "text-success-DEFAULT dark:text-success-dark",
      icon: <CheckCircleIcon />,
    },
    warning: {
      base: "bg-warning-DEFAULT/10 dark:bg-warning-dark/20 border-warning-DEFAULT/50 dark:border-warning-dark/50",
      iconColor: "text-warning-DEFAULT dark:text-warning-dark", // Text color on warning might need adjustment
      icon: <ExclamationCircleIcon />,
    },
    error: {
      base: "bg-error-DEFAULT/10 dark:bg-error-dark/20 border-error-DEFAULT/50 dark:border-error-dark/50",
      iconColor: "text-error-DEFAULT dark:text-error-dark",
      icon: <ExclamationCircleIcon />,
    },
  };

  const selectedVariant = variantStyles[variant];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          layout // Animate layout changes (e.g. when other toasts are removed)
          initial={{ opacity: 0, y: 50, scale: 0.3 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
          className={`w-full max-w-sm rounded-md shadow-lg pointer-events-auto border ${selectedVariant.base} bg-background-light dark:bg-neutral-dark`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className={`flex-shrink-0 ${selectedVariant.iconColor}`}>
                {selectedVariant.icon}
              </div>
              <div className="ml-3 w-0 flex-1">
                {title && (
                  <p className="text-sm font-medium text-foreground-light dark:text-foreground-dark">
                    {title}
                  </p>
                )}
                <p className={`text-sm ${title ? 'mt-1' : ''} text-foreground-light/80 dark:text-foreground-dark/80`}>
                  {message}
                </p>
              </div>
              {onDismiss && (
                <div className="ml-4 flex-shrink-0 flex">
                  <button
                    type="button"
                    onClick={() => onDismiss(id)}
                    className="inline-flex rounded-md text-foreground-light/60 dark:text-foreground-dark/60 hover:text-foreground-light dark:hover:text-foreground-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-DEFAULT dark:focus:ring-primary-dark"
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon />
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;

// Conceptual ToastProvider and useToast hook (not fully implemented here):
//
// 1. Toast Context/Store (e.g., using Zustand or React Context):
//    - State: `toasts: ToastProps[]`
//    - Actions:
//      - `addToast(toast: Omit<ToastProps, 'id' | 'isVisible'>)`: Generates an ID, adds to state.
//      - `dismissToast(id: string)`: Removes toast from state.
//
// 2. ToastProvider Component:
//    - Wraps the application (or part of it).
//    - Holds the toast state.
//    - Renders a `ToastContainer` component.
//
// 3. ToastContainer Component:
//    - Fixed position (e.g., top-right).
//    - Maps over the `toasts` from the store/context.
//    - Renders a `<Toast />` component for each toast object, passing props and `onDismiss`.
//    - Manages the `isVisible` prop for animations if needed, or Toast handles its own animation based on presence in the array.
//
// 4. useToast Hook:
//    - `const { addToast, dismissToast } = useToast();`
//    - Provides access to `addToast` and `dismissToast` actions.
//
// Example useToast call:
//   `addToast({ title: 'Success!', message: 'Profile updated.', variant: 'success' });`
//
// The current Toast.tsx is designed to be compatible with such a system.
// The `isVisible` prop is a placeholder for how a manager might control it.
// The `AnimatePresence` and `motion.div` in Toast.tsx will work when items are added/removed
// from a list rendered by a `ToastContainer`.
// The `useEffect` for `duration` handles auto-dismissal.
// A manager would typically call `onDismiss(id)` which then removes it from the central state.
//
// Directory structure might be:
// src/components/ui/Toast.tsx (this file)
// src/components/Toaster.tsx (would be the ToastContainer, renders multiple Toasts)
// src/hooks/useToast.ts (the hook)
// src/store/toastStore.ts (if using Zustand for state management)
// And then the Toaster component would be placed in the main app layout.
//
// For this subtask, only Toast.tsx is implemented.
//
// End of conceptual description.
