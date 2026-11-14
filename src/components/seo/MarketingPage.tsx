import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { marketingPageByPath, type MarketingPage as PageContent } from "@/data/marketing-pages";
import { siteConfig } from "@/lib/config";
import { breadcrumbData } from "@/lib/structured-data";
import JsonLd from "./JsonLd";
import DemoRequestForm from "@/components/home/DemoRequestForm";

export default function MarketingPage({ page }: { page: PageContent }) {
  const parent = page.path.startsWith("/features/") ? { name: "Features", path: "/features" } : page.path.startsWith("/solutions/") ? { name: "Solutions", path: "/solutions" } : null;
  const breadcrumbs = [{ name: "Home", path: "/" }, ...(parent ? [parent] : []), { name: page.eyebrow === "LET'S TALK" ? "Demo" : page.title, path: page.path }];
  const pricing = page.path === "/pricing";
  return <main id="main-content" className="marketing-page">
    <JsonLd data={breadcrumbData(breadcrumbs)} />
    <div className="container">
      <nav className="breadcrumbs" aria-label="Breadcrumb"><ol>{breadcrumbs.map((item, index) => <li key={item.path}>{index < breadcrumbs.length - 1 ? <Link href={item.path}>{item.name}</Link> : <span aria-current="page">{item.name}</span>}</li>)}</ol></nav>
      <header className="marketing-hero"><span className="eyebrow"><span />{page.eyebrow}</span><h1>{page.h1}</h1><p>{page.intro}</p><div className="marketing-actions"><Button asChild size="lg"><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" data-track={pricing ? "pricing_cta_click" : "whatsapp_click"} data-location={page.path}>{page.cta}<ArrowUpRight size={16} /></a></Button><Link className="text-link" href="/how-it-works">Read how attendance works <ArrowUpRight size={15} /></Link></div><span className="marketing-reassurance"><Check size={14} />WhatsApp for employees. One dashboard for managers.</span></header>
      <div className="marketing-layout"><aside className="marketing-toc" aria-label="On this page"><strong>IN THIS GUIDE</strong><ol>{page.sections.map((section, index) => <li key={section.heading}><a href={`#section-${index + 1}`}>{section.heading}</a></li>)}</ol><Link href="/demo" className="text-link">Talk about your team <ArrowUpRight size={14} /></Link></aside>
        <div className="marketing-body">{page.sections.map((section, index) => <section id={`section-${index + 1}`} key={section.heading}><span className="marketing-section-number">{String(index + 1).padStart(2, "0")}</span><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}{section.points && <ul>{section.points.map(point => <li key={point}>{point}</li>)}</ul>}</section>)}</div>
      </div>
      <section className="marketing-related" aria-labelledby="related-heading"><span className="eyebrow">KEEP EXPLORING</span><h2 id="related-heading">The connected attendance workflow.</h2><div className="marketing-card-grid">{page.related.map(path => {
        const related = marketingPageByPath.get(path)!;
        return <Link className="marketing-card" href={path} key={path}><span>{related.eyebrow}</span><h3>{related.title}</h3><p>{related.description}</p><span className="text-link">Explore the guide <ArrowUpRight size={16} /></span></Link>;
      })}</div></section>
      {page.faqs.length > 0 && <section className="marketing-faq" aria-labelledby="page-faq-heading"><div><span className="eyebrow">PRACTICAL ANSWERS</span><h2 id="page-faq-heading">Frequently asked questions.</h2></div><div className="faq-list">{page.faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></section>}
      {page.path === "/demo" && process.env.DEMO_WEBHOOK_URL && <section className="marketing-enquiry" aria-label="Optional demo enquiry"><h2>Prefer to leave your details?</h2><DemoRequestForm connected /></section>}
      <section className="marketing-end"><div><span className="eyebrow">A CLEARER NEXT STEP</span><h2>{pricing ? "Let's discuss the right scope." : "Bring your team's questions."}</h2><p>Talk through your employees, sites and shifts. No employee records are needed for an enquiry.</p></div><Button asChild size="lg"><Link href={page.path === "/demo" ? "/pricing" : "/demo"}>{page.path === "/demo" ? "Discuss pricing and scope" : "Arrange an attendance demo"}<ArrowUpRight size={16} /></Link></Button></section>
    </div>
  </main>;
}
