import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import StatsSection from "../components/StatsSection";
import CTASection from "../components/CTASection";

import products from "../data/products";

export default function Home() {
  return (
    <>
      <Hero />

      <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28">
        {/* Decorative Background */}
        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-blue-100 opacity-30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-100 opacity-30 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.35em] text-blue-600">
              WHAT WE'RE BUILDING
            </p>

            <h2 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-900">
              AI Products for the Future
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We build intelligent AI platforms that empower creators,
              professionals, families, and digital citizens through meaningful
              technology.
            </p>
          </div>

          <div className="mt-20 grid gap-8 lg:grid-cols-2">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </section>

      <StatsSection />

      <CTASection />
    </>
  );
}