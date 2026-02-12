"use client";

import { useEffect, useState } from "react";

const WORDS = [
  "Exhibitions",
  "Trade Shows",
  "Corporate Events",
  "Conferences",
  "Annual Meets",
  "Expos",
];

const TYPING_SPEED = 80;
const DELETING_SPEED = 50;
const PAUSE_AFTER_TYPING = 2000;
const PAUSE_AFTER_DELETING = 500;

export default function HeroTypewriter() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = WORDS[wordIndex];

    let delay: number;
    if (isDeleting) {
      delay = DELETING_SPEED;
    } else if (displayText.length === currentWord.length) {
      delay = PAUSE_AFTER_TYPING;
    } else if (displayText.length === 0) {
      delay = PAUSE_AFTER_DELETING;
    } else {
      delay = TYPING_SPEED;
    }

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % WORDS.length);
        }
      }
    }, delay);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex]);

  return (
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 min-h-[3rem] md:min-h-[4rem] flex items-center justify-center flex-wrap">
      <span className="text-gray-900 mr-1">Smart Digital Passes for </span>
      <span className="text-primary-600 inline-flex">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </h2>
  );
}
