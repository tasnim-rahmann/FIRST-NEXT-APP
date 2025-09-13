import Link from "next/link";

export default function NotFoundPage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-6">
            <h1 className="text-[10rem] font-extrabold leading-none text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600 drop-shadow-sm">
                404
            </h1>

            <h2 className="mt-4 text-3xl md:text-4xl font-semibold text-gray-800">
                Oops! Page not found.
            </h2>

            <p className="mt-3 max-w-md text-center text-gray-600">
                The page you’re looking for doesn’t exist or has been moved.
            </p>

            <Link
                href="/"
                className="mt-8 inline-block rounded-full bg-indigo-600 px-6 py-3 text-lg font-medium text-white shadow-lg transition-transform hover:scale-105 hover:bg-indigo-700"
            >
                Go Back Home
            </Link>

            <div className="absolute bottom-6 text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Your Company
            </div>
        </main>
    );
}