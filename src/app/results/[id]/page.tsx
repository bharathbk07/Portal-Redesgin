'use client'; // Using MainLayout and accessing params

import MainLayout from '@/layouts/MainLayout'; // Adjust path as needed
import React from 'react';
import { useParams } from 'next/navigation'; // To get dynamic route parameters

export default function ResultViewerPage() {
  const params = useParams();
  const id = params.id; // id will be a string or string[]

  return (
    <MainLayout>
      <h1 className="text-3xl font-bold text-foreground-light dark:text-foreground-dark">
        Test Result Details
      </h1>
      {id && (
        <p className="mt-2 text-foreground-light/80 dark:text-foreground-dark/80">
          Displaying results for Test ID: <span className="font-semibold text-primary-DEFAULT dark:text-primary-dark">{Array.isArray(id) ? id.join('/') : id}</span>
        </p>
      )}
      <p className="mt-1 text-foreground-light/80 dark:text-foreground-dark/80">
        Detailed charts and metrics for the test run will be shown here.
      </p>
    </MainLayout>
  );
}
