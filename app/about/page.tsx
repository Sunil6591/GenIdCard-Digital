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
                Established in <strong>2012</strong>, Twin Enterprises is a leading manufacturer and supplier of high-quality ID cards and corporate branding solutions. We specialize in school ID card solutions and are well-positioned to cater to educational institutions, corporates, and organizations with reliable and cost-effective products.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Product Range</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Our product range includes <strong>PVC ID Cards</strong>, <strong>NFC Cards</strong>, <strong>Magnetic Strip Cards</strong>, <strong>HID Proximity & Contactless Cards</strong>, door entrance cards, and a wide variety of lanyards such as screen-printed and multicolor lanyards. We also provide all types of card holders, badge clips, yo-yo pullies, luggage tags, and complete ID card accessories.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Services</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                In addition to ID card manufacturing, we offer <strong>brochure designing</strong>, <strong>cap printing</strong>, <strong>mug printing</strong>, and other customized branding solutions to meet diverse client requirements. With years of industry experience, we focus on quality, durability, and timely delivery.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Commitment</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Twin Enterprises, we take pride in our sincere, prompt service and long-term customer relationships. Our commitment to quality and customer satisfaction makes us a trusted name in the ID card and printing industry.
              </p>
            </div>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-lg text-gray-700">
                <strong>GST Number:</strong> <span className="font-mono">27AJAPV2633H1Z6</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

