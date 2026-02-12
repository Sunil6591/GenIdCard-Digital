import Image from "next/image";

export default function PrivacyTrust() {
  return (
    <section className="py-20 px-4 bg-white/95">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
          Privacy & Trust
        </h2>
        <div className="w-full max-w-4xl mx-auto">
          <Image
            src="/digital/Privacy%20and%20trust.jpg"
            alt="Privacy and trust - secure and compliant event data handling"
            width={1200}
            height={800}
            className="w-full h-auto rounded-xl shadow-lg"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 896px"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
