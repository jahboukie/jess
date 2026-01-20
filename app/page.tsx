import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { BusinessModelSection } from "@/components/business-model-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <ExpertiseSection />
      <BusinessModelSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
