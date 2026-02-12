import Hero from "@/components/Hero";
import WhoItsFor from "@/components/WhoItsFor";
import HowItWorks from "@/components/HowItWorks";
import WhyGenIdCard from "@/components/WhyGenIdCard";
import Pricing from "@/components/Pricing";
import PaymentSection from "@/components/PaymentSection";
import Trust from "@/components/Trust";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <WhoItsFor />
      <HowItWorks />
      <WhyGenIdCard />
      <Pricing />
      <PaymentSection />
      <Trust />
      <ContactForm />
      <Footer />
    </main>
  );
}

