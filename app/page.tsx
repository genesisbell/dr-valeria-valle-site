import AboutSection from '@/components/AboutSection';
import ProfileSection from '@/components/ProfileSection';
import ServicesSection from '@/components/ServicesSection';

export default function Home() {
  return (
    <main className="pt-20">
      <AboutSection />
      <ProfileSection />
      <ServicesSection />
    </main>
  );
}
