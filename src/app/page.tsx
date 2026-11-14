import HeroSection from "@/components/home/HeroSection";
import BenefitsSection from "@/components/home/BenefitsSection";
import ScrollStory from "@/components/storytelling/ScrollStory";
import FeaturesSection from "@/components/home/FeaturesSection";
import IndustriesSection from "@/components/home/IndustriesSection";
import DashboardSection from "@/components/home/DashboardSection";
import ComparisonSection from "@/components/home/ComparisonSection";
import PricingSection from "@/components/home/PricingSection";
import FAQSection from "@/components/home/FAQSection";
import CTASection from "@/components/home/CTASection";
export default function Home() {
  return <main id="main-content"><HeroSection /><BenefitsSection /><ScrollStory /><FeaturesSection /><IndustriesSection /><DashboardSection /><ComparisonSection /><PricingSection /><FAQSection /><CTASection connected={!!process.env.DEMO_WEBHOOK_URL} /></main>;
}
