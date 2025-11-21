import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import DonateDialog from "@/components/DonateDialog";
import { Heart, Users, Globe, Target } from "lucide-react";
import CORE_VALUES from "@/constants/core-values";
import { LONG_TERM_GOALS, SHORT_TERM_GOALS } from "@/constants/goals";

const About = () => {
  const [isDonateOpen, setIsDonateOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navigation onDonateClick={() => setIsDonateOpen(true)} />

      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Kesho Kutwa Yetu
            </h1>
            <p className="text-xl text-muted-foreground">
              Building a better tomorrow for communities in Tanzania through
              compassion, collaboration, and sustainable development.
            </p>
          </div>

          {/* Our Story */}
          <div className="max-w-4xl mx-auto mb-20">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-sm">
              <h2 className="text-3xl font-bold mb-6 text-primary">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Kesho Kutwa Yetu, which means "The Day After Tomorrow" in
                  Swahili, was founded with a simple yet powerful vision: to
                  empower communities in Tanzania to build their own sustainable
                  future. We believe that lasting change comes from within
                  communities, not from outside forces imposing solutions.
                </p>
                <p>
                  Our journey began when we recognized that many communities in
                  Tanzania face challenges in accessing basic necessities like
                  clean water, quality education, and healthcare. Rather than
                  providing temporary fixes, we committed to working alongside
                  communities to develop long-term, sustainable solutions.
                </p>
                <p>
                  Today, we partner with local leaders, families, and
                  organizations to implement projects that address the most
                  pressing needs while respecting cultural values and building
                  local capacity. Every project is designed with community input
                  and led by community members, ensuring that our impact lasts
                  for generations to come.
                </p>
                <p>
                  Kesho Kutwa Yetu enables decolonial, data-driven, human
                  centered, and sustainable development. Tanzania’s rising youth
                  population and lack of opportunities amidst rapid
                  urbanization, guides our focus on addressing unemployment and
                  inequality. The anchor of our movement is the word “yetu”
                  (our), putting Tanzanian youth and their needs at the core of
                  it all. We call for your support in peacefully reallocating
                  power to our people and investing in conditions for long-term
                  stability and success. Kesho Kutwa Yetu is strictly
                  unaffiliated with any political party and committed to a
                  prosperous Tanzania.
                </p>
              </div>
            </div>
          </div>

          {/*  Goals Grid */}
          <h2 className="text-3xl font-bold text-center mb-12">Our Goals</h2>
          {/* Short Term Goals */}
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-primary">
                Short Term Goals
              </h2>
              <ul className="space-y-4">
                {SHORT_TERM_GOALS.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-3 mt-1">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Long Term Goal */}
            <div className="bg-card border border-border rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-secondary">
                Long Term Goals
              </h2>
              <ul className="space-y-4">
                {LONG_TERM_GOALS.map((goal, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-secondary mr-3 mt-1">→</span>
                    <span className="text-muted-foreground">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {CORE_VALUES.map((value) => (
                <div
                  className="bg-card p-8 rounded-lg shadow-sm"
                  key={value.title}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Impact Stats */}
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Our Impact So Far
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Communities Reached</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-secondary mb-2">
                  10,000+
                </div>
                <div className="text-muted-foreground">Lives Impacted</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-primary mb-2">25</div>
                <div className="text-muted-foreground">Active Projects</div>
              </div>
              <div className="bg-card p-6 rounded-lg shadow-sm text-center">
                <div className="text-4xl font-bold text-secondary mb-2">
                  95%
                </div>
                <div className="text-muted-foreground">
                  Project Success Rate
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

export default About;
