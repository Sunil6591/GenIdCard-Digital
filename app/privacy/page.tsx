import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-lg text-gray-600 mb-2">FootfallIQ</p>
          <p className="text-sm text-gray-500">
            Effective Date: 10 November 2025 | Website: https://footfalliq.in
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-gray-50/95">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 md:p-12 rounded-lg shadow-md space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. DPDP Act Compliance (India)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FootfallIQ is compliant with the Digital Personal Data Protection Act, 2023 (DPDP Act), India.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We process personal data lawfully, transparently, and only for specified purposes as defined by the Event Organizer. We act as a <strong>Data Processor</strong>, while the Event Organizer acts as the <strong>Data Fiduciary</strong> under the DPDP Act framework.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We ensure:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Lawful and purpose-specific data collection</li>
                <li>Data minimization</li>
                <li>Secure storage and processing</li>
                <li>Respect for data deletion and correction requests</li>
                <li>No unauthorized data sharing</li>
                <li>Complete data erasure upon organizer request</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FootfallIQ (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) provides digital registration, pass generation, and real-time footfall analytics solutions for events.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy explains how we collect, use, store, and protect data processed through our platform.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using FootfallIQ.in, you agree to the practices described in this policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Information We Collect</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Depending on event configuration, we may collect:
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">A. Organizer Information</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Organization name</li>
                  <li>Billing information</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">B. Participant Information (Configured by Organizer)</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Name</li>
                  <li>Mobile number</li>
                  <li>Email address</li>
                  <li>City</li>
                  <li>Custom form fields defined by organizer</li>
                  <li>Uploaded photo (if required for digital pass)</li>
                </ul>
              </div>
              <p className="text-gray-700 leading-relaxed">
                We only collect information necessary for event registration and analytics purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Purpose of Data Processing</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We process data strictly for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Managing registrations</li>
                <li>Generating digital passes/tickets</li>
                <li>QR code generation for entry validation</li>
                <li>Real-time footfall tracking</li>
                <li>Providing analytics dashboards to organizers</li>
                <li>Operational and technical support</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do <strong>not</strong> sell, rent, monetize, or share personal data with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Ownership</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                All participant data belongs exclusively to the respective Event Organizer.
              </p>
              <p className="text-gray-700 leading-relaxed">
                FootfallIQ acts only as a technology service provider and data processor. We do not claim ownership of event data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Restricted Data Access</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Only the respective organizer can access their event data.</li>
                <li>No other organizer can access another event&apos;s data.</li>
                <li>Internal access is strictly limited to authorized technical processes.</li>
                <li>No unauthorized individual has access to participant data.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We maintain strict access controls and audit mechanisms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Data Storage & Security</h2>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Data is stored on secure cloud infrastructure.</li>
                <li>Photos, QR codes, and generated passes are securely stored.</li>
                <li>Access control, encryption, and secure authentication mechanisms are implemented.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We continuously upgrade our systems to maintain high security standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Data Retention & Deletion Rights</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Organizers have full control over their event data.
              </p>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Data Deletion Policy:</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Organizers can request complete deletion of their event data at any time.</li>
                <li>Upon confirmation, all associated registrations, participant details, uploaded photos, QR codes, and analytics data are permanently wiped from our system.</li>
                <li>Deleted data cannot be recovered.</li>
                <li>We do not retain independent copies of deleted organizer data beyond necessary technical system logs.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                This ensures compliance with data erasure requirements under the DPDP Act.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Third-Party Infrastructure</h2>
              <p className="text-gray-700 leading-relaxed">
                We use secure cloud infrastructure providers solely for hosting and storage purposes. These providers do not have independent rights to access, use, or monetize event data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cookies</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use essential cookies for:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                <li>Secure login sessions</li>
                <li>Dashboard functionality</li>
                <li>System performance monitoring</li>
              </ul>
              <p className="text-gray-700 leading-relaxed">
                We do not use advertising or tracking cookies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Children&apos;s Data</h2>
              <p className="text-gray-700 leading-relaxed">
                For school or child-related events, data is collected under the authority of the respective Event Organizer, who is responsible for obtaining necessary consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Policy Updates</h2>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy from time to time. Updates will be posted with a revised effective date.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contact</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                For privacy-related inquiries:
              </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>FootfallIQ</strong>
                <br />
                Website: <a href="https://footfalliq.in" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">https://footfalliq.in</a>
                <br />
                Email:{" "}
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
