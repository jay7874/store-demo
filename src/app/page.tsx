import Link from 'next/link';

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto text-center py-12">
      <h1 className="text-4xl font-bold mb-6">Welcome to V Report</h1>
      <p className="text-xl mb-8">Saved payment videos by area and genre</p>
      <div className="space-x-4">
        <Link href="/profile" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          View Profile
        </Link>
        <Link href="/stores/123" className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300">
          Example Store
        </Link>
      </div>
    </div>
  );
}