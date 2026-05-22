import Link from "next/link";
export const metadata = {
  title: "404 — Page Not Found",
  description: "The page you are looking for does not exist on DocAppoint.",
};
export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-blue-600 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">
          Page Not Found
        </h2>
        <p className="text-gray-500 text-base mb-8 max-w-md mx-auto">
          The page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="bg-blue-600 text-white font-bold text-sm px-8 py-3.5 rounded-xl hover:bg-blue-700 transition-all duration-200"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
