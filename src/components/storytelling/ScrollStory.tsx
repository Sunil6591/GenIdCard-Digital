"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowDown, ArrowDownRight, ArrowUpRight, Check, MapPin } from "lucide-react";
import { storyScenes } from "@/data/attendance-story";
import { track } from "@/lib/analytics";
import { useActiveStoryScene } from "@/hooks/useActiveStoryScene";
import PhoneMockup from "@/components/whatsapp/PhoneMockup";
import DashboardPreview from "@/components/dashboard/DashboardPreview";
import StoryProgress from "./StoryProgress";
import DemoLanguagePicker from "@/components/whatsapp/DemoLanguagePicker";
import type { Locale } from "@/types/whatsapp";

export default function ScrollStory() {
  const ref = useRef<HTMLElement>(null);
  const [locale, setLocale] = useState<Locale>("en");
  const { active, enhanced } = useActiveStoryScene(ref, storyScenes.length);
  const started = useRef(false);
  const completed = useRef(false);
  const scene = storyScenes[active];
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting) && !started.current) { track("story_started"); started.current = true; }
    }, { threshold: 0 });
    observer.observe(node); return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const finalStep = ref.current?.querySelector("#scene-dashboard")?.getBoundingClientRect();
    if (active === 7 && started.current && !completed.current && finalStep && finalStep.top < window.innerHeight && finalStep.bottom > 100) {
      track("story_completed"); completed.current = true;
    }
  }, [active]);
  return <section id="how-it-works" className="story-section" ref={ref} aria-labelledby="story-heading">
    <div className="section-intro container"><div><span className="eyebrow"><span />A WORKDAY, REIMAGINED</span><h2 id="story-heading">One conversation.<br /><span>A whole day connected.</span></h2></div><div className="section-intro-copy"><p>From the first welcome message to the final attendance report. Follow the little moments that make a big difference.</p><a href="#dashboard" className="text-link" onClick={() => track("story_skipped", { from: scene.id })}>Skip to dashboard <ArrowUpRight size={15} /></a><DemoLanguagePicker value={locale} onChange={setLocale} /></div></div>
    <div className="story-layout container" data-enhanced={enhanced}>
      <div className="story-steps">{storyScenes.map((step, index) => <article id={`scene-${step.id}`} key={step.id} data-scene={step.id} className={`story-scene ${active === index ? "scene-active" : ""}`} aria-labelledby={`title-${step.id}`}>
        <div className="scene-copy"><span className="scene-index"><span>{String(index + 1).padStart(2, "0")}</span>{step.label}</span><h3 id={`title-${step.id}`}>{step.title}</h3><p>{step.description}</p><span className="scene-benefit"><Check size={15} />{step.benefit}</span><small>{step.detail}</small></div>
        <div className="scene-static">{step.screen === "dashboard" ? <DashboardPreview compact /> : <PhoneMockup scene={step} locale={locale} animate={false} />}</div>
      </article>)}</div>
      <div className={`story-stage ${scene.screen === "dashboard" ? "stage-is-dashboard" : ""}`}>
        <div className="mobile-scene-copy"><span className="scene-index">{String(active + 1).padStart(2, "0")} / 08 <span>{scene.label}</span></span><h3>{scene.title.replace("\n", " ")}</h3><p>{scene.description}</p></div>
        <div className="story-visual"><div className="story-orbit orbit-one" /><div className="story-orbit orbit-two" /><span className="story-demo-tag"><span />ILLUSTRATIVE PRODUCT DEMO</span>
          <div className="story-phone" aria-hidden={scene.screen === "dashboard" || undefined} ref={node => { if (node) node.inert = scene.screen === "dashboard"; }}><PhoneMockup scene={scene} locale={locale} /></div>
          {scene.screen === "dashboard" && <div className="dashboard-reveal"><DashboardPreview compact /></div>}
          {scene.screen !== "dashboard" && <aside className={`scene-annotation ${active === 5 || active === 6 ? "annotation-alert" : ""}`}><span className="annotation-icon">{active === 2 || active === 4 ? <MapPin size={17} /> : <Check size={17} />}</span><span>{scene.annotation.label}<strong>{scene.annotation.value}</strong><small>{scene.annotation.subtext}</small></span></aside>}
        </div>
        <div className="stage-bottom"><StoryProgress scenes={storyScenes} active={active} /><span className="scroll-hint" style={{ opacity: active === 0 ? 1 : 0 }}><ArrowDown size={13} />Scroll to follow the day</span><span className="mobile-benefit"><Check size={13} />{scene.benefit}</span></div>
      </div>
    </div>
    <div className="story-outro container"><span className="eyebrow">FAMILIAR FOR YOUR TEAM. CLEARER FOR YOU.</span><ArrowDownRight size={30} /></div>
  </section>;
}
