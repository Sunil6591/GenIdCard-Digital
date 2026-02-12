import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Collect Data",
      description: "Collect data via forms or by importing CSV files. Support for photos, text, and custom fields with secure storage and privacy ensured.",
    },
    {
      number: "2",
      title: "Auto-Validate Records",
      description: "Review and validate all records before generation. Catch errors early to avoid costly reprints.",
    },
    {
      number: "3",
      title: "Generate IDs",
      description: "Create print-ready front and back PDFs with perfect alignment. Preview before finalizing.",
    },
    {
      number: "4",
      title: "Print with Confidence",
      description: "Send PDFs to any printer. Our format ensures consistent results every time.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          How It Works
        </h2>
        <div className="mb-16">
          <div className="grid md:grid-cols-1 gap-8 mb-8">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-3xl mx-auto">
              <Image
                src="/Before_After2.png"
                alt="Before and After: Process Transformation"
                width={1200}
                height={800}
                className="w-full h-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

