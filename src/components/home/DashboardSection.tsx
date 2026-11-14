import { ArrowUpRight, Check } from "lucide-react";
import DashboardPreview from "@/components/dashboard/DashboardPreview";
import DailyReportPreview from "@/components/whatsapp/DailyReportPreview";
import { siteConfig } from "@/lib/config";
export default function DashboardSection() {
  return <section className="dashboard-section" id="dashboard" aria-labelledby="dashboard-heading"><div className="container"><div className="section-intro"><div><span className="eyebrow">THE BIG PICTURE, MINUS THE GUESSWORK</span><h2 id="dashboard-heading">Small messages.<br /><span>Workforce-wide clarity.</span></h2></div><div><p>Move from individual check-ins to the details that need your attention. Explore the sample site filter or download a demonstration report below.</p><a className="text-link" href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer">See it with your team in mind <ArrowUpRight size={15} /></a></div></div><div className="dashboard-showcase"><DashboardPreview /></div><div className="dashboard-promises"><span><Check size={14} />Site-wise attendance</span><span><Check size={14} />Pending checkouts</span><span><Check size={14} />Daily reports</span><span>All figures shown are sample data.</span></div><DailyReportPreview /></div></section>;
}
