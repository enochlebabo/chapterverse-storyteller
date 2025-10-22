import { Card } from "@/components/ui/card";
import { Building2, Globe2, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-card/30">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">
              About <span className="text-gradient">Our Universe</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Mrchapter-Verse Media is more than an event production company—we are 
              a narrative-driven event technology partner, architecting the soundscapes 
              that define your most important moments.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="glass-card p-8 text-center space-y-4 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Building2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Professional Structure</h3>
              <p className="text-muted-foreground">
                Operating under Mrchapter-Verse Holdings, we bring corporate-level 
                professionalism to every project.
              </p>
            </Card>

            <Card className="glass-card p-8 text-center space-y-4 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Globe2 className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Regional Coverage</h3>
              <p className="text-muted-foreground">
                Proudly serving South Africa and Lesotho with elite, reliable, 
                and community-connected service.
              </p>
            </Card>

            <Card className="glass-card p-8 text-center space-y-4 hover:border-primary/50 transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Excellence Driven</h3>
              <p className="text-muted-foreground">
                Every event is a chapter in someone's story. We ensure it's told 
                with flawless execution.
              </p>
            </Card>
          </div>

          <div className="glass-card p-10 rounded-2xl space-y-6">
            <h3 className="text-3xl font-bold text-center">Our Mission</h3>
            <p className="text-lg text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto">
              We architect the immersive soundscapes and seamless environments that define 
              your most important chapters. From the intimate whisper of a wedding vow to 
              the roaring climax of a concert, we provide the cutting-edge technology and 
              expert execution that makes your moment unforgettable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
