"use client";
import type { StoryScene } from "@/types/story";
import { track } from "@/lib/analytics";
export default function StoryProgress({ scenes, active }: { scenes: StoryScene[]; active: number }) {
  return <nav className="story-progress" aria-label="Attendance story stages">{scenes.map((scene, index) => <a key={scene.id} href={`#scene-${scene.id}`} aria-label={`${index + 1}. ${scene.label}`} aria-current={active === index ? "step" : undefined} className={index <= active ? "progress-filled" : ""} onClick={() => track("story_stage_navigation", { stage: scene.id })}><span /><span className="progress-tooltip">{scene.label}</span></a>)}<span className="progress-count" aria-hidden="true">{String(active + 1).padStart(2, "0")} / 08</span></nav>;
}
