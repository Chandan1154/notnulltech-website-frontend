import {
  Rocket,
  Target,
  Eye,
  Sparkles,
  Brain,
  Globe,
  ShieldCheck,
  Users,
} from "lucide-react";

import CTASection from "../components/CTASection";

const values = [
  {
    icon: <Sparkles size={30} />,
    title: "Innovation",
    description:
      "We embrace AI-first thinking to build products that solve meaningful real-world problems.",
  },
  {
    icon: <ShieldCheck size={30} />,
    title: "Integrity",
    description:
      "Trust, transparency, privacy and security are at the heart of every product we create.",
  },
  {
    icon: <Users size={30} />,
    title: "People First",
    description:
      "Technology should empower people—not replace them. Every experience is designed around users.",
  },
  {
    icon: <Globe size={30} />,
    title: "Global Impact",
    description:
      "Our ambition is to create AI products that positively impact millions of people worldwide.",
  },
];

const stats = [
  {
    value: "4",
    label: "AI Products",
  },
  {
    value: "AI",
    label: "Company First",
  },
  {
    value: "100%",
    label: "Product Driven",
  },
  {
    value: "∞",
    label: "Innovation",
  },
];

export default function About() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-32 text-white">
        <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl"></div>
        <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl"></div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-blue-300">
            About NotNullTech
          </span>

          <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
            Engineering AI That
            <span className="text-blue-400"> Creates Real Impact</span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-300">
            NotNullTech is an AI-first technology company building intelligent
            digital products that empower creators, professionals, families and
            digital citizens through modern software engineering and artificial
            intelligence.
          </p>
        </div>
      </section>

      {/* Story */}

      <section className="bg-white py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex rounded-2xl bg-blue-100 p-4 text-blue-700">
              <Rocket size={34} />
            </div>

            <h2 className="text-4xl font-bold text-slate-900">
              Our Story
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We founded NotNullTech with one vision: build AI products that
              solve real-world challenges instead of creating technology for the
              sake of technology.
            </p>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Every platform we create is designed with scalability,
              simplicity, security and meaningful user experiences at its core.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <Target className="text-blue-600" size={34} />

              <h3 className="mt-5 text-2xl font-bold">
                Our Mission
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Build innovative AI platforms that improve everyday life,
                simplify work, and unlock new possibilities for businesses and
                individuals.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <Eye className="text-blue-600" size={34} />

              <h3 className="mt-5 text-2xl font-bold">
                Our Vision
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Become a globally recognized AI product company delivering
                intelligent software trusted by millions of users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-slate-200 bg-white p-10 text-center shadow-sm"
              >
                <div className="text-5xl font-extrabold text-blue-700">
                  {stat.value}
                </div>

                <div className="mt-3 text-slate-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Ecosystem */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Product Ecosystem
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              Our AI Platforms
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "StoryForge",
              "JobMacha",
              "BuddyChef",
              "GarvIndia",
            ].map((product) => (
              <div
                key={product}
                className="rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <Brain className="mx-auto text-blue-600" size={40} />

                <h3 className="mt-5 text-2xl font-bold">
                  {product}
                </h3>

                <p className="mt-3 text-slate-600">
                  AI-powered platform built by NotNullTech.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Our Values
            </p>

            <h2 className="mt-5 text-5xl font-bold">
              What Drives Us
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="inline-flex rounded-xl bg-blue-100 p-4 text-blue-700">
                  {value.icon}
                </div>

                <h3 className="mt-6 text-2xl font-bold">
                  {value.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}