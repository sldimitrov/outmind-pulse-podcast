import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";
import outmindLogo from "@/assets/outmind-logo.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 animate-fade-in-up">
          <img 
            src={outmindLogo} 
            alt="Outmind Logo" 
            className="w-32 h-32 mx-auto rounded-sm mb-6 hover:scale-110 transition-transform duration-300"
          />
        </div>

        {/* Main Title with Glitch Effect */}
        <h1 
          className="text-7xl md:text-9xl font-montserrat font-black mb-6 glitch text-glow"
          data-text="OUTMIND"
        >
          <span className="text-gradient">OUTMIND</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl md:text-3xl font-inter font-light mb-8 text-muted-foreground animate-fade-in-up delay-300">
          The next generation isn't coming.<br />
          <span className="text-primary font-semibold">It's already talking.</span>
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up delay-500">
          <Button className="btn-hero group">
            <a
                href="https://www.youtube.com/watch?v=fwaoaHzZN00&t=3s"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch on YouTube
              <ExternalLink  className="w-4 h-4 ml-2 opacity-70" />
            </a>

          </Button>
          
          <Button variant="outline" className="btn-outline-hero group">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-2 15V7l6 5-6 5z"/>
            </svg>
            Listen on Spotify Soon
            <ExternalLink className="w-4 h-4 ml-2 opacity-70" />
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute mt-20 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
