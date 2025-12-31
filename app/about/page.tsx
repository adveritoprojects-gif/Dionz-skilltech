// app/about/page.tsx
import AboutHero from "../components/AboutHero";
import OurHistory from "../components/OurHistory";
import MissionVision from "../components/MissionVision";
import ContactInfo from "../components/ContactInfo";
import TeamValues from "../components/TeamValues";

export default function AboutPage() {
  return (
    <main className="pt-1 pb-20">
      <AboutHero />
      <OurHistory />
      <MissionVision />
      <TeamValues />
      <ContactInfo />
    </main>
  );
}