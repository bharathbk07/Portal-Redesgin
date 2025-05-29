'use client';

import { useThemeStore } from '@/store/useThemeStore'; // Assuming @ is configured for src
import { useEffect, useState } from 'react';

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useThemeStore();
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before rendering UI that depends on theme
  // to avoid hydration mismatch if localStorage theme differs from default
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Render a placeholder or null until mounted to prevent hydration mismatch
    // Or render a default button that doesn't show the current theme state
    return <button className="p-2 rounded bg-neutral-light dark:bg-neutral-dark text-neutral-foreground dark:text-neutral-darkForeground">...</button>;
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded bg-primary-DEFAULT dark:bg-primary-dark text-primary-foreground hover:bg-opacity-80 transition-colors"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        // Placeholder for a Sun icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-15.66l-.707.707M4.04 19.96l-.707.707M21 12h-1M4 12H3m15.66 8.66l-.707-.707M4.747 4.747l-.707-.707M12 5.5A6.5 6.5 0 1018.5 12 6.507 6.507 0 0012 5.5z" />
        </svg>
      ) : (
        // Placeholder for a Moon icon
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      )}
    </button>
  );
}
