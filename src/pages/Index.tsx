import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DonateDialog from "@/components/DonateDialog";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-community.jpg";
import CURRENT_PROJECTS from "@/constants/projects";
import CORE_VALUES from "@/constants/core-values";

const Index = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDonateClick={() => setIsDonateOpen(true)} />

      {/* Hero Section */}
      <section className="relative pt-16 min-h-[90vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-transparent" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Building Tomorrow,
              <span className="text-primary"> Together</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8">
              Empowering communities in Tanzania through sustainable
              development, education, and healthcare initiatives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="text-lg bg-primary hover:bg-primary/90"
                onClick={() => setIsDonateOpen(true)}
              >
                <Heart className="mr-2" />
                Support Our Cause
              </Button>
              <Link to="/projects">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg w-full sm:w-auto"
                >
                  Our Projects
                  <ArrowRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Kesho Kutwa Yetu means "The Day After Tomorrow" in Swahili. We
              believe in creating lasting change through community-led
              initiatives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {CORE_VALUES.map((val) => (
              <div
                className="bg-card p-6 rounded-lg shadow-sm text-center"
                key={val.title}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  {val.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{val.title}</h3>
                <p className="text-muted-foreground">{val.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Current Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              See how we're making a difference in communities across Tanzania
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {CURRENT_PROJECTS.slice(0, 3).map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/projects">
              <Button size="lg" variant="outline">
                View All Projects
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Join us in building a brighter future for communities in Tanzania.
            Your support can change lives.
          </p>
          <Button
            size="lg"
            variant="secondary"
            className="text-lg"
            onClick={() => setIsDonateOpen(true)}
          >
            <Heart className="mr-2" />
            Donate Now
          </Button>
        </div>
      </section>

      <Footer />
      <DonateDialog open={isDonateOpen} onOpenChange={setIsDonateOpen} />
    </div>
  );
};

export default Index;
