import { Card, CardContent } from "@/components/ui/card";
import { Calendar, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Easy Appointments",
    description: "Book appointments with your preferred doctors in just a few clicks. No phone calls needed.",
  },
  {
    icon: Shield,
    title: "Verified Doctors",
    description: "All our doctors are thoroughly verified and licensed professionals you can trust.",
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Access healthcare services anytime, anywhere. We're here when you need us most.",
  },
  {
    icon: Users,
    title: "Wide Network",
    description: "Choose from hundreds of specialists across various medical fields and locations.",
  },
];

const Features = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Prescripto?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Join thousands of patients who trust Prescripto for their healthcare needs.
            Sign up now to get started!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-bold text-xl">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
