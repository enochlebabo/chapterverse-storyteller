import { Badge } from "@/components/ui/badge";
import { CheckCircle2 } from "lucide-react";

const equipment = [
  "L-Acoustics Line Arrays",
  "Shure Wireless Systems",
  "Allen & Heath Digital Consoles",
  "Sennheiser Premium Microphones",
  "QSC Power Amplifiers",
  "dbx Processing Equipment",
];

const Technology = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <Badge className="mb-4">Industry-Leading Equipment</Badge>
            <h2 className="text-4xl md:text-5xl font-bold">
              The <span className="text-gradient">Technology</span> Behind Our Verse
            </h2>
            <p className="text-xl text-muted-foreground">
              We invest in the best equipment so you get the best experience. 
              Our arsenal includes industry-standard gear trusted by the world's top venues.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((item, index) => (
              <div 
                key={index}
                className="glass-card p-6 rounded-lg flex items-center gap-4 hover:border-primary/50 transition-all duration-300"
              >
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0" />
                <span className="font-medium text-left">{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-8">
            <p className="text-lg text-muted-foreground italic">
              "In our Verse, we don't compromise on quality. Every cable, every speaker, 
              every microphone is chosen to deliver perfection."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;
