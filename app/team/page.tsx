"use client";

import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const CARD_FLIP_INTERVAL_MS = 10000;

const TEAM_MEMBERS = [
  {
    name: "Sunil Joshi",
    front: "/Sunil ID Card Front.png",
    back: "/Sunil ID Card Back.png",
  },
  {
    name: "Tushar Vaidya",
    front: "/Tushar Id Card Front.png",
    back: "/Tushar Id Card Back.png",
  },
];

export default function TeamPage() {
  // One flip state per team member; all flip in sync on auto, or single card on click
  const [flippedStates, setFlippedStates] = useState<boolean[]>(
    TEAM_MEMBERS.map(() => false)
  );

  // Auto flip all cards front ↔ back together
  useEffect(() => {
    const interval = setInterval(() => {
      setFlippedStates((prev) => prev.map((f) => !f));
    }, CARD_FLIP_INTERVAL_MS);
    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (index: number) => {
    setFlippedStates((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  };

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="py-16 px-4 bg-white/95">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Who You&apos;ll Work With
          </h1>
          <p className="text-xl text-gray-600">
            Meet the Team (ID Card Style)
          </p>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Each card represents a real person you&apos;ll work with directly — no proxies, no layers.
          </p>
        </div>
      </section>

      {/* Team ID Cards - stacked vertically, one per member */}
      <section className="py-12 px-4 bg-gray-50/95">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Team ID Cards
          </h2>

          <div className="flex flex-col items-center gap-10">
            {TEAM_MEMBERS.map((member, index) => (
              <div key={member.name} className="flex flex-col items-center justify-center">
              <p className="text-lg font-semibold text-gray-700 mb-3 text-center">
                {member.name}
              </p>
            
              <button
                type="button"
                onClick={() => handleCardClick(index)}
                aria-label={`${member.name} ID card - click to flip`}
                style={{ perspective: "1000px" }}
                className="
                  relative
                  w-[378px] h-[215px]
                  lg:w-[480px] lg:h-[274px]
                  xl:w-[560px] xl:h-[319px]
                  aspect-[100/57]
                  cursor-pointer
                  rounded-xl
                  overflow-visible
                  select-none
                  focus:outline-none
                  focus:ring-2
                  focus:ring-primary-500
                  focus:ring-offset-2
                  flex
                  items-center
                  justify-center
                "
              >
                <div
                  className="relative w-full h-full transition-transform ease-in-out"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: flippedStates[index] ? "rotateY(180deg)" : "rotateY(0deg)",
                    transitionDuration: "1500ms", // Control flip speed here (1.5 seconds)
                  }}
                >
                  {/* Front */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <Image
                      src={member.front}
                      alt={`${member.name} - ID Card Front`}
                      fill
                      className="object-contain object-center"
                      sizes="(min-width: 1280px) 560px, (min-width: 1024px) 480px, 378px"
                    />
                  </div>
            
                  {/* Back */}
                  <div
                    className="absolute inset-0 rounded-xl overflow-hidden"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                    }}
                  >
                    <Image
                      src={member.back}
                      alt={`${member.name} - ID Card Back`}
                      fill
                      className="object-contain object-center"
                      sizes="(min-width: 1280px) 560px, (min-width: 1024px) 480px, 378px"
                    />
                  </div>
                </div>
              </button>
            </div>
            
            
            
            ))}
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            Cards flip automatically. Click a card to flip it.
          </p>
        </div>
      </section>

      {/* How These Cards Work Together */}
      <section className="py-12 px-4 bg-white/95">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">
            How These Cards Work Together
          </h2>
          <ul className="space-y-3 text-gray-700 text-lg max-w-xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              Strategy sets direction before anything is built
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              Engineering turns intent into reliable systems
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 font-bold">•</span>
              Growth ensures delivery leads to real outcomes
            </li>
          </ul>
          <p className="text-gray-600 text-center mt-6">
            You work with the same people across every phase — from first conversation to final delivery.
          </p>
        </div>
      </section>

      {/* Work With Us */}
      <section className="py-16 px-4 bg-gray-50/95">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Work With Us</h2>
          <p className="text-lg text-gray-700 mb-8">
            You won&apos;t be passed around.
            <br />
            You&apos;ll work directly with the people on these cards.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors shadow-lg"
          >
            Get in touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
