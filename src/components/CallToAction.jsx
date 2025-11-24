import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CallToAction = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary to-secondary rounded-3xl mx-4 my-8">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
          Create your account today and start booking appointments with trusted healthcare professionals.
          It only takes a minute!
        </p>
        <Button 
          variant="hero" 
          size="lg"
          className="group"
        >
          Sign Up Now
          <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;
