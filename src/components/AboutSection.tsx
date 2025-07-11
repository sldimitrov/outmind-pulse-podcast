import hostsPortrait from "@/assets/hosts-portrait.jpg";

const AboutSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-montserrat font-black mb-8">
              About the <span className="text-gradient">Podcast</span>
            </h2>
            
            <div className="space-y-6 text-lg md:text-xl font-inter leading-relaxed">
              <p className="text-muted-foreground">
                Two 19-year-olds. One code, one chaos.
              </p>
              
              <p>
                <span className="text-primary font-semibold">Outmind</span> is the unfiltered voice of Gen Z — 
                mindset, business, identity, and building beyond borders.
              </p>
              
              <p className="text-muted-foreground">
                We dive deep into the topics that matter to our generation: from breaking mental barriers 
                to building the next big thing, from understanding crypto to questioning everything 
                the world tells us we should be.
              </p>
              
              <p className="font-semibold text-foreground">
                Raw conversations. Real perspectives. No filter.
              </p>
            </div>

            <div className="flex gap-4 mt-10">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">19 years old</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">Gen Z Voice</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">Unfiltered</span>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="animate-scale-in">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
              <img 
                src={hostsPortrait} 
                alt="Outmind Podcast Hosts" 
                className="relative w-full rounded-2xl shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              
              {/* Overlay text */}
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-2xl font-montserrat font-bold mb-2">The Hosts</h3>
                <p className="text-muted-foreground">Building the future, one conversation at a time</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;