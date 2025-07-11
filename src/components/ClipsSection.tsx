import { PlayCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const clips = [
  {
    id: 1,
    title: "Why College is a Scam",
    duration: "0:45",
    views: "127K",
    thumbnail: "bg-gradient-to-br from-red-500 to-orange-500"
  },
  {
    id: 2,
    title: "Building a Startup at 19",
    duration: "1:23",
    views: "89K",
    thumbnail: "bg-gradient-to-br from-purple-500 to-pink-500"
  },
  {
    id: 3,
    title: "Crypto Reality Check",
    duration: "0:38",
    views: "203K",
    thumbnail: "bg-gradient-to-br from-yellow-500 to-green-500"
  },
  {
    id: 4,
    title: "Mental Health Truth",
    duration: "1:15",
    views: "156K",
    thumbnail: "bg-gradient-to-br from-blue-500 to-cyan-500"
  },
];

const ClipsSection = () => {
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-montserrat font-black mb-6">
            Viral <span className="text-gradient">Clips</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The moments that made people stop scrolling and start thinking
          </p>
        </div>

        {/* Clips carousel */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
            {clips.map((clip) => (
              <div
                key={clip.id}
                className="flex-shrink-0 w-80 card-hover group cursor-pointer"
              >
                {/* Video Thumbnail */}
                <div className={`relative aspect-[9/16] ${clip.thumbnail} rounded-xl mb-4 overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <PlayCircle className="w-16 h-16 text-white group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  
                  {/* Duration badge */}
                  <div className="absolute bottom-3 right-3 bg-black/70 px-2 py-1 rounded text-white text-sm font-semibold">
                    {clip.duration}
                  </div>

                  {/* Views badge */}
                  <div className="absolute top-3 left-3 bg-primary/90 px-2 py-1 rounded text-white text-xs font-semibold">
                    {clip.views} views
                  </div>

                  {/* Platform badges */}
                  <div className="absolute top-3 right-3 flex gap-1">
                    <div className="w-6 h-6 bg-red-600 rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">YT</span>
                    </div>
                    <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                      <span className="text-white text-xs font-bold">TT</span>
                    </div>
                  </div>
                </div>

                {/* Clip Info */}
                <h3 className="font-montserrat font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  {clip.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  The clip that sparked thousands of conversations
                </p>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background/80 backdrop-blur-sm"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background/80 backdrop-blur-sm"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button className="btn-hero">
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M9.645 15.182l5.456-2.297c.35-.147.599-.498.599-.885s-.25-.738-.599-.885L9.645 8.818c-.456-.191-.995.039-.995.565v4.234c0 .526.539.756.995.565z"/>
              <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z"/>
            </svg>
            Follow @outmindpod on TikTok
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClipsSection;