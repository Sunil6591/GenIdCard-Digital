export default function PowerfulFeatures() {
  const features = [
    "Dynamic QR Codes (Auto-refresh secure tokens)",
    "Instant Pass Revocation",
    "Multi-Day Event Tracking",
    "VIP & Zone-Based Access",
    "Real-Time Attendance Dashboard",
    "CSV Export Reports",
    "Session Check-in Tracking",
    "Sponsor Booth Visit Tracking",
    "Offline Scan Mode",
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Powerful Features
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-start gap-3 bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-xl text-accent-600 font-bold flex-shrink-0 mt-0.5">✓</span>
              <p className="text-gray-700 leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
