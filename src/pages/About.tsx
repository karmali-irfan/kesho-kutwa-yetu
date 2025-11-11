import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DonateDialog from "@/components/DonateDialog";
import { Heart, Users, Globe, Target } from "lucide-react";

const About = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDonateClick={() => setIsDonateOpen(true)} />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About KeshoKutwa Yetu</h1>
            <p className="text-xl text-muted-foreground">
              Building a better tomorrow for communities in Tanzania through compassion, collaboration, and sustainable development.
            </p>
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-primary">Our Story</h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  KeshoKutwa Yetu, which means "Our Future" in Swahili, was founded with a simple yet powerful vision: to empower communities in Tanzania to build their own sustainable future. We believe that lasting change comes from within communities, not from outside forces imposing solutions.
                </p>
                <p>
                  Our journey began when we recognized that many communities in Tanzania face challenges in accessing basic necessities like clean water, quality education, and healthcare. Rather than providing temporary fixes, we committed to working alongside communities to develop long-term, sustainable solutions.
                </p>
                <p>
                  Today, we partner with local leaders, families, and organizations to implement projects that address the most pressing needs while respecting cultural values and building local capacity. Every project is designed with community input and led by community members, ensuring that our impact lasts for generations to come.
                </p>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="bg-card p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Community-Centered</h3>
                <p className="text-muted-foreground">
                  We listen to and work alongside communities, ensuring that every project reflects their needs, values, and aspirations.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                  <Target className="text-secondary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Sustainable Impact</h3>
                <p className="text-muted-foreground">
                  We focus on creating lasting solutions that empower communities to maintain and expand initiatives long after our direct involvement ends.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <Globe className="text-accent-foreground" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Transparency</h3>
                <p className="text-muted-foreground">
                  We maintain open communication about our projects, finances, and impact, ensuring accountability to both our donors and the communities we serve.
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Users className="text-primary" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  We partner with local organizations, government agencies, and international supporters to maximize our collective impact.
                </p>
              </div>
            </div>
          </div>

          {/* The Cause */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">The Cause We Champion</h2>
              <div className="space-y-4 text-lg">
                <p>
                  Despite its rich culture and natural resources, Tanzania faces significant development challenges. Many rural communities lack access to clean water, quality education, and basic healthcare services. Children walk miles to school, families struggle to access medical care, and clean water remains a distant dream for too many.
                </p>
                <p>
                  But we've seen firsthand that when communities are empowered with the right resources and support, transformation happens. A new well brings not just water, but health and time for education. A school means hope for the next generation. Healthcare access saves lives and builds stronger communities.
                </p>
                <p className="font-semibold">
                  This is why we exist. This is the future we're building together – a future where every community in Tanzania has the opportunity to thrive.
                </p>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Our Impact So Far</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Communities Reached</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-secondary mb-2">10,000+</div>
                <div className="text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">25</div>
                <div className="text-muted-foreground">Active Projects</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-secondary mb-2">95%</div>
                <div className="text-muted-foreground">Project Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <DonateDialog open={isDonateOpen} onOpenChange={setIsDonateOpen} />
    </div>
  );
};

export default About;
