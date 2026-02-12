import Image from "next/image";

export default function WhyGenIdCard() {
  const benefits = [
    "Public form & CSV import for ID data collection",
    "Automatic validation before printing",
    "English input → Marathi print support",
    "Profile photo background removal & cropping",
    "Front & back ID card generation",
    "Print-ready PDFs with perfect alignment",
    "Supports A4, A3, and custom paper sizes",
    "Bulk print with zero rework safety",
    "Credit-based billing (pay only for printed IDs)",
    "Works with any printer",
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Why GenIdCard
        </h2>

        {/* Before/After Image and Benefits Side by Side */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Image Section */}
          <div className="flex justify-center">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Image
                src="/Before_After1.png"
                alt="Before and After: Manual vs Digital Workflow"
                width={500}
                height={300}
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <span className="text-xl text-accent-600 font-bold flex-shrink-0 mt-0.5">
                  ✓
                </span>
                <p className="text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

