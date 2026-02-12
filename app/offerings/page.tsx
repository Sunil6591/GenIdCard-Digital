import Image from "next/image";
import Link from "next/link";

export default function OfferingsPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-4 bg-white/95">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            All Types of ID Cards
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-2">
            Smart • Secure • Professional Identification Solutions
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mt-6">
            We design and print <strong>all types of ID cards</strong> for institutions, businesses, and events. Our cards are durable, professional, and fully customizable to match your brand and security needs.
          </p>
        </div>
      </section>

      {/* Educational ID Cards */}
      <section className="py-16 px-4 bg-gray-50/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎓 Educational ID Cards
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Ideal for:</strong> Schools, Colleges, Universities, Coaching Institutes, Daycares
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Types:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Student ID Cards</li>
                <li>• Teacher / Staff ID Cards</li>
                <li>• Visitor / Parent Passes</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Photo, Name, Class / Department</li>
                <li>• Roll No., Blood Group, DOB</li>
                <li>• QR Code / Barcode</li>
                <li>• Emergency Contact Details</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/student1.png"
                alt="Student ID Card"
                width={400}
                height={250}
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* School Bag Tags */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎒 School Bag Tags & Child Safety Tags
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Ideal for:</strong> Schools, Playgroups, Daycares, Creches
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1 gap-4 flex-wrap">
              <Image
                src="/schoolbag.png"
                alt="School Bag Tags"
                width={400}
                height={300}
                
              />
              <Image
                src="/schoolbag2.png"
                alt="School Bag Tags"
                width={400}
                height={300}
                
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Types:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• School Bag Tags</li>
                <li>• Child Safety ID Tags</li>
                <li>• Transport / Bus Bag Tags</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Child Photo & Name</li>
                <li>• Class / Section / Bus Route</li>
                <li>• Parent Contact Numbers</li>
                <li>• Blood Group & Medical Notes</li>
                <li>• Waterproof & Tear-Resistant Material</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate ID Cards */}
      <section className="py-16 px-4 bg-gray-50/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🏢 Corporate & Office ID Cards
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Ideal for:</strong> Companies, Factories, IT Parks, Startups
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Types:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Employee ID Cards</li>
                <li>• Contract Staff ID Cards</li>
                <li>• Temporary / Visitor Cards</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Company Branding & Logo</li>
                <li>• Employee Code & Designation</li>
                <li>• Access Control Compatibility</li>
                <li>• Lanyard / Clip Support</li>
              </ul>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <Image
                src="/corporate2.png"
                alt="Corporate ID Card"
                width={400}
                height={250}
                
              />
              <Image
                src="/vistors1.png"
                alt="Visitor ID Card"
                width={400}
                height={250}
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Healthcare ID Cards */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🏥 Hospital & Healthcare ID Cards
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Ideal for:</strong> Hospitals, Clinics, Medical Colleges
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1">
              <Image
                src="/health-card.png"
                alt="Healthcare ID Card"
                width={400}
                height={250}
                
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Types:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Doctor ID Cards</li>
                <li>• Nurse & Staff ID Cards</li>
                <li>• Patient ID Cards</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Department & Shift Details</li>
                <li>• Emergency & Medical Info</li>
                <li>• Color Coding by Role</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hotel, Club & Society */}
      <section className="py-16 px-4 bg-gray-50/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🏨 Hotel, Club & Society ID Cards
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Ideal for:</strong> Hotels, Gyms, Clubs, Housing Societies
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Types:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Member ID Cards</li>
                <li>• Resident ID Cards</li>
                <li>• Staff ID Cards</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Membership Validity</li>
                <li>• QR Code for Entry</li>
                <li>• Premium Finish Options</li>
              </ul>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <Image
                src="/card2.png"
                alt="Member ID Card"
                width={400}
                height={250}
                
              />
              <Image
                src="/club.png"
                alt="Club ID Card"
                width={400}
                height={250}
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event & Temporary ID Cards */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              🎟 Event & Temporary ID Cards
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Ideal for:</strong> Events, Conferences, Exhibitions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex justify-center order-2 md:order-1 gap-4 flex-wrap">
              <Image
                src="/conference1.png"
                alt="Event ID Card"
                width={400}
                height={250}
                
              />
              <Image
                src="/conference2.png"
                alt="Conference ID Card"
                width={400}
                height={250}
                
              />
            </div>
            <div className="order-1 md:order-2">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Types:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Delegate Cards</li>
                <li>• Organizer Cards</li>
                <li>• Media / VIP Passes</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Short-term Validity</li>
                <li>• Fast Bulk Printing</li>
                <li>• Custom Event Branding</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Lanyards, Holders & Lock Options */}
      <section className="py-16 px-4 bg-gray-50/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              🪪 Lanyards, Holders & Lock Options
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="flex justify-center gap-4 mb-4 flex-wrap">
                <Image
                  src="/lanyard.png"
                  alt="Lanyards"
                  width={300}
                  height={200}
                />
                <Image
                  src="/multi-color-lanyard.png"
                  alt="Multi-color Lanyards"
                  width={300}
                  height={200}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Lanyard Types:</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li>• Plain Color Lanyards</li>
                <li>• Printed / Logo Lanyards</li>
                <li>• Satin Lanyards</li>
                <li>• Nylon Lanyards</li>
                <li>• Breakaway Safety Lanyards (for kids)</li>
              </ul>
            </div>
            <div className="text-center">
              <Image
                src="/holders.png"
                alt="ID Holders"
                width={300}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Holder Types:</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li>• Vertical / Horizontal ID Holders</li>
                <li>• Hard Plastic & Soft Pouch Holders</li>
                <li>• Clip Lock / Bulldog Clip</li>
                <li>• Yo-Yo Reel (Retractable)</li>
                <li>• Snap Button Lock</li>
              </ul>
            </div>
            <div className="text-center">
              <Image
                src="/horizontal vertical.png"
                alt="Holder Options"
                width={300}
                height={200}
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Additional Options:</h3>
              <ul className="space-y-2 text-gray-700 text-left">
                <li>• Multiple attachment styles</li>
                <li>• Custom branding available</li>
                <li>• Durable materials</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Security & Smart Features */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              🛡 Security & Smart Features (Optional)
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Image
                src="/QR Code card.png"
                alt="QR Code"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">QR Code</h3>
              <p className="text-sm text-gray-600">Student / staff verification</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Image
                src="/barcode-idcard.png"
                alt="Barcode"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">Barcode</h3>
              <p className="text-sm text-gray-600">Attendance & library use</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <Image
                src="/scan.png"
                alt="RFID/NFC"
                width={200}
                height={150}
                className="mx-auto mb-4"
              />
              <h3 className="font-semibold text-gray-900 mb-2">RFID / NFC</h3>
              <p className="text-sm text-gray-600">Access control & attendance</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700">
              Also available: Magnetic Strip, Hologram & UV Printing, Digital Verification Support
            </p>
          </div>
        </div>
      </section>

      {/* Card Specifications */}
      <section className="py-16 px-4 bg-gray-50/95">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              🧾 Card Specifications
            </h2>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Standard Size:</h3>
                <p className="text-gray-700">CR80 (86 × 54 mm)</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Material:</h3>
                <p className="text-gray-700">PVC / PET</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Finish:</h3>
                <p className="text-gray-700">Glossy / Matte</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Printing:</h3>
                <p className="text-gray-700">Single or Double Side</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              📜 Certificates & School Documents
            </h2>
            <p className="text-lg text-gray-700 mb-2">
              <strong>Ideal for:</strong> Schools, Daycares, Educational Institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Types:</h3>
              <ul className="space-y-2 text-gray-700 mb-6">
                <li>• Bonafide Certificates</li>
                <li>• Leaving / Transfer Certificates</li>
                <li>• Achievement & Merit Certificates</li>
                <li>• Participation Certificates</li>
                <li>• Sports & Event Certificates</li>
                <li>• Daycare Progress / Assessment Sheets</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Features:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Custom School Branding & Logo</li>
                <li>• Student Details Auto-filled</li>
                <li>• Principal / Authority Signature Area</li>
                <li>• Print-ready & Digital PDF Formats</li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/certificate.png"
                alt="Certificate"
                width={400}
                height={300}
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-primary-50/95">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              🚀 Why Choose Us?
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">One-stop solution for school & daycare needs</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">High-quality professional printing</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">Custom design as per your requirement</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700">Bulk & small quantity supported</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md md:col-span-2">
              <p className="text-gray-700 text-center">Fast delivery & reliable support</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today to discuss your ID card requirements
          </p>
          <Link
            href="/#contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}

