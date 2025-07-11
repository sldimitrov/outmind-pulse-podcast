import { Button } from "@/components/ui/button";
import { PlayCircle, ExternalLink } from "lucide-react";

const LatestEpisode = () => {
  return (
    <section className="py-24 px-6 bg-secondary/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-montserrat font-black mb-6">
            Latest <span className="text-gradient">Episode</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Catch our newest conversation and dive into the topics shaping our generation
          </p>
        </div>

        <div className="card-hover max-w-4xl mx-auto">
          {/* YouTube Embed Placeholder */}
          <div className="relative aspect-video rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-secondary to-muted group cursor-pointer">
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center group-hover:bg-black/30 transition-colors duration-300">
              <PlayCircle className="w-24 h-24 text-primary group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            {/* Placeholder for actual YouTube embed */}
            <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded text-white font-semibold text-sm">
              LIVE
            </div>
            
            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Episode #23: Breaking the Matrix of Expectations</h3>
                <p className="text-muted-foreground text-sm">
                  Why following the traditional path might be the biggest risk you can take in 2025
                </p>
              </div>
            </div>
          </div>

          {/* Episode Details */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="text-2xl font-montserrat font-bold mb-2">
                Breaking the Matrix of Expectations
              </h3>
              <p className="text-muted-foreground mb-4 max-w-2xl">
                We explore why the traditional college-to-career pipeline might be broken, 
                how to build your own path, and why taking risks early might be the safest move you can make.
              </p>
              <div className="flex gap-3 text-sm text-muted-foreground">
                <span>Episode #23</span>
                <span>•</span>
                <span>42 min</span>
                <span>•</span>
                <span>Released 3 days ago</span>
              </div>
            </div>

            <Button className="btn-hero group shrink-0">
              <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
              All Episodes
            </Button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">23</div>
            <div className="text-muted-foreground">Episodes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">50K+</div>
            <div className="text-muted-foreground">Listeners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">4.9</div>
            <div className="text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestEpisode;