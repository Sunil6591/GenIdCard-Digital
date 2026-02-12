import Link from "next/link";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      tagline: "Best for small events",
      features: [
        "Up to 500 registrations",
        "QR scanning",
        "Basic dashboard",
      ],
    },
    {
      name: "Pro",
      tagline: "Best for exhibitions",
      features: [
        "Unlimited registrations",
        "Multi-day tracking",
        "Advanced analytics",
        "VIP zone access",
      ],
      featured: true,
    },
    {
      name: "Enterprise",
      tagline: "For large corporate events",
      features: [
        "API integration",
        "Custom branding",
        "Dedicated support",
        "White-label options",
      ],
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Simple Pricing
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 flex flex-col ${
                plan.featured
                  ? "bg-primary-600 text-white shadow-xl border-2 border-primary-700 ring-2 ring-primary-400 ring-offset-2"
                  : "bg-gray-50 border-2 border-gray-200 hover:border-primary-600 transition-colors"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              <p className={`mb-6 ${plan.featured ? "text-primary-100" : "text-gray-600"}`}>
                {plan.tagline}
              </p>
              <ul className="space-y-3 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={plan.featured ? "text-primary-200" : "text-accent-600"}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="#contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors"
          >
            View Full Pricing
          </Link>
        </div>
      </div>
    </section>
  );
}
