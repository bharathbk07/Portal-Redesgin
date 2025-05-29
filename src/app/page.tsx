import { redirect } from 'next/navigation';

export default function RootPage() {
  redirect('/dashboard');
  // Note: redirect() must be called a Server Component or Server Action.
  // This component is a Server Component by default.
  // It should not return any JSX if redirecting.
}
