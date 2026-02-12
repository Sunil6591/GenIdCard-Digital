"use client";

import Typewriter from "./Typewriter";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white/95 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center">
          <Image
            src="/printing-confident.png"
            alt="Printing Confident"
            width={1000}
            height={400}
            className="h-48 md:h-64 lg:h-80 w-auto object-contain"
            priority
          />
        </div>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
          <Typewriter />
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-700 mb-6">
          Generate Print-Ready ID Cards. Without Errors.
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Collect data, validate records, and generate front–back ID cards that printers can trust.
        </p>
        <div className="flex justify-center">
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </section>
  );
}

