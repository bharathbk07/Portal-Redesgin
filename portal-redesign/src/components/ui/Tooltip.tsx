'use client';

import React, { useState, useRef, ReactNode, cloneElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TooltipProps {
  children: React.ReactElement;
  content: ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delayDuration?: number; // Delay before showing the tooltip
}

const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  delayDuration = 150, //ms
}) => {
  const [visible, setVisible] = useState(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null); // For delay on hover
  const interactionTimeoutRef = useRef<NodeJS.Timeout | null>(null); // For mouse enter/leave on tooltip content itself

  const clearTimeouts = () => {
    if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
    if (interactionTimeoutRef.current) clearTimeout(interactionTimeoutRef.current);
  };

  const showTooltip = () => {
    clearTimeouts();
    hoverTimeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, delayDuration);
  };

  const hideTooltip = () => {
    clearTimeouts();
    // Add a small delay before hiding, allowing mouse to move to tooltip content
    interactionTimeoutRef.current = setTimeout(() => {
      setVisible(false);
    }, 100); 
  };
  
  const handleTooltipContentMouseEnter = () => {
    clearTimeouts(); // Keep tooltip visible if mouse enters its content
  };

  const handleTooltipContentMouseLeave = () => {
    hideTooltip(); // Hide if mouse leaves content
  };

  const getPositionClasses = (): string => {
    switch (position) {
      case 'top':    return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
      case 'bottom': return 'top-full left-1/2 -translate-x-1/2 mt-2';
      case 'left':   return 'right-full top-1/2 -translate-y-1/2 mr-2';
      case 'right':  return 'left-full top-1/2 -translate-y-1/2 ml-2';
      default:       return 'bottom-full left-1/2 -translate-x-1/2 mb-2';
    }
  };

  const triggerElement = cloneElement(children, {
    onMouseEnter: showTooltip,
    onMouseLeave: hideTooltip,
    onFocus: showTooltip,
    onBlur: hideTooltip,
    'aria-describedby': visible ? 'tooltip-content' : undefined,
  });

  return (
    <div className="relative inline-block">
      {triggerElement}
      <AnimatePresence>
        {visible && (
          <motion.div
            id="tooltip-content"
            role="tooltip"
            initial={{ opacity: 0, y: position === 'top' ? 5 : (position === 'bottom' ? -5 : 0) }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: position === 'top' ? 5 : (position === 'bottom' ? -5 : 0), transition: {duration: 0.1} }}
            transition={{ duration: 0.15, delay: 0.05 }}
            className={`absolute z-20 px-2.5 py-1.5 text-xs font-medium whitespace-nowrap rounded-md shadow-sm ${getPositionClasses()} bg-neutral-dark dark:bg-neutral-DEFAULT text-neutral-DEFAULT dark:text-neutral-darkForeground`}
            onMouseEnter={handleTooltipContentMouseEnter}
            onMouseLeave={handleTooltipContentMouseLeave}
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Tooltip;
