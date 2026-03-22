import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white/95">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-gray-50/95">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md space-y-8">
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                With over 20 years of experience in software product development, Spopsy (Sole Proprietorship) is a technology-driven company focused on building practical, scalable, and business-oriented digital solutions.
              </p>
            </div>

            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Spopsy, we specialize in developing software products that simplify operations, improve efficiency, and enable data-driven decision-making. Our approach combines deep domain understanding with user-friendly design to deliver solutions that are easy to adopt and impactful in real-world use.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Core Offerings</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our key software products include:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-3 ml-4">
                <li>
                  <strong>FootfallIQ</strong> – A QR-based digital pass system for exhibitions and events, enabling real-time visitor tracking, seamless entry management, and actionable insights.
                </li>
                <li>
                  <strong>GenIdCard</strong> – A platform designed for printers and organizations to easily collect data and generate print-ready ID cards efficiently.
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Extended Capabilities</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                In addition to our software products, we also support clients with end-to-end execution. This combination of technology + execution allows us to deliver complete, practical solutions rather than just standalone tools.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Philosophy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                At Spopsy, we believe software should solve real problems—not create complexity. Every product we build is focused on:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Simplicity and usability</li>
                <li>Reliability at scale</li>
                <li>Real-time visibility and insights</li>
                <li>Seamless integration with existing workflows</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                We are committed to long-term partnerships by delivering consistent quality, responsive support, and solutions that evolve with our customers&apos; needs. Our 20+ years of experience enable us to understand both technology and business—making us a trusted partner for organizations across industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
