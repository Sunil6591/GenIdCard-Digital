export default function Pricing() {
  const plans = [
    {
      quantity: 50,
      price: 599,
      perId: (599 / 50).toFixed(2),
      description: "Perfect for small batches",
    },
    {
      quantity: 300,
      price: 1499,
      perId: (1499 / 300).toFixed(2),
      description: "Great for medium batches",
    },
    {
      quantity: 600,
      price: 2699,
      perId: (2699 / 600).toFixed(2),
      description: "Best for regular use",
    },
    {
      quantity: 1500,
      price: 5899,
      perId: (5899 / 1500).toFixed(2),
      description: "Ideal for large organizations",
    },
    {
      quantity: 3000,
      price: 10999,
      perId: (10999 / 3000).toFixed(2),
      description: "Enterprise volume pricing",
    },
    {
      quantity: 5000,
      price: 16499,
      perId: (16499 / 5000).toFixed(2),
      description: "Maximum value for bulk orders",
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 bg-white/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
          Pricing
        </h2>
        <p className="text-center text-gray-600 mb-2">
          1 credit = 1 printed ID. Credits used only on successful print.
        </p>
        <p className="text-center text-sm text-gray-500 mb-12">
          All prices include 18% GST
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg border-2 border-gray-200 hover:border-primary-600 transition-colors flex flex-col"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {plan.quantity.toLocaleString()} IDs
                </h3>
                <p className="text-sm text-gray-600">{plan.description}</p>
              </div>
              <div className="mt-auto">
                <div className="text-3xl font-bold text-primary-600 mb-1">
                  ₹{plan.price.toLocaleString()}
                </div>
                <div className="text-sm text-gray-500">
                  ₹{plan.perId} per ID
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center">
          <p className="text-lg text-gray-700">
            <strong>Need larger volumes?</strong>{" "}
            <a href="#contact" className="text-primary-600 hover:underline">
              Talk to Sales
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

