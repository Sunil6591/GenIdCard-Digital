"use client";

import Footer from "@/components/Footer";

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export default function ContactPage() {
  const whatsappNumber = "919960549912";
  const defaultMessage = "Hi, I am interested in Gen Id Card";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "whatsapp_click", {
        event_category: "engagement",
        event_label: "Contact Page WhatsApp",
        value: 1,
      });
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-lg text-gray-600">
            We&apos;re here to help you simplify ID card creation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-gray-50/95">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md space-y-10">
            {/* Intro */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you&apos;re a school, college, organization, or printing partner, feel free to
                reach out for demos, support, or general queries.
              </p>
            </div>

            {/* Get in Touch */}
            <div className="bg-primary-50 p-6 rounded-lg border border-primary-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              
              {/* WhatsApp Button */}
              <div className="mb-6">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleWhatsAppClick}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BA5A] transition-colors shadow-lg hover:shadow-xl text-lg"
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <div className="border-t border-primary-200 pt-4">
                <p className="text-lg text-gray-700 leading-relaxed">
                  📧 <strong>Email</strong>
                  <br />
                  <a
                    href="mailto:info@genidcard.com"
                    className="text-primary-600 hover:underline font-semibold text-xl"
                  >
                    info@genidcard.com
                  </a>
                </p>
                <p className="text-gray-600 mt-4">
                  We typically respond within <strong>1–2 working days</strong>.
                </p>
              </div>
            </div>

            {/* Grievance & Support */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Grievance & Support</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe in prompt and fair resolution of concerns.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                For any complaints or grievances, please write to:
                <br />
                📧{" "}
                <a
                  href="mailto:info@genidcard.com"
                  className="text-primary-600 hover:underline font-semibold"
                >
                  info@genidcard.com
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                We aim to respond within <strong>2–3 working days</strong>.
              </p>
            </div>

            {/* Business Information */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Business Information</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong className="text-xl text-gray-900">GenIdCard</strong>
                  <br />
                  Operated by <strong>Twin Enterprises</strong>
                  <br />
                  <span className="mt-2 block">
                    📍 400/2 Shaniwar Peth, Sudarshan Apartment, near Bank Of Maharashtra, Pune 411030
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
