'use client';

import React, { useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './Card'; // Use our Card component
import Button from './Button'; // Use our Button component

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  footerContent?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlayClick?: boolean;
  showCloseButton?: boolean;
}

const ModalCloseButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="absolute top-3 right-3 text-foreground-light/70 dark:text-foreground-dark/70 hover:text-foreground-light dark:hover:text-foreground-dark transition-colors"
    aria-label="Close modal"
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  </button>
);

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  footerContent,
  size = 'md',
  closeOnOverlayClick = true,
  showCloseButton = true,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
      modalRef.current?.focus(); // Focus the modal content when opened
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen, onClose]);

  const sizeClasses: Record<typeof size, string> = {
    sm: 'max-w-sm',
    md: 'max-w-md',
    lg: 'max-w-lg',
    xl: 'max-w-xl',
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
          onClick={closeOnOverlayClick ? onClose : undefined}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? 'modal-title' : undefined}
          tabIndex={-1} // Make the overlay itself not focusable initially but allow JS focus
        >
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className={`w-full ${sizeClasses[size]}`}
            onClick={(e) => e.stopPropagation()} // Prevent click from bubbling to overlay
            tabIndex={0} // Make modal content focusable
          >
            <Card className="overflow-hidden shadow-2xl">
              {title && (
                <CardHeader className="relative">
                  <CardTitle id="modal-title">{title}</CardTitle>
                  {showCloseButton && <ModalCloseButton onClick={onClose} />}
                </CardHeader>
              )}
              {!title && showCloseButton && <ModalCloseButton onClick={onClose} /> }
              
              <CardContent className={title ? 'pt-4' : 'pt-6'}>
                {children}
              </CardContent>
              
              {footerContent && (
                <CardFooter>
                  {footerContent}
                </CardFooter>
              )}
            </Card>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
