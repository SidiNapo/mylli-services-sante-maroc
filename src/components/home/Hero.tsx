
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-mylli-lightblue to-blue-50 overflow-hidden">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <div className="inline-block bg-blue-100 text-mylli-darkblue px-4 py-2 rounded-full font-medium text-sm mb-4">
              Soins de santé à domicile
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Des soins professionnels pour votre bien-être
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Mylli Services vous accompagne avec des soins de santé personnalisés à domicile dans tout le Maroc, assurés par des professionnels expérimentés.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-mylli-darkblue hover:bg-mylli-blue">
                <Link to="/contact">
                  Demande d'information
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-mylli-darkblue text-mylli-darkblue hover:bg-mylli-lightblue">
                <Link to="/services">
                  Nos Services
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block animate-fade-in">
            <img 
              src="/lovable-uploads/bf851f2a-ffda-4ee0-8a2c-30c1f9740689.png" 
              alt="Soins à domicile" 
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
