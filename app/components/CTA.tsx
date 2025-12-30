// app/services/page.tsx
import ServicesHero from "../components/ServicesHero";
import ServicesGrid from "../components/ServicesGrid";
import ServiceCTA from "../components/ServiceCTA";
import ServiceBenefits from "../components/ServiceBenefits";

export default function ServicesPage() {
  return (
    <main className="pt-24 pb-20">
      <ServicesHero />
      <ServicesGrid />
      <ServiceBenefits />
      <ServiceCTA />
    </main>
  );
}