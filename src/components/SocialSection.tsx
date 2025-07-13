import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {ArrowRight, Instagram, Music, Send, Youtube} from "lucide-react";
import {useSubscribeUser} from "@/queries/useSubscribeUser";

const SocialSection = () => {
    const mutation = useSubscribeUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;

        mutation.mutate(email, {
            onSuccess: (data) => {
                console.log("Subscription successful:", data);
                alert("Welcome to the Outmind circle!");
            },
            onError: (error) => {
                console.log("Subscription failed:", error);
                alert('Failed to subscribe. Try again later.');
            }
        });

        e.target.email.value = ""
    }

    return (
        <form onSubmit={handleSubmit}>
            <section className="py-24 px-6 bg-gradient-to-b from-background via-secondary/20 to-background">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl font-montserrat font-black mb-6">
                            Join the <span className="text-gradient">Movement</span>
                        </h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            Follow us across platforms and never miss a conversation that could change your perspective
                        </p>
                    </div>

                    {/* Social Platform Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {/* YouTube */}
                        <div className="card-hover group text-center">
                            <div
                                className="bg-red-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-600 transition-colors duration-300">
                                <Youtube
                                    className="w-8 h-8 text-red-600 group-hover:text-white transition-colors duration-300"/>
                            </div>
                            <h3 className="font-montserrat font-bold text-xl mb-2">YouTube</h3>
                            <p className="text-muted-foreground mb-4">Full episodes & behind the scenes</p>
                            <div className="text-2xl font-bold text-primary mb-2">10+</div>
                            <div className="text-sm text-muted-foreground">Subscribers</div>
                        </div>

                        {/* Spotify */}
                        <div className="card-hover group text-center">
                            <div
                                className="bg-green-600/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-600 transition-colors duration-300">
                                <Music
                                    className="w-8 h-8 text-green-600 group-hover:text-white transition-colors duration-300"/>
                            </div>
                            <h3 className="font-montserrat font-bold text-xl mb-2">Spotify</h3>
                            <p className="text-muted-foreground mb-4">Audio episodes on the go</p>
                            <div className="text-2xl font-bold text-primary mb-2">15K</div>
                            <div className="text-sm text-muted-foreground">Monthly Listeners</div>
                        </div>

                        {/* Instagram */}
                        <div className="card-hover group text-center">
                            <div
                                className="bg-gradient-to-r from-purple-600 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                                <Instagram className="w-8 h-8 text-white"/>
                            </div>
                            <h3 className="font-montserrat font-bold text-xl mb-2">Instagram</h3>
                            <p className="text-muted-foreground mb-4">Daily insights & stories</p>
                            <div className="text-2xl font-bold text-primary mb-2">31K</div>
                            <div className="text-sm text-muted-foreground">Followers</div>
                        </div>

                        {/* TikTok */}
                        <div className="card-hover group text-center">
                            <div
                                className="bg-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors duration-300">
                                <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                    <path
                                        d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                                </svg>
                            </div>
                            <h3 className="font-montserrat font-bold text-xl mb-2">TikTok</h3>
                            <p className="text-muted-foreground mb-4">Viral clips & hot takes</p>
                            <div className="text-2xl font-bold text-primary mb-2">87K</div>
                            <div className="text-sm text-muted-foreground">Followers</div>
                        </div>
                    </div>

                    {/* Newsletter Signup */}
                    <div className="card-hover max-w-2xl mx-auto text-center">
                        <h3 className="text-3xl font-montserrat font-bold mb-4">
                            Never Miss an <span className="text-gradient">Episode</span>
                        </h3>
                        <p className="text-muted-foreground mb-8">
                            Get notified when new episodes drop, plus exclusive behind-the-scenes content and early
                            access
                            to special episodes.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Input
                                type="email"
                                name="email"
                                placeholder="Enter your email address"
                                className="flex-1 bg-secondary/50 border-border focus:border-primary text-foreground placeholder:text-muted-foreground"
                            />
                            <Button type="submit" className="btn-hero group">
                                <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform"/>
                                Subscribe
                            </Button>
                        </div>

                        <p className="text-xs text-muted-foreground mt-4">
                            Join 12,000+ Gen Z entrepreneurs and creators. No spam, just value.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="flex justify-center gap-8 mt-16">
                        <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                            <a
                                href="https://www.youtube.com/@OutmindPod"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            > <Youtube className="w-5 h-5 mr-2"/>
                                YouTube
                                <ArrowRight className="w-4 h-4 ml-2"/></a>

                        </Button>

                        <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                            <Music className="w-5 h-5 mr-2"/>
                            Spotify
                            <ArrowRight className="w-4 h-4 ml-2"/>
                        </Button>

                        <Button variant="ghost" className="text-muted-foreground hover:text-primary">
                            <a
                                href="https://www.instagram.com/outmindpod/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center"
                            >
                                <Instagram className="w-5 h-5 mr-2"/>
                                Instagram
                                <ArrowRight className="w-4 h-4 ml-2"/>
                            </a>


                        </Button>
                    </div>
                </div>
            </section>
        </form>
    );
};

export default SocialSection;
