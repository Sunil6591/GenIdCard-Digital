import Image from "next/image";

export default function AnalyticsDashboard() {
  const metrics = [
    "Total Registrations",
    "Checked-In Today",
    "Unique Visitors",
    "Repeat Visitors",
    "Hourly Entry Graph",
    "Access Violations",
    "Zone-Based Reports",
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          Real-Time Analytics Dashboard
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Monitor your event live:
        </p>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="w-full">
            <Image
              src="/digital/Footfall%20analytics.jpg"
              alt="Footfall analytics - hourly entry and visitor patterns"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="w-full">
            <Image
              src="/digital/Demographics%20analytics.jpg"
              alt="Demographics analytics - visitor breakdown and insights"
              width={800}
              height={500}
              className="w-full h-auto rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
            >
              <p className="text-gray-700 font-medium text-sm md:text-base">{metric}</p>
            </div>
          ))}
        </div>
        <p className="text-center text-lg text-gray-600 mt-8 font-medium">
          Export reports instantly.
        </p>
      </div>
    </section>
  );
}
