import Link from "next/link";

const PLANS = [
  {
    name: "Starter",
    emoji: "🟢",
    quantity: 50,
    perId: "11.98",
    total: 599,
    description: "Perfect for small events & pilot runs.",
    features: [
      "50 QR-Based Digital Passes",
      "Unlimited Scans",
      "Customised Ticket Design",
      "Full Dashboard Access",
      "All Features Included",
    ],
    cta: "Get Started",
    href: "#contact",
    featured: false,
  },
  {
    name: "Pro",
    emoji: "🔵",
    quantity: 1000,
    perId: "4.20",
    total: 4200,
    description: "Best for exhibitions & mid-size corporate events.",
    features: [
      "1000 QR-Based Digital Passes",
      "Unlimited Scans",
      "Customised Ticket Design",
      "Full Dashboard Access",
      "All Features Included",
    ],
    cta: "Choose Pro",
    href: "#contact",
    featured: true,
  },
  {
    name: "Enterprise",
    emoji: "🟣",
    quantity: 3000,
    perId: "3.67",
    total: 10999,
    description: "Built for large expos & corporate summits.",
    features: [
      "3000 QR-Based Digital Passes",
      "Unlimited Scans",
      "Customised Ticket Design",
      "Full Dashboard Access",
      "All Features Included",
    ],
    cta: "Contact Sales",
    href: "#contact",
    featured: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 px-4 bg-white/95">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          💳 Simple, Transparent Pricing
        </h2>
        <p className="text-center text-lg text-gray-600 mb-2">
          All Features Included in Every Plan
        </p>
        <p className="text-center text-gray-600 mb-12">
          Only the Number of Digital IDs Changes.
        </p>

        {/* Above cards tagline */}
        <p className="text-center text-lg font-semibold text-gray-800 mb-10">
          Same Features Across All Plans.
          <br />
          No Feature Lock. No Hidden Costs. Just Scale by IDs.
        </p>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {PLANS.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl p-8 flex flex-col ${
                plan.featured
                  ? "bg-primary-600 text-white shadow-xl border-2 border-primary-700 ring-2 ring-primary-400 ring-offset-2"
                  : "bg-gray-50 border-2 border-gray-200 hover:border-primary-600 transition-colors"
              }`}
            >
              <div className="text-3xl mb-2">{plan.emoji}</div>
              <h3 className="text-2xl font-bold mb-2">
                {plan.name}
              </h3>
              <p className="text-xl font-semibold mb-2">
                {plan.quantity.toLocaleString()} Digital IDs
              </p>
              <div className="mb-4">
                <div className={`text-3xl font-bold ${plan.featured ? "text-white" : "text-primary-600"}`}>
                  ₹{plan.perId} <span className="text-lg font-normal opacity-90">per ID</span>
                </div>
                <div className={`text-sm opacity-80 ${plan.featured ? "text-primary-100" : ""}`}>
                  ₹{plan.total.toLocaleString()} total
                </div>
              </div>
              <p className={`mb-6 ${plan.featured ? "text-primary-100" : "text-gray-600"}`}>
                {plan.description}
              </p>
              <ul className="space-y-3 flex-grow mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className={plan.featured ? "text-primary-200" : "text-accent-600"}>✔</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.href}
                className={`block w-full text-center py-4 rounded-lg font-semibold transition-colors ${
                  plan.featured
                    ? "bg-white text-primary-600 hover:bg-primary-50"
                    : "bg-primary-600 text-white hover:bg-primary-700"
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
