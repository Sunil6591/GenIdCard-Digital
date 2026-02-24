import Image from "next/image";

export default function TheProblem() {
  const problems = [
    "Long entry queues",
    "Manual registration desks",
    "Printed badges with errors",
    "No real-time attendance tracking",
    "No repeat visitor analytics",
    "Wasted paper and reprints",
  ];

  return (
    <section className="py-20 px-4 bg-gray-50/95">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-6">
          The Problem with Traditional Event Entry
        </h2>
        <p className="text-xl text-gray-600 text-center mb-12">
          Events deserve smarter systems.
        </p>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-12">
          <div className="w-full">
            <Image
              src="/digital/How_the_footfall_captured_today.jpg"
              alt="How footfall is captured today"
              width={1200}
              height={900}
              className="w-full h-auto min-h-[300px] rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
          <div className="w-full">
            <Image
              src="/digital/Why%20this%20is%20business%20problem.jpg"
              alt="Why this is a business problem - traditional event entry challenges"
              width={1200}
              height={900}
              className="w-full h-auto min-h-[300px] rounded-xl shadow-lg"
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
            />
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-primary-600"
            >
              <p className="text-gray-700 font-medium text-sm md:text-base">{problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
