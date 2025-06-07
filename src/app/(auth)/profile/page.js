'use client';
import ProtectedRoute from '@/components/ProtectedRoute';
import { useAuth } from '@/components/AuthContext';

export default function Profile() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">User Profile</h2>
        <div className="space-y-4">
          <div>
            <p className="text-gray-600">Name:</p>
            <p className="font-medium">{user?.name}</p>
          </div>
          <div>
            <p className="text-gray-600">Email:</p>
            <p className="font-medium">{user?.email}</p>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
}