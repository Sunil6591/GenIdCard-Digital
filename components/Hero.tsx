"use client";

import Link from "next/link";
import Image from "next/image";
import HeroTypewriter from "./HeroTypewriter";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-white/95 px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Image
            src="/digital/logo.png"
            alt="GenIdCard Digital Logo"
            width={280}
            height={280}
            className="h-32 md:h-44 lg:h-56 w-auto object-contain"
            priority
          />
        </div>
        <HeroTypewriter />
        <p className="text-lg md:text-xl text-gray-600 mb-10">
          Create secure QR-based digital passes for exhibitions and corporate events.
          <br />
          <span className="font-semibold text-gray-800">Scan. Verify. Track. In Real-Time.</span>
        </p>
        <div className="flex justify-center">
          <Link
            href="#contact"
            className="px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
          >
            Get Started
          </Link>
        </div>
      </div>
    </section>
  );
}
