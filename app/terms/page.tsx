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
          <p className="text-lg text-gray-600">GenIdCard</p>
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
                <strong>GenIdCard</strong> platform.
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

            {/* Privacy Policy */}
            <div className="space-y-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>

              <p className="text-gray-700 leading-relaxed">
                We respect your privacy and are committed to protecting your personal data in accordance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> of India.
              </p>
              <p className="text-gray-700 leading-relaxed">
                This Privacy Policy explains how we collect, use, store, and protect your personal data.
              </p>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Data We Collect</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We may collect the following personal data when you use our platform or submit a form:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Name</li>
                  <li>Photograph</li>
                  <li>Contact details (such as email or mobile number)</li>
                  <li>Organization / school / event details</li>
                  <li>Any other information required for ID card or digital ticket generation</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We collect only the data that is necessary for the stated purpose. When you browse our website, we may also collect technical information such as IP address, device type, and browser details for security, analytics, and service improvement purposes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Purpose of Data Collection</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your personal data is collected and used only for the following purposes:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Creating physical or digital ID cards / tickets</li>
                  <li>Verifying identity for access or validation</li>
                  <li>Generating print-ready or digital credentials</li>
                  <li>Providing project-specific reports or analytics</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Your data will not be used for any unrelated purpose without your explicit consent. We do <strong>not</strong> sell or misuse personal data. Email or communication will be sent <strong>only with appropriate consent</strong>.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Consent</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  By submitting your information on our platform, you provide explicit consent for us to collect and process your personal data for the purposes mentioned above.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  You may withdraw your consent at any time by contacting us (details below).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Data Storage & Security</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We take reasonable technical and organizational measures to protect your data, including:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Secure cloud storage</li>
                  <li>Restricted access controls</li>
                  <li>Encrypted data transmission</li>
                  <li>Project-level data isolation</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  We continuously review and improve our security practices.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">5. Data Sharing</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  We do not sell or rent personal data.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Data may be shared only:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>With authorized project owners (schools, corporates, event organizers)</li>
                  <li>When required by law or government authorities</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  All data sharing is limited to the stated purpose. We may also disclose personal information when necessary to fulfill the requested service or when there is a violation of these Terms and Conditions.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">6. Data Retention & Deletion</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Personal data is retained only for as long as required for the project or legal obligations.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Data is securely deleted when:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>The project ends</li>
                  <li>The data is no longer required</li>
                  <li>A valid deletion request is received</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">7. Your Rights</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Under the DPDP Act, you have the right to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4 mb-4">
                  <li>Access your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent</li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Requests can be raised using the contact details below.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">8. Data Breach Handling</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  In case of a data breach, we will take immediate steps to:
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                  <li>Contain and assess the breach</li>
                  <li>Notify affected parties where required</li>
                  <li>Comply with legal reporting obligations</li>
                </ul>
              </div>
            </div>

            {/* Student & Child Data Protection */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Student & Child Data Protection</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                GenIdCard may process personal data of students, including minors,{" "}
                <strong>only as provided and authorized by the institution or parent/guardian</strong>.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Student data is used <strong>solely for ID card generation and related services</strong></li>
                <li>Access is restricted to authorized personnel and systems</li>
                <li>Student data is not used for advertising or marketing</li>
                <li>Institutions are responsible for obtaining required parental consent</li>
              </ul>
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

