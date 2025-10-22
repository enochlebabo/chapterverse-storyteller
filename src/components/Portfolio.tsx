import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Summer Music Festival 2024",
    category: "Concert Production",
    description: "3-day festival with 20,000+ attendees. Full main stage and VIP lounge production.",
    stats: "20K+ Attendees • 3 Stages • 48 Hours",
  },
  {
    title: "Vodacom Annual Conference",
    category: "Corporate Event",
    description: "National conference with simultaneous breakout sessions and keynote presentations.",
    stats: "500+ Delegates • 5 Rooms • 2 Days",
  },
  {
    title: "Thabo & Maria's Wedding",
    category: "Wedding",
    description: "Elegant outdoor ceremony and reception with custom sound design and DJ services.",
    stats: "250 Guests • Garden Venue • 8 Hours",
  },
  {
    title: "Royal Lesotho Marathon",
    category: "Outdoor Event",
    description: "Marathon event with distributed sound system across 5km route and finish line.",
    stats: "5,000 Runners • 10 Zones • Full Day",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="text-gradient">Chapters</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stories we've helped tell through flawless production
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="glass-card border-2 hover:border-primary/50 transition-all duration-300 overflow-hidden group"
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE0YzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNk0xMiAyYzMuMzEgMCA2IDIuNjkgNiA2cy0yLjY5IDYtNiA2LTYtMi42OS02LTYgMi42OS02IDYtNiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                    {project.category}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6 space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-border/50">
                  <p className="text-sm font-medium text-primary">
                    {project.stats}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
