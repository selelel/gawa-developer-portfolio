import ServicesSection from "./_components/ServicesSection";
import WhyChooseUsSection from "./_components/WhyChooseUsSection";
import ProcessSection from "./_components/ProcessSection";
import FeaturedProjectsSection from "./_components/FeaturedProjectsSection";
import TechStackSection from "./_components/TechStackSection";
import FAQSection from "./_components/FAQSection";
import FinalCTASection from "./_components/FinalCTASection";
import HeroSection from "./_components/HeroSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <ProcessSection />
      <FeaturedProjectsSection />
      <TechStackSection />
      <FAQSection />
      <FinalCTASection />
    </main>
  );
}
