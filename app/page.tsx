import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import HowItWorks from "@/components/HowItWorks";
import PowerfulFeatures from "@/components/PowerfulFeatures";
import BuiltFor from "@/components/BuiltFor";
import AnalyticsDashboard from "@/components/AnalyticsDashboard";
import PrivacyTrust from "@/components/PrivacyTrust";
import Pricing from "@/components/Pricing";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TheProblem />
      <HowItWorks />
      <PowerfulFeatures />
      <BuiltFor />
      <AnalyticsDashboard />
      <PrivacyTrust />
      <Pricing />
      <CTASection />
      <ContactForm />
      <Footer />
    </main>
  );
}
