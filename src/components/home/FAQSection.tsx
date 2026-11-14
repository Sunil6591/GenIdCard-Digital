import { Plus } from "lucide-react";
import { siteConfig } from "@/lib/config";
const faqs = [
  ["Do employees need to install another app?", "Employees use WhatsApp for the attendance flow. They need WhatsApp on their phone, rather than a separate FootfallIQ employee app. Managers use a web dashboard."],
  ["How do employees check in and check out?", "An employee explicitly opens WhatsApp’s attachment menu and shares their current location in the attendance conversation. They share their current location again at checkout. A standard quick-reply button does not automatically send GPS coordinates."],
  ["How does location verification work?", "FootfallIQ can compare submitted coordinates with the assigned site’s configured radius. The result adds location context to an attendance event. It does not prove identity or guarantee the absence of fraud."],
  ["Can I manage multiple sites and different shifts?", "The workflow is organized around employees, sites, and assigned shifts, with centralized attendance visibility. We’ll discuss your site structure and shift requirements during a demo."],
  ["What happens when someone forgets to check in?", "FootfallIQ highlights missing expected attendance and follows up with the employee. Supervisor notifications bring unresolved missing check-ins to the responsible person for review."],
  ["Can supervisors receive alerts?", "Yes. Supervisor alerts identify an unresolved missing check-in with the employee, assigned site and scheduled start so the responsible person can follow up. The example conversation uses illustrative details."],
  ["Can owners view daily attendance?", "The management dashboard brings daily attendance, site summaries, and exceptions together in one view. The dashboard and downloadable report on this page contain demonstration data only."],
  ["Is employee location tracked continuously?", "The attendance workflow uses current locations explicitly shared by employees at check-in and checkout. It does not require a continuous live-location feed. The public website does not collect employee GPS coordinates."],
  ["Does it support English, Hindi, and Marathi?", "Yes. FootfallIQ supports approved English, Hindi and Marathi WhatsApp message templates. Use the demonstration language selector to explore the supplied wording. The marketing website is currently in English."],
  ["Does FootfallIQ calculate payroll or paid hours?", "The demonstration records attendance event timestamps. Payroll integration and paid-hours calculation are not represented as confirmed capabilities. Discuss any such requirements during a demo."],
];
export default function FAQSection() {
  return <section className="faq-section container" id="faq" aria-labelledby="faq-heading"><div><span className="eyebrow">A FEW THINGS YOU MIGHT ASK</span><h2 id="faq-heading">Frequently asked<br /><span>questions.</span></h2><p>Have a different question?<br /><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link">Let’s talk about your team ↗</a></p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} /></summary><p>{answer}</p></details>)}</div></section>;
}
