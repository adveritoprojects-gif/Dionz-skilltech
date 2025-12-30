import ServicesSection from "../components/Services";
import CTA from "../components/CTA";

export default function ServicesPage() {
  return (
    <div className="pt-24">
      {/* Hero Section for Services Page */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive staffing solutions tailored to your business needs.
            From executive search to contract staffing, we've got you covered.
          </p>
        </div>
      </section>

      <ServicesSection />
      <CTA />
    </div>
  );
}
