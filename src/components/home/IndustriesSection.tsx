import { ArrowUpRight, BriefcaseBusiness, Brush, Building2, HardHat, ShieldCheck, Wrench } from "lucide-react";
import { siteConfig } from "@/lib/config";
export default function IndustriesSection() {
  return <section className="industries-section container" id="industries" aria-labelledby="industries-heading"><div className="section-intro"><div><span className="eyebrow">WHEREVER WORK HAPPENS</span><h2 id="industries-heading">For teams that don’t<br />all sit in one office.</h2></div><p>Different uniforms. Different worksites.<br />One familiar way to mark attendance.</p></div><div className="industries-grid">{[
    { icon: ShieldCheck, title: "Security agencies", text: "Keep guard attendance visible across client sites and shifts." },
    { icon: Brush, title: "Housekeeping services", text: "Bring distributed cleaning teams into a consistent daily routine." },
    { icon: Building2, title: "Facility management", text: "Review attendance across properties from one workspace." },
    { icon: HardHat, title: "Construction teams", text: "Give crews a familiar attendance flow at assigned worksites." },
    { icon: Wrench, title: "Field service businesses", text: "Keep site-based attendance records for teams out in the field." },
    { icon: BriefcaseBusiness, title: "Multi-location businesses", text: "See how each location’s day is taking shape." },
  ].map(({ icon: Icon, title, text }) => <article key={title}><Icon size={25} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`Discuss attendance for ${title.toLowerCase()}`}><ArrowUpRight size={18} /></a></article>)}</div></section>;
}
