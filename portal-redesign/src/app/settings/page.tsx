'use client'; // Using MainLayout

import MainLayout from '@/layouts/MainLayout'; // Adjust path as needed
import React from 'react';

export default function SettingsPage() {
  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark">
        Settings
      </h1>
      <p className="mt-2 text-foreground-light/80 dark:text-foreground-dark/80">
        Application and user settings will be managed here.
      </p>
    </MainLayout>
  );
}
