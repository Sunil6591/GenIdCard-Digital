import Link from "next/link";

export default function CTASection() {
  return (
    <section className="py-20 px-4 bg-primary-50/95">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
          Ready to Transform Your Event Entry?
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Stop printing badges.
          <br />
          Start scanning smart passes.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Create Your First Event
          </Link>
          <Link
            href="#contact"
            className="px-8 py-4 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transition-colors"
          >
            Book a Live Demo
          </Link>
        </div>
      </div>
    </section>
  );
}
