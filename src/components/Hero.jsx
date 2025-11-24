import { Button } from "@/components/ui/button";
import heroDoctors from "@/assets/hero-doctors.png";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary to-secondary rounded-3xl mx-4 my-8 shadow-2xl">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-8 py-20 md:py-28 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-white space-y-8 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium mb-2">
              ✨ Your Health, Our Priority
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Book Appointment
              <br />
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                With Trusted Doctors
              </span>
            </h1>
            
            <p className="text-xl text-white/90 max-w-md leading-relaxed">
              Simply browse through our extensive list of trusted doctors,
              schedule your appointment hassle-free.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                variant="hero" 
                size="lg"
                className="group shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                Sign Up
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Login
              </Button>
            </div>
          </div>

          <div className="relative hidden md:block animate-slide-in-right">
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl blur-2xl" />
            <img 
              src={heroDoctors} 
              alt="Professional medical team" 
              className="relative w-full h-auto object-contain drop-shadow-2xl animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
