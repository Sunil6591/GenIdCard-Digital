import Image from "next/image";

export default function HowItWorks() {
  const steps = [
    {
      emoji: "1️⃣",
      title: "Collect Registrations",
      description: "Create online event registration forms. Collect visitor details digitally.",
    },
    {
      emoji: "2️⃣",
      title: "Generate Digital QR Pass",
      description: "Instant digital pass delivered via WhatsApp or Secure Web Link.",
    },
    {
      emoji: "3️⃣",
      title: "Scan & Track Entry",
      description: "Scan QR at entry gate. View QR Code, Category, Valid/Revoked status. Real-time analytics dashboard updates instantly.",
    },
  ];

  return (
    <section className="py-20 px-4 bg-white/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          How it works
        </h2>
        <div className="w-full max-w-4xl mx-auto mb-12">
          <Image
            src="/digital/How%20it%20works.jpg"
            alt="How the digital event pass system works"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl shadow-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
            loading="lazy"
          />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl mb-4">{step.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
