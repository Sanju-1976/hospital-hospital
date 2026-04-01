import { Link } from 'react-router';
import { ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
      <div className="text-8xl font-bold text-blue-100 mb-4">404</div>
      <h1 className="text-3xl font-bold text-gray-900 mb-3">Page Not Found</h1>
      <p className="text-gray-600 mb-8 max-w-md">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-2 bg-blue-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <ArrowLeft className="size-4" /> Back to Home
      </Link>
    </div>
  );
}
