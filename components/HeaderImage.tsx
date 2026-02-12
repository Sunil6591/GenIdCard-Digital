import Image from "next/image";

export default function HeaderImage() {
  return (
    <section className="w-full bg-white/95">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex justify-center">
          <Image
            src="/printing-confident.png"
            alt="Printing Confident"
            width={800}
            height={300}
            className="h-32 md:h-40 w-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}

