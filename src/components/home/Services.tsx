
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  bgColor, 
  link 
}: { 
  title: string; 
  description: string; 
  icon: React.ReactNode; 
  bgColor: string; 
  link: string;
}) => {
  return (
    <div className={`${bgColor} p-8 rounded-lg transition-all hover:shadow-lg`}>
      <div className="mb-6">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-mylli-darkblue hover:text-mylli-blue font-medium"
      >
        En savoir plus <ArrowRight className="h-4 w-4 ml-2" />
      </Link>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-100 text-mylli-darkblue px-4 py-2 rounded-full font-medium text-sm mb-4">
            Découvrez notre expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Nos services de santé à domicile
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Nous offrons une gamme complète de services de santé à domicile, adaptés à vos besoins spécifiques et délivrés par des professionnels qualifiés.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Gestion des médicaments" 
            description="Nous offrons des services de gestion des médicaments, y compris des rappels, l'administration et le suivi." 
            bgColor="bg-blue-50"
            link="/services#gestion-medicaments"
            icon={
              <div className="bg-blue-500 p-3 rounded-full inline-block">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
            }
          />
          
          <ServiceCard 
            title="Soins infirmiers" 
            description="Des soins infirmiers professionnels à domicile dispensés par du personnel qualifié et expérimenté." 
            bgColor="bg-green-50"
            link="/services#soins-infirmiers"
            icon={
              <div className="bg-green-500 p-3 rounded-full inline-block">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M8 14s1.5 2 4 2 4-2 4-2" />
                  <line x1="9" y1="9" x2="9.01" y2="9" />
                  <line x1="15" y1="9" x2="15.01" y2="9" />
                </svg>
              </div>
            }
          />
          
          <ServiceCard 
            title="Maladies chroniques" 
            description="Notre programme de gestion des maladies chroniques offre des solutions personnalisées pour vous accompagner." 
            bgColor="bg-blue-50"
            link="/services#maladies-chroniques"
            icon={
              <div className="bg-blue-500 p-3 rounded-full inline-block">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
              </div>
            }
          />
          
          <ServiceCard 
            title="Réadaptation" 
            description="Notre programme de réadaptation aide les individus à retrouver leur indépendance et à reconstruire leur force." 
            bgColor="bg-green-50"
            link="/services#readaptation"
            icon={
              <div className="bg-green-500 p-3 rounded-full inline-block">
                <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
                  <line x1="12" y1="19" x2="12" y2="22" />
                </svg>
              </div>
            }
          />
        </div>

        <div className="text-center mt-12">
          <Button asChild className="bg-mylli-darkblue hover:bg-mylli-blue">
            <Link to="/services">Voir tous nos services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
