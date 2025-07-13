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
          <div
              className="relative aspect-video rounded-xl overflow-hidden mb-8 bg-gradient-to-br from-secondary to-muted group cursor-pointer">
            <div className="relative aspect-video rounded-xl overflow-hidden mb-8">
              <iframe
                  src="https://www.youtube.com/embed/fwaoaHzZN00"
                  title="Episode #23: Breaking the Matrix of Expectations"
                  className="absolute inset-0 w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
              ></iframe>
            </div>

            {/* Placeholder for actual YouTube embed */}
            <div className="absolute top-4 left-4 bg-red-600 px-3 py-1 rounded text-white font-semibold text-sm">
              LIVE
            </div>

            <div className="absolute bottom-4 left-4 right-4">
              <div className="bg-black/70 backdrop-blur-sm rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">Няма как да успееш в България? – На 19 с големи мечти (OUTMIND S1E1)</h3>
                <p className="text-muted-foreground text-sm">
                  Какво е да си на 19, да имаш визия, и да се опитваш да я реализираш в среда, която те дърпа надолу?
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
                <span>Episode #1</span>
                <span>•</span>
                <span>42 min</span>
                <span>•</span>
                <span>Released 1 day ago</span>
              </div>
            </div>

            <Button className="btn-hero group shrink-0">
              <a
                href="https://www.youtube.com/@OutmindPod"
                target="_blank"
                className="flex"
              >
                <ExternalLink className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                All Episodes
              </a>

            </Button>
          </div>
        </div>

        {/* Quick stats */}
        <div className="flex justify-center gap-8 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">1</div>
            <div className="text-muted-foreground">Episode</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10+</div>
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
