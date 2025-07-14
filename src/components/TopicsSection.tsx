import { Brain, Code, Coins, Rocket, User, Target, TrendingUp, Zap } from "lucide-react";

const topics = [
  { icon: Brain, label: "Mindset", color: "text-blue-400" },
  { icon: Code, label: "Tech", color: "text-green-400" },
  { icon: Coins, label: "Crypto", color: "text-yellow-400" },
  { icon: Rocket, label: "Startups", color: "text-purple-400" },
  { icon: User, label: "Identity", color: "text-pink-400" },
  { icon: Target, label: "Discipline", color: "text-red-400" },
  { icon: TrendingUp, label: "Growth", color: "text-cyan-400" },
  { icon: Zap, label: "Energy", color: "text-orange-400" },
];

const TopicsSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-montserrat font-black mb-6">
            Topics We <span className="text-gradient">Cover</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From breaking mental barriers to building empires - we dive deep into what matters
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {topics.map((topic, index) => {
            const IconComponent = topic.icon;
            return (
              <div
                key={topic.label}
                className="topic-item group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <IconComponent className={`w-8 h-8 mx-auto mb-3 ${topic.color} group-hover:text-primary-foreground transition-colors duration-300`} />
                <h3 className="font-montserrat font-semibold text-lg">
                  {topic.label}
                </h3>
              </div>
            );
          })}
        </div>

        {/* Additional context */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We don't just talk about these topics - we live them. Every episode brings raw insights
            from two Gen Z entrepreneurs who are building their future in real-time.
          </p>
          
          <div className="flex flex-col items-center sm:flex-row justify-center gap-4 mt-8">
            <div className="bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-primary font-semibold">Real Stories</span>
            </div>
            <div className="bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-primary font-semibold">No BS</span>
            </div>
            <div className="bg-primary/10 px-6 py-3 rounded-full">
              <span className="text-primary font-semibold">Gen Z Perspective</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopicsSection;
