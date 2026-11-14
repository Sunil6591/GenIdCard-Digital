import { Plus } from "lucide-react";
import { siteConfig } from "@/lib/config";
const faqs = [
  ["Do employees need to install another app?", "Employees use WhatsApp for the attendance flow. They need WhatsApp on their phone, rather than a separate FootfallIQ employee app. Managers use a web dashboard."],
  ["How do employees check in and check out?", "An employee explicitly opens WhatsApp’s attachment menu and shares their current location in the attendance conversation. They share their current location again at checkout. A standard quick-reply button does not automatically send GPS coordinates."],
  ["How does location verification work?", "FootfallIQ can compare submitted coordinates with the assigned site’s configured radius. The result adds location context to an attendance event. It does not prove identity or guarantee the absence of fraud."],
  ["Can I manage multiple sites and different shifts?", "The workflow is organized around employees, sites, and assigned shifts, with centralized attendance visibility. We’ll discuss your site structure and shift requirements during a demo."],
  ["What happens when someone forgets to check in?", "The demonstrated flow highlights an expected attendance event that has not arrived and shows a follow-up reminder. Confirm the available reminder rules and exception behavior for your setup during your demo."],
  ["Can supervisors receive alerts?", "This site illustrates a proposed supervisor escalation for an unresolved attendance exception. Supervisor alert availability, delivery, and escalation rules must be confirmed; the demonstration is not a claim that this feature is live in production."],
  ["Can owners view daily attendance?", "The management dashboard is intended to bring daily attendance, site summaries, and exceptions into one view. The dashboard and downloadable report on this page contain demonstration data only."],
  ["Is employee location tracked continuously?", "This demonstration uses locations explicitly shared by the employee at check-in and checkout. It does not depict continuous or background tracking. Confirm the production service’s data practices in its approved privacy policy before rollout."],
  ["Does it support English, Hindi, and Marathi?", "The demonstration includes the supplied English, Hindi, and Marathi templates. Use the demo language selector to explore them. These templates are drafts for Meta approval; final approval and production language availability still need confirmation."],
  ["Does FootfallIQ calculate payroll or paid hours?", "The demonstration records attendance event timestamps. Payroll integration and paid-hours calculation are not represented as confirmed capabilities. Discuss any such requirements during a demo."],
];
export default function FAQSection() {
  return <section className="faq-section container" id="faq" aria-labelledby="faq-heading"><div><span className="eyebrow">A FEW THINGS YOU MIGHT ASK</span><h2 id="faq-heading">Clear answers.<br /><span>Less guesswork.</span></h2><p>Have a different question?<br /><a href={siteConfig.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-link">Let’s talk about your team ↗</a></p></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<Plus size={18} /></summary><p>{answer}</p></details>)}</div></section>;
}
