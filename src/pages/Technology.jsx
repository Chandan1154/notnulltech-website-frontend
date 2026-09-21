import TechCard from "../components/TechCard";
import {
  Cpu,
  Cloud,
  Globe,
  Smartphone,
  ShieldCheck,
  Workflow,
} from "lucide-react";

const technologies = [
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    description:
      "LLMs, Retrieval-Augmented Generation (RAG), intelligent agents, and custom AI models.",
    accent: "#7C3AED",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "AWS, Azure, GCP, Docker, Kubernetes, scalable microservices.",
    accent: "#0EA5E9",
  },
  {
    icon: Globe,
    title: "Modern Web",
    description:
      "React, Next.js, TypeScript, responsive enterprise applications.",
    accent: "#2563EB",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description:
      "Flutter, Android and iOS experiences built for performance.",
    accent: "#0D9488",
  },
  {
    icon: Workflow,
    title: "Automation",
    description:
      "AI workflows, business automation and intelligent integrations.",
    accent: "#EA580C",
  },
  {
    icon: ShieldCheck,
    title: "Security",
    description:
      "Privacy-first architecture with enterprise-grade security practices.",
    accent: "#1E3A8A",
  },
];

export default function Technology() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-24">
        <div className="absolute -top-20 left-10 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-200/30 blur-3xl"></div>

        <div className="mx-auto max-w-5xl px-6 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            ⚡ Engineering Excellence
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 md:text-6xl">
            Technology That Powers
            <span className="text-blue-700"> Intelligent Products</span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            At NotNullTech, we build cloud-native AI platforms using modern
            engineering practices, scalable architecture, and enterprise-grade
            security.
          </p>
        </div>
      </section>

      {/* Technology Cards */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <TechCard key={tech.title} {...tech} />
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-slate-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-12 text-center text-4xl font-bold">
            Our Technology Stack
          </h2>

          <div className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg">
            <div className="grid divide-y md:grid-cols-2 md:divide-x md:divide-y-0">

              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-700">Frontend</h3>
                <p className="mt-3 text-gray-600">
                  React • Next.js • Flutter • Tailwind CSS
                </p>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-700">Backend</h3>
                <p className="mt-3 text-gray-600">
                  Java • Kotlin • Spring Boot • REST APIs
                </p>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-700">Cloud & DevOps</h3>
                <p className="mt-3 text-gray-600">
                  AWS • Azure • Docker • Kubernetes • CI/CD
                </p>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-blue-700">Artificial Intelligence</h3>
                <p className="mt-3 text-gray-600">
                  LLMs • RAG • AI Agents • Vector Databases
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>
    </>
  );
}