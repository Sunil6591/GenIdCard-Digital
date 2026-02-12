export default function Trust() {
  const trustPoints = [
    "Built for schools & organizations",
    "Your data stays with you",
    "No ads. No data selling.",
    "Audit-friendly & print-safe workflows",
  ];

  return (
    <section className="py-20 px-4 bg-primary-50/95">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Trust & Security
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {trustPoints.map((point, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-primary-600"
            >
              <p className="text-lg text-gray-700 font-medium">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

