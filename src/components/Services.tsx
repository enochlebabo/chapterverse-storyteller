import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Music, Mic, Sparkles, Headphones, Radio, Zap } from "lucide-react";

const services = [
  {
    icon: Music,
    title: "Concert Production",
    description: "From intimate venues to massive festivals, we deliver stadium-quality sound that captivates thousands.",
  },
  {
    icon: Mic,
    title: "Wedding & Events",
    description: "Make your special day unforgettable with crystal-clear audio that captures every vow and speech.",
  },
  {
    icon: Sparkles,
    title: "Corporate Events",
    description: "Professional AV solutions for conferences, product launches, and corporate gatherings.",
  },
  {
    icon: Headphones,
    title: "Studio Recording",
    description: "State-of-the-art recording facilities for podcasts, voiceovers, and music production.",
  },
  {
    icon: Radio,
    title: "Live Streaming",
    description: "Broadcast your event to the world with our professional streaming and production services.",
  },
  {
    icon: Zap,
    title: "Technical Consulting",
    description: "Expert advice on venue acoustics, equipment procurement, and sound system design.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cutting-edge technology and expert execution for every type of event
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="glass-card border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-glow group"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
