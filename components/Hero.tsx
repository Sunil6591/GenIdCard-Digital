"use client";

import Image from "next/image";
import HeroTypewriter from "./HeroTypewriter";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-white/95 px-4 py-8">
      <div className="max-w-6xl mx-auto text-center w-full flex flex-col items-center gap-4">
        <div className="flex justify-center w-full flex-1 min-h-0 max-h-[45vh]">
          <Image
            src="/digital/hero.png"
            alt="FootfallIQ"
            width={900}
            height={500}
            className="w-full h-full max-h-[45vh] object-contain"
            priority
          />
        </div>
        <HeroTypewriter />
        <p className="text-base md:text-lg text-gray-600">
          Create secure QR-based digital passes for exhibitions and corporate events.
          <br />
          <span className="font-semibold text-gray-800">Scan. Verify. Track. In Real-Time.</span>
        </p>
      </div>
    </section>
  );
}
