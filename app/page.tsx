import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-4xl font-bold text-white mb-8">
        Welcome to Money App
      </h1>
      <div className="flex flex-col space-y-4 w-full max-w-md">
        <Link href="/login">
          <button className="w-full bg-blue-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-blue-600 transition duration-300">
            Log In
          </button>
        </Link>
        <Link href="/signup">
          <button className="w-full bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg hover:bg-green-600 transition duration-300">
            Sign Up
          </button>
        </Link>
      </div>
      <div className="mt-12">
        <div className="w-64 h-64 bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">App Image</span>
        </div>
      </div>
    </main>
  );
}