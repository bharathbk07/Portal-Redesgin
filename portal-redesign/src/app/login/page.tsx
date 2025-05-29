'use client'; // Using AuthLayout which has ThemeSwitcher (client component)

import AuthLayout from '@/layouts/AuthLayout'; // Adjust path as needed
import React from 'react';

export default function LoginPage() {
  return (
    <AuthLayout title="Sign In">
      <div className="space-y-4">
        <h1 className="text-2xl font-bold text-center text-foreground-light dark:text-foreground-dark">
          Login Page Content
        </h1>
        <p className="text-center text-sm text-foreground-light/70 dark:text-foreground-dark/70">
          (Authentication form will go here)
        </p>
        {/* Example of how footerContent could be used in AuthLayout */}
        {/* For actual links, you'd use Next.js <Link> components */}
        {/* <div className="text-sm text-center">
          <a href="#" className="font-medium text-primary-DEFAULT hover:underline dark:text-primary-dark">
            Forgot your password?
          </a>
        </div>
        <div className="text-sm text-center">
          <p>
            Don&apos;t have an account?{' '}
            <a href="#" className="font-medium text-primary-DEFAULT hover:underline dark:text-primary-dark">
              Sign up
            </a>
          </p>
        </div> */}
      </div>
    </AuthLayout>
  );
}
