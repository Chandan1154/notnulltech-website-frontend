const stats = [
  {
    value: "4",
    label: "AI Products",
  },
  {
    value: "100%",
    label: "AI First",
  },
  {
    value: "24/7",
    label: "Innovation",
  },
  {
    value: "Global",
    label: "Vision",
  },
];

export default function StatsSection() {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 md:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.label}
            className="text-center"
          >
            <h2 className="text-5xl font-bold">
              {item.value}
            </h2>

            <p className="mt-3 text-blue-100">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}