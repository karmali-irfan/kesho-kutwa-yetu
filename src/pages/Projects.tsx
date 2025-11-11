import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DonateDialog from "@/components/DonateDialog";
import ProjectCard from "@/components/ProjectCard";
import educationImage from "@/assets/project-education.jpg";
import waterImage from "@/assets/project-water.jpg";
import healthImage from "@/assets/project-health.jpg";

const Projects = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  const allProjects = [
    {
      title: "Education for All",
      description: "Providing quality education and learning materials to children in rural communities. Building classrooms, supplying textbooks, and training teachers to ensure every child has access to quality education.",
      image: educationImage,
      category: "EDUCATION"
    },
    {
      title: "Clean Water Initiative",
      description: "Building sustainable water sources to ensure access to clean drinking water. Installing wells, water purification systems, and training communities on maintenance and water management.",
      image: waterImage,
      category: "WATER & SANITATION"
    },
    {
      title: "Healthcare Access",
      description: "Delivering essential healthcare services to underserved communities. Operating mobile clinics, providing medical supplies, and training community health workers.",
      image: healthImage,
      category: "HEALTHCARE"
    },
    {
      title: "Women's Empowerment",
      description: "Providing skills training and microfinance opportunities for women entrepreneurs. Supporting women-led businesses and creating economic opportunities for sustainable income.",
      image: educationImage,
      category: "ECONOMIC DEVELOPMENT"
    },
    {
      title: "Sustainable Agriculture",
      description: "Teaching modern farming techniques and providing seeds and tools for community gardens. Helping families grow their own food and generate income through surplus crops.",
      image: waterImage,
      category: "AGRICULTURE"
    },
    {
      title: "Child Nutrition Program",
      description: "Ensuring children receive nutritious meals and essential vitamins. Establishing feeding programs in schools and educating families about proper nutrition.",
      image: healthImage,
      category: "NUTRITION"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDonateClick={() => setIsDonateOpen(true)} />
      
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-muted-foreground">
              Explore the initiatives that are transforming communities across Tanzania. Each project is designed and implemented in partnership with local communities.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
            <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-sm opacity-90">Active Projects</div>
            </div>
            <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-sm opacity-90">Communities Served</div>
            </div>
            <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center">
              <div className="text-3xl font-bold mb-2">10,000+</div>
              <div className="text-sm opacity-90">Lives Changed</div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {allProjects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>

          {/* Project Impact Section */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-muted p-8 md:p-12 rounded-lg">
              <h2 className="text-3xl font-bold mb-6 text-center">How Our Projects Work</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">1. Community Assessment</h3>
                  <p className="text-muted-foreground">
                    We work with local leaders to identify the most pressing needs and priorities for each community.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">2. Collaborative Planning</h3>
                  <p className="text-muted-foreground">
                    Projects are designed together with community members, ensuring cultural sensitivity and local ownership.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">3. Implementation</h3>
                  <p className="text-muted-foreground">
                    We provide resources, training, and support while community members lead the actual implementation.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-secondary">4. Sustainable Handover</h3>
                  <p className="text-muted-foreground">
                    Communities are trained to maintain and expand projects independently, ensuring long-term sustainability.
                  </p>
                </div>
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

export default Projects;
