"use client";

import { useEffect, useState } from "react";

export default function Typewriter() {
  const [displayText, setDisplayText] = useState("Gen");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const fullText = "Generate ID Cards";
    let currentIndex = 3; // Start after "Gen"
    const typingSpeed = 120; // milliseconds per character
    let typeInterval: NodeJS.Timeout | null = null;

    // Small delay before starting to type
    const startDelay = setTimeout(() => {
      typeInterval = setInterval(() => {
        if (currentIndex < fullText.length) {
          setDisplayText(fullText.substring(0, currentIndex + 1));
          currentIndex++;
        } else {
          if (typeInterval) clearInterval(typeInterval);
          // Hide cursor after a brief moment
          setTimeout(() => {
            setShowCursor(false);
          }, 500);
        }
      }, typingSpeed);
    }, 300);

    return () => {
      clearTimeout(startDelay);
      if (typeInterval) clearInterval(typeInterval);
    };
  }, []);

  const customColor = "rgb(79 70 229)";
  const fullText = "Generate ID Cards";
  const genEnd = 3; // "Gen"
  const idCardsStart = 9; // "ID Cards" starts at index 9

  return (
    <span className="inline-block">
      <span style={{ color: customColor }}>Gen</span>
      {displayText.length > genEnd && (
        <>
          {displayText.length <= idCardsStart ? (
            <span>{displayText.substring(genEnd)}</span>
          ) : (
            <>
              <span>{fullText.substring(genEnd, idCardsStart)}</span>
              <span style={{ color: customColor }}>{displayText.substring(idCardsStart)}</span>
            </>
          )}
        </>
      )}
      {showCursor && (
        <span className="text-primary-600 ml-0.5 animate-pulse">|</span>
      )}
    </span>
  );
}

