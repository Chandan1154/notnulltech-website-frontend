import { Globe, Smartphone, Apple, ExternalLink } from "lucide-react";

export default function ProductCard({
  logo,
  name,
  category,
  description,
  status,
  accent,
  features = [],
  website,
  android,
  ios,
}) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-3 hover:shadow-2xl">
      {/* Top Gradient */}
      <div
        className="absolute left-0 top-0 h-1.5 w-full"
        style={{
          background: `linear-gradient(90deg, ${accent}, transparent)`,
        }}
      />

      {/* Background Glow */}
      <div
        className="absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-10 blur-3xl"
        style={{ background: accent }}
      />

      {/* Status */}
      <div className="mb-8 flex justify-end">
        <span className="flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-700">
          <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
          {status}
        </span>
      </div>

      {/* Logo */}
      <div className="flex justify-center">
        <img
          src={logo}
          alt={name}
          className="h-28 object-contain transition-all duration-500 group-hover:scale-110"
        />
      </div>

      {/* Category */}
      <div className="mt-8 flex justify-center">
        <span
          className="rounded-full px-4 py-1 text-xs font-semibold"
          style={{
            backgroundColor: `${accent}20`,
            color: accent,
          }}
        >
          {category}
        </span>
      </div>

      {/* Title */}
      <h3 className="mt-5 text-center text-3xl font-bold tracking-tight text-slate-900">
        {name}
      </h3>

      {/* Description */}
      <p className="mt-5 text-center leading-7 text-slate-600">
        {description}
      </p>

      {/* Divider */}
      <div className="my-8 border-t border-slate-100" />

      {/* Features */}
      <div className="flex flex-wrap justify-center gap-2">
        {features.map((feature) => (
          <span
            key={feature}
            className="rounded-full px-3 py-1 text-xs font-medium"
            style={{
              backgroundColor: `${accent}15`,
              color: accent,
            }}
          >
            ✓ {feature}
          </span>
        ))}
      </div>

      <div className="flex-grow" />

      {/* CTA */}
      <div className="mt-10 space-y-3">
        {/* Website */}
        <a
          href={website || "#"}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white transition-all duration-300 ${
            website
              ? "hover:-translate-y-0.5 hover:shadow-lg"
              : "cursor-not-allowed opacity-60"
          }`}
          style={{ backgroundColor: accent }}
        >
          <Globe size={18} />
          Open Website
          <ExternalLink size={16} />
        </a>

        {/* Mobile Apps */}
        <div className="grid grid-cols-2 gap-3">
          <a
            href={android || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 rounded-xl border py-3 font-medium transition-all duration-300 ${
              android
                ? "border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                : "cursor-not-allowed border-slate-200 opacity-60"
            }`}
          >
            <Smartphone size={18} />
            Android
          </a>

          <a
            href={ios || "#"}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center justify-center gap-2 rounded-xl border py-3 font-medium transition-all duration-300 ${
              ios
                ? "border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
                : "cursor-not-allowed border-slate-200 opacity-60"
            }`}
          >
            <Apple size={18} />
            iOS
          </a>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div
        className="absolute bottom-0 left-0 h-1 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `linear-gradient(90deg, ${accent}, transparent)`,
        }}
      />
    </div>
  );
}