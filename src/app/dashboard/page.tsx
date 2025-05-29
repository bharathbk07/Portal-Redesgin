'use client'; // Using MainLayout which has ThemeSwitcher

import MainLayout from '@/layouts/MainLayout'; // Adjust path as needed
import React from 'react';

export default function DashboardPage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark">
        Dashboard
      </h1>
      <p className="mt-2 text-foreground-light/80 dark:text-foreground-dark/80">
        Welcome to your dashboard.
      </p>
    </MainLayout>
  );
}
