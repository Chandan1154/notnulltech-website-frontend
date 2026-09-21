export default function TechCard({ icon: Icon, title, description, accent = "#2563EB" }) {
  return (
    <div
      className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
      onMouseEnter={(e) => (e.currentTarget.style.borderColor = accent)}
      onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
    >
      <div
        className="mb-5 flex h-16 w-16 items-center justify-center rounded-xl"
        style={{ backgroundColor: `${accent}1A` }}
      >
        <Icon size={30} color={accent} strokeWidth={2} />
      </div>

      <h3 className="mb-3 text-xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="leading-relaxed text-gray-600">
        {description}
      </p>
    </div>
  );
}