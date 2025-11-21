import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DonateDialog from "@/components/DonateDialog";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import educationImage from "@/assets/project-education.jpg";
import waterImage from "@/assets/project-water.jpg";
import healthImage from "@/assets/project-health.jpg";

const projectData = {
  "samabaza-upendo": {
    title: "Samabaza Upendo",
    fullDescription:
      "Sambaza Upendo Initiative is an emergency relief food distribution across Arusha, Dar, and Mbeya for 200 families affected by post-election violence and food insecurity. Powerlight School and Foundation (an NGOs based in Arusha) relies on community leaders to identify households of the deceased and those most in need. We organize food distribution events for these families collect their provisions (rice, beans, cooking oil, etc). With your generosity we have supported 20 households already!",
    image: educationImage,
    category: "EMERGENCY RELIEF",
    impact: [
      "Built 15 new classrooms across 8 villages",
      "Provided learning materials to over 2,000 students",
      "Trained 50+ teachers in modern teaching methodologies",
      "Established 5 community libraries",
    ],
    goals: [
      "Expand to 10 more villages by end of 2025",
      "Provide scholarships for 500 children",
      "Create after-school tutoring programs",
      "Develop digital learning centers",
    ],
  },
};

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const project = slug ? projectData[slug as keyof typeof projectData] : null;

  if (!project) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation onDonateClick={() => setIsDonateOpen(true)} />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
            <Link to="/projects">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
        <DonateDialog open={isDonateOpen} onOpenChange={setIsDonateOpen} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDonateClick={() => setIsDonateOpen(true)} />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <Link to="/projects" className="inline-block mb-6">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          {/* Hero Section */}
          <div className="max-w-5xl mx-auto mb-12">
            <div className="text-xs font-semibold text-primary mb-4">
              {project.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {project.title}
            </h1>
            <div className="aspect-video overflow-hidden rounded-lg mb-8">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {project.fullDescription}
            </p>
          </div>

          {/* Our Partner */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-primary text-primary-foreground p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6">Our Partner</h2>
              <div className="space-y-4 text-lg">
                <p>
                  <b>GHSEN Global Research</b> is a 501(c)(3) nonprofit and
                  international research network connecting students and public
                  health leaders across the U.S. and nine African countries.
                  GHSEN’s research focuses on evidence-based strategies to
                  advance healthcare delivery and foster innovation in Africa.
                  The organization has published more than 50 research articles,
                  editorials, and op-eds in leading journals such as Nature
                  Medicine. GHSEN has also raised over $75,000 to support
                  evidence-to-impact initiatives, including a U.S. State
                  Department-sponsored medical English program in Kilimanjaro,
                  Tanzania.
                </p>
                <p className="font-semibold">
                  With your generosity we can continue to make meaningful
                  impact!
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="max-w-5xl mx-auto bg-gradient-to-r from-primary/10 to-secondary/10 rounded-lg p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Support This Project</h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Your donation can make a real difference in the lives of those we
              serve. Every contribution helps us expand our reach and deepen our
              impact.
            </p>
            <Button size="lg" onClick={() => setIsDonateOpen(true)}>
              Donate Now
            </Button>
          </div>
        </div>
      </div>

      <Footer />
      <DonateDialog open={isDonateOpen} onOpenChange={setIsDonateOpen} />
    </div>
  );
};

export default ProjectDetail;
