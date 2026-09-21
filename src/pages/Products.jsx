import ProductCard from "../components/ProductCard";
import products from "../data/products";

export default function Products() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-28">
      {/* Background decoration */}
      <div className="absolute -left-20 top-0 h-96 w-96 rounded-full bg-blue-100 opacity-30 blur-3xl" />
      <div className="absolute -right-20 bottom-0 h-96 w-96 rounded-full bg-violet-100 opacity-30 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700">
            Our Product Ecosystem
          </span>

          <h2 className="mt-6 text-5xl font-extrabold tracking-tight text-slate-900">
            AI Products Built for the Future
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            At NotNullTech, we're building intelligent AI platforms that empower
            creators, professionals, families, and digital citizens through
            practical, human-centered technology.
          </p>
        </div>

        {/* Products Grid */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {products.map((product) => (
            <ProductCard key={product.slug} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}