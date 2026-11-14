import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import StorySection from "@/components/storytelling/StorySection";
import FeaturesSection from "@/components/home/FeaturesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import DashboardSection from "@/components/home/DashboardSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import { websiteGraph } from "@/lib/structured-data";
import { pageMetadata, homeTitle, homeDescription } from "@/lib/seo";
export const metadata = pageMetadata(homeTitle, homeDescription, "/");
export default function Home() {
  return <main id="main-content"><JsonLd data={websiteGraph()} /><HeroSection /><BenefitsSection /><StorySection /><FeaturesSection /><IndustriesSection /><DashboardSection /><ComparisonSection /><PricingSection /><FAQSection /><CTASection connected={!!process.env.DEMO_WEBHOOK_URL} /></main>;
}
