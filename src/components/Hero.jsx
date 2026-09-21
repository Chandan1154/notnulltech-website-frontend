import { Link } from "react-router-dom";
import heroLogo from "../assets/logos/notnulltech-hero.png"; // your large logo

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background Blur */}
      <div className="absolute -left-32 top-10 h-80 w-80 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-cyan-200/20 blur-3xl"></div>

      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* Left Content */}
        <div>

          <div className="mb-6 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
            🚀 Building Intelligent AI Solutions
          </div>

          <h1 className="text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl">
            Building AI-powered{" "}
            <span className="text-blue-700">
              products
            </span>{" "}
            for the future.
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-8 text-gray-600">
            Creating intelligent platforms that connect,
            create, learn, and transform experiences.
            We build scalable AI products for businesses,
            developers, and millions of users.
          </p>

          <div className="mt-10 flex flex-wrap gap-5">

            <Link
              to="/products"
              className="rounded-xl bg-blue-700 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-800"
            >
              Explore Products →
            </Link>

            <Link
              to="/about"
              className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition hover:border-blue-700 hover:text-blue-700"
            >
              Learn More
            </Link>

          </div>

        </div>
        {/* Right Illustration */}
        <div className="relative flex justify-center">

          <div className="absolute h-80 w-80 rounded-full bg-blue-200 opacity-30 blur-3xl"></div>

          <img
            src={heroLogo}
            alt="NotNullTech"
            className="relative w-[500px] drop-shadow-2xl transition duration-500 hover:scale-105"
          />

        </div>

      </div>
    </section>
  );
}