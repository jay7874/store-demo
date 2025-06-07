'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from './AuthContext';

export default function ProtectedRoute({ children }) {
  const { user, openLoginModal } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      openLoginModal('/');
    }
  }, [user, openLoginModal]);

  if (!user) {
    return null; // or loading spinner
  }

  return children;
}
