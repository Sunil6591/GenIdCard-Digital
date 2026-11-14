"use client";
import { useEffect, useLayoutEffect, useState } from "react";
import { sceneAtPosition } from "@/data/attendance-story";

export function useActiveStoryScene(section: React.RefObject<HTMLElement>, count: number) {
  const [active, setActive] = useState(0);
  const [enhanced, setEnhanced] = useState(false);
  useLayoutEffect(() => {
    if (!enhanced || !window.location.hash) return;
    // Enhancement replaces the tall static fallback. Restore the requested anchor
    // against the final geometry, rather than retaining the fallback's scroll offset.
    let id: string;
    try { id = decodeURIComponent(window.location.hash.slice(1)); } catch { return; }
    document.getElementById(id)?.scrollIntoView({ block: "start", behavior: "instant" });
  }, [enhanced]);
  useEffect(() => {
    const root = section.current;
    if (!root || !("IntersectionObserver" in window)) return;
    const steps = Array.from(root.querySelectorAll<HTMLElement>("[data-scene]"));
    let frame = 0;
    const update = () => {
      frame = 0;
      const line = window.innerHeight * 0.42;
      const next = sceneAtPosition(steps.map(step => step.getBoundingClientRect().top), line);
      setActive(previous => previous === next ? previous : Math.min(next, count - 1));
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };
    const observer = new IntersectionObserver(schedule, { rootMargin: "-20% 0px -35% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] });
    steps.forEach(step => observer.observe(step));
    // One passive, frame-coalesced geometry check handles fast jumps and reverse scrolling.
    // React state changes only at scene boundaries, never for continuous scroll progress.
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    setEnhanced(true); update();
    return () => { observer.disconnect(); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); cancelAnimationFrame(frame); };
  }, [section, count]);
  return { active, enhanced };
}
