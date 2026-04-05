import AboutSection from '@/components/AboutSection';
import ProfileSection from '@/components/ProfileSection';
import ServicesSection from '@/components/ServicesSection';
import ReviewsSection from '@/components/ReviewsSection';
import LocationSection from '@/components/LocationSection';

export default function Home() {
  return (
    <main>
      <AboutSection />
      <ProfileSection />
      <ServicesSection />
      <ReviewsSection />
      <LocationSection />
    </main>
  );
}
