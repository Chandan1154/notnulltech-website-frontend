import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-28 text-white">
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-80 w-80 rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Badge */}
        <span className="inline-flex rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
          Let's Build Together
        </span>

        {/* Heading */}
        <h2 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
          Build the Future with
          <span className="text-blue-400"> NotNullTech</span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-300">
          Whether you're looking for AI-powered products, strategic technology
          partnerships, or innovative digital solutions, we're here to help turn
          ideas into reality.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">
          <Link
            to="/contact"
            className="group flex items-center rounded-xl bg-blue-600 px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-blue-500/40"
          >
            Contact Us
            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          <Link
            to="/products"
            className="group flex items-center rounded-xl border border-slate-500 bg-white/5 px-8 py-4 font-semibold backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-400 hover:bg-white/10"
          >
            Explore Products
            <ArrowRight
              size={18}
              className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 grid gap-8 border-t border-slate-800 pt-12 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-bold text-blue-400">4</h3>
            <p className="mt-2 text-slate-400">AI Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">AI</h3>
            <p className="mt-2 text-slate-400">First Company</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-blue-400">24×7</h3>
            <p className="mt-2 text-slate-400">Innovation</p>
          </div>
        </div>
      </div>
    </section>
  );
}