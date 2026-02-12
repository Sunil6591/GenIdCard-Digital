export default function WhoItsFor() {
  const cards = [
    {
      title: "Schools & Colleges",
      description: "Generate student and staff ID cards with photos, enrollment details, and institutional branding.",
    },
    {
      title: "Corporates",
      description: "Create employee ID cards with company logos, department information, and access control features.",
    },
    {
      title: "Printers",
      description: "Receive print-ready PDFs with perfect alignment, ensuring zero reprints and maximum efficiency.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Who It&apos;s For
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

