import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] flex-col items-center justify-center px-6 text-center">
      <h1 className="text-8xl font-bold text-blue-600">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-semibold">
        Page Not Found
      </h2>

      <p className="mt-4 text-gray-600">
        Sorry, the page you're looking for doesn't exist.
      </p>

      <Link
        to="/"
        className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </section>
  );
}