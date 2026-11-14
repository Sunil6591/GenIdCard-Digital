import Link from "next/link";
import { Check } from "lucide-react";
import { storyScenes } from "@/data/attendance-story";
import PhoneMockup from "@/components/whatsapp/PhoneMockup";
import DashboardPreview from "@/components/dashboard/DashboardPreview";
import ScrollStory from "./ScrollStory";

const related = [
  ["/features/whatsapp-attendance", "Explore WhatsApp employee onboarding"],
  ["/features/shift-management", "See employee shift assignments"],
  ["/features/gps-attendance", "Understand location verification"],
  ["/features/attendance-reminders", "Explore checkout reminders"],
  ["/features/whatsapp-attendance", "Read about check-in and checkout"],
  ["/features/attendance-reminders", "Review missing-attendance follow-up"],
  ["/features/attendance-reminders", "See supervisor attendance alerts"],
  ["/features/attendance-reports", "Explore attendance reporting"],
];

/** One server-rendered narrative, shared by animated, static, desktop and mobile views. */
export default function StorySection() {
  return <ScrollStory>{storyScenes.map((step, index) => <article id={`scene-${step.id}`} key={step.id} data-scene={step.id} className="story-scene" aria-labelledby={`title-${step.id}`}>
    <div className="scene-copy"><span className="scene-index"><span>{String(index + 1).padStart(2, "0")}</span>{step.label}</span><h3 id={`title-${step.id}`}>{step.title}</h3><p>{step.description}</p><span className="scene-benefit"><Check size={15} />{step.benefit}</span><small>{step.detail}</small><Link className="text-link" href={related[index][0]}>{related[index][1]} ↗</Link></div>
    <div className="scene-static">{step.screen === "dashboard" ? <DashboardPreview compact /> : <PhoneMockup scene={{ id: step.id, date: step.date, time: step.time, conversation: step.conversation, animation: step.animation, messages: step.messages.slice(-2) }} animate={false} />}</div>
  </article>)}</ScrollStory>;
}
