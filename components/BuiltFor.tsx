import Image from "next/image";

export default function BuiltFor() {
  const exhibitionUseCases = [
    "Trade Shows",
    "Art Exhibitions",
    "Industrial Expos",
    "College Festivals",
  ];

  const exhibitionBenefits = [
    "Track unique vs repeat visitors",
    "Peak hour footfall insights",
    "VIP entry control",
    "Sponsor reporting",
    "Category-based analytics (Visitor / Exhibitor / Media)",
  ];

  const corporateUseCases = [
    "Annual Meets",
    "Conferences",
    "Leadership Summits",
    "HR Townhalls",
    "Offsites",
  ];

  const corporateBenefits = [
    "RSVP + Attendance in one flow",
    "Department participation analytics",
    "Session attendance tracking",
    "Temporary guest passes",
    "Auto-expiry after event",
  ];

  return (
    <section className="py-20 px-4 bg-white/95">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Exhibitions */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="w-full shrink-0">
              <Image
                src="/digital/stall%20analytics.jpg"
                alt="Stall analytics for exhibitions"
                width={800}
                height={500}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8 flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🎪 Built for Exhibitions
              </h2>
              <p className="text-gray-600 mb-6">Perfect for:</p>
              <ul className="space-y-2 mb-6">
                {exhibitionUseCases.map((item, i) => (
                  <li key={i} className="text-gray-700">• {item}</li>
                ))}
              </ul>
              <p className="font-semibold text-gray-900 mb-3">Exhibition Benefits</p>
              <ul className="space-y-2">
                {exhibitionBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-accent-600">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Corporate */}
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-sm flex flex-col">
            <div className="w-full shrink-0">
              <Image
                src="/digital/why%20sponsors%20say%20yes.jpg"
                alt="Why sponsors say yes - sponsor reporting and visibility"
                width={800}
                height={500}
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
            <div className="p-6 md:p-8 flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                🏢 Built for Corporate Events
              </h2>
              <p className="text-gray-600 mb-6">Ideal for:</p>
              <ul className="space-y-2 mb-6">
                {corporateUseCases.map((item, i) => (
                  <li key={i} className="text-gray-700">• {item}</li>
                ))}
              </ul>
              <p className="font-semibold text-gray-900 mb-3">Corporate Benefits</p>
              <ul className="space-y-2">
                {corporateBenefits.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="text-accent-600">✓</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
