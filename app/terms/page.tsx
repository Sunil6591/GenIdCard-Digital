import Link from "next/link";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-lg text-gray-600">FootfallIQ</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-gray-50/95">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md space-y-10">
            {/* Intro */}
            <div>
              <p className="text-lg text-gray-700 leading-relaxed">
                These Terms and Conditions govern the use of this website and services operated by{" "}
                <strong>Twin Enterprises</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;), including the{" "}
                <strong>FootfallIQ</strong> platform.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mt-4">
                By accessing or using this website, including purchasing products or using our digital
                services, you agree to be bound by these Terms and Conditions. If you do not agree,
                please do not access or use the website.
              </p>
            </div>

            {/* Refund & Replacement Policy */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund & Replacement Policy</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We strive to deliver high-quality products and services.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>
                  Refunds or replacements are considered{" "}
                  <strong>only in cases of genuine manufacturing defects or errors attributable to us</strong>.
                </li>
                <li>
                  No refunds or replacements will be provided for:
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>Errors in data submitted or approved by customers</li>
                    <li>Incorrect information provided by parents, students, or staff</li>
                    <li>Approved designs, digital previews, or completed prints</li>
                    <li>Change of mind after order confirmation</li>
                  </ul>
                </li>
                <li>
                  All refund or replacement requests must be raised within a reasonable time after
                  delivery and will be reviewed on a case-by-case basis.
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mt-4">
                For clarification, please contact our support team at{" "}
                <a href="mailto:info@genidcard.com" className="text-primary-600 hover:underline">
                  info@genidcard.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-700 leading-relaxed">
                For information on how we collect, use, store, and protect your personal data, including student and child data protection, please see our{" "}
                <Link href="/privacy" className="text-primary-600 hover:underline font-semibold">
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability & Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We do not guarantee that the website or services will be uninterrupted, timely,
                secure, or error-free at all times.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Use of the website and services is at your own risk. While reasonable care is taken,
                we do not warrant that all outputs or results will be completely accurate or free from
                error.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the maximum extent permitted by law, <strong>Twin Enterprises</strong> shall not be
                liable for any indirect, incidental, special, or consequential damages, including loss
                of data, profits, reputation, or business opportunities arising from the use of our
                services or products.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In any event, our total liability shall be limited to the amount paid by you for the
                specific service or product giving rise to the claim.
              </p>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Indemnification</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless <strong>Twin Enterprises</strong>,
                its owners, directors, employees, contractors, and service providers from any claims,
                losses, damages, or expenses (including reasonable legal fees) arising from:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Misuse of the website or services</li>
                <li>Incorrect or unauthorized data submitted by you</li>
                <li>Violation of these Terms or applicable laws</li>
                <li>Infringement of third-party rights</li>
              </ul>
            </div>

            {/* Jurisdiction */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Jurisdiction & Governing Law</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms and Conditions shall be governed by and construed in accordance with the
                laws of <strong>India</strong>.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Any disputes shall be subject to the exclusive jurisdiction of the courts located in{" "}
                <strong>400/2 Shaniwar Peth, Sudarshan Apartment, near Bank Of Maharashtra, Pune 411030</strong>.
              </p>
            </div>

            {/* Grievance Redressal */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Grievance Redressal</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any complaints, feedback, or grievances, please contact our Grievance
                Officer at:
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                📧{" "}
                <a href="mailto:info@genidcard.com" className="text-primary-600 hover:underline font-semibold">
                  info@genidcard.com
                </a>
              </p>
              <p className="text-gray-700 leading-relaxed">
                We will respond within <strong>2–3 working days</strong> from receipt of your
                communication.
              </p>
            </div>

            {/* Changes to Terms */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Changes to Terms & Policies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to update or modify these Terms, Privacy Policy, or related
                policies at any time.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Changes will take effect immediately upon posting on the website. We encourage users
                to review this page periodically.
              </p>
            </div>

            {/* Contact Information */}
            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-700 leading-relaxed">
                <strong>Twin Enterprises</strong>
                <br />
                400/2 Shaniwar Peth, Sudarshan Apartment, near Bank Of Maharashtra, Pune 411030
                <br />
                📧{" "}
                <a href="mailto:info@genidcard.com" className="text-primary-600 hover:underline">
                  info@genidcard.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

