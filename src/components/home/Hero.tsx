import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Heart, Users, Activity, Clock } from "lucide-react";
import { useEffect, useState } from "react";
const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  const carouselImages = ["/lovable-uploads/bf851f2a-ffda-4ee0-8a2c-30c1f9740689.png", "/lovable-uploads/97c1a968-4e9d-4c9b-8b59-f5967a8d774d.png", "/lovable-uploads/912d6130-9281-45c1-afb0-99971e380b8b.png", "/lovable-uploads/e7d93a1e-5c24-4394-96a5-d9c025fe9bf9.png", "/lovable-uploads/6254494f-d311-42c4-aae9-5bd12be46130.png" // Added the new pediatric care image
  ];
  return <div className="relative bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden">
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Hero Carousel */}
      {mounted && <div className="absolute inset-0">
          <Carousel className="h-full" opts={{
        loop: true
      }}>
            <CarouselContent className="h-full">
              {carouselImages.map((image, index) => <CarouselItem key={index} className="h-full">
                  <div className="h-full w-full">
                    <img src={image} alt={`Soins à domicile ${index + 1}`} className="w-full h-full object-cover" />
                  </div>
                </CarouselItem>)}
            </CarouselContent>
          </Carousel>
        </div>}
      
      {/* Hero Content */}
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8 lg:col-span-7 animate-fade-in">
            <div className="inline-block bg-mylli-blue text-white px-4 py-2 rounded-full font-medium text-sm mb-4">
              Soins de santé à domicile professionnels
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Des soins attentionnés à votre porte
            </h1>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl">
              Chez Mylli Services, nous comprenons l'importance des soins compatissants qui vont au-delà de la simple assistance médicale. Nos professionnels qualifiés prennent soin de vous dans le confort de votre domicile.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button asChild size="lg" className="bg-green-600 hover:bg-green-700 text-white">
                <Link to="/contact" className="px-0 mx-[2px]">
                  Demande d'information
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Service Icons Bar */}
      <div className="bg-white py-6 relative z-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center space-x-4">
              <div className="bg-mylli-lightblue p-3 rounded-full">
                <Users className="h-6 w-6 text-mylli-darkblue" />
              </div>
              <span className="font-medium text-gray-800">Personnel infirmier qualifié</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-mylli-lightblue p-3 rounded-full">
                <Heart className="h-6 w-6 text-mylli-darkblue" />
              </div>
              <span className="font-medium text-gray-800">Assistance aux soins personnels</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-mylli-lightblue p-3 rounded-full">
                <Activity className="h-6 w-6 text-mylli-darkblue" />
              </div>
              <span className="font-medium text-gray-800">Suivi médical régulier</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="bg-mylli-lightblue p-3 rounded-full">
                <Clock className="h-6 w-6 text-mylli-darkblue" />
              </div>
              <span className="font-medium text-gray-800">Disponible 24h/24, 7j/7</span>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default Hero;