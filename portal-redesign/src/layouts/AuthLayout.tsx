import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/Card'; // Adjust path
import ThemeSwitcher from '@/components/ui/ThemeSwitcher'; // Adjust path

interface AuthLayoutProps {
  children: React.ReactNode;
  title?: string;
  footerContent?: React.ReactNode; // For links like "Forgot password?" or "Sign up"
}

const AuthLayout: React.FC<AuthLayoutProps> = ({ children, title, footerContent }) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-neutral-DEFAULT/30 dark:bg-neutral-dark/30 p-4 sm:p-6 lg:p-8 text-foreground-light dark:text-foreground-dark">
      <div className="absolute top-4 right-4">
        <ThemeSwitcher />
      </div>
      <Card className="w-full max-w-md shadow-xl">
        {title && (
          <CardHeader>
            <CardTitle className="text-2xl text-center">{title}</CardTitle>
          </CardHeader>
        )}
        <CardContent className={title ? "pt-4" : "pt-6"}> {/* Adjust padding if no title */}
          {children}
        </CardContent>
        {footerContent && (
          <CardFooter className="flex flex-col items-center space-y-2 pt-4">
            {footerContent}
          </CardFooter>
        )}
      </Card>
       <footer className="mt-8 text-center text-sm text-foreground-light/70 dark:text-foreground-dark/70">
        <p>&copy; {new Date().getFullYear()} PortalApp. All rights reserved.</p>
        <p>
          <a href="#" className="hover:underline">Privacy Policy</a> | <a href="#" className="hover:underline">Terms of Service</a>
        </p>
      </footer>
    </div>
  );
};

export default AuthLayout;
