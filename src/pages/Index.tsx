import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import LatestEpisode from "@/components/LatestEpisode";
import TopicsSection from "@/components/TopicsSection";
import ClipsSection from "@/components/ClipsSection";
import SocialSection from "@/components/SocialSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <AboutSection />
      <LatestEpisode />
      <TopicsSection />
      <ClipsSection />
      <SocialSection />
      <Footer />
    </div>
  );
};

export default Index;
