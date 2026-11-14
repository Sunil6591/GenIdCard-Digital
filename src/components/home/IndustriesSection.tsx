import { ArrowUpRight, BriefcaseBusiness, Brush, Building2, HardHat, ShieldCheck, Wrench } from "lucide-react";
import Link from "next/link";
export default function IndustriesSection() {
  return <section className="industries-section container" id="industries" aria-labelledby="industries-heading"><div className="section-intro"><div><span className="eyebrow">WHEREVER WORK HAPPENS</span><h2 id="industries-heading">Attendance for security,<br />housekeeping and field teams.</h2></div><p>Different uniforms. Different worksites.<br />One familiar way to mark attendance.</p></div><div className="industries-grid">{[
    { icon: ShieldCheck, href: "/solutions/security-agencies", title: "Security agencies", text: "Keep guard attendance visible across client sites and shifts." },
    { icon: Brush, href: "/solutions/housekeeping", title: "Housekeeping services", text: "Bring distributed cleaning teams into a consistent daily routine." },
    { icon: Building2, href: "/solutions/facility-management", title: "Facility management", text: "Review attendance across properties from one workspace." },
    { icon: HardHat, href: "/solutions/construction", title: "Construction teams", text: "Give crews a familiar attendance flow at assigned worksites." },
    { icon: Wrench, href: "/solutions/field-services", title: "Field service businesses", text: "Keep site-based attendance records for teams out in the field." },
    { icon: BriefcaseBusiness, href: "/solutions", title: "Multi-location businesses", text: "See how each location’s day is taking shape." },
  ].map(({ icon: Icon, title, text, href }) => <article key={title}><Icon size={25} strokeWidth={1.4} /><h3>{title}</h3><p>{text}</p><Link href={href} aria-label={`Explore attendance for ${title.toLowerCase()}`}><ArrowUpRight size={18} /></Link></article>)}</div></section>;
}
