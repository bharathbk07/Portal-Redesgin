import React from 'react';
import ThemeSwitcher from '@/components/ui/ThemeSwitcher'; // Adjust path as needed

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  // Placeholder data for sidebar navigation
  const navItems = [
    { name: 'Dashboard', href: '#' },
    { name: 'Analytics', href: '#' },
    { name: 'Users', href: '#' },
    { name: 'Settings', href: '#' },
  ];

  return (
    <div className="flex flex-col h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8 shadow-md bg-background-light dark:bg-neutral-dark border-b border-neutral-DEFAULT/50 dark:border-neutral-dark/50">
        <div className="flex items-center">
          {/* Logo/App Title Placeholder */}
          <div className="text-xl font-bold text-primary-DEFAULT dark:text-primary-dark">
            Portal<span className="text-foreground-light dark:text-foreground-dark">App</span>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeSwitcher />
          {/* User Menu/Avatar Placeholder */}
          <div className="w-8 h-8 bg-secondary-DEFAULT dark:bg-secondary-dark rounded-full flex items-center justify-center text-secondary-foreground">
            <span className="text-sm font-medium">U</span> {/* Placeholder for User Initial or Icon */}
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-16"> {/* pt-16 to offset fixed header */}
        {/* Sidebar */}
        <aside className="fixed top-16 bottom-0 left-0 z-30 w-64 bg-background-light dark:bg-neutral-dark border-r border-neutral-DEFAULT/50 dark:border-neutral-dark/50 shadow-lg overflow-y-auto">
          <nav className="p-4">
            <h3 className="text-xs font-semibold uppercase text-foreground-light/60 dark:text-foreground-dark/60 mb-2">
              Navigation
            </h3>
            <ul>
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="flex items-center px-3 py-2.5 text-sm font-medium rounded-md hover:bg-neutral-DEFAULT/50 dark:hover:bg-neutral-dark/70 transition-colors duration-150"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 ml-64 p-4 sm:p-6 lg:p-8 overflow-y-auto"> {/* ml-64 to offset fixed sidebar */}
          <div className="max-w-7xl mx-auto">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
